import Image from "next/image";
import Link from "next/link";

interface SkillCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const skillCards: SkillCard[] = [
  {
    id: 1,
    title: "SQL Expertise",
    description:
      "Proficient in SQL with extensive experience creating advanced dashboards and analytics on Dune Analytics. Specialized in token distribution analysis, protocol research, holder behavior tracking, market trends, and network performance metrics across Base, Ethereum, Solana and other Blockchains.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Python Analysis",
    description:
      "Skilled in Python data analysis with a focus on blockchain metrics. Experience in comparing blockchain networks, analyzing price feeds, evaluating DeFi protocol performance, and deriving statistical insights from on-chain data.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Blockchain Data Research",
    description:
      "Deep understanding of blockchain ecosystems with a focus on protocol performance and user behavior. Creator of multiple in-depth Dune dashboards exploring privacy tokens, zk-protocols, network activity, revenue streams, and ecosystem trends on Base, Solana and Ethereum.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "Data Analytics and Reporting",
    description:
      "Holds a Bachelor of Technology degree in Statistics and applies rigorous analytical methods to transform complex on-chain data into clear, actionable reports. Published research on Substack and Twitter, delivering high-impact insights for Web3 stakeholders and decision-makers.",
    icon: "/cards/card-4.png",
  },
  {
    id: 5,
    title: "Content Strategy Management",
    description:
      "Leveraging foundational experience in Web3 content strategy and social media management, I craft compelling narratives around data insights. Previously drove brand growth for clients like GateLearn and Arena Games, now integrating storytelling into blockchain research publications and reports.",
    icon: "/cards/card-4.png",
  },
];

export default function Skill(): React.JSX.Element {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4 items-start"
            >
              <div className="mb-4">
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
