import ServiceGroup from "./ServiceGroup";
import SectionHeading from "./SectionHeading";
import { slugify } from "../data/site";

// Full per-category service sections. Use the header dropdown or search to
// jump straight to a category (anchors match each group's slug).
export default function CategoryServices({
  groups,
  eyebrow = "Services",
  title = "Our services",
  intro = "Browse the full list of services below, or use the menu to jump to a category.",
}) {
  return (
    <section id="services" className="section">
      <div className="container-cc">
        <SectionHeading eyebrow={eyebrow} title={title}>
          {intro}
        </SectionHeading>
        <div className="space-y-7">
          {groups.map((g, i) => (
            <div key={g.title} id={slugify(g.title)} className="scroll-mt-32">
              <ServiceGroup group={g} delay={(i % 2) * 80} wide />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
