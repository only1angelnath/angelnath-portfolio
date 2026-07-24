"use client";

import { useState } from "react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  technologies?: string[];
  tag?: "work" | "education" | "hackathon";
  certificateLink?: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Analytic Sages",
    role: "SQL Teaching Assistant",
    period: "2025 - Present",
    location: "Remote",
    tag: "work",
    description:
      "Teach and support cohort students learning SQL for on-chain data analysis on Dune Analytics. Review student queries, debug logic errors, and explain blockchain data structures — from EVM transaction tables to DEX swap events — in plain terms. Bridge the gap between SQL fundamentals and real multi-chain data work.",
    technologies: ["SQL", "Dune Analytics", "Ethereum", "Base", "Solana", "Research Report Writing"],
  },
  {
    company: "Intellisage",
    role: "Research Analyst Intern",
    period: "2024 - 2025",
    location: "Remote",
    tag: "work",
    description:
      "Conducted structured research into blockchain ecosystems, protocol performance, and on-chain market trends. Translated raw data findings into clear written reports and briefings for internal stakeholders. Developed research frameworks applied across DeFi, privacy protocols, and Layer 2 ecosystems. Built Crypto Index Fund and wrote a report on it.",
    technologies: ["On-Chain Research", "Data Analysis", "DeFi", "Report Writing"],
  },
  {
    company: "Web3 Global Conference",
    role: "Social Media Strategist",
    period: "Sep 2023 – Jan 2026 · Contract",
    location: "Remote",
    tag: "work",
    description:
      "Built and ran the social media presence for one of Web3's conference brands over 2.5 years. Developed platform-specific strategies, produced content around live events and ecosystem announcements, and maintained a consistent voice across a technically informed audience. Operated independently across the full content lifecycle — strategy, copywriting, scheduling, and performance review.",
    technologies: ["Social Media Strategy", "Copywriting", "Web3", "Community"],
  },
  {
    company: "Gate.io — GateLearn",
    role: "Content Writer",
    period: "Jan 2024 – May 2025 · Part-time",
    location: "Remote",
    tag: "work",
    description:
      "Produced SEO-optimised educational content on blockchain concepts, DeFi mechanics, and Web3 infrastructure for Gate.io's learning platform. Research-first approach — every piece grounded in primary sources. Focused on making technically complex topics accessible without sacrificing accuracy, for a global learner audience.",
    technologies: ["Technical Writing", "SEO", "Blockchain Education", "DeFi", "Web3 Research"],
  },
  {
    company: "Arena Games",
    role: "Content Writer & Social Media Manager",
    period: "Oct 2022 – Feb 2023 · Full-time",
    location: "Tbilisi, Georgia · Remote",
    tag: "work",
    description:
      "Led content and social strategy for a Web3 gaming project from launch through its NFT campaign. Grew social media engagement by 3,000% and follower count by 2,000% through narrative-driven Twitter threads and campaign content. Co-authored the project whitepaper with the CTO — a technical document used to brief investors and partners. Built and ran a Twitter thread campaign around the game's NFT character launch that drove 1,500% uplift in brand awareness.",
    technologies: ["Content Strategy", "Web3 Gaming", "NFT", "Twitter Threads", "Whitepaper"],
  },
  {
    company: "BuildAnything Monad Spark Hackathon",
    role: "Participant — KeyHeir",
    period: "2025",
    tag: "hackathon",
    description:
      "Built KeyHeir — a dead man's switch vault protocol on Monad. Users deploy a personal vault contract, deposit native MON, and set a beneficiary plus a check-in interval. If the owner goes silent past their deadline, the vault becomes permissionlessly claimable on-chain — no custodian, no shared key, no company in the chain of trust. A companion Python bot sends check-in reminders and notifies the beneficiary the moment a release is triggered.",
    technologies: ["Solidity", "Monad", "Python", "Web3.py", "Smart Contracts"],
  },
  {
    company: "CDR Hackathon",
    role: "Participant — PrivaScan",
    period: "2025",
    tag: "hackathon",
    description:
      "Submitted PrivaScan as a hackathon entry — an open-source, deterministic risk scoring API for EVM privacy protocol ecosystems. Scores contracts across six weighted dimensions and surfaces a composite risk score. Pre-seeded with 14 protocols, supports 7 chains, and includes a live Telegram bot for on-demand lookups.",
    technologies: ["FastAPI", "Celery", "Redis", "Docker", "PostgreSQL", "EVM"],
  },
];

const education: ExperienceItem[] = [
  {
    company: "Ladoke Akintola University of Technology (LAUTECH)",
    role: "Bachelor of Technology — Statistics",
    period: "2014 – 2021",
    location: "Ogbomoso, Nigeria",
    tag: "education",
    description:
      "Undergraduate degree in Statistics — the analytical foundation behind everything I do with on-chain data. Covered probability, data modelling, regression analysis, and statistical inference. Applied rigour to messy real-world data long before that data lived on a blockchain.",
    technologies: ["Statistics", "Data Analysis", "Research Methods", "Google Workspace"],
  },
  {
    company: "Althash University",
    role: "Diploma — Collegiate of Science in Blockchain Studies",
    period: "Feb 2023 – Jul 2023",
    tag: "education",
    description:
      "Focused programme in blockchain fundamentals — cryptography, consensus mechanisms, smart contract architecture, and cryptocurrency markets. Bridged my Statistics background into Web3 and laid the groundwork for on-chain data analysis.",
    technologies: ["Blockchain", "Cryptocurrency", "Research Methods", "Smart Contracts"],
    certificateLink: "https://api.us-e1.learnworlds.com/certificate_v2/62feab52a9308a50280d7676/user/6448249458cdc1a88500f26f?lw_client=62d3605d50e08d68fd737859&access_token=",
  },
  {
    company: "Analytic Sages",
    role: "Python for Blockchain Analytics — Cohort 2",
    period: "2025",
    tag: "education",
    description:
      "Intensive programme covering Python applied to blockchain data — Web3.py, pandas, on-chain data pipelines, and production-ready analytics tooling. Capstone project: PrivaScan, a deterministic risk scoring API for EVM privacy protocol ecosystems, built with FastAPI, Celery, Redis, Docker, and PostgreSQL.",
    technologies: ["Python", "Web3.py", "pandas", "FastAPI", "Docker", "PostgreSQL"],
  },
];

const tagStyles: Record<string, string> = {
  work: "bg-violet-900/40 text-violet-300 border border-violet-700/50",
  education: "bg-blue-900/40 text-blue-300 border border-blue-700/50",
  hackathon: "bg-emerald-900/40 text-emerald-300 border border-emerald-700/50",
};

const tagLabels: Record<string, string> = {
  work: "Work",
  education: "Education",
  hackathon: "Hackathon",
};

function ItemList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-purple-700 sm:block" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <article
            key={`${item.company}-${index}`}
            className="relative rounded-2xl border border-purple-700 bg-slate-950 p-6 shadow-sm transition hover:shadow-md hover:shadow-purple-900/20 sm:ml-10"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  {item.tag && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagStyles[item.tag]}`}>
                      {tagLabels[item.tag]}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-purple-400">
                  {item.company}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                <p className="text-xs text-white/50 mt-0.5">{item.period}</p>
              </div>
              {item.certificateLink && (
                <a
                  href={item.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 rounded-full border border-emerald-700/50 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40 transition-colors shrink-0"
                >
                  View Certificate ↗
                </a>
              )}
            </div>

            <p className="mt-4 leading-7 text-white/70 text-sm">{item.description}</p>

            {item.technologies && item.technologies.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-purple-700/50 bg-purple-950/30 px-3 py-1 text-xs text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Experience & Education
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/70 text-center">
            Roles, builds, research, and programmes that shaped how I work with on-chain data.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mt-8 bg-slate-900 border border-purple-700/40 rounded-full p-1">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "experience"
                  ? "bg-purple-700 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "education"
                  ? "bg-purple-700 text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {activeTab === "experience" ? (
          <ItemList items={experiences} />
        ) : (
          <ItemList items={education} />
        )}
      </div>
    </section>
  );
}
