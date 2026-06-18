import useSeo from "../hooks/useSeo";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { company, values } from "../data/site";

const featuredValues = [
  "Integrity",
  "Innovation",
  "Environmental Stewardship",
  "Community Empowerment",
  "Impact-Driven",
  "Accountability",
];

const sectionStyles = [
  "from-emerald-500 to-lime-300",
  "from-sky-500 to-cyan-300",
  "from-amber-500 to-orange-300",
  "from-violet-500 to-fuchsia-400",
  "from-rose-500 to-pink-300",
  "from-lime-500 to-emerald-300",
];

const valueIcons = {
  Integrity: "shield",
  Innovation: "grad",
  "Environmental Stewardship": "leaf",
  "Community Empowerment": "users",
  "Impact-Driven": "chart",
  Accountability: "check",
};

export default function About() {
  useSeo(
    "About Us",
    "Learn about CarbonCanopy Solutions — our vision, mission, and six core values that guide our work."
  );

  const displayedValues = values.filter((value) => featuredValues.includes(value.title));

  return (
    <>
      {/* Vision & Mission */}
      <section className="section">
        <div className="container-cc grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-line bg-forest-50 p-9">
            <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 text-white">
              <Icon name="globe" className="h-7 w-7" />
            </span>
            <h2 className="text-2xl">Our Vision</h2>
            <p className="mt-3 text-muted">{company.vision}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-3xl border border-line bg-sky-50 p-9">
            <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-sky-600 text-white">
              <Icon name="sprout" className="h-7 w-7" />
            </span>
            <h2 className="text-2xl">Our Mission</h2>
            <p className="mt-3 text-muted">{company.mission}</p>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container-cc">
          <SectionHeading eyebrow="Core Values" title="Six values that matter most">
            We focus on the strongest principles that shape our services, partnerships, and impact.
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedValues.map((value, index) => (
              <Reveal key={value.title} delay={(index % 3) * 80} className="h-full">
                <div
                  className={`group h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br p-[1px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${sectionStyles[index % sectionStyles.length]}`}
                >
                  <div className="h-full overflow-hidden rounded-[calc(1rem-1px)] bg-white p-6">
                    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-600">
                      <Icon name={valueIcons[value.title] ?? "leaf"} className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-semibold text-forest-900">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-forest-700">{value.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
