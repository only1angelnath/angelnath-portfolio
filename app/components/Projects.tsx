import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  githubLink?: string;
  tags?: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "PrivaScan — EVM Privacy Protocol Risk Scoring API",
    description:
      "An open-source, deterministic risk scoring API for EVM privacy protocol ecosystems. Users trust privacy protocols with real funds but have no structured way to verify whether the full smart contract ecosystem — pools, routers, vaults, verifiers, governance contracts — is safe. PrivaScan fixes that. Scores across six weighted dimensions with a composite formula. 14 pre-seeded protocols, 7-chain support. Built with FastAPI, Celery, Redis, Docker, and PostgreSQL. Live Telegram bot: @PrivaScanBot.",
    link: "https://privascan-cdr.vercel.app/",
    image: "/projects/project-1.png",
    tags: ["FastAPI", "Python", "Docker", "PostgreSQL", "EVM"],
  },
  {
    id: 2,
    title: "KeyHeir — Dead Man's Switch Vault Protocol",
    description:
      "Deploy your own personal vault contract, deposit native MON, and set a beneficiary plus a check-in interval. A single on-chain check-in resets the countdown. If you go silent past your deadline, the vault becomes permissionlessly claimable — verifiable by anyone, controlled by no one but the code. No custodian, no shared key, no company in the chain of trust at any point. A companion Python bot sends check-in reminders and notifies the beneficiary the moment a release is triggered. Built for the BuildAnything Monad Spark Hackathon.",
    link: "https://keyheir.vercel.app/",
    image: "/projects/project-2.png",
    tags: ["Solidity", "Monad", "Python", "Smart Contracts"],
  },
  {
    id: 3,
    title: "PRXVT Protocol Analytics — Live Dune Dashboard",
    description:
      "PRXVT by Virtuals is a privacy-centric infrastructure layer on Base built for the autonomous AI agent economy. It combines ZK cryptography with ERC-4337 account abstraction to solve the transparency leak inherent in public blockchains — giving AI agents the ability to transact anonymously without linking on-chain behaviour to their identity. This Dune dashboard tracks the full PRXVT protocol: transaction volume, agent activity, privacy pool usage, and ecosystem growth. Built to surface what's actually happening inside a protocol that's deliberately designed to be hard to see.",
    link: "https://dune.com/angelnath/prxvt-protocol-analytics",
    image: "/projects/prxvt.png",
    tags: ["SQL", "Dune Analytics", "ZK Proofs", "Base", "AI Agents", "ERC-4337"],
  },
  {
    id: 4,
    title: "State of Privacy Protocol Tokens Research Report",
    description:
      "Detailed research report on privacy tokens on Base — holder analytics, volume trends, wealth metrics, and segmentation models demonstrating how they achieved 249.6% returns in 2025, outperforming AI tokens. Full on-chain data sourced from Dune Analytics with live dashboard.",
    link: "https://only1angelnath.substack.com/p/the-state-of-privacy-protocol-tokens",
    image: "/projects/State-of-privacy.png",
    tags: ["SQL", "Dune Analytics", "Base", "Research"],
  },
  {
    id: 4,
    title: "3,549 OGNFT Holders Made $1.2M Profit in ZAMA Community Sale",
    description:
      "How ZAMA early believers averaged 5.3X returns while turning $954K into $1.2M — a data deep-dive into the first community sale in 2026 where everyone won. Every wallet analysed on-chain.",
    link: "https://only1angelnath.substack.com/p/3549-ognft-holders-made-12m-profit",
    image: "/projects/Zama.png",
    tags: ["SQL", "Dune Analytics", "Wallet Analysis"],
  },
  {
    id: 5,
    title: "Veil Cash Is Profitable — But Can It Scale?",
    description:
      "Veil Cash, a zk-privacy protocol on Base, generated $2,007.8 in revenue from deposit fees, spent just $74.3 on validator gas, and recorded a net profit of $1,993.4 — a 96.3% margin as of October 2025. Full protocol analysis with live Dune dashboard.",
    link: "https://only1angelnath.substack.com/p/veil-cash-is-profitable-but-can-it",
    image: "/projects/Veil.png",
    tags: ["SQL", "ZK Proofs", "Base", "DeFi"],
  },
  {
    id: 6,
    title: "State of Privacy Tokens on Base — Dune Dashboard",
    description:
      "State of Privacy Tokens on Base Blockchain is a data-driven analytics dashboard that explores the growth, performance, and adoption of privacy-focused protocols within the Base Blockchain ecosystem. The project analyzes key metrics such as market capitalization, transaction volume, and user activity to uncover trends shaping the privacy sector on Base.",
    link: "https://dune.com/angelnath/state-of-privacy-token-on-base-blockchain",
    image: "/projects/base.png",
    tags: ["SQL", "Dune Analytics", "Base", "Dashboard"],
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Builds, dashboards, and research — all backed by real on-chain data.
          </p>
        </div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full border border-purple-700/50 bg-purple-950/30 text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-slate-950 shadow-lg ${
                        isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Content */}
                <div
                  className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
