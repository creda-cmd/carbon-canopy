import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
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
  const { hash, pathname: pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  const id = hash.slice(1);
  const activeGroup = groups.find((g) => slugify(g.title) === id) || null;

  // No hash — show category picker
  if (!activeGroup) {
    return (
      <section className="section bg-forest-100">
        <div className="container-cc">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-forest-500">
            Select a category to explore
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <Link
                key={g.title}
                to={`${pathname}#${slugify(g.title)}`}
                className="group flex items-start gap-4 rounded-2xl border border-lime-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest-400 hover:shadow-md"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-lime-400 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon name={g.icon || "leaf"} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-forest-900 group-hover:text-forest-600">{g.title}</h3>
                  <p className="mt-1 text-xs text-forest-500">{g.items.length} services</p>
                </div>
                <Icon name="arrow" className="ml-auto mt-1 h-4 w-4 flex-shrink-0 text-forest-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-forest-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Hash matches — show services for selected group
  return (
    <section id={slugify(activeGroup.title)} className="section bg-forest-100 scroll-mt-32">
      <div className="container-cc">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-lime-400 text-white">
            <Icon name={activeGroup.icon || "leaf"} className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-semibold text-forest-900 md:text-3xl">
            {activeGroup.title}
          </h2>
        </div>
        <ul className="grid gap-3 p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {activeGroup.items.map((item) => (
            <li key={item} className="relative">
              <div className="group h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-forest-600 via-lime-400 to-lime-200 p-[1px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-full min-h-[60px] flex-col justify-between overflow-hidden rounded-[calc(1rem-1px)] bg-white px-3 py-2">
                  <div className="flex items-start gap-1.5">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-lime-400 text-white">
                      <Icon name={getServiceIcon(item)} className="h-2.5 w-2.5" />
                    </div>
                    <p className="text-xs leading-4 text-forest-800">{item}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
