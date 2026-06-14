import Reveal from "./Reveal";
import Icon from "./Icon";
import ServiceGroup from "./ServiceGroup";
import SectionHeading from "./SectionHeading";
import { slugify } from "../data/site";

// Category chooser cards + full per-category service sections.
// Clicking a category card jumps to that category's services below.
export default function CategoryServices({
  groups,
  eyebrow = "Services",
  title = "Choose a category",
  intro = "Select a category to jump straight to its services.",
}) {
  return (
    <>
      <section id="services" className="section">
        <div className="container-cc">
          <SectionHeading eyebrow={eyebrow} title={title}>
            {intro}
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 60}>
                <a
                  href={`#${slugify(g.title)}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-md"
                >
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br from-forest-500 to-lime-500 text-white">
                    <Icon name={g.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-head text-[1.02rem] font-semibold leading-snug text-forest-800">
                      {g.title}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1.5 font-head text-sm font-semibold text-forest-600">
                      {g.items.length} services
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist pt-0">
        <div className="container-cc space-y-7 pt-16">
          {groups.map((g, i) => (
            <div key={g.title} id={slugify(g.title)} className="scroll-mt-32">
              <ServiceGroup group={g} delay={(i % 2) * 80} wide />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
