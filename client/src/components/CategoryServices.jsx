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
                className="group block overflow-hidden rounded-lg bg-forest-50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-3 px-4 py-3">
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-forest-500 group-hover:text-forest-400">{g.title}</span>
                    <span className="mt-0.5 block text-xs text-forest-400">{g.items.length} services</span>
                  </span>
                </div>
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
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-forest-900 md:text-3xl">
            {activeGroup.title}
          </h2>
        </div>
        <ul className="grid gap-3 p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {activeGroup.items.map((item) => (
            <li key={item} className="relative">
              <div className="group block overflow-hidden rounded-lg bg-forest-50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-forest-500">{item}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
