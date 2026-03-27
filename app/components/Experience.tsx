import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "State of Privacy Tokens on Base - Blockchain Research Dashboard",
    description:
      "In-depth research into privacy protocol tokens on the Base blockchain, revealing market cap trends, performance metrics, holder behaviors, volume distributions, and wealth concentration providing strategic insights for data-driven decisions across the ecosystem",
    icon: "/cards/card-1.png",
    link: "https://dune.com/angelnath/state-of-privacy-token-on-base-blockchain",
  },
  {
    id: 2,
    title: "Profitability Analysis of Veil Cash - zk-Privacy Protocol Research",
    description:
      "Research analysis of Veil Cash on Base, detailing revenue streams, net profits, peak TVL and user engagement patterns to inform broader blockchain adoption strategies.",
    icon: "/cards/card-2.png",
    link: "https://dune.com/angelnath/veil-cash-protocol-on-base",
  },
  {
    id: 3,
    title: "Base Network User Activity & Behavior Research",
    description:
      "Comprehensive research into user activity on the Base network, mapping daily engagements, behavioral trends, and on-chain interactions to forecast growth and optimize data strategies in decentralized systems.",
    icon: "/cards/card-3.png",
    link: "https://dune.com/angelnath/base-network-user-activity-behavior-insights",
  },
  {
    id: 4,
    title: "30 Days Ethereum Network Activity Research Dashboard",
    description:
      "30-day research overview of Ethereum network dynamics, analyzing transaction volumes, user engagements, and performance metrics to extract predictive insights for blockchain researchers and stakeholders.",
    icon: "/cards/card-4.png",
    link: "https://dune.com/angelnath/30-days-ethereum-network-activity-dashboard",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
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
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
