import { useLocation, useNavigate } from "react-router-dom";
import ServiceGroup from "./ServiceGroup";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { slugify } from "../data/site";

// Per-category service section. Only the selected category's services are shown;
// use the category chips, the header dropdown, or search to switch categories.
export default function CategoryServices({
  groups,
  eyebrow = "Services",
  title = "Our services",
  intro = "Choose a category to view its services.",
}) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const id = hash.slice(1);
  const active = groups.some((g) => slugify(g.title) === id) ? id : slugify(groups[0].title);
  const activeGroup = groups.find((g) => slugify(g.title) === active) || groups[0];

  return (
    <section id="services" className="section">
      <div className="container-cc">
        <SectionHeading eyebrow={eyebrow} title={title}>
          {intro}
        </SectionHeading>

        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {groups.map((g) => {
            const id = slugify(g.title);
            const isActive = id === active;
            return (
              <button
                key={g.title}
                type="button"
                onClick={() => navigate(`${pathname}#${id}`)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-head text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-forest-600 bg-forest-600 text-white"
                    : "border-line bg-white text-forest-700 hover:border-forest-300"
                }`}
              >
                <Icon name={g.icon} className="h-4 w-4" />
                {g.title}
              </button>
            );
          })}
        </div>

        <div id={slugify(activeGroup.title)} className="scroll-mt-32">
          <ServiceGroup group={activeGroup} wide />
        </div>
      </div>
    </section>
  );
}
