/**
 * Single source of truth for all site content.
 * Every fact here is taken verbatim from CV_English.pdf or from the
 * READMEs/descriptions of the referenced repositories — nothing invented.
 */

export interface SiteMeta {
  readonly name: string;
  readonly url: string;
  readonly title: string;
  readonly description: string;
}

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
}

export interface EntryImage {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly caption: string;
}

export interface ExperienceEntry {
  readonly org: string;
  readonly role: string;
  readonly period: string;
  readonly bullets: readonly string[];
  readonly image?: EntryImage;
}

export interface ProjectVideo {
  readonly src: string;
  readonly poster: string;
  readonly width: number;
  readonly height: number;
  readonly label: string;
}

export interface GenerationSample {
  readonly settings: string;
  readonly prompt: string;
  readonly text: string;
}

export interface ConfusionMatrix {
  readonly classes: readonly [string, string];
  readonly rows: readonly [
    readonly [number, number],
    readonly [number, number],
  ];
  readonly caption: string;
}

export interface Project {
  readonly name: string;
  readonly tagline: string;
  readonly bullets: readonly string[];
  readonly metrics: readonly string[];
  readonly stack: readonly string[];
  readonly repo: string;
  readonly demo?: string;
  readonly video?: ProjectVideo;
  readonly sample?: GenerationSample;
  readonly confusionMatrix?: ConfusionMatrix;
  readonly diagram?: "minigpt-pipeline";
}

export interface EducationEntry {
  readonly school: string;
  readonly degree: string;
  readonly period: string;
  readonly detail?: string;
}

export interface Certification {
  readonly name: string;
  readonly date: string;
  readonly verifyUrl: string;
}

export interface SkillGroup {
  readonly label: string;
  readonly items: readonly string[];
}

export const site: SiteMeta = {
  name: "Ilyes Jamoussi",
  url: "https://ilyes-jamoussi.github.io",
  title: "Ilyes Jamoussi — Software Engineering, Polytechnique Montréal",
  description:
    "Software engineering student at Polytechnique Montréal (AI & data science). " +
    "Builds ML systems from scratch in PyTorch and ships them like production software. " +
    "Ex-AWS intern, hybrid quantum algorithms researcher at Calcul Québec, 3× AWS certified.",
};

export const email = "jamoussi.mail@gmail.com";
export const github = "https://github.com/Ilyes-Jamoussi";
export const linkedin = "https://www.linkedin.com/in/ilyes-jamoussi";
export const sourceRepo =
  "https://github.com/Ilyes-Jamoussi/Ilyes-Jamoussi.github.io";

export const hero = {
  kicker: "Software engineering · Polytechnique Montréal",
  lede:
    "I build ML systems from scratch — GPT and Transformer architectures in raw " +
    "PyTorch — and ship them like production software: typed, tested, " +
    "containerized, deployed with CI and live demos.",
  now: [
    "Researcher, hybrid quantum algorithms @ Calcul Québec",
    "ex-AWS Cloud Consultant Intern (ProServe)",
    "3× AWS certified",
  ],
} as const;

export const experience: readonly ExperienceEntry[] = [
  {
    org: "Calcul Québec",
    role: "Researcher, Hybrid Quantum Algorithms",
    period: "Jun 2026 — present",
    bullets: [
      "Selected for a mentored research program in the Quantum Computing Summer Program, with hands-on access to MonarQ — a 24-qubit universal quantum computer — and GPU/CPU high-performance computing clusters.",
      "Developing hybrid quantum-classical algorithms in Python, integrating quantum circuit execution with classical optimization routines.",
    ],
  },
  {
    org: "Amazon Web Services",
    role: "Cloud Consultant Intern, Professional Services (ProServe)",
    period: "May — Aug 2025",
    bullets: [
      "Developed an iOS & Android app that replaced paper workflows for 100+ technicians, cutting reporting delays from months to seconds.",
      "Architected a serverless, offline-first backend on AWS — AppSync with automatic data synchronization — with automatic scaling and high availability, removing all server management for the client.",
      "Integrated an AI assistant using Claude 3.5 Sonnet on Amazon Bedrock, streamlining field documentation across technicians.",
    ],
    image: {
      src: "/media/aws-architecture.png",
      width: 750,
      height: 780,
      alt: "AWS architecture diagram: a cross-platform mobile app using Amplify DataStore with local SQLite storage syncs over a GraphQL API to AWS AppSync, with Cognito for authentication, S3 and DynamoDB for storage, and Lambda functions calling Amazon Bedrock and Amazon Location Service.",
      caption:
        "Serverless backend — offline-first sync (AppSync) · Lambda · Bedrock · Location Service",
    },
  },
  {
    org: "Polytechnique Montréal",
    role: "Teaching Assistant, Data Structures & Algorithms",
    period: "Jan — Apr 2025",
    bullets: [
      "Guided students implementing data structures in Java — hash maps, AVL trees — while ensuring optimal Big-O complexity.",
      "Taught algorithms in sorting, graph theory, and dynamic programming, including Bellman-Ford and Rabin-Karp.",
    ],
  },
  {
    org: "Polytechnique Montréal — Student Services",
    role: "Team Lead, Peer Tutoring",
    period: "May 2025 — present",
    bullets: [
      "Authored the program's first official Tutor Guide, adopted for all tutors starting Fall 2026 and codifying academic-integrity standards.",
      "Led tutor recruitment; as peer tutor (Oct 2024 — Apr 2025), tutored data structures & algorithms, probability & statistics, linear algebra, discrete mathematics, and design patterns.",
    ],
  },
] as const;

export const extracurriculars: readonly ExperienceEntry[] = [
  {
    org: "Accenture — AI Strategy Mandate",
    role: "Consultant, CCGP (AOTC Program)",
    period: "Jan — Apr 2025",
    bullets: [
      "Designed a RAG-powered chatbot for a 10,000+ document portal, reducing navigation time by 75% for 1,000+ users.",
      "Recommended an AI workflow automation and implementation roadmap, reducing repetitive work by 2+ hours daily per employee.",
    ],
  },
  {
    org: "PolyAI — Polytechnique's AI Society",
    role: "Event Manager",
    period: "Jan — Dec 2024",
    bullets: [
      "Orchestrated AI events — hackathons, learnathons, and expert panels — engaging 200+ students per event.",
      "Secured partnerships with 8 tech sponsors, generating $15,000+ in funding within 6 months.",
    ],
  },
] as const;

export const projects: readonly Project[] = [
  {
    name: "MiniGPT",
    tagline: "A GPT built from scratch, down to the tokenizer.",
    bullets: [
      "Decoder-only GPT in pure PyTorch — causal multi-head attention, learned positional embeddings, weight tying — with no nn.Transformer and no pretrained weights.",
      "Byte-level BPE tokenizer (8,192-token vocabulary) trained on the train split only; 13.9M parameters trained on TinyStories to 5.32 validation perplexity.",
      "Token-streaming inference over FastAPI (server-sent events), Dockerized, with CI running pytest, ruff, and mypy.",
    ],
    metrics: ["13.9M parameters", "5.32 val perplexity"],
    stack: ["PyTorch", "FastAPI", "Docker", "Streamlit"],
    repo: "https://github.com/Ilyes-Jamoussi/minigpt-llm",
    demo: "https://minigpt-llm.streamlit.app",
    diagram: "minigpt-pipeline",
    sample: {
      settings: "temperature 0.8 · top-k 50 · top-p 0.95",
      prompt: "Once upon a time",
      text: "Once upon a time, there was a little girl named Lily. She loved to play outside in the park. One day, she saw a big, juicy apple on a tree. She picked it up and ate it all up.",
    },
  },
  {
    name: "MailGuard AI",
    tagline: "Transformer spam detection, every layer hand-built.",
    bullets: [
      "Encoder-only Transformer in PyTorch — padding-masked multi-head attention, sinusoidal positional encoding, masked mean pooling — implemented entirely from scratch.",
      "Custom 30K-token vocabulary built from the training split only; class-weighted loss on stratified splits.",
      "97.0% accuracy and 0.95 spam F1 on the SpamAssassin corpus.",
    ],
    metrics: ["97.0% accuracy", "0.95 spam F1", "10.9M parameters"],
    stack: ["PyTorch", "Streamlit"],
    repo: "https://github.com/Ilyes-Jamoussi/mailguard-ai",
    demo: "https://mailguard-ai.streamlit.app",
    confusionMatrix: {
      classes: ["ham", "spam"],
      rows: [
        [600, 16],
        [10, 238],
      ],
      caption: "Confusion matrix — 864 unseen test emails",
    },
  },
  {
    name: "Poly Arena",
    tagline: "Cross-platform multiplayer tactics game.",
    bullets: [
      "Cross-platform multiplayer tactics game — Angular web, Flutter mobile, and Electron desktop clients driven by one authoritative NestJS + Socket.IO server (MongoDB, Firebase Auth); 4 game modes, visual map editor, AI players.",
      "980+ unit tests (Jest & Jasmine), all passing in a GitHub Actions pipeline that tests, lints, and builds on every push.",
      "Team project of 6 at Polytechnique — top contributor with 283 of 545 commits; led the Angular client and core server gateways.",
    ],
    metrics: ["980+ unit tests", "3 platforms, 1 server"],
    stack: [
      "Angular",
      "NestJS",
      "Socket.IO",
      "Flutter",
      "Electron",
      "TypeScript",
      "MongoDB",
    ],
    repo: "https://github.com/Ilyes-Jamoussi/cross-platform-multiplayer-game",
  },
  {
    name: "AVR Robot",
    tagline: "Autonomous pathfinding in embedded C++.",
    bullets: [
      "Autonomous line-following robot in C++ on an AVR ATmega324PA microcontroller, using Dijkstra's algorithm for shortest-path navigation and stopping 10 cm from target posts.",
      "Integrates infrared sensors, PWM motor control, I2C EEPROM persistence, and UART communication.",
    ],
    metrics: [],
    stack: ["C++", "AVR"],
    repo: "https://github.com/Ilyes-Jamoussi/AVR-Microcontroller-Robot",
    video: {
      src: "/media/avr-robot.mp4",
      poster: "/media/avr-robot-poster.jpg",
      width: 576,
      height: 720,
      label:
        "Demo loop: the robot follows the black line course and navigates an intersection",
    },
  },
] as const;

export const education: readonly EducationEntry[] = [
  {
    school: "Polytechnique Montréal",
    degree:
      "B.Eng., Software Engineering — Artificial Intelligence & Data Science concentration",
    period: "Jan 2023 — Dec 2027 (expected)",
  },
] as const;

export const certifications: readonly Certification[] = [
  {
    name: "AWS Certified Developer — Associate",
    date: "Aug 2025",
    verifyUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/7c243cd2805b427484d5fb5926abe0c2",
  },
  {
    name: "AWS Certified Solutions Architect — Associate",
    date: "Jul 2025",
    verifyUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/4b478e121d514772950efa62f5388b5a",
  },
  {
    name: "AWS Certified AI Practitioner",
    date: "Jun 2025",
    verifyUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/07c3fe33640849dc9d4d3f3d57077560",
  },
] as const;

export const skills: readonly SkillGroup[] = [
  {
    label: "ML & Data",
    items: [
      "Python",
      "PyTorch",
      "Transformers",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "SQL",
    ],
  },
  {
    label: "MLOps & Engineering",
    items: [
      "Docker",
      "FastAPI",
      "GitHub Actions CI/CD",
      "pytest",
      "AWS (Bedrock, EC2)",
      "C++",
      "Java",
      "TypeScript",
      "React",
      "Node.js",
    ],
  },
  {
    label: "Spoken",
    items: ["English (fluent)", "French (native)", "Arabic (native)"],
  },
] as const;
