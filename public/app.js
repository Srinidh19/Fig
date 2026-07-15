// ==========================================================================
// Multilingual Translation Tables
// ==========================================================================
const translations = {
  en: {
    headerSubtitle: "AI Financial Literacy Agent",
    chatTitle: "FiniShield Assistant",
    chatSubtitle: "Powered by RAG & IBM Granite",
    chatPlaceholder: "Type here...",
    btnSend: "Send",
    visualizerTitle: "Retrieval-Augmented Generation (RAG) Workflow",
    step1Label: "Query Prep",
    step2Label: "Knowledge Retrieval",
    step3Label: "Context Augmentation",
    step4Label: "Granite Inference",
    tabScamText: "Spot the Scam",
    tabToolsText: "Financial Tools",
    gameHeadline: "Scam Awareness Challenge",
    scoreLabel: "Score:",
    btnScamText: "Identify as SCAM",
    btnSafeText: "Identify as SAFE",
    btnNextText: "Next Scenario",
    calcSelectLabel: "Select Utility:",
    budgetHeader: "50/30/20 Budget Allocator",
    budgetDesc: "Divide your monthly income into Needs (50%), Wants (30%), and Savings/Debt payoff (20%).",
    budgetIncomeLabel: "Monthly Post-Tax Income (₹):",
    needsText: "Needs (Rent, Bills, Food)",
    wantsText: "Wants (Dining, Shopping, Movies)",
    savingsText: "Savings & Investments",
    interestHeader: "Compound Interest Calculator",
    interestDesc: "See how your money grows exponentially with compound interest (interest on interest!).",
    intPrincipalLabel: "Principal Deposit (₹):",
    intRateLabel: "Annual Interest Rate (%):",
    intTenureLabel: "Tenure (Years):",
    intCompLabel: "Compounding Frequency:",
    intInvestedText: "Total Invested",
    intEarnedText: "Interest Earned",
    intTotalText: "Total Future Value",
    emiHeader: "Loan EMI Calculator",
    emiDesc: "Calculate monthly installment (EMI) and compare flat rate vs reducing balance interest rates.",
    emiAmountLabel: "Loan Principal (₹):",
    emiRateLabel: "Interest Rate (% p.a.):",
    emiTenureLabel: "Tenure (Years):",
    emiTypeLabel: "Interest Calculation Type:",
    emiMonthlyText: "Monthly EMI",
    emiInterestText: "Total Interest Payable",
    emiTotalText: "Total Loan Cost",
    welcomeMessage: "Hello! I am your AI Financial Literacy Assistant powered by IBM Granite.\n\nI can help you understand essential financial tools and practice digital safety. Ask me about:\n1. **UPI Payments**: Setup, limits, and UPI PIN safety rules.\n2. **Avoiding Scams**: Spotting lottery fraud, KYC traps, and phishing links.\n3. **Interest Rates**: Simple vs Compound Interest, and comparing bank loans.\n4. **Budgeting**: The 50/30/20 budget rule and creating emergency funds.\n\nSelect a language above or choose one of the suggestion prompts to start!",
    correctText: "🎉 Correct Answer!",
    incorrectText: "❌ Incorrect Answer!",
    telemetryTitle1: "Step 1: User Query & Preprocessing",
    telemetryTitle2: "Step 2: RAG Knowledge Retrieval",
    telemetryTitle3: "Step 3: Context Augmentation",
    telemetryTitle4: "Step 4: IBM Granite Model Generation"
  },
  hi: {
    headerSubtitle: "एआई वित्तीय साक्षरता सहायक",
    chatTitle: "फिनिशील्ड सहायक",
    chatSubtitle: "RAG और आईबीएम ग्रेनाइट द्वारा संचालित",
    chatPlaceholder: "Type here...",
    btnSend: "भेजें",
    visualizerTitle: "रिट्रीवल-ऑगमेंटेड जनरेशन (RAG) कार्यप्रवाह",
    step1Label: "प्रश्न तैयारी",
    step2Label: "ज्ञान पुनर्प्राप्ति",
    step3Label: "संदर्भ संवर्धन",
    step4Label: "ग्रेनाइट अनुमान",
    tabScamText: "स्कैम को पहचानें",
    tabToolsText: "वित्तीय उपकरण",
    gameHeadline: "स्कैम जागरूकता चुनौती",
    scoreLabel: "स्कोर:",
    btnScamText: "SCAM घोषित करें",
    btnSafeText: "SAFE घोषित करें",
    btnNextText: "अगला परिदृश्य",
    calcSelectLabel: "सुविधा चुनें:",
    budgetHeader: "50/30/20 बजट आवंटक",
    budgetDesc: "अपनी मासिक आय को आवश्यकताओं (50%), इच्छाओं (30%), और बचत/ऋण भुगतान (20%) में विभाजित करें।",
    budgetIncomeLabel: "मासिक कर-पश्चात आय (₹):",
    needsText: "आवश्यकताएं (किराया, बिल, राशन)",
    wantsText: "इच्छाएं (बाहर खाना, खरीदारी, फिल्में)",
    savingsText: "बचत और निवेश",
    interestHeader: "चक्रवृद्धि ब्याज कैलकुलेटर",
    interestDesc: "देखें कि चक्रवृद्धि ब्याज (ब्याज पर ब्याज) से आपका पैसा तेजी से कैसे बढ़ता है।",
    intPrincipalLabel: "मूल जमा राशि (₹):",
    intRateLabel: "वार्षिक ब्याज दर (%):",
    intTenureLabel: "अवधि (वर्ष):",
    intCompLabel: "ब्याज संयोजन आवृत्ति:",
    intInvestedText: "कुल निवेश राशि",
    intEarnedText: "अर्जित कुल ब्याज",
    intTotalText: "भविष्य का कुल मूल्य",
    emiHeader: "लोन ईएमआई कैलकुलेटर",
    emiDesc: "मासिक किस्त (EMI) की गणना करें और फ्लैट रेट बनाम घटती ब्याज दरों की तुलना करें।",
    emiAmountLabel: "लोन मूलधन (₹):",
    emiRateLabel: "ब्याज दर (% प्रति वर्ष):",
    emiTenureLabel: "अवधि (वर्ष):",
    emiTypeLabel: "ब्याज गणना का प्रकार:",
    emiMonthlyText: "मासिक ईएमआई",
    emiInterestText: "कुल देय ब्याज",
    emiTotalText: "लोन की कुल लागत",
    welcomeMessage: "नमस्ते! मैं आपका एआई वित्तीय साक्षरता सहायक हूँ, जो आईबीएम ग्रेनाइट द्वारा संचालित है।\n\nमैं आपको महत्वपूर्ण वित्तीय साधनों को समझने और डिजिटल सुरक्षा का अभ्यास करने में मदद कर सकता हूँ। मुझसे पूछें:\n1. **यूपीआई भुगतान**: सेटअप, सीमाएं और यूपीआई पिन सुरक्षा नियम।\n2. **घोटालों से बचना**: लॉटरी धोखाधड़ी, केवाईसी जाल और फ़िशिंग लिंक की पहचान।\n3. **ब्याज दरें**: साधारण बनाम चक्रवृद्धि ब्याज, और बैंक ऋणों की तुलना।\n4. **बजट बनाना**: 50/30/20 खर्च नियम और आपातकालीन निधि बनाना।\n\nऊपर दी गई भाषा चुनें या शुरुआत करने के लिए नीचे दिए गए सुझावों में से कोई एक चुनें!",
    correctText: "🎉 सही उत्तर!",
    incorrectText: "❌ गलत उत्तर!",
    telemetryTitle1: "चरण 1: उपयोगकर्ता प्रश्न और प्रीप्रोसेसिंग",
    telemetryTitle2: "चरण 2: RAG ज्ञान डेटाबेस खोज",
    telemetryTitle3: "चरण 3: संदर्भ संवर्धन (प्रॉम्प्ट निर्माण)",
    telemetryTitle4: "चरण 4: आईबीएम ग्रेनाइट मॉडल द्वारा उत्तर जनरेशन"
  },
  mr: {
    headerSubtitle: "एआय आर्थिक साक्षरता सहाय्यक",
    chatTitle: "फिनिशील्ड सहाय्यक",
    chatSubtitle: "RAG आणि आयबीएम ग्रेनाइटद्वारे संचालित",
    chatPlaceholder: "Type here...",
    btnSend: "पाठवा",
    visualizerTitle: "रिट्रीव्हल-ऑगमेंटेड जनरेशन (RAG) कार्यप्रवाह",
    step1Label: "प्रश्न तयारी",
    step2Label: "ज्ञान मिळवणे",
    step3Label: "संदर्भ जोडणे",
    step4Label: "ग्रेनाइट अनुमान",
    tabScamText: "फसवणूक ओळखा",
    tabToolsText: "आर्थिक साधने",
    gameHeadline: "फसवणूक जागरूकता आव्हान",
    scoreLabel: "गुण:",
    btnScamText: "SCAM म्हणून ओळखा",
    btnSafeText: "SAFE म्हणून ओळखा",
    btnNextText: "पुढील प्रसंग",
    calcSelectLabel: "निवडा:",
    budgetHeader: "५०/३०/२० बजेट नियोजक",
    budgetDesc: "तुमच्या मासिक उत्पन्नाची गरजा (५०%), इच्छा (३०%), आणि बचत/गुंतवणूक (२०%) मध्ये विभागणी करा.",
    budgetIncomeLabel: "मासिक कर-वजा उत्पन्न (₹):",
    needsText: "गरजा (भाडे, बिले, अन्नधान्य)",
    wantsText: "इच्छा (हॉटेलिंग, खरेदी, सिनेमा)",
    savingsText: "बचत आणि गुंतवणूक",
    interestHeader: "चक्रवाढ व्याज कॅल्क्युलेटर",
    interestDesc: "चक्रवाढ व्याजामुळे (व्याजावर व्याज) तुमचे पैसे किती वेगाने वाढतात ते पहा.",
    intPrincipalLabel: "मूळ ठेव (₹):",
    intRateLabel: "वार्षिक व्याज दर (%):",
    intTenureLabel: "कालावधी (वर्षे):",
    intCompLabel: "व्याज आकारणी वारंवारता:",
    intInvestedText: "एकूण गुंतवलेली रक्कम",
    intEarnedText: "मिळालेले एकूण व्याज",
    intTotalText: "भविष्यातील एकूण मूल्य",
    emiHeader: "कर्ज ईएमआई कॅल्क्युलेटर",
    emiDesc: "मासिक हप्ता (EMI) मोजा आणि फ्लॅट रेट विरुद्ध कमी होणाऱ्या व्याजदरांची तुलना करा.",
    emiAmountLabel: "कर्ज रक्कम (₹):",
    emiRateLabel: "व्याज दर (% प्रति वर्ष):",
    emiTenureLabel: "कालावधी (वर्षे):",
    emiTypeLabel: "व्याज मोजण्याची पद्धत:",
    emiMonthlyText: "मासिक हप्ता (EMI)",
    emiInterestText: "एकूण देय व्याज",
    emiTotalText: "कर्जाची एकूण किंमत",
    welcomeMessage: "नमस्कार! मी तुमचा एआय आर्थिक साक्षरता सहाय्यक आहे, जो आयबीएम ग्रेनाइटद्वारे समर्थित आहे.\n\nमी तुम्हाला आर्थिक साधने समजून घेण्यात आणि डिजिटल फसवणूक टाळण्यास मदत करू शकतो. मला विचारा:\n1. **यूपीआय पेमेंट**: सेटअप, सुरक्षा नियम आणि यूपीआई पिन सुरक्षितता.\n2. **फसवणूक टाळणे**: लॉटरी स्कॅम, केवायसी फसवणूक आणि बनावट लिंक्स ओळखणे.\n3. **व्याज दर**: सरळव्याज विरुद्ध चक्रवाढ व्याज आणि बँक कर्जांची माहिती.\n4. **बजेटिंग**: ५०/३०/२० बजेटचा नियम आणि आपत्कालीन निधी तयार करणे.\n\nप्रारंभ करण्यासाठी वर भाषा निवडा किंवा खालीलपैकी एक पर्याय निवडा!",
    correctText: "🎉 बरोबर उत्तर!",
    incorrectText: "❌ चुकीचे उत्तर!",
    telemetryTitle1: "टप्पा १: युजर प्रश्न आणि प्रीप्रोसेसिंग",
    telemetryTitle2: "टप्पा २: RAG ज्ञानकोश शोध",
    telemetryTitle3: "टप्पा ३: संदर्भ जोडणे व प्रॉम्प्ट तयार करणे",
    telemetryTitle4: "टप्पा ४: आयबीएम ग्रेनाइट मॉडेल जनरेशन"
  },
  ta: {
    headerSubtitle: "AI நிதி அறிவு உதவியாளர்",
    chatTitle: "பினிஷீல்டு உதவியாளர்",
    chatSubtitle: "RAG & IBM கிரானைட் மூலம் இயங்குகிறது",
    chatPlaceholder: "Type here...",
    btnSend: "அனுப்பு",
    visualizerTitle: "RAG தகவல் மீட்பு மற்றும் உருவாக்க கட்டமைப்பு",
    step1Label: "கேள்வி தயார்",
    step2Label: "தகவல் மீட்பு",
    step3Label: "சூழல் செறிவூட்டல்",
    step4Label: "கிரானைட் முடிவு",
    tabScamText: "மோசடி கண்டறி",
    tabToolsText: "நிதி கருவிகள்",
    gameHeadline: "மோசடி விழிப்புணர்வு சவால்",
    scoreLabel: "மதிப்பெண்:",
    btnScamText: "மோசடி என அறிவி",
    btnSafeText: "பாதுகாப்பானது என அறிவி",
    btnNextText: "அடுத்த காட்சி",
    calcSelectLabel: "கருவியை தேர்வு செய்:",
    budgetHeader: "50/30/20 பட்ஜெட் திட்டமிடுபவர்",
    budgetDesc: "மாத வருமானத்தை தேவைகள் (50%), விருப்பங்கள் (30%), மற்றும் சேமிப்பு (20%) என பிரிக்கவும்.",
    budgetIncomeLabel: "மாத நிகர வருமானம் (₹):",
    needsText: "தேவைகள் (வாடகை, மளிகை, பில்கள்)",
    wantsText: "விருப்பங்கள் (உணவகம், ஷாப்பிங், சினிமா)",
    savingsText: "சேமிப்பு & முதலீடுகள்",
    interestHeader: "கூட்டு வட்டி கால்குலேட்டர்",
    interestDesc: "கூட்டு வட்டி (வட்டிக்கு வட்டி) மூலம் பணம் எவ்வாறு பல மடங்கு வளர்கிறது என்பதைப் பாருங்கள்.",
    intPrincipalLabel: "அசல் வைப்புத்தொகை (₹):",
    intRateLabel: "ஆண்டு வட்டி வீதம் (%):",
    intTenureLabel: "காலம் (ஆண்டுகள்):",
    intCompLabel: "கூட்டு வட்டி கணக்கிடும் முறை:",
    intInvestedText: "மொத்த முதலீடு",
    intEarnedText: "ஈட்டிய வட்டி",
    intTotalText: "எதிர்கால மொத்த மதிப்பு",
    emiHeader: "கடன் EMI கால்குலேட்டர்",
    emiDesc: "மாத தவணை (EMI) கணக்கிட்டு, தட்டையான வட்டிக்கும் குறைக்கும் வட்டிக்கும் உள்ள வித்தியாசத்தை ஒப்பிடுக.",
    emiAmountLabel: "கடன் அசல் (₹):",
    emiRateLabel: "வட்டி விகிதம் (% p.a.):",
    emiTenureLabel: "காலம் (ஆண்டுகள்):",
    emiTypeLabel: "வட்டி கணக்கீட்டு முறை:",
    emiMonthlyText: "மாதாந்திர EMI",
    emiInterestText: "செலுத்த வேண்டிய மொத்த வட்டி",
    emiTotalText: "மொத்த கடன் செலவு",
    welcomeMessage: "வணக்கம்! நான் உங்கள் AI நிதி அறிவு உதவியாளர், IBM கிரானைட் மூலம் உருவாக்கப்பட்டுள்ளேன்.\n\nமுக்கியமான நிதிப் பயன்பாடுகள் மற்றும் இணைய பாதுகாப்பைப் புரிந்துகொள்ள நான் உங்களுக்கு உதவுவேன். என்னிடம் கேட்கலாம்:\n1. **UPI கொடுப்பனவுகள்**: அமைப்பு, வரம்புகள் மற்றும் UPI பின் பாதுகாப்பு.\n2. **மோசடிகளைத் தவிர்த்தல்**: லாட்டரி மோசடி, KYC ফাঁடி மற்றும் ஃபிஷிங் லிங்க்களைக் கண்டறிதல்.\n3. **வட்டி விகிதங்கள்**: தனிவட்டி மற்றும் கூட்டு வட்டி மற்றும் கடன் வட்டி ஒப்பீடு.\n4. **பட்ஜெட்**: 50/30/20 பட்ஜெட் விதி மற்றும் அவசரகால நிதி மேலாண்மை.\n\nதொடங்குவதற்கு மேலே உள்ள மொழிகளில் ஒன்றைத் தேர்ந்தெடுக்கவும் அல்லது கீழே உள்ள பரிந்துரை கேள்விகளைக் கிளிக் செய்க!",
    correctText: "🎉 சரியான விடை!",
    incorrectText: "❌ தவறான விடை!",
    telemetryTitle1: "படி 1: பயனர் கேள்வி மற்றும் பகுப்பாய்வு",
    telemetryTitle2: "படி 2: RAG தகவல் களஞ்சிய தேடல்",
    telemetryTitle3: "படி 3: சூழல் ஒருங்கிணைப்பு (பிராம்ப்ட் உருவாக்கம்)",
    telemetryTitle4: "படி 4: IBM கிரானைட் மாதிரியின் பதில் தயாரிப்பு"
  },
  bn: {
    headerSubtitle: "এআই আর্থিক সাক্ষরতা সহকারী",
    chatTitle: "ফিনিশীল্ড অ্যাসিস্ট্যান্ট",
    chatSubtitle: "RAG ও আইবিএম গ্রানাইট চালিত",
    chatPlaceholder: "ইউপিআই, জালিয়াতি, বাজেট বা সুদের হার নিয়ে জিজ্ঞাসা করুন...",
    btnSend: "পাঠান",
    visualizerTitle: "রিট্রিভাল-অগমেন্টেড জেনারেশন (RAG) প্রসেস",
    step1Label: "কোয়েরি প্রিপ",
    step2Label: "তথ্য অনুসন্ধান",
    step3Label: "কনটেক্সট বৃদ্ধি",
    step4Label: "গ্রানাইট জেনারেশন",
    tabScamText: "প্রতারণা শনাক্তকরণ",
    tabToolsText: "আর্থিক ক্যালকুলেটর",
    gameHeadline: "প্রতারণা সচেতনতা গেম",
    scoreLabel: "স্কোর:",
    btnScamText: "প্রতারণা (SCAM)",
    btnSafeText: "নিরাপদ (SAFE)",
    btnNextText: "পরবর্তী পরিস্থিতি",
    calcSelectLabel: "ক্যালকুলেটর নির্বাচন:",
    budgetHeader: "৫০/৩০/২০ বাজেট বন্টক",
    budgetDesc: "আপনার মাসিক আয়কে প্রয়োজন (৫০%), ইচ্ছা (৩০%), এবং সঞ্চয়/ঋণ পরিশোধ (২০%) এ ভাগ করুন।",
    budgetIncomeLabel: "মাসিক কর-পরবর্তী আয় (₹):",
    needsText: "প্রয়োজন (ভাড়া, বিদ্যুৎ বিল, বাজার)",
    wantsText: "ইচ্ছা (রেস্তোরাঁ, কেনাকাটা, সিনেমা)",
    savingsText: "সঞ্চয় ও বিনিয়োগ",
    interestHeader: "চক্রবৃদ্ধি সুদ ক্যালকুলেটর",
    interestDesc: "দেখুন কিভাবে চক্রবৃদ্ধি সুদের (সুদের ওপর সুদ) সাহায্যে সঞ্চিত অর্থ দ্রুত বৃদ্ধি পায়।",
    intPrincipalLabel: "মূল আমানত (₹):",
    intRateLabel: "বার্ষিক সুদের হার (%):",
    intTenureLabel: "সময়কাল (বছর):",
    intCompLabel: "সুদ চক্রবৃদ্ধির ফ্রিকোয়েন্সি:",
    intInvestedText: "মোট জমাকৃত অর্থ",
    intEarnedText: "অর্জিত মোট সুদ",
    intTotalText: "ভবিষ্যতের মোট মূল্য",
    emiHeader: "লোন ইএমআই ক্যালকুলেটর",
    emiDesc: "মাসিক কিস্তি (EMI) হিসাব করুন এবং ফ্ল্যাট রেট বনাম হ্রাসমান সুদের হারের পার্থক্য দেখুন।",
    emiAmountLabel: "লোন মূলধন (₹):",
    emiRateLabel: "সুদের হার (% প্রতি বছর):",
    emiTenureLabel: "সময়কাল (বছর):",
    emiTypeLabel: "সুদ হিসাব করার পদ্ধতি:",
    emiMonthlyText: "মাসিক কিস্তি (EMI)",
    emiInterestText: "মোট প্রদেয় সুদ",
    emiTotalText: "ঋণের মোট খরচ",
    welcomeMessage: "হ্যালো! আমি আপনার এআই আর্থিক সাক্ষরতা সহকারী, আইবিএম গ্রানাইট দ্বারা চালিত।\n\nআমি আপনাকে বিভিন্ন আর্থিক সরঞ্জাম এবং ডিজিটাল নিরাপত্তা বুঝতে সাহায্য করতে পারি। যেমন:\n1. **ইউপিআই লেনদেন**: সেটআপ, লিমিট এবং ইউপিআই পিন সুরক্ষার নিয়মাবলী।\n2. **জালিয়াতি এড়ানো**: লটারি প্রতারণা, কেওয়াইসি ফাঁদ এবং ভুয়ো লিঙ্কের শনাক্তকরণ।\n3. **সুদের হার**: সরল সুদ বনাম চক্রবৃদ্ধি সুদ, এবং ব্যাংক ঋণের তুলনা।\n4. **বাজেট**: ৫০/৩০/২০ আয়ের নিয়ম এবং আপৎকালীন জরুরি তহবিল তৈরি।\n\nশুরু করতে ওপরে একটি ভাষা বেছে নিন অথবা নিচের যেকোনো একটি সাজেস্টেড প্রশ্নে ক্লিক করুন!",
    correctText: "🎉 সঠিক উত্তর!",
    incorrectText: "❌ ভুল উত্তর!",
    telemetryTitle1: "ধাপ ১: ব্যবহারকারীর প্রশ্ন এবং প্রক্রিয়াকরণ",
    telemetryTitle2: "ধাপ ২: RAG নথিপত্র অনুসন্ধান",
    telemetryTitle3: "ধাপ ৩: কনটেক্সট বর্ধিতকরণ ও প্রম্পট তৈরি",
    telemetryTitle4: "ধাপ ৪: আইবিএম গ্রানাইট মডেল দ্বারা উত্তর তৈরি"
  }
};

// Quick prompt suggestions based on selected language
const suggestions = {
  en: [
    "How do I link bank to UPI safely?",
    "Avoid KYC update scams",
    "What is the 50/30/20 budgeting rule?",
    "Explain flat vs reducing interest rates"
  ],
  hi: [
    "यूपीआई से बैंक खाता सुरक्षित कैसे जोड़ें?",
    "केवाईसी अपडेट घोटाले से कैसे बचें?",
    "50/30/20 बजट नियम क्या है?",
    "फ्लैट बनाम घटती ब्याज दर स्पष्ट करें"
  ],
  mr: [
    "बँक खाते युपीआयशी सुरक्षित कसे लिंक करावे?",
    "केवायसी अपडेट फसवणूक कशी टाळावी?",
    "५०/३०/२० बजेटचा नियम काय आहे?",
    "फ्लॅट विरुद्ध कमी होणारे व्याजदर स्पष्ट करा"
  ],
  ta: [
    "UPI-யில் வங்கி கணக்கை பாதுகாப்பாக இணைப்பது எப்படி?",
    "KYC அப்டேட் மோசடியை தவிர்ப்பது எப்படி?",
    "50/30/20 பட்ஜெட் விதி என்றால் என்ன?",
    "தட்டையான vs குறைக்கும் வட்டி வித்தியாசமென்ன?"
  ],
  bn: [
    "কিভাবে সুরক্ষিতভাবে ব্যাংক অ্যাকাউন্ট ইউপিআই-তে যুক্ত করব?",
    "কেওয়াইসি আপডেট প্রতারণা এড়ানোর উপায় কি?",
    "৫০/৩০/২০ বাজেট নিয়মটি কি?",
    "ফ্ল্যাট বনাম হ্রাসমান সুদের হারের তুলনা করো"
  ]
};

// ==========================================================================
// Scam Game Scenarios Database (Multilingual)
// ==========================================================================
const scamScenarios = {
  en: [
    {
      type: "Incoming SMS",
      sender: "AD-AMZON",
      text: "Dear customer, your Amazon account has locked due to suspicious activity. Verify details here immediately to unlock: http://amazon-security-login.xyz",
      isScam: true,
      explanation: "This is a phishing attempt. The URL uses a suspicious non-official domain (.xyz). Official sites like Amazon use their direct verified domain (amazon.in/amazon.com) and never request verification via spam SMS."
    },
    {
      type: "Incoming Call",
      sender: "+91 99887 76655",
      text: "Hello, I am calling from customer service. A payment of ₹3,500 has failed on your account. Please scan this QR code I sent on WhatsApp and enter your UPI PIN to approve your refund.",
      isScam: true,
      explanation: "SCAM! You NEVER enter a UPI PIN to receive money or get refunds. Entering your PIN always deducts money from your account. Scanning a QR code also sends money, it does not receive it."
    },
    {
      type: "Incoming SMS",
      sender: "BANK-TXN",
      text: "Alert: ₹500.00 was withdrawn from your account ending 7894 at ATM. Available balance: ₹45,210. If not done by you, report to bank customer care or lock card via our official banking app.",
      isScam: false,
      explanation: "This is a legitimate transactional alert notifying you of account activity. It lists your correct truncated account number, doesn't request instant verification links, and advises you to use your official app."
    },
    {
      type: "Incoming Call",
      sender: "Telecom Support",
      text: "Sir, your SIM card KYC documentation has expired. Call me back in 5 minutes, or download 'AnyDesk' screen-sharing app from Google Play so I can help verify your documents online, or your card will be blocked.",
      isScam: true,
      explanation: "Classic KYC fraud. Screen-sharing apps like AnyDesk, TeamViewer, or RustDesk allow scammers to view your mobile screen, intercept banking details, and read security OTPs to empty accounts."
    },
    {
      type: "Incoming SMS",
      sender: "SBI-AUTH",
      text: "OTP for online transaction of Rs. 1,450.00 to H&M is 894512. Valid for 5 mins. Banking officials never ask for OTP. Never share it with anyone.",
      isScam: false,
      explanation: "This is a standard transactional OTP authorization message. The text contains the exact details of the transaction and correctly warns you never to share the security code."
    }
  ],
  hi: [
    {
      type: "आने वाला एसएमएस",
      sender: "AD-AMZON",
      text: "प्रिय ग्राहक, संदिग्ध गतिविधि के कारण आपका अमेज़ॅन खाता ब्लॉक हो गया है। तुरंत अनलॉक करने के लिए यहां विवरण सत्यापित करें: http://amazon-security-login.xyz",
      isScam: true,
      explanation: "यह एक फ़िशिंग का प्रयास है। लिंक में एक संदिग्ध नकली डोमेन (.xyz) का उपयोग किया गया है। अमेज़ॅन जैसी आधिकारिक कंपनियाँ कभी भी ऐसे एसएमएस द्वारा संवेदनशील सत्यापन नहीं मांगती हैं।"
    },
    {
      type: "आने वाली कॉल",
      sender: "+91 99887 76655",
      text: "नमस्कार, मैं बैंक कस्टमर केयर से बात कर रहा हूँ। आपके खाते से ₹3,500 का भुगतान विफल हो गया है। कृपया व्हाट्सएप पर भेजे गए क्यूआर कोड को स्कैन करें और अपना रिफंड पाने के लिए यूपीआई पिन दर्ज करें।",
      isScam: true,
      explanation: "घोटाला! पैसे प्राप्त करने या रिफंड पाने के लिए कभी भी यूपीआई पिन दर्ज करने की आवश्यकता नहीं होती है। पिन दर्ज करने से हमेशा आपके खाते से पैसे कटते हैं।"
    },
    {
      type: "आने वाला एसएमएस",
      sender: "BANK-TXN",
      text: "अलर्ट: आपके खाते (संख्या 7894) से एटीएम पर ₹500.00 निकाले गए हैं। शेष राशि: ₹45,210। यदि यह आपके द्वारा नहीं किया गया है, तो आधिकारिक बैंकिंग ऐप के माध्यम से कार्ड ब्लॉक करें।",
      isScam: false,
      explanation: "यह बैंक से आने वाला एक वास्तविक लेन-देन संदेश है जो आपको आपके खाते की गतिविधियों से सूचित रखता है। इसमें किसी संदिग्ध लिंक पर क्लिक करने के लिए नहीं कहा गया है।"
    }
  ],
  mr: [
    {
      type: "नवीन संदेश (SMS)",
      sender: "AD-AMZON",
      text: "प्रिय ग्राहक, संशयास्पद हालचालींमुळे तुमचे ॲमेझॉन खाते ब्लॉक झाले आहे. अनलॉक करण्यासाठी त्वरित येथे कागदपत्रे पडताळून घ्या: http://amazon-security-login.xyz",
      isScam: true,
      explanation: "हा फिशिंगचा प्रकार आहे. लिंकमध्ये चुकीचे डोमेन (.xyz) वापरले आहे. ॲमेझॉन कधीही अशा प्रकारच्या संदेशाद्वारे तुमचे पासवर्ड किंवा पिन मागत नाही."
    },
    {
      type: "नवीन कॉल",
      sender: "+91 99887 76655",
      text: "नमस्कार, मी बँक कस्टमर केअरमधून बोलत आहे. तुमचे ₹३,५०० रुपयांचे पेमेंट फेल झाले आहे. मी व्हॉट्सॲपवर पाठवलेला क्यूआर कोड स्कॅन करा आणि रिफंड मिळवण्यासाठी यूपीआय पिन टाका.",
      isScam: true,
      explanation: "फसवणूक! रिफंड किंवा पैसे खात्यात जमा करण्यासाठी कधीही यूपीआय पिन टाकावा लागत नाही. पिन टाकल्यास तुमच्या खात्यातून पैसे वजा होतात."
    }
  ],
  ta: [
    {
      type: "குறுஞ்செய்தி (SMS)",
      sender: "AD-AMZON",
      text: "அன்பான வாடிக்கையாளரே, சந்தேகத்திற்கிடமான செயல்பாட்டின் காரணமாக உங்கள் அமேசான் கணக்கு முடக்கப்பட்டுள்ளது. உடனடியாக திறக்க இந்த இணைப்பில் உள்நுழையவும்: http://amazon-security-login.xyz",
      isScam: true,
      explanation: "இது ஒரு போலி ஃபிஷிங் இணைப்பாகும். அதிகாரப்பூர்வ தளங்கள் எப்போதும் தங்களின் சொந்த தளம் (amazon.in) மூலமே விவரங்களைக் கேட்கும், இப்படி .xyz போன்ற போலி லிங்க்களை அனுப்பாது."
    },
    {
      type: "தொலைபேசி அழைப்பு",
      sender: "+91 99887 76655",
      text: "வணக்கம், நான் வங்கியின் வாடிக்கையாளர் சேவையிலிருந்து பேசுகிறேன். உங்களின் ₹3,500 தோல்வியடைந்த பணத்தைத் திரும்பப் பெற, நான் வாட்ஸ்அப்பில் அனுப்பிய QR குறியீட்டை ஸ்கேன் செய்து உங்கள் UPI PIN-ஐ உள்ளிடவும்.",
      isScam: true,
      explanation: "மோசடி! பணத்தைப் பெறுவதற்கு நீங்கள் ஒருபோதும் UPI PIN-ஐ உள்ளிடத் தேவையில்லை. PIN-ஐ உள்ளிட்டால் உங்கள் கணக்கிலிருந்து பணம் எடுக்கப்படும்."
    }
  ],
  bn: [
    {
      type: "ইনকামিং এসএমএস",
      sender: "AD-AMZON",
      text: "প্রিয় গ্রাহক, আপনার আমাজন অ্যাকাউন্টটি সাময়িকভাবে লক করা হয়েছে। আনলক করতে অবিলম্বে এখানে লগইন করুন: http://amazon-security-login.xyz",
      isScam: true,
      explanation: "এটি একটি ফিশিং আক্রমণ। আমাজনের নাম করে একটি ভুয়ো ওয়েবসাইট (.xyz) লিঙ্ক পাঠানো হয়েছে। অফিসিয়াল সাইটগুলি কখনই এই ধরণের মেসেজ পাঠায় না।"
    },
    {
      type: "ইনকামিং কল",
      sender: "+91 99887 76655",
      text: "নমস্কার, আমি কাস্টমার কেয়ার থেকে বলছি। আপনার ₹৩,৫০০ টাকার রিফান্ড পেন্ডিং আছে। অনুগ্রহ করে হোয়াটসঅ্যাপে পাঠানো কিউআর কোড স্ক্যান করে ইউপিআই পিন দিয়ে কনফার্ম করুন।",
      isScam: true,
      explanation: "প্রতারণা! কোনো অবস্থাতেই টাকা রিসিভ করার জন্য ইউপিআই পিন দিতে হয় না। পিন প্রবেশ করালেই আপনার অ্যাকাউন্ট থেকে টাকা কেটে নেওয়া হবে।"
    }
  ]
};

// ==========================================================================
// Application Core Controller State
// ==========================================================================
let activeLanguage = 'en';
let gameScoreValue = 0;
let totalScenariosPlayed = 0;
let currentScenarioIndex = 0;
let lastRAGTelemetry = null; // Stored for step-by-step UI click visualization
let isRecordingVoice = false;
let voiceRecognitionInstance = null;

// DOM Elements cache
const dom = {
  activeLangBtn: document.getElementById('activeLangBtn'),
  langOptions: document.getElementById('langOptions'),
  // settings modal elements removed
  
  chatMessages: document.getElementById('chatMessages'),
  chatForm: document.getElementById('chatForm'),
  chatInput: document.getElementById('chatInput'),
  welcomeHeader: document.getElementById('welcomeHeader'),
  chatInputWrapper: document.getElementById('chatInputWrapper'),
  voiceInputBtn: document.getElementById('voiceInputBtn'),
  clearChatBtn: document.getElementById('clearChatBtn'),
  suggestionBox: document.getElementById('suggestionBox'),
  
  chatFileInput: document.getElementById('chatFileInput'),
  attachBtnPlus: document.getElementById('attachBtnPlus'),
  attachBtnClip: document.getElementById('attachBtnClip'),
  
  scenarioType: document.getElementById('scenarioType'),
  scenarioSender: document.getElementById('scenarioSender'),
  scenarioText: document.getElementById('scenarioText'),
  scamBtn: document.getElementById('scamBtn'),
  safeBtn: document.getElementById('safeBtn'),
  gameFeedback: document.getElementById('gameFeedback'),
  feedbackIcon: document.getElementById('feedbackIcon'),
  feedbackResultText: document.getElementById('feedbackResultText'),
  feedbackExplanation: document.getElementById('feedbackExplanation'),
  nextScenarioBtn: document.getElementById('nextScenarioBtn'),
  gameScore: document.getElementById('gameScore'),
  
  calcSelect: document.getElementById('calcSelect'),
  
  budgetIncome: document.getElementById('budgetIncome'),
  valNeeds: document.getElementById('valNeeds'),
  valWants: document.getElementById('valWants'),
  valSavings: document.getElementById('valSavings'),
  budgetChart: document.querySelector('.budget-chart'),
  
  interestPrincipal: document.getElementById('interestPrincipal'),
  interestRate: document.getElementById('interestRate'),
  interestTenure: document.getElementById('interestTenure'),
  interestComp: document.getElementById('interestComp'),
  valIntInvested: document.getElementById('valIntInvested'),
  valIntEarned: document.getElementById('valIntEarned'),
  valIntTotal: document.getElementById('valIntTotal'),
  
  emiAmount: document.getElementById('emiAmount'),
  emiRate: document.getElementById('emiRate'),
  emiTenure: document.getElementById('emiTenure'),
  emiType: document.getElementById('emiType'),
  valEmiMonthly: document.getElementById('valEmiMonthly'),
  valEmiInterest: document.getElementById('valEmiInterest'),
  valEmiTotal: document.getElementById('valEmiTotal')
};

// ==========================================================================
// Initialization & Startup Handlers
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSelection();
  setupTabSelectors();
  setupSpeechRecognition();
  setupCalculators();
  setupScamGame();
  
  // Set up click listeners for the RAG Visualizer nodes
  document.querySelectorAll('.rag-step').forEach(node => {
    node.addEventListener('click', () => {
      const stepNum = parseInt(node.getAttribute('data-step'));
      highlightRAGStepInUI(stepNum);
    });
  });

  // Chat submit binding
  
  function transitionToChatState() {
    if (dom.welcomeHeader) dom.welcomeHeader.classList.add('hidden');
    if (dom.chatInputWrapper) dom.chatInputWrapper.classList.remove('expansive');
  }

  // Handle Enter key for textarea
  if (dom.chatInput) {
    dom.chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        dom.chatForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    });
  }

  dom.chatForm.addEventListener('submit', (e) => {
    transitionToChatState();
    handleUserChatSubmit(e);
  });
  dom.clearChatBtn.addEventListener('click', clearChatLogs);
  
  // File attachment binding
  setupFileAttachments();
  
  // Trigger initial greeting in English
  setLanguage('en');
});

// Setup File Attachment Logic
function setupFileAttachments() {
  const triggerFileInput = () => {
    if (dom.chatFileInput) dom.chatFileInput.click();
  };
  
  if (dom.attachBtnPlus) dom.attachBtnPlus.addEventListener('click', triggerFileInput);
  if (dom.attachBtnClip) dom.attachBtnClip.addEventListener('click', triggerFileInput);
  
  if (dom.chatFileInput) {
    dom.chatFileInput.addEventListener('change', async (e) => {
      if (e.target.files.length > 0) {
        if (typeof transitionToChatState === 'function') transitionToChatState();
        else if (dom.welcomeHeader) {
          dom.welcomeHeader.classList.add('hidden');
          dom.chatInputWrapper.classList.remove('expansive');
        }
        
        const file = e.target.files[0];
        injectBotMessage(`Scanning document: ${file.name}...`);
        
        const formData = new FormData();
        formData.append('document', file);
        
        try {
          const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData
          });
          
          const data = await res.json();
          if (res.ok) {
            injectBotMessage(`📄 **File Parsed Successfully:** ${file.name}<br><br><i>I have securely scanned this document and loaded its text into my active knowledge base. Feel free to ask me questions about its contents!</i>`);
          } else {
            injectBotMessage(`❌ **Upload Failed:** ${data.error || 'Unknown error occurred.'}`);
          }
        } catch (error) {
          injectBotMessage(`❌ **Upload Error:** Could not connect to the backend server to parse this file.`);
        }
        
        e.target.value = ''; // Reset input
      }
    });
  }
}

// Load credentials from localStorage
function setupCredentialStore() {
  const credentials = getSavedCredentials();
  if (credentials) {
    dom.apiKey.value = credentials.apikey || '';
    dom.projectId.value = credentials.projectId || '';
    dom.serviceUrl.value = credentials.serviceUrl || 'https://us-south.ml.cloud.ibm.com';
    dom.modelId.value = credentials.modelId || 'ibm/granite-3-8b-instruct';
    
    setConnectionStatusBadge(true);
  } else {
    setConnectionStatusBadge(false);
  }

  // Settings Modal Removed
}

function getSavedCredentials() {
  const raw = localStorage.getItem('watsonx_creds');
  return raw ? JSON.parse(raw) : null;
}

// Badge Logic Removed

// ==========================================================================
// Language Switching System
// ==========================================================================
function setupLanguageSelection() {
  dom.langOptions.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = anchor.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  activeLanguage = lang;
  
  // Update Dropdown Display
  const langText = dom.langOptions.querySelector(`a[data-lang="${lang}"]`).textContent.trim();
  dom.activeLangBtn.innerHTML = `<i class="fa-solid fa-language"></i> ${langText} <i class="fa-solid fa-chevron-down"></i>`;
  
  // Translate Static Text Nodes by ID or class
  const table = translations[lang];
  Object.keys(table).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === 'INPUT') {
        el.placeholder = table[key];
      } else {
        el.textContent = table[key];
      }
    }
  });

  // Translate tab titles specifically
  document.getElementById('tabScamText').textContent = table.tabScamText;
  document.getElementById('tabToolsText').textContent = table.tabToolsText;
  
  // Apply changes to input placeholder
  dom.chatInput.placeholder = table.chatPlaceholder;

  // Refresh Suggestions Chips
  refreshSuggestionChips(lang);
  
  // Refresh Scam Challenge Game for language
  setupScamGame();

  // Reset Chat and send initial message
  clearChatLogs();
  injectBotMessage(table.welcomeMessage);
}

function refreshSuggestionChips(lang) {
  dom.suggestionBox.innerHTML = '';
  const prompts = suggestions[lang] || suggestions.en;
  prompts.forEach(p => {
    const chip = document.createElement('div');
    chip.className = 'suggestion-chip';
    chip.textContent = p;
    chip.addEventListener('click', () => {
      dom.chatInput.value = p;
      dom.chatForm.dispatchEvent(new Event('submit'));
    });
    dom.suggestionBox.appendChild(chip);
  });
}

// ==========================================================================
// Tab Controllers
// ==========================================================================
function setupTabSelectors() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });
}

// ==========================================================================
// Chat Agent Interface
// ==========================================================================
function injectBotMessage(htmlContent) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message bot';
  
  msgDiv.innerHTML = `
    <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
    <div class="message-bubble">${formatReplyText(htmlContent)}</div>
  `;
  dom.chatMessages.appendChild(msgDiv);
  dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

function injectUserMessage(text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message user';
  
  msgDiv.innerHTML = `
    <div class="message-avatar"><i class="fa-solid fa-user"></i></div>
    <div class="message-bubble">${text}</div>
  `;
  dom.chatMessages.appendChild(msgDiv);
  dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
}

function injectTypingIndicator() {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message bot typing-message';
  msgDiv.innerHTML = `
    <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
    <div class="message-bubble">
      <div class="typing-indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  dom.chatMessages.appendChild(msgDiv);
  dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
  return msgDiv;
}

function clearChatLogs() {
  dom.chatMessages.innerHTML = '';
}

// Convert markdown-like symbols (**bold**, bullets) into HTML tag formats safely
function formatReplyText(text) {
  let safeHtml = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold substitution: **text** to <strong>text</strong>
  safeHtml = safeHtml.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Bullet substitute: lines starting with "- " or "* " to indent bullet styles
  const lines = safeHtml.split('\n');
  const formattedLines = lines.map(line => {
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      return `<div style="padding-left: 15px; margin-top: 4px; display: list-item; list-style-type: disc;">${line.trim().substring(2)}</div>`;
    }
    return line;
  });

  return formattedLines.join('\n');
}

// Chat API submit handler
async function handleUserChatSubmit(e) {
  e.preventDefault();
  const query = dom.chatInput.value.trim();
  if (!query) return;

  dom.chatInput.value = '';
  injectUserMessage(query);

  const typingBubble = injectTypingIndicator();

  try {
    const credentials = getSavedCredentials();
    const payload = {
      message: query,
      language: activeLanguage,
      credentials
    };

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    typingBubble.remove();

    if (data.error) {
      injectBotMessage(`⚠️ Error: ${data.error}`);
    } else {
      injectBotMessage(data.response);
    }

    if (data.pipeline) {
      lastRAGTelemetry = data.pipeline;
      lastRAGTelemetry.liveMode = data.liveMode;
      lastRAGTelemetry.error = data.error;
    }

  } catch (error) {
    console.error("Fetch API error:", error);
    typingBubble.remove();
    injectBotMessage("⚠️ System error: Could not reach the server API. Check that the Node.js backend is running.");
  }
}

// ==========================================================================
// Web Speech API Integration
// ==========================================================================
function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!SpeechRecognition) {
    dom.voiceInputBtn.style.display = 'none';
    return;
  }

  voiceRecognitionInstance = new SpeechRecognition();
  voiceRecognitionInstance.continuous = false;
  voiceRecognitionInstance.interimResults = false;

  // Adapt recognition language on-the-fly
  voiceRecognitionInstance.onstart = () => {
    isRecordingVoice = true;
    dom.voiceInputBtn.classList.add('active');
  };

  voiceRecognitionInstance.onend = () => {
    isRecordingVoice = false;
    dom.voiceInputBtn.classList.remove('active');
  };

  voiceRecognitionInstance.onresult = (event) => {
    const transcriptText = event.results[0][0].transcript;
    dom.chatInput.value = transcriptText;
    // Auto submit query
    dom.chatForm.dispatchEvent(new Event('submit'));
  };

  dom.voiceInputBtn.addEventListener('click', () => {
    if (isRecordingVoice) {
      voiceRecognitionInstance.stop();
    } else {
      // Set the appropriate speech locale matching our active language
      const localeMap = { en: 'en-US', hi: 'hi-IN', mr: 'mr-IN', ta: 'ta-IN', bn: 'bn-IN' };
      voiceRecognitionInstance.lang = localeMap[activeLanguage] || 'en-US';
      voiceRecognitionInstance.start();
    }
  });
}

// ==========================================================================
// RAG visualizer display flow
// ==========================================================================
function resetRAGVisualizerUI() {
  document.querySelectorAll('.rag-step').forEach(node => {
    node.className = "rag-step";
  });
  dom.telemetryStepTitle.textContent = translations[activeLanguage].telemetryTitle1;
  dom.telemetryBadge.className = "telemetry-badge";
  dom.telemetryBadge.textContent = "Processing";
  dom.telemetryBody.innerHTML = `<p class="telemetry-placeholder">RAG Engine is executing semantic lookup...</p>`;
}

function animateRAGSteps(isLiveMode) {
  const steps = [
    { el: dom.step1, delay: 100 },
    { el: dom.step2, delay: 500 },
    { el: dom.step3, delay: 900 },
    { el: dom.step4, delay: 1300 }
  ];

  steps.forEach(step => {
    setTimeout(() => {
      step.el.classList.add('completed');
      if (step.el === dom.step4) {
        step.el.classList.remove('completed');
        step.el.classList.add('active');
        highlightRAGStepInUI(4);
      }
    }, step.delay);
  });
}

function highlightRAGStepInUI(stepNumber) {
  // Toggle visual active state
  document.querySelectorAll('.rag-step').forEach(node => node.classList.remove('active'));
  const activeNode = document.getElementById(`step${stepNumber}`);
  if (activeNode) activeNode.classList.add('active');

  const telemetryEl = dom.telemetryBody;
  telemetryEl.innerHTML = '';

  const table = translations[activeLanguage];
  
  if (!lastRAGTelemetry) {
    telemetryEl.innerHTML = `<p class="telemetry-placeholder">No query has been processed yet.</p>`;
    return;
  }

  // Update header text based on step
  dom.telemetryStepTitle.textContent = table[`telemetryTitle${stepNumber}`] || `Step ${stepNumber}`;

  if (stepNumber === 1) {
    dom.telemetryBadge.textContent = "QUERY";
    dom.telemetryBadge.className = "telemetry-badge";
    
    // Display query string and simple tokenization representation
    const words = lastRAGTelemetry.query.toLowerCase()
      .replace(/[^\w\s\u0900-\u097F\u0B80-\u0BFF\u0980-\u09FF]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 1);

    telemetryEl.innerHTML = `
      <div class="tel-line"><span class="tel-label">Raw User Query:</span> <span class="tel-text">"${lastRAGTelemetry.query}"</span></div>
      <div class="tel-line" style="margin-top: 10px;"><span class="tel-label">Active Language:</span> <span class="tel-val">"${lastRAGTelemetry.language}"</span></div>
      <div class="tel-line" style="margin-top: 10px;"><span class="tel-label">Processed Tokens:</span></div>
      <div style="margin-top: 5px; display: flex; flex-wrap: wrap; gap: 5px;">
        ${words.map(w => `<span style="background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; color:#a5b4fc;">${w}</span>`).join('')}
      </div>
    `;
  } 
  else if (stepNumber === 2) {
    dom.telemetryBadge.textContent = "RETRIEVED";
    dom.telemetryBadge.className = "telemetry-badge";
    
    if (lastRAGTelemetry.retrievedDocs && lastRAGTelemetry.retrievedDocs.length > 0) {
      let docHTML = "";
      lastRAGTelemetry.retrievedDocs.forEach((doc, idx) => {
        docHTML += `
          <div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px; margin-bottom: 8px;">
            <div class="tel-line"><span class="tel-key">[Document ${idx + 1} ID]:</span> <span class="tel-val">${doc.id}</span></div>
            <div class="tel-line"><span class="tel-key">[Title]:</span> <span class="tel-text" style="font-weight:bold;">${doc.title}</span></div>
            <div class="tel-text" style="margin-top: 4px; font-size:0.7rem; color:#94a3b8; font-style:italic;">"${doc.content.substring(0, 100)}..."</div>
          </div>
        `;
      });
      telemetryEl.innerHTML = docHTML;
    } else {
      telemetryEl.innerHTML = `<div class="tel-line"><span class="tel-val">No specific documents found. Falling back to core knowledge.</span></div>`;
    }
  } 
  else if (stepNumber === 3) {
    dom.telemetryBadge.textContent = "AUGMENTED";
    dom.telemetryBadge.className = "telemetry-badge";
    
    // Render constructed system prompt
    telemetryEl.innerHTML = `
      <div class="tel-line"><span class="tel-label">Instructions Injected into System Prompt:</span></div>
      <div class="tel-text" style="background:rgba(0,0,0,0.3); padding:8px; border-radius:6px; color:#c7d2fe; font-size:0.7rem; max-height:120px; overflow-y:auto; margin-top:5px;">
        "${lastRAGTelemetry.systemPrompt}"
      </div>
    `;
  } 
  else if (stepNumber === 4) {
    const isLive = lastRAGTelemetry.liveMode;
    dom.telemetryBadge.textContent = isLive ? "LIVE INFERENCE" : "SIMULATION";
    dom.telemetryBadge.className = isLive ? "telemetry-badge status-live" : "telemetry-badge status-simulated";
    
    const credentials = getSavedCredentials();
    const modelUsed = isLive ? credentials.modelId : "ibm/granite-3-8b-instruct";
    
    telemetryEl.innerHTML = `
      <div class="tel-line"><span class="tel-key">Engine Model:</span> <span class="tel-val">${modelUsed}</span></div>
      <div class="tel-line"><span class="tel-key">Status:</span> <span class="tel-val">${lastRAGTelemetry.error ? 'API FAILURE' : 'COMPLETED'}</span></div>
      <div class="tel-line"><span class="tel-key">Temperature:</span> <span class="tel-val">0.3</span></div>
      <div class="tel-line"><span class="tel-key">Token Max Limit:</span> <span class="tel-val">600 tokens</span></div>
    `;
  }
}

// ==========================================================================
// Spot the Scam Interactive Simulator Game
// ==========================================================================
function setupScamGame() {
  const currentScenarios = scamScenarios[activeLanguage] || scamScenarios.en;
  
  // Wrap around scenario pointer
  if (currentScenarioIndex >= currentScenarios.length) {
    currentScenarioIndex = 0;
  }

  const scenario = currentScenarios[currentScenarioIndex];

  dom.scenarioType.innerHTML = scenario.type.includes("Call") ? `<i class="fa-solid fa-phone"></i> ${scenario.type}` : `<i class="fa-solid fa-comment-sms"></i> ${scenario.type}`;
  dom.scenarioSender.textContent = `Sender: ${scenario.sender}`;
  dom.scenarioText.textContent = `"${scenario.text}"`;
  
  // Reset actions buttons and feedback card
  dom.scamBtn.disabled = false;
  dom.safeBtn.disabled = false;
  dom.gameFeedback.classList.add('hidden');
  
  // Update scoreboard
  dom.gameScore.textContent = `${gameScoreValue} / ${totalScenariosPlayed}`;

  // Decision bindings
  dom.scamBtn.onclick = () => handleGameDecision(true, scenario);
  dom.safeBtn.onclick = () => handleGameDecision(false, scenario);
  
  dom.nextScenarioBtn.onclick = () => {
    currentScenarioIndex = (currentScenarioIndex + 1) % currentScenarios.length;
    setupScamGame();
  };
}

function handleGameDecision(userGuessedScam, scenario) {
  dom.scamBtn.disabled = true;
  dom.safeBtn.disabled = true;
  
  totalScenariosPlayed++;
  
  const table = translations[activeLanguage];
  const isCorrect = userGuessedScam === scenario.isScam;
  
  if (isCorrect) {
    gameScoreValue++;
    dom.gameFeedback.className = "feedback-card correct";
    dom.feedbackResultText.textContent = table.correctText;
    dom.feedbackIcon.className = "fa-solid fa-circle-check";
  } else {
    dom.gameFeedback.className = "feedback-card incorrect";
    dom.feedbackResultText.textContent = table.incorrectText;
    dom.feedbackIcon.className = "fa-solid fa-triangle-exclamation";
  }

  dom.feedbackExplanation.textContent = scenario.explanation;
  dom.gameFeedback.classList.remove('hidden');
  dom.gameScore.textContent = `${gameScoreValue} / ${totalScenariosPlayed}`;
}

// ==========================================================================
// Financial Utility Calculators
// ==========================================================================
function setupCalculators() {
  // Handle toggling subpanels
  dom.calcSelect.addEventListener('change', () => {
    const val = dom.calcSelect.value;
    document.querySelectorAll('.calculator-subpanel').forEach(panel => {
      panel.classList.add('hidden');
    });
    document.getElementById(`calc-${val}`).classList.remove('hidden');
  });

  // 1. Budget Allocator bindings
  dom.budgetIncome.addEventListener('input', runBudgetCalculator);
  
  // 2. Compound Interest bindings
  dom.interestPrincipal.addEventListener('input', runInterestCalculator);
  dom.interestRate.addEventListener('input', runInterestCalculator);
  dom.interestTenure.addEventListener('input', runInterestCalculator);
  dom.interestComp.addEventListener('change', runInterestCalculator);
  
  // 3. Loan EMI bindings
  dom.emiAmount.addEventListener('input', runEmiCalculator);
  dom.emiRate.addEventListener('input', runEmiCalculator);
  dom.emiTenure.addEventListener('input', runEmiCalculator);
  dom.emiType.addEventListener('change', runEmiCalculator);

  // Compute defaults once
  runBudgetCalculator();
  runInterestCalculator();
  runEmiCalculator();
}

function formatCurrency(amount) {
  return "₹" + Math.round(amount).toLocaleString('en-IN');
}

function runBudgetCalculator() {
  const income = parseFloat(dom.budgetIncome.value) || 0;
  
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;

  dom.valNeeds.textContent = formatCurrency(needs);
  dom.valWants.textContent = formatCurrency(wants);
  dom.valSavings.textContent = formatCurrency(savings);

  // Update progress bars widths
  const bars = dom.budgetChart.querySelectorAll('.budget-bar');
  if (income > 0) {
    bars[0].style.width = '50%';
    bars[1].style.width = '30%';
    bars[2].style.width = '20%';
  } else {
    bars.forEach(b => b.style.width = '0%');
  }
}

function runInterestCalculator() {
  const p = parseFloat(dom.interestPrincipal.value) || 0;
  const r = parseFloat(dom.interestRate.value) || 0;
  const t = parseFloat(dom.interestTenure.value) || 0;
  const n = parseFloat(dom.interestComp.value) || 12;

  // Formula: A = P(1 + r/(n*100))^(n*t)
  let futureValue = p;
  if (p > 0 && r > 0 && t > 0) {
    futureValue = p * Math.pow(1 + r / (n * 100), n * t);
  }
  const interestEarned = futureValue - p;

  dom.valIntInvested.textContent = formatCurrency(p);
  dom.valIntEarned.textContent = formatCurrency(interestEarned);
  dom.valIntTotal.textContent = formatCurrency(futureValue);
}

function runEmiCalculator() {
  const p = parseFloat(dom.emiAmount.value) || 0;
  const r = parseFloat(dom.emiRate.value) || 0;
  const t = parseFloat(dom.emiTenure.value) || 0;
  const type = dom.emiType.value;

  const n = t * 12; // total months
  let emi = 0;
  let totalPayable = p;
  let interestPayable = 0;

  if (p > 0 && r > 0 && t > 0) {
    if (type === 'reducing') {
      // Formula: EMI = [P x r x (1+r)^n] / [(1+r)^n - 1]
      const monthlyRate = r / (12 * 100);
      emi = (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
      totalPayable = emi * n;
      interestPayable = totalPayable - p;
    } else {
      // Flat Rate Loan: Interest computed on whole principal for whole term
      interestPayable = p * (r / 100) * t;
      totalPayable = p + interestPayable;
      emi = totalPayable / n;
    }
  }

  dom.valEmiMonthly.textContent = formatCurrency(emi);
  dom.valEmiInterest.textContent = formatCurrency(interestPayable);
  dom.valEmiTotal.textContent = formatCurrency(totalPayable);
}

// Sidebar Navigation Logic
document.querySelectorAll('.sidebar .nav-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.sidebar .nav-btn').forEach(b => b.classList.remove('active'));
    const target = e.currentTarget;
    target.classList.add('active');
    
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.style.display = 'none';
      panel.classList.remove('active');
    });
    
    const viewId = target.getAttribute('data-view');
    const targetView = document.getElementById('view-' + viewId);
    if(targetView) {
      targetView.style.display = 'block';
      targetView.classList.add('active');
    }
    
    const viewName = target.textContent.trim();
    document.getElementById('currentViewName').textContent = viewName;
  });
});

