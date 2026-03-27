import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "State of Privacy Protocol Tokens Research Report",
    description: "Detailed research report on privacy tokens on Base, exploring holder analytics, volume trends, wealth metrics, and segmentation models demonstrating how they achieved 249.6% returns in 2025, outperforming AI tokens and highlighting untapped research opportunities in blockchain analytics.",
    link: "https://only1angelnath.substack.com/p/the-state-of-privacy-protocol-tokens",
    image: "/projects/State-of-privacy.png",
  },
  {
    id: 2,
    title: "3,549 OGNFT Holders Made $1.2M Profit in ZAMA Community Sale",
    description: "How ZAMA early believers averaged 5.3X returns while turning $954K into $1.2M — a data deep-dive into the first community sale in 2026 where everyone won.",
   link: "https://only1angelnath.substack.com/p/3549-ognft-holders-made-12m-profit",
    image: "/projects/Zama.png",
  },
  {
    id: 3,
    title: "Veil Cash Is Profitable — But Can It Scale?",
    description: "Veil Cash, a zk-privacy protocol on Base blockchain, is profitable, early, lean, and efficient.As of October 31, 2025, it has generated $2,007.8 USD in revenue from deposit fees, spent just $74.3 USD on validator gas, and recorded a net profit of $1,993.4 USD — a 96.3% margin.",
   link: "https://only1angelnath.substack.com/p/veil-cash-is-profitable-but-can-it",
    image: "/projects/Veil.png",
  }
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card - extends over image */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Website link */}
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
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
                    </div>
                  )}
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
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

