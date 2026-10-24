import {
  FiCode,
  FiCpu,
  FiShield,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import visaHome from "../assets/projects/visa-solutions-ng/home.png";
import visaReadiness from "../assets/projects/visa-solutions-ng/readiness-check.png";
import visaResources from "../assets/projects/visa-solutions-ng/resources.png";
import visaGuide from "../assets/projects/visa-solutions-ng/visa-guide.png";
import watchHome from "../assets/projects/what-to-watch/home.jpg";
import watchSearch from "../assets/projects/what-to-watch/search.jpg";
import watchDetails from "../assets/projects/what-to-watch/details.jpg";
import watchRecommendations from "../assets/projects/what-to-watch/recommendations.jpg";
import flipHome from "../assets/projects/flip-challenge/home.jpg";
import flipPrizeDetail from "../assets/projects/flip-challenge/prize-detail.jpg";
import flipHowToWin from "../assets/projects/flip-challenge/how-to-win.jpg";
import flipSignup from "../assets/projects/flip-challenge/signup.jpg";
import zoliShop from "../assets/projects/zolimart/shop.jpg";
import zoliBargainModal from "../assets/projects/zolimart/bargain-modal.jpg";
import zoliBargainResult from "../assets/projects/zolimart/bargain-result.jpg";
import zoliSell from "../assets/projects/zolimart/sell.jpg";
import freezeHome from "../assets/projects/de-freeze/home.jpg";
import freezeRoleSelection from "../assets/projects/de-freeze/role-selection.jpg";
import freezeDecisionTree from "../assets/projects/de-freeze/decision-tree.jpg";
import freezeResolution from "../assets/projects/de-freeze/resolution.jpg";

export const profile = {
  name: "Tony Izuogu",
  roles: [
    "Software Engineer",
    "Machine Learning Engineer",
    "IP Law Consultant",
  ],
  tagline:
    "I build reliable software and intelligent systems — then help founders and inventors protect the ideas behind them.",
  location: "Available for remote & on-site engagements",
  email: "tizuogu@gmail.com",
  socials: {
    github: "https://github.com/IkeGod30",
    linkedin: "https://www.linkedin.com/",
  },
};

export const pillars = [
  {
    icon: FiCode,
    title: "Software Engineering",
    description:
      "Full-stack application design and delivery — from architecture and APIs to polished, production-ready front ends.",
    points: [
      "React / Node.js / TypeScript product builds",
      "Cloud-native architecture (AWS, CI/CD, Docker)",
      "Code quality, testing, and performance tuning",
    ],
  },
  {
    icon: FiCpu,
    title: "Machine Learning Engineering",
    description:
      "Turning data into deployed, measurable ML systems — from model design through production monitoring.",
    points: [
      "Model development & evaluation (Python, PyTorch)",
      "MLOps: pipelines, deployment, and monitoring",
      "Applied NLP, computer vision & predictive systems",
    ],
  },
  {
    icon: FiShield,
    title: "IP Law Consulting",
    description:
      "Practical intellectual property guidance for technical founders — helping you identify, document, and protect what you build.",
    points: [
      "Patentability & prior-art landscape assessments",
      "IP strategy for software & ML-driven products",
      "Trademark, licensing & tech-transfer guidance",
    ],
  },
];

export const skills = {
  "Languages & Frameworks": [
    "JavaScript / TypeScript",
    "Python",
    "React & Next.js",
    "Node.js / Express",
    "Java",
    "SQL",
  ],
  "Machine Learning": [
    "PyTorch / TensorFlow",
    "scikit-learn",
    "NLP & LLM tooling",
    "Pandas / NumPy",
    "Model deployment (MLOps)",
    "Data pipelines",
  ],
  "Cloud & Tooling": [
    "AWS",
    "Docker",
    "Git / CI-CD",
    "REST & GraphQL APIs",
    "PostgreSQL / MongoDB",
    "Testing (Jest, PyTest)",
  ],
  "Legal & IP": [
    "Patent drafting support",
    "Prior-art research",
    "IP portfolio strategy",
    "Licensing agreements",
    "Trademark filings",
    "Technology transfer",
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Independent / Consulting Engagements",
    period: "2022 — Present",
    description:
      "Design and ship full-stack web applications and internal tools for clients, focusing on clean architecture, maintainability, and measurable business outcomes.",
  },
  {
    role: "Machine Learning Engineer",
    org: "Applied ML Projects",
    period: "2021 — Present",
    description:
      "Build and deploy machine learning models for classification, prediction, and NLP use cases, including data pipeline design and production monitoring.",
  },
  {
    role: "Intellectual Property Law Consultant",
    org: "Technology & Startup Clients",
    period: "2020 — Present",
    description:
      "Advise engineers and founders on protecting software and ML innovations — patentability review, prior-art analysis, and IP strategy aligned with product roadmaps.",
  },
];

export const projects = [
  {
    title: "Predictive Analytics Platform",
    category: "Machine Learning",
    description:
      "An end-to-end ML pipeline that ingests business data, trains predictive models, and serves real-time predictions through a monitored API.",
    tags: ["Python", "PyTorch", "Docker", "AWS"],
  },
  {
    title: "What to Watch",
    category: "Software Engineering",
    description:
      "A movie and TV discovery app powered by the TMDB API — search any title to see its rating, synopsis and backdrop art, then browse AI-style 'Interesting shows to check out' recommendations generated from whatever you're currently viewing.",
    tags: ["React", "Bootstrap", "TMDB API"],
    link: "https://ikegod30.github.io/movie_app",
    screenshots: [
      { src: watchHome, caption: "Home — featured show & search" },
      { src: watchSearch, caption: "Search results (\"Batman\")" },
      { src: watchDetails, caption: "Show detail with live recommendations" },
      { src: watchRecommendations, caption: "Recommendations refresh per title" },
    ],
  },
  {
    title: "The Flip Challenge",
    category: "Software Engineering",
    description:
      "A book-trivia contest platform — users pick a prize tied to a featured book, race through 10 timed questions about it, and compete on a per-prize leaderboard where the highest score (then fastest time) wins. Built with Firebase auth and per-country prize/book curation.",
    tags: ["React", "Firebase", "Vite"],
    link: "https://the-flip-chal.vercel.app",
    screenshots: [
      { src: flipHome, caption: "Prize gallery, by country" },
      { src: flipPrizeDetail, caption: "Prize detail & rankings panel" },
      { src: flipHowToWin, caption: "How to Win — rules" },
      { src: flipSignup, caption: "Account creation (Firebase auth)" },
    ],
  },
  {
    title: "VisaSolutions NG",
    category: "Software Engineering",
    description:
      "A visa guidance platform for Nigerians travelling abroad — covering visa routes across the UK, US, Canada, Schengen states, Australia and more, with step-by-step application guides, document checklists, a visa readiness check, and an adviser document-review service.",
    tags: ["React", "Vite", "Responsive UI"],
    link: "https://visa-ten-beta.vercel.app",
    screenshots: [
      { src: visaHome, caption: "Home — travel purpose explorer" },
      { src: visaReadiness, caption: "Visa Readiness Check" },
      { src: visaResources, caption: "Resources & document library" },
      { src: visaGuide, caption: "Step-by-step visa guide" },
    ],
  },
  {
    title: "ZoliMart",
    category: "Software Engineering",
    description:
      "A bargain-hunting marketplace where every price is negotiable — buyers make offers on listed items and a live bargaining engine counters, holds firm, or accepts based on the seller's hidden minimum price, with a capped number of offers per negotiation. Sellers list items with asking and minimum prices and manage their inventory from a dashboard.",
    tags: ["React", "Material UI", "Vite"],
    link: "https://zolimart.vercel.app",
    screenshots: [
      { src: zoliShop, caption: "Marketplace — browse & search" },
      { src: zoliBargainModal, caption: "Make an offer" },
      { src: zoliBargainResult, caption: "Live counter-offer & history" },
      { src: zoliSell, caption: "Sell dashboard & listings" },
    ],
  },
  {
    title: "De-Freeze",
    category: "Software Engineering",
    description:
      "A Freeze Code Resolution Assistant for IRS account-management staff — pick a freeze code, answer a guided series of account questions (role, research findings, time elapsed, open IDRS controls), and get step-by-step resolution instructions with the relevant IRM references, from releasing the freeze to preparing Form 4442 or TAS referrals.",
    tags: ["React", "Material UI", "Bootstrap"],
    link: "https://de-freeze.vercel.app",
    screenshots: [
      { src: freezeHome, caption: "Freeze code selection" },
      { src: freezeRoleSelection, caption: "-A Freeze — role & account research" },
      { src: freezeDecisionTree, caption: "Guided decision tree" },
      { src: freezeResolution, caption: "Required actions with IRM guidance" },
    ],
  },
  {
    title: "Project Title Placeholder 6",
    category: "Software Engineering",
    description:
      "Short placeholder description — summarize the problem this project solved and the outcome it delivered.",
    tags: ["TypeScript", "Docker", "CI/CD"],
  },
  {
    title: "Patentability Assessment Framework",
    category: "IP Law",
    description:
      "A structured methodology for evaluating the novelty and non-obviousness of software and ML inventions ahead of a patent filing.",
    tags: ["Prior-Art Research", "IP Strategy", "Documentation"],
  },
  {
    title: "NLP Document Classifier",
    category: "Machine Learning",
    description:
      "A text classification system that automatically triages and tags incoming documents, cutting manual review time significantly.",
    tags: ["NLP", "scikit-learn", "Flask"],
  },
];

export const legalServices = [
  {
    title: "Patentability & Prior-Art Review",
    description:
      "A technical and legal assessment of your invention's novelty against existing patents and publications before you invest in filing.",
  },
  {
    title: "IP Strategy for Tech Products",
    description:
      "Guidance on what to protect and how — balancing patents, trade secrets, copyright, and open-source considerations for software and ML products.",
  },
  {
    title: "Trademark & Licensing Support",
    description:
      "Practical support for trademark filings and drafting or reviewing licensing and technology-transfer agreements.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Legal Consulting", href: "#legal" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
];
