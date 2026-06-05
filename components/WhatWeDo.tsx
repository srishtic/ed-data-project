const offerings = [
  {
    title: "Data infrastructure",
    description:
      "ETL pipelines, validation, warehousing, and migration off Excel.",
    tags: ["ETL pipelines", "SQL", "Python", "Data validation"],
  },
  {
    title: "Reporting & visualization",
    description: "Dashboards, automated reports, and Tableau solutions.",
    tags: ["Tableau", "R", "Automated reporting", "Dashboards"],
  },
  {
    title: "Research & analysis",
    description:
      "Survey management, benchmarking, and policy impact analysis.",
    tags: ["Survey research", "Benchmarking", "Statistical analysis", "Policy impact"],
  },
];

export default function WhatWeDo() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-medium tracking-widest uppercase text-neutral-500 mb-12">
          What We Do
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <h3 className="font-serif text-xl text-neutral-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-neutral-500 border border-neutral-300 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
