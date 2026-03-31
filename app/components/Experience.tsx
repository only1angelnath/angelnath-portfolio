type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  technologies?: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Freelance",
    role: "Blockchain Data Analyst",
    period: "2023 - Present",
    location: "Remote",
    description:
      "Analyzed on-chain data across Web3 ecosystems to uncover trends, user behavior, and protocol performance. Built dashboards and translated complex blockchain data into clear insights for research and decision-making.",
    technologies: ["Dune", "SQL", "On-chain Analytics", "Base"],
  },
  {
    company: "Personal Project",
    role: "Frontend Developer",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Built responsive web applications using React, TypeScript, and Tailwind CSS, focusing on clean UI, accessibility, and maintainable component structure.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Research Project",
    role: "Data Researcher",
    period: "2023 - 2024",
    location: "Remote",
    description:
      "Conducted data research and presented findings in a simplified, story-driven format that made technical insights more accessible to different audiences.",
    technologies: ["Research", "Data Analysis", "Storytelling"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Work Experience
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white text-center">
            A summary of the roles, projects, and impact I have delivered across
            development and blockchain data research.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-purple-700 sm:block" />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <article
                key={`${item.company}-${index}`}
                className="relative rounded-2xl border border-purple-700 bg-slate-950 p-6 shadow-sm transition hover:shadow-md sm:ml-10"
              >
                {/* <div className="absolute -left-[2.7rem] top-8 hidden h-4 w-4 rounded-full border-4 border-purple-700 bg-gray-900 sm:block" /> */}

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-white">
                      {item.company}
                      {/* {item.location ? ` • ${item.location}` : ""} */}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                {item.technologies && item.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700"
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
