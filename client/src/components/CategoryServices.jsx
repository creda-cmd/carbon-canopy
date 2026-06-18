import { useLocation } from "react-router-dom";
import Icon from "./Icon";
import { slugify } from "../data/site";

const getServiceIcon = (text) => {
  const normalized = text.toLowerCase();
  if (normalized.includes("carbon") || normalized.includes("baseline") || normalized.includes("verification") || normalized.includes("mrvs") || normalized.includes("registration") || normalized.includes("finance") || normalized.includes("project")) return "carbon";
  if (normalized.includes("gis") || normalized.includes("mapping") || normalized.includes("analysis")) return "map";
  if (normalized.includes("nursery") || normalized.includes("tree") || normalized.includes("reforestation") || normalized.includes("restoration") || normalized.includes("landscaping")) return "tree";
  if (normalized.includes("agroforestry") || normalized.includes("agriculture") || normalized.includes("orchard") || normalized.includes("farmer") || normalized.includes("fruit")) return "fruit";
  if (normalized.includes("market") || normalized.includes("investment") || normalized.includes("buyer") || normalized.includes("seller")) return "coins";
  if (normalized.includes("due diligence") || normalized.includes("compliance") || normalized.includes("legal") || normalized.includes("risk")) return "shield";
  if (normalized.includes("training") || normalized.includes("capacity") || normalized.includes("support")) return "users";
  if (normalized.includes("report") || normalized.includes("monitoring") || normalized.includes("evaluation")) return "report";
  if (normalized.includes("soil") || normalized.includes("water") || normalized.includes("biodiversity")) return "leaf";
  return "sprout";
};

// Per-category service list. Only the selected category's services are shown.
export default function CategoryServices({ groups }) {
  const { hash } = useLocation();

  const id = hash.slice(1);
  const active = groups.some((g) => slugify(g.title) === id) ? id : slugify(groups[0].title);
  const activeGroup = groups.find((g) => slugify(g.title) === active) || groups[0];

  return (
    <section id="services" className="section">
      <div className="container-cc">
        <div id={slugify(activeGroup.title)} className="scroll-mt-32">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-lime-400 text-white">
              <Icon name={activeGroup.icon || "leaf"} className="h-5 w-5" />
            </span>
            <h2 className="text-center text-2xl font-semibold text-forest-900 md:text-3xl">
              {activeGroup.title}
            </h2>
          </div>
          <ul className="grid gap-3 p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {activeGroup.items.map((item) => {
              return (
                <li key={item} className="relative">
                  <div className="group h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-forest-600 via-lime-400 to-lime-200 p-[1px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="h-full overflow-hidden rounded-[calc(1rem-1px)] bg-white px-5 py-5">
                      <p className="text-sm leading-6 text-forest-800">{item}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
