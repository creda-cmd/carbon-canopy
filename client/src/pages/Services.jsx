import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";
import { servicesByCategory } from "../data/site";

export default function Services() {
  useSeo(
    "Our Services",
    "Explore CarbonCanopy Solutions services: carbon project development, forestry & nursery, agroforestry & agriculture, and full project portfolio support."
  );

  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  const id = hash.slice(1);
  const active = servicesByCategory.some((c) => c.id === id) ? id : servicesByCategory[0].id;
  const category = servicesByCategory.find((c) => c.id === active) || servicesByCategory[0];
  const showCategorySelectors = !hash;

  return (
    <section className="section bg-forest-100">
      <div className="container-cc">
        {showCategorySelectors && (
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {servicesByCategory.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => navigate(`${pathname}#${c.id}`)}
                className="group block w-full overflow-hidden rounded-lg bg-forest-50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md text-left"
              >
                <div className="flex items-start gap-3 px-4 py-3">
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-forest-700">{c.title}</span>
                    {c.blurb && <span className="mt-0.5 block text-xs text-forest-600">{c.blurb}</span>}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        <div id={category.id} className="scroll-mt-32">
          <h2 className="mb-8 text-center text-2xl font-semibold uppercase text-forest-900 md:text-3xl">
            {category.title}
          </h2>

          <ul className="grid gap-3 p-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {category.items.map((item, idx) => {
              return (
                <li key={item} className="relative">
                  <div className="group block overflow-hidden rounded-lg bg-forest-50 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="px-4 py-3">
                      <p className="text-sm font-medium text-forest-700">{item}</p>
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
