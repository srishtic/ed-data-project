const audiences = [
  {
    title: "Financial aid & enrollment offices",
    description:
      "Teams that need faster, more reliable reporting to support student decisions and institutional planning.",
  },
  {
    title: "Community colleges & regional universities",
    description:
      "Institutions with lean staff who need infrastructure that works without a dedicated data engineering team.",
  },
  {
    title: "Education nonprofits & foundations",
    description:
      "Organizations managing grants, program data, and impact measurement across multiple partners.",
  },
  {
    title: "State & regional consortia",
    description:
      "Multi-institution collaborations that need standardized data sharing, benchmarking, and joint reporting.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-medium tracking-widest uppercase text-neutral-500 mb-12">
          Who We Work With
        </p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {audiences.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <h3 className="font-serif text-xl text-neutral-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
