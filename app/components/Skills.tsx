import Image from "next/image";

interface SkillCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  tools?: string[];
}

const skillCards: SkillCard[] = [
  {
    id: 1,
    title: "SQL & Dune Analytics",
    description:
      "Expert-level SQL applied to blockchain data. I build dashboards and queries across Ethereum, Base, Solana, Arbitrum, and more — covering token distribution, wallet behaviour, protocol revenue, DEX activity, and privacy protocol analytics. Dune is my primary workspace.",
    icon: "/cards/card-1.png",
    tools: ["SQL", "Dune Analytics", "Ethereum", "Base", "Solana", "Arbitrum"],
  },
  {
    id: 2,
    title: "Python — Production Tooling",
    description:
      "Advanced Python applied in production and analysis. I build data pipelines, API backends, and automation tools that run against live on-chain data. Stack includes Web3.py for chain interaction, pandas for analysis, FastAPI for APIs, Celery for task queues, and Docker for deployment.",
    icon: "/cards/card-2.png",
    tools: ["Python", "Web3.py", "pandas", "FastAPI", "Celery", "Docker", "PostgreSQL", "Redis"],
  },
  {
    id: 3,
    title: "On-Chain Research & Analysis",
    description:
      "Deep understanding of blockchain ecosystems — DeFi mechanics, privacy protocols, ZK proofs, Layer 2 infrastructure, and wallet behaviour. Published research on Substack with verified Dune data. Every claim traceable to a primary source.",
    icon: "/cards/card-3.png",
    tools: ["DeFi", "ZK Proofs", "Privacy Protocols", "Layer 2", "Smart Contracts"],
  },
  {
    id: 4,
    title: "Data Analytics & Reporting",
    description:
      "B.Tech in Statistics. I apply rigorous analytical methods to translate on-chain complexity into clear, actionable reports for Web3 stakeholders. Published research covers protocol performance, holder behaviour, market trends, and ecosystem comparisons — all with live data.",
    icon: "/cards/card-4.png",
    tools: ["Statistical Analysis", "Research Reports", "Substack", "Data Visualisation"],
  },
  {
    id: 5,
    title: "Smart Contract Deployment",
    description:
      "Built and deployed Solidity contracts on Monad for KeyHeir — a permissionless dead man's switch vault with no custodian or shared key at any point. Comfortable reading, deploying, and integrating with on-chain contract logic as part of broader data and tooling work.",
    icon: "/cards/card-4.png",
    tools: ["Solidity", "Monad", "EVM", "Contract Deployment"],
  },
];

export default function Skill(): React.JSX.Element {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            The tools and disciplines I work with in production — not a list of things I&apos;ve touched.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-start gap-4"
            >
              <div className="mb-4 shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{card.description}</p>
                {card.tools && (
                  <div className="flex flex-wrap gap-2">
                    {card.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 rounded-full border border-purple-700/50 bg-purple-950/30 text-purple-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
