const express = require('express');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables if any
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load Financial Literacy Documents
let documents = [];
try {
  const dataPath = path.join(__dirname, 'data', 'financial_docs.json');
  const fileContent = fs.readFileSync(dataPath, 'utf8');
  documents = JSON.parse(fileContent);
  console.log(`Loaded ${documents.length} knowledge base documents.`);
} catch (error) {
  console.error("Error loading knowledge documents:", error);
}

// Simple text-based document matching for RAG
function retrieveDocuments(query, language, docs, limit = 2) {
  const cleanLanguage = (language || 'en').toLowerCase();
  
  // Custom multi-language stop words list to filter out common terms
  const stopWords = new Set([
    'what', 'is', 'how', 'to', 'do', 'i', 'the', 'a', 'an', 'and', 'or', 'for', 'in', 'on', 'with', 'of', 'at', 'by', 'from', 'about',
    'क्या', 'है', 'कैसे', 'करें', 'में', 'को', 'से', 'का', 'की', 'के', 'पर', 'ने', 'तो', 'ही', 'भी',
    'काय', 'आहे', 'कसे', 'करावे', 'च्या', 'ला', 'चे', 'चे',
    'என்ன', 'எப்படி', 'செய்ய', 'ஒரு', 'மற்றும்', 'என்னவென்றால்',
    'কি', 'কিভাবে', 'করব', 'হয়', 'এবং', 'ও', 'এর', 'তে', 'কে'
  ]);

  // Tokenize and clean query
  const queryTokens = query.toLowerCase()
    .replace(/[^\w\s\u0900-\u097F\u0B80-\u0BFF\u0980-\u09FF]/g, '') // retain Devanagari, Tamil, Bengali chars
    .split(/\s+/)
    .filter(token => token.length > 1 && !stopWords.has(token));

  // Filter docs for the active language
  const languageDocs = docs.filter(d => d.language === cleanLanguage);

  if (queryTokens.length === 0) {
    // Return default documents if query has no tokens
    return languageDocs.slice(0, limit);
  }

  // Score each document
  const scoredDocs = languageDocs.map(doc => {
    let score = 0;
    const docText = (doc.title + " " + doc.content).toLowerCase();

    // Check keywords overlap (high importance)
    doc.keywords.forEach(kw => {
      queryTokens.forEach(token => {
        if (kw.toLowerCase().includes(token) || token.includes(kw.toLowerCase())) {
          score += 10;
        }
      });
    });

    // Check content overlap (lower importance)
    queryTokens.forEach(token => {
      if (docText.includes(token)) {
        score += 2;
      }
    });

    return { doc, score };
  });

  // Filter out zero-score docs and sort descending
  let matches = scoredDocs
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.doc);

  if (matches.length > 0) {
    return matches.slice(0, limit);
  }

  // Fallback if no matching document is found: return default guide docs
  return languageDocs.filter(d => d.id.includes('safety') || d.id.includes('basics')).slice(0, limit);
}

// Generate an IAM bearer token using IBM Cloud API key
async function getIBMIAMToken(apiKey) {
  try {
    const response = await fetch('https://iam.cloud.ibm.com/identity/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${apiKey}`
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`IAM Auth failed with status ${response.status}: ${errText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching IBM IAM token:", error);
    throw error;
  }
}

// Expose static config test route
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', docsCount: documents.length });
});

// Endpoint: Chat Query with dynamic RAG pipeline
app.post('/api/chat', async (req, res) => {
  const { message, language, credentials } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const activeLang = language || 'en';

  // 1. RAG Step: Retrieve relevant context
  const retrievedDocs = retrieveDocuments(message, activeLang, documents, 2);

  // 2. Build Context Text block
  const contextBlock = retrievedDocs.map((doc, idx) => `[Document ${idx + 1} - ${doc.title}]:\n${doc.content}`).join("\n\n");
  
  // 3. System Prompt for IBM Granite
  const langPrompts = {
    en: "You are a friendly, expert Digital Financial Literacy Assistant. Answer the user's questions about UPI, budgeting, saving, interest rates, or avoiding scams. Use the provided retrieved context where possible. If the question is outside financial literacy, guide them back politely. ALWAYS include a small warning about keeping PINs and OTPs safe.",
    hi: "आप एक मित्रवत, विशेषज्ञ डिजिटल वित्तीय साक्षरता सहायक हैं। यूपीआई, बजट, बचत, ब्याज दरों या घोटालों से बचने के बारे में उपयोगकर्ता के प्रश्नों का उत्तर दें। जहाँ संभव हो, प्रदान किए गए संदर्भ का उपयोग करें। यदि प्रश्न वित्तीय साक्षरता से बाहर का है, तो उन्हें विनम्रतापूर्वक वापस लाएं। हमेशा पिन और ओटीपी को सुरक्षित रखने की चेतावनी शामिल करें।",
    mr: "तुम्ही एक स्नेही, तज्ज्ञ डिजिटल आर्थिक साक्षरता सहाय्यक आहात. यूपीआय, बजेट, बचत, व्याज दर किंवा फसवणूक टाळण्याबद्दल वापरकर्त्याच्या प्रश्नांची उत्तरे द्या. जिथे शक्य असेल तिथे प्रदान केलेल्या संदर्भाचा वापर करा. पिन आणि ओटीपी सुरक्षित ठेवण्याबद्दल नेहमीच एक छोटी चेतावणी समाविष्ट करा.",
    ta: "நீங்கள் ஒரு நட்புமிக்க, நிபுணத்துவ டிஜிட்டல் நிதி அறிவு உதவியாளர். UPI, பட்ஜெட், சேமிப்பு, வட்டி விகிதங்கள் அல்லது மோசடிகளைத் தவிர்ப்பது பற்றிய பயனரின் கேள்விகளுக்குப் பதிலளிக்கவும். சாத்தியமான இடங்களில் வழங்கப்பட்ட சூழலைப் பயன்படுத்தவும். பின் (PIN) மற்றும் OTP ஐப் பாதுகாப்பாக வைத்திருப்பது பற்றிய ஒரு சிறிய எச்சரிக்கையை எப்போதும் சேர்க்கவும்.",
    bn: "আপনি একজন বন্ধুত্বপূর্ণ, বিশেষজ্ঞ ডিজিটাল আর্থিক সাক্ষরতা সহকারী। ইউপিআই, বাজেট, সঞ্চয়, সুদের হার বা জালিয়াতি এড়ানো সম্পর্কে ব্যবহারকারীর প্রশ্নের উত্তর দিন। যেখানে সম্ভব সেখানে দেওয়া প্রাসঙ্গিক নথির সাহায্য নিন। সর্বদা পিন এবং ওটিপি সুরক্ষিত রাখার বিষয়ে একটি সতর্কতা যুক্ত করুন।"
  };

  const systemPrompt = langPrompts[activeLang] || langPrompts.en;

  // Let's pack the pipeline telemetry to return to the frontend for visualization
  const pipelineTelemetry = {
    query: message,
    language: activeLang,
    retrievedDocs: retrievedDocs.map(d => ({ id: d.id, title: d.title, content: d.content })),
    systemPrompt: systemPrompt,
    augmentedPrompt: `[Context]\n${contextBlock}\n\n[System Instructions]\n${systemPrompt}\n\n[User Query]\n${message}`
  };

  // Determine whether to use Live IBM Granite or Simulated Mode
  const useLive = credentials && credentials.apikey && credentials.projectId && credentials.serviceUrl;

  if (useLive) {
    try {
      console.log(`Connecting to IBM Watsonx API using model: ${credentials.modelId || 'ibm/granite-3-8b-instruct'}`);
      
      // Step A: Fetch IAM Token
      const accessToken = await getIBMIAMToken(credentials.apikey);

      // Step B: Set up Watsonx API details
      const serviceUrl = credentials.serviceUrl.replace(/\/$/, ""); // Strip trailing slash
      const chatApiUrl = `${serviceUrl}/ml/v1/text/chat?version=2024-05-31`;

      // Step C: Send chat query
      const chatBody = {
        model_id: credentials.modelId || 'ibm/granite-3-8b-instruct',
        project_id: credentials.projectId,
        messages: [
          { role: 'system', content: `${systemPrompt}\n\nHere is the source context to guide your response:\n${contextBlock}` },
          { role: 'user', content: message }
        ],
        parameters: {
          max_tokens: 600,
          temperature: 0.3
        }
      };

      const response = await fetch(chatApiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(chatBody)
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Watsonx Chat API failed with status ${response.status}: ${errText}`);
      }

      const chatData = await response.json();
      let assistantReply = "";

      if (chatData.choices && chatData.choices[0] && chatData.choices[0].message) {
        assistantReply = chatData.choices[0].message.content;
      } else if (chatData.results && chatData.results[0] && chatData.results[0].generated_text) {
        assistantReply = chatData.results[0].generated_text;
      } else {
        assistantReply = JSON.stringify(chatData);
      }

      return res.json({
        response: assistantReply,
        retrieved: true,
        liveMode: true,
        pipeline: pipelineTelemetry
      });

    } catch (error) {
      console.error("IBM Watsonx connection error:", error);
      return res.status(500).json({
        error: `IBM Granite connection error: ${error.message}. Falling back to Simulation Mode. Please double check your API Credentials.`,
        pipeline: pipelineTelemetry
      });
    }
  } else {
    // 4. Simulated Granite RAG Engine Response Generation
    // Generate a realistic output matching the retrieved document content
    let simulatedResponse = "";
    
    const warnings = {
      en: "\n\n⚠️ **Digital Safety Tip**: Remember, your UPI PIN, OTP, and passwords are fully private. Never share them with anyone, and never enter your UPI PIN to receive money!",
      hi: "\n\n⚠️ **डिजिटल सुरक्षा टिप**: याद रखें, आपका यूपीआई पिन, ओटीपी और पासवर्ड पूरी तरह से निजी हैं। उन्हें कभी भी किसी के साथ साझा न करें, और पैसे प्राप्त करने के लिए कभी भी अपना यूपीआई पिन दर्ज न करें!",
      mr: "\n\n⚠️ **डिजिटल सुरक्षिततेचा सल्ला**: लक्षात ठेवा, तुमचा यूपीआय पिन, ओटीपी आणि पासवर्ड पूर्णपणे खाजगी आहेत. ते कोणाशीही शेअर करू नका आणि पैसे मिळवण्यासाठी तुमचा यूपीआय पिन कधीही टाकू नका!",
      ta: "\n\n⚠️ **டிஜிட்டல் பாதுகாப்பு குறிப்பு**: உங்கள் UPI PIN, OTP மற்றும் கடவுச்சொற்கள் முற்றிலும் ரகசியமானவை என்பதை நினைவில் கொள்க. அவற்றை யாருடனும் பகிர்ந்து கொள்ள வேண்டாம், பணம் பெற ஒருபோதும் UPI PIN-ஐ உள்ளிட வேண்டாம்!",
      bn: "\n\n⚠️ **ডিজিটাল নিরাপত্তা টিপ**: মনে রাখবেন, আপনার ইউপিআই পিন, ওটিপি এবং পাসওয়ার্ড সম্পূর্ণ ব্যক্তিগত। সেগুলি কারো সাথে শেয়ার করবেন না এবং টাকা পাওয়ার জন্য কখনোই আপনার ইউপিআই পিন দেবেন না!"
    };

    const warning = warnings[activeLang] || warnings.en;

    if (retrievedDocs.length > 0) {
      const primaryDoc = retrievedDocs[0];
      
      // Select appropriate transition based on language
      const intros = {
        en: `Hello! I am your Digital Financial Literacy Assistant. Based on our knowledge base, here is some helpful information regarding **${primaryDoc.title}**:\n\n`,
        hi: `नमस्ते! मैं आपका डिजिटल वित्तीय साक्षरता सहायक हूँ। हमारे ज्ञान कोष के आधार पर, **${primaryDoc.title}** के संबंध में यहाँ उपयोगी जानकारी दी गई है:\n\n`,
        mr: `नमस्कार! मी तुमचा डिजिटल आर्थिक साक्षरता सहाय्यक आहे. आमच्या ज्ञानकोशाच्या आधारे, **${primaryDoc.title}** संदर्भात उपयुक्त माहिती खालीलप्रमाणे आहे:\n\n`,
        ta: `வணக்கம்! நான் உங்கள் டிஜிட்டல் நிதி அறிவு உதவியாளர். எங்கள் தகவல் தளத்தின் அடிப்படையில், **${primaryDoc.title}** பற்றிய சில பயனுள்ள விவரங்கள் இதோ:\n\n`,
        bn: `হ্যালো! আমি আপনার ডিজিটাল আর্থিক সাক্ষরতা সহকারী। আমাদের তথ্য ভাণ্ডার থেকে সংগৃহীত নথির উপর ভিত্তি করে **${primaryDoc.title}** সংক্রান্ত কিছু গুরুত্বপূর্ণ তথ্য দেওয়া হলো:\n\n`
      };

      const intro = intros[activeLang] || intros.en;
      
      // Formulate body (adds slightly more structure and bullets to show a good response format)
      let bodyText = primaryDoc.content;
      
      // Let's add the second document if it has low overlap or complements
      let additionalText = "";
      if (retrievedDocs.length > 1 && retrievedDocs[1].id !== primaryDoc.id) {
        const secondaryDoc = retrievedDocs[1];
        const transitions = {
          en: `\n\nAdditionally, regarding **${secondaryDoc.title}**:\n${secondaryDoc.content}`,
          hi: `\n\nइसके अतिरिक्त, **${secondaryDoc.title}** के बारे में:\n${secondaryDoc.content}`,
          mr: `\n\nतसेच, **${secondaryDoc.title}** बद्दल माहिती:\n${secondaryDoc.content}`,
          ta: `\n\nகூடுதலாக, **${secondaryDoc.title}** பற்றி:\n${secondaryDoc.content}`,
          bn: `\n\nএর পাশাপাশি, **${secondaryDoc.title}** সম্পর্কে আরও কিছু তথ্য:\n${secondaryDoc.content}`
        };
        additionalText = transitions[activeLang] || transitions.en;
      }

      simulatedResponse = `${intro}${bodyText}${additionalText}${warning}`;
    } else {
      // General fallback
      const defaults = {
        en: `Welcome! I am your IBM Granite-powered Financial Literacy Assistant. 
I can help you with:
- **UPI Payments**: How to set it up, safety rules, UPI Lite.
- **Avoiding Scams**: Phishing links, KYC updates, customer care frauds.
- **Interest Rates**: Simple vs Compound interest, FD/RD, reducing rate loans.
- **Budgeting**: The 50/30/20 rule, emergency funds.

What financial topic would you like to explore today?`,
        hi: `आपका स्वागत है! मैं आपका आईबीएम ग्रेनाइट-संचालित वित्तीय साक्षरता सहायक हूँ।
मैं आपकी मदद कर सकता हूँ:
- **यूपीआई भुगतान**: सेटअप कैसे करें, सुरक्षा नियम, यूपीआई लाइट।
- **घोटालों से बचना**: फ़िशिंग लिंक, केवाईसी अपडेट, नकली कस्टमर केयर धोखाधड़ी।
- **ब्याज दरें**: साधारण बनाम चक्रवृद्धि ब्याज, एफडी/आरडी, ऋण की ब्याज दरें।
- **बजट बनाना**: 50/30/20 नियम, आपातकालीन फंड।

आज आप किस वित्तीय विषय के बारे में जानना चाहेंगे?`,
        mr: `तुमचे स्वागत आहे! मी तुमचा आयबीएम ग्रेनाइट-चालित आर्थिक साक्षरता सहाय्यक आहे.
मी तुम्हाला खालील गोष्टींमध्ये मदत करू शकतो:
- **यूपीआय पेमेंट**: सेटअप कसा करावा, सुरक्षा नियम, युपीआय लाईट.
- **फसवणूक टाळणे**: फिशिंग लिंक्स, केवायसी अपडेट्स, बनावट कस्टमर केअर.
- **व्याज दर**: सरळव्याज विरुद्ध चक्रवाढ व्याज, एफडी/आरडी, कर्ज व्याज दर.
- **बजेट**: ५०/३०/२० नियम, आपत्कालीन निधी.

आज तुम्हाला कोणत्या आर्थिक विषयाबद्दल जाणून घ्यायला आवडेल?`,
        ta: `வரவேற்கிறோம்! நான் உங்கள் IBM கிரானைட்-இயங்கும் நிதி அறிவு உதவியாளர்.
நான் உங்களுக்கு உதவக்கூடிய தலைப்புகள்:
- **UPI கொடுப்பனவுகள்**: அதை எவ்வாறு அமைப்பது, பாதுகாப்பு விதிகள், UPI லைட்.
- **மோசடிகளைத் தவிர்த்தல்**: ஃபிஷிங் லிங்க்கள், KYC அப்டேட்கள், போலி வாடிக்கையாளர் சேவை.
- **வட்டி விகிதங்கள்**: தனிவட்டி மற்றும் கூட்டு வட்டி, நிலையான வைப்பு, கடன் வட்டி.
- **பட்ஜெட் திட்டமிடல்**: 50/30/20 விதி, அவசரகால நிதி.

இன்று நீங்கள் எந்த நிதிப் பாடத்தைப் பற்றி ஆராய விரும்புகிறீர்கள்?`,
        bn: `স্বাগতম! আমি আপনার আইবিএম গ্রানাইট-চালিত আর্থিক সাক্ষরতা সহকারী।
আমি আপনাকে সাহায্য করতে পারি:
- **ইউপিআই পেমেন্ট**: কিভাবে সেটআপ করবেন, সুরক্ষার নিয়ম, ইউপিআই লাইট।
- **জালিয়াতি এড়ানো**: ফিশিং লিঙ্ক, কেওয়াইসি আপডেট, কাস্টমার কেয়ার প্রতারণা।
- **সুদের হার**: সরল সুদ বনাম চক্রবৃদ্ধি সুদ, এফডি/আরডি, ঋণের সুদের হার।
- **বাজেট তৈরি**: ৫০/৩০/২০ নিয়ম, জরুরি তহবিল।

আজ আপনি কোন আর্থিক বিষয়টি নিয়ে আলোচনা করতে চান?`
      };

      simulatedResponse = (defaults[activeLang] || defaults.en) + warning;
    }

    // Artificially delay simulated response to feel like real AI inference (450ms)
    setTimeout(() => {
      res.json({
        response: simulatedResponse,
        retrieved: true,
        liveMode: false,
        pipeline: pipelineTelemetry
      });
    }, 450);
  }
});

// Explicitly serve index.html for the root route (and any other unmatched routes for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
