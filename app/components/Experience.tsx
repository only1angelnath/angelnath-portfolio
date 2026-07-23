type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  technologies?: string[];
  tag?: "work" | "education" | "hackathon";
};

const experiences: ExperienceItem[] = [
  {
    company: "Analytic Sages",
    role: "SQL Teaching Assistant",
    period: "Feb 2026 - Present",
    location: "Remote",
    tag: "work",
    description:
      "Teach and support cohort students learning SQL for on-chain data analysis on Dune Analytics. Review student queries, debug logic errors, and explain blockchain data structures — from EVM transaction tables to DEX swap events — in plain terms. Bridge the gap between SQL fundamentals and real multi-chain data work.",
    technologies: ["SQL", "Dune Analytics", "Ethereum", "Base", "Solana", "Research Writing"],
  },
  {
    company: "Intellisage",
    role: "Research Analyst Intern",
    period: "Jan 2026 - August 2026",
    location: "Remote",
    tag: "work",
    description:
      "Conducted structured research into blockchain ecosystems, protocol performance, and on-chain market trends. Translated raw data findings into clear written reports and briefings for internal stakeholders. Developed research frameworks applied across DeFi, privacy protocols, and Layer 2 ecosystems. Built Crypto Index Fund and wrote a report on it.",
    technologies: ["On-Chain Research", "Data Analysis", "DeFi", "Report Writing"],
  },
  {
    company: "GateLearn",
    role: "Content Writer & Researcher",
    period: "Dec 2023 - Dec 2025",
    location: "Remote",
    tag: "work",
    description:
      "Produce educational content on blockchain concepts, DeFi mechanics, and Web3 infrastructure for a global learner audience. Research-first approach — every piece is grounded in primary sources, not opinion. Focus on making technically complex topics accessible without sacrificing accuracy.",
    technologies: ["Web3 Research", "Technical Writing", "Content Strategy", "Blockchain Education"],
  },
  {
    company: "Arena Games",
    role: "Content Strategist",
    period: "Jan 2023 - Nov 2023",
    location: "Remote",
    tag: "work",
    description:
      "Developed and executed content strategies to drive brand visibility and audience growth in the Web3 gaming space. Built editorial frameworks aligned with product goals, with consistent focus on narrative clarity and platform-specific optimisation. Wrote the company's whitepaper that explains the concept of the company's technicals in collaboration with the CTO ",
    technologies: ["Content Strategy", "Web3", "Technical Writting", "Brand Building"],
  },
  {
    company: "Analytic Sages",
    role: "Python for Blockchain Analytics — Cohort 2",
    period: "2026",
    tag: "education",
    description:
      "Completed an intensive programme covering Python applied to blockchain data — Web3.py, pandas, on-chain data pipelines, and production-ready analytics tooling. Capstone project: PrivaScan, a deterministic risk scoring API for EVM privacy protocol ecosystems, built with FastAPI, Celery, Redis, Docker, and PostgreSQL.",
    technologies: ["Python", "Web3.py", "pandas", "FastAPI", "Docker", "PostgreSQL"],
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
    role: "Participant — PrivaScan CDR",
    period: "2025",
    tag: "hackathon",
    description:
      "Submitted PrivaScan CDR as a hackathon entry — an open-source, deterministic risk scoring API for EVM privacy protocol ecosystems. Scores contracts across six weighted dimensions and surfaces a composite risk score. Pre-seeded with 14 protocols, supports 7 chains, and includes a live Telegram bot for on-demand lookups.",
    technologies: ["FastAPI", "Celery", "Redis", "Docker", "PostgreSQL", "EVM"],
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

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/70 text-center">
            Roles, builds, research, and programmes that shaped how I work with on-chain data.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-purple-700 sm:block" />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <article
                key={`${item.company}-${index}`}
                className="relative rounded-2xl border border-purple-700 bg-slate-950 p-6 shadow-sm transition hover:shadow-md hover:shadow-purple-900/20 sm:ml-10"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>
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
                </div>

                <p className="mt-4 leading-7 text-white/70 text-sm">
                  {item.description}
                </p>

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
      </div>
    </section>
  );
}
