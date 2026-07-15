# GraniteGuard - AI Agent for Digital Financial Literacy

An intelligent, RAG-based AI agent dashboard designed to educate users on essential financial tools, UPI practices, budgeting, interest rates, and avoiding online scams. This project addresses **Problem Statement No. 7 - AI Agent for Digital Financial Literacy** under the AICTE-2026 IBM Skills Build university engagement program.

The application is built with a premium, glassmorphic dark-theme design and works in **5 languages** (English, Hindi, Marathi, Tamil, Bengali). It can run in **Simulation Mode** out-of-the-box (no setup needed) or connect directly to **IBM Watsonx.ai** to call live **IBM Granite** foundation models.

---

## 🌟 Key Features

1. **Financial Literacy Chat Agent**:
   - A friendly assistant that answers questions about digital payments (UPI), savings, budgeting rules, and safety tips.
   - Fully localized welcome guides, suggestions, and responses across **English, Hindi, Marathi, Tamil, and Bengali**.
   - Supports **Speech-to-Text (Voice input)** directly in the browser via Web Speech API.

2. **RAG Workflow Visualizer**:
   - A live telemetry visualizer panel showing the inner workings of Retrieval-Augmented Generation.
   - Updates dynamically on every query to show:
     - **Step 1: Query Preprocessing** (stripping stopwords, token overlap extraction).
     - **Step 2: Knowledge Retrieval** (locating matching source documents in our database).
     - **Step 3: Context Augmentation** (forming the complete prompt injected with instructions + content).
     - **Step 4: Granite Inference** (model configurations, temperature, latency, and tokens).

3. **Interactive "Spot-the-Scam" Game Simulator**:
   - Educational challenge containing real-world scenarios (phishing text links, screen-sharing KYC calls, official transactional bank alerts).
   - Localized scenarios that prompt users to determine if they are SAFE or a SCAM, giving instant score counters and step-by-step safety lessons.

4. **Interactive Financial Calculators**:
   - **50/30/20 Budget Allocator**: Automatically calculates allocation budgets for Needs, Wants, and Savings using an interactive visual progress bar.
   - **Compound Interest Calculator**: Simulates savings growth over custom tenures and compounding frequencies (monthly/quarterly/annually).
   - **Loan EMI Calculator**: Computes monthly installments and compares Flat Rate vs. Reducing Balance loans (demonstrating why flat rate interest is more expensive).

5. **watsonx.ai Granite settings panel**:
   - Toggle to enter an IBM Cloud API Key, watsonx Project ID, Service URL (Dallas, Frankfurt, Tokyo, Washington), and Granite Model ID.
   - Authenticates and fetches bearer tokens via IAM, executing secure server-to-server chat requests.

---

## 🛠️ Tech Stack & Directory Structure

- **Backend**: Node.js, Express, dotenv
- **Frontend**: Vanilla HTML5, Vanilla CSS3 (custom CSS variables, glassmorphic filters, keyframe animations), Vanilla JavaScript (ES6)
- **Data Store**: Static JSON Knowledge Database (`data/financial_docs.json`)

```
intership/
├── data/
│   └── financial_docs.json     # Multilingual RAG documents on UPI, scams, interest, and budget
├── public/
│   ├── app.js                  # Frontend controllers, calculator math, UI translations
│   ├── index.html              # Main dashboard view and modal inputs
│   └── style.css               # Glassmorphic components and glowing background layout
├── package.json                # Project script declarations and dependency list
├── server.js                   # Node.js server, local RAG document matching, Watsonx API proxy gateway
└── README.md                   # Installation and usage guidelines
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher is recommended).

### 1. Installation
Extract the project code, open your terminal in the `intership/` workspace directory, and install dependencies:
```bash
npm install
```

### 2. Start the Server
Start the local server by running:
```bash
node server.js
```
The server will log:
```
Loaded 34 knowledge base documents.
Server running at http://localhost:3000
```

### 3. Open in Browser
Open your browser and navigate to:
```
http://localhost:3000
```
You can now start querying the AI agent, toggle languages, take the scam challenge, and use the calculators.

---

## ☁️ Connecting to IBM Watsonx.ai (Granite Models)

By default, the application runs in **Simulated Granite RAG Mode**, allowing you to demonstrate the full workflow offline. To connect it to your live IBM Watsonx account:

1. Click the **Gear icon** (`⚙️`) in the top-right header of the webpage.
2. Enter your **IBM Cloud API Key** (created via IBM Cloud IAM Console).
3. Enter your **watsonx.ai Project ID** (found inside your project's "Manage" tab).
4. Select your **Service URL Region** (e.g., Dallas, Frankfurt) and the preferred **Granite Model ID** (e.g. `ibm/granite-3-8b-instruct`).
5. Click **Save & Connect**. The header status badge will change to **Live Granite API** and all subsequent chat requests will query the active IBM Granite foundation model.
