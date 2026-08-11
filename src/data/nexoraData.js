// Nexora Financial Intelligence Data Engine (White Theme & Real Data)

export const STATS = [
  { label: "AI Modules", value: "10+", suffix: "Production Engines", change: "+4 updated in 2026" },
  { label: "Core Developers", value: "3", suffix: "Engineering Lead Team", change: "Ranjeet, Abhishek, Santosh" },
  { label: "Planned Features", value: "20+", suffix: "Product Roadmap", change: "9 in Active Dev" },
  { label: "Possibilities", value: "∞", suffix: "Neural Financial Intelligence", change: "Real-time Autonomous" }
];

export const PLATFORM_CARDS = [
  {
    id: "copilot",
    title: "AI Financial Copilot",
    icon: "Bot",
    color: "sky",
    badge: "Generative AI",
    desc: "Ask questions about financial data using natural language. Get instant, context-aware answers, scenario modeling, and executive summaries."
  },
  {
    id: "analytics",
    title: "Financial Analytics",
    icon: "BarChart3",
    color: "indigo",
    badge: "Real-time Metrics",
    desc: "Understand revenue, expenses, profit, and cash flow with deep granular breakdowns, multi-entity consolidation, and trend detection."
  },
  {
    id: "risk",
    title: "Risk Intelligence",
    icon: "ShieldAlert",
    color: "red",
    badge: "Anomaly Engine",
    desc: "Detect financial risks, abnormal transaction patterns, fraud vectors, and early-warning solvency indicators before they impact business."
  },
  {
    id: "forecasting",
    title: "Predictive Forecasting",
    icon: "TrendingUp",
    color: "purple",
    badge: "Time-Series AI",
    desc: "Forecast revenue, expenses, and cash flow across multiple macro scenarios with neural confidence bands and Bayesian inference."
  },
  {
    id: "reports",
    title: "Smart Reports",
    icon: "FileText",
    color: "emerald",
    badge: "Executive Ready",
    desc: "Generate board-ready financial decks, SEC/regulatory compliance reports, and departmental P&L summaries in seconds."
  },
  {
    id: "data-layer",
    title: "Data Intelligence",
    icon: "Database",
    color: "amber",
    badge: "Unified Mesh",
    desc: "Connect multiple financial data sources (ERPs, banks, Stripe, QuickBooks, BigQuery) into one intelligent unified intelligence layer."
  }
];

export const PROJECTS = [
  {
    id: "proj-01",
    name: "Nexora Financial Intelligence",
    subtitle: "Core AI Platform",
    tags: ["AI", "FinTech", "Analytics"],
    status: "In Development",
    statusColor: "emerald",
    statusIcon: "CheckCircle2",
    description: "Core platform for AI-powered financial analytics, forecasting, and risk intelligence built for institutional datasets.",
    technology: ["Python", "FastAPI", "React", "TypeScript", "Google Cloud", "BigQuery"],
    team: ["Ranjeet Kumar", "Abhishek Kantharia", "Santosh Kumar"],
    github: "https://github.com/Ranjeet7680/nexora-financial-intelligence",
    demoUrl: "/reports",
    roadmapPhase: "MVP",
    version: "v0.9.4 Beta"
  },
  {
    id: "proj-02",
    name: "Nexora AI Copilot",
    subtitle: "Generative LLM Assistant",
    tags: ["Generative AI", "LLM", "Finance"],
    status: "Prototype",
    statusColor: "amber",
    statusIcon: "Zap",
    description: "Conversational AI assistant fine-tuned on financial data, GAAP rules, and business metrics for natural language decision support.",
    technology: ["LLMs", "RAG Engine", "FastAPI", "VectorDB", "LangChain", "React"],
    team: ["Ranjeet Kumar", "Santosh Kumar"],
    github: "https://github.com/Ranjeet7680/nexora-ai-copilot",
    demoUrl: "/copilot",
    roadmapPhase: "PROTOTYPE",
    version: "v0.4.1 Alpha"
  },
  {
    id: "proj-03",
    name: "Nexora Risk Engine",
    subtitle: "Machine Learning Detection System",
    tags: ["Machine Learning", "Risk AI", "Security"],
    status: "Research",
    statusColor: "blue",
    statusIcon: "Shield",
    description: "AI-powered anomaly detection system trained to identify unusual expenditure spikes, liquidity stress, and audit discrepancies.",
    technology: ["PyTorch", "Scikit-Learn", "Python", "Kafka", "PostgreSQL"],
    team: ["Santosh Kumar", "Ranjeet Kumar"],
    github: "https://github.com/Ranjeet7680/nexora-risk-engine",
    demoUrl: "/risk",
    roadmapPhase: "RESEARCH",
    version: "v0.2.0 Research"
  },
  {
    id: "proj-04",
    name: "Nexora Forecast",
    subtitle: "Predictive Time-Series Neural Model",
    tags: ["Predictive AI", "Time Series", "Monte Carlo"],
    status: "Planned",
    statusColor: "purple",
    statusIcon: "Clock",
    description: "Intelligent forecasting engine for revenue, cash flow, and business performance using Bayesian neural probability models.",
    technology: ["Prophet", "TensorFlow", "FastAPI", "Recharts", "D3.js"],
    team: ["Abhishek Kantharia", "Ranjeet Kumar"],
    github: "https://github.com/Ranjeet7680/nexora-forecast",
    demoUrl: "/forecasting",
    roadmapPhase: "IDEA",
    version: "v0.1.0 Design"
  }
];

export const ROADMAP_STAGES = ["IDEA", "RESEARCH", "PROTOTYPE", "MVP", "BETA", "PRODUCTION"];

export const FUTURE_ROADMAP = [
  {
    year: "2026",
    phase: "Foundation",
    status: "Current Operational Focus",
    badgeColor: "emerald",
    items: [
      { name: "AI Financial Dashboard", completed: true },
      { name: "Financial Analytics Engine", completed: true },
      { name: "AI Copilot v1.0", completed: true },
      { name: "Risk Intelligence Core", completed: true },
      { name: "Predictive Forecasting Models", completed: true },
      { name: "ERP & Banking Data Integrations", completed: true }
    ],
    desc: "Deploying the core neural infrastructure, establishing high-accuracy baseline financial models, and launching the interactive Copilot."
  },
  {
    year: "2027",
    phase: "Intelligence",
    status: "Active R&D Pipeline",
    badgeColor: "sky",
    items: [
      { name: "Autonomous Financial Analysis", completed: false },
      { name: "Advanced Autonomous AI Agents", completed: false },
      { name: "Real-Time Continuous Risk Monitoring", completed: false },
      { name: "Personalized Financial Intelligence", completed: false },
      { name: "Advanced Macro Scenario Simulation", completed: false }
    ],
    desc: "Transitioning from passive reporting to active autonomous intelligence where specialized AI agents continuously audit and optimize cash flows."
  },
  {
    year: "2028",
    phase: "Enterprise",
    status: "Strategic Expansion",
    badgeColor: "indigo",
    items: [
      { name: "Enterprise AI Platform Scale", completed: false },
      { name: "Multi-Organization Intelligence Mesh", completed: false },
      { name: "Advanced Governance & Compliance Framework", completed: false },
      { name: "Global Financial Data Connectors (100+ Banks)", completed: false },
      { name: "High-Throughput Enterprise APIs", completed: false }
    ],
    desc: "Opening platform APIs to enterprise institutional partners, supporting multi-national corporate structures, and automated regulatory filings."
  },
  {
    year: "2029+",
    phase: "Vision",
    status: "Long-term Horizon",
    badgeColor: "amber",
    items: [
      { name: "Autonomous Financial Decision Layer", completed: false },
      { name: "Self-Healing Budget Allocation", completed: false },
      { name: "Quantum-Resistant Financial Vault", completed: false },
      { name: "Universal Financial AI Ecosystem", completed: false }
    ],
    desc: "Nexora evolves from an analytics platform into an intelligent financial decision layer capable of continuously understanding business performance, identifying opportunities, predicting risks, and recommending executive actions."
  }
];

export const TEAM_MEMBERS = [
  {
    id: "ranjeet",
    name: "Ranjeet Kumar",
    role: "Lead Developer & AI Engineer",
    initials: "RK",
    color: "from-sky-500 to-blue-600",
    bio: "Passionate AI Engineer & Full-Stack Architect building neural-grade algorithms for complex financial systems. Expert in LLM agents, Python backend microservices, and modern UI engineering.",
    skills: ["AI/ML", "Full Stack", "Python", "React", "Cloud", "FastAPI", "Deep Learning"],
    linkedin: "https://linkedin.com/in/ranjeetkumar",
    github: "https://github.com/Ranjeet7680",
    featured: true
  },
  {
    id: "abhishek",
    name: "Abhishek Kantharia",
    role: "Full-Stack Developer",
    initials: "AK",
    color: "from-indigo-500 to-violet-600",
    bio: "Specialist in scalable web applications, real-time data visualization, and fluid user experiences. Passionate about building enterprise UI systems that make heavy financial data feel effortless.",
    skills: ["React", "Node.js", "Backend", "UI/UX", "TypeScript", "TailwindCSS", "REST/GraphQL"],
    linkedin: "https://linkedin.com/in/abhishek-kantharia",
    github: "https://github.com/abhishek-kantharia",
    featured: true
  },
  {
    id: "santosh",
    name: "Santosh Kumar",
    role: "AI/ML & Product Developer",
    initials: "SK",
    color: "from-emerald-500 to-teal-600",
    bio: "Focuses on machine learning model design, quantitative time-series forecasting, and translating raw data streams into high-impact product features for business intelligence.",
    skills: ["Machine Learning", "AI", "Data", "Product", "Python", "PyTorch", "Predictive Models"],
    linkedin: "https://linkedin.com/in/santoshkumar",
    github: "https://github.com/santoshkumar",
    featured: true
  }
];

export const VALUES = [
  {
    num: "01",
    title: "Intelligence",
    desc: "Build technology that turns raw data into meaningful, predictive decisions."
  },
  {
    num: "02",
    title: "Innovation",
    desc: "Continuously experiment with emerging AI technologies, LLMs, and neural architectures."
  },
  {
    num: "03",
    title: "Simplicity",
    desc: "Make complex financial information easy to understand through intuitive visualization."
  },
  {
    num: "04",
    title: "Trust",
    desc: "Design with unyielding security, data privacy, transparency, and responsible AI in mind."
  },
  {
    num: "05",
    title: "Impact",
    desc: "Focus relentlessly on measurable business outcomes, speed-to-insight, and ROI."
  }
];

export const TECH_STACK = {
  frontend: ["Next.js", "React", "TypeScript", "TailwindCSS", "Three.js 3D Engine"],
  backend: ["Python", "FastAPI", "Node.js", "Celery", "Redis"],
  ai: ["LLMs (GPT-4 / Claude)", "Machine Learning", "Predictive Analytics", "AI Agents", "PyTorch"],
  data: ["PostgreSQL", "BigQuery", "Data APIs", "Vector Database", "Pandas"],
  cloud: ["Google Cloud Platform", "Cloud AI", "Docker", "Kubernetes"],
  visualization: ["Three.js 3D WebGL", "Recharts", "D3.js Data Viz"]
};

export const DEMO_METRICS = {
  healthScore: 92,
  healthStatus: "Healthy",
  revenue: "₹24.8 Cr",
  revenueGrowth: "+18.4%",
  netProfit: "₹6.42 Cr",
  profitGrowth: "+12.8%",
  cashFlow: "₹8.17 Cr",
  cashFlowGrowth: "+9.6%",
  riskScore: "14 / 100 (Low Risk)",
  copilotQueriesProcessed: "148,920"
};

export const BLOG_ARTICLES = [
  {
    id: "art-1",
    title: "The Future of AI in Finance",
    category: "AI Finance",
    readTime: "5 min read",
    date: "11 August 2026",
    author: "Ranjeet Kumar",
    excerpt: "How generative AI, autonomous agent networks, and neural predictive models are replacing legacy spreadsheet workflows.",
    content: `Financial management is undergoing its most profound transformation since the invention of double-entry bookkeeping. For decades, finance teams spent 80% of their time aggregating data from disparate ERPs, spreadsheets, and bank statements, leaving only 20% for actual strategic analysis.

With Nexora's AI Financial Intelligence, that ratio is inverted. Neural networks process millions of transaction events in milliseconds, identifying micro-trends and operational variances before human analysts even begin formatting reports.

Key Drivers of AI Transformation:
1. Real-Time Data Synthesis: Moving from monthly closing cycles to continuous real-time balance sheets.
2. Natural Language Querying: Asking "Why did marketing customer acquisition cost spike 14% in Q3?" and receiving instant root-cause analysis with chart visualizations.
3. Predictive Risk Radar: Automated anomaly detection that flags unusual vendor payments or liquidity bottlenecks weeks in advance.`
  },
  {
    id: "art-2",
    title: "Predictive Analytics for Modern Businesses",
    category: "FinTech",
    readTime: "7 min read",
    date: "August 2026",
    author: "Santosh Kumar",
    excerpt: "Moving beyond historical reporting into proactive, multi-scenario revenue and cash flow forecasting with machine learning.",
    content: `Traditional financial forecasting relies on static Excel formulas that struggle with non-linear market changes. When economic volatility shifts consumer behavior or supply chain costs, static models fail to adapt.

Predictive AI time-series models solve this by analyzing high-frequency indicators, seasonal patterns, and macroeconomic signals simultaneously.`
  },
  {
    id: "art-3",
    title: "Building an AI Financial Copilot",
    category: "Technology",
    readTime: "6 min read",
    date: "August 2026",
    author: "Abhishek Kantharia",
    excerpt: "The architecture behind fine-tuned LLMs, Retrieval-Augmented Generation (RAG), and zero-leakage financial data privacy.",
    content: `Creating a conversational AI assistant for enterprise finance requires far more than wrapping a standard LLM API. Financial data requires strict auditability, deterministic mathematical accuracy, and absolute data isolation.`
  }
];

export const CAREERS = [
  {
    id: "job-1",
    title: "AI Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    desc: "Architect and fine-tune machine learning algorithms, RAG pipelines, and predictive time-series models for enterprise financial analytics.",
    requirements: ["3+ years experience with Python, PyTorch/TensorFlow, and LLM frameworks", "Strong background in quantitative data analysis or time-series modeling", "Experience building production APIs with FastAPI or Docker"]
  },
  {
    id: "job-2",
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    desc: "Build sleek, highly responsive web dashboards, real-time chart interfaces, and modular React components for our core platform.",
    requirements: ["Expertise in React, TypeScript, TailwindCSS, and state management", "Experience with data visualization libraries (Recharts, Three.js, D3.js)", "Eye for modern 3D white aesthetic and micro-interactions"]
  },
  {
    id: "job-3",
    title: "Data Scientist",
    department: "AI Research",
    location: "Remote",
    type: "Full-Time",
    desc: "Extract actionable insights from petabytes of market data to refine our core algorithms.",
    requirements: ["Strong proficiency in Python, Pandas, SQL, and Statistical Analysis", "Background in financial modeling, econometrics, or risk scoring"]
  }
];
