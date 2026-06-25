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
          <div className="mb-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {servicesByCategory.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => navigate(`${pathname}#${c.id}`)}
                className={`group rounded-lg border p-2 text-left transition-all duration-200 ${
                  c.id === active
                    ? "border-forest-600 bg-gradient-to-br from-forest-50 to-lime-50 shadow-sm"
                    : "border-line bg-white hover:border-forest-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-1.5">
                  <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                    c.id === active
                      ? "bg-gradient-to-br from-forest-500 to-forest-600 text-white"
                      : "bg-gradient-to-br from-lime-300 to-lime-400 text-white group-hover:from-forest-400 group-hover:to-forest-500"
                  }`}>
                    <Icon name={c.icon} className="h-3 w-3" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-head text-xs font-semibold ${
                      c.id === active ? "text-forest-900" : "text-forest-700"
                    }`}>
                      {c.title}
                    </h3>
                  </div>
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
                  <div className="group h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-forest-600 via-lime-400 to-lime-200 p-[1px] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-full min-h-[60px] flex-col justify-between overflow-hidden rounded-[calc(1rem-1px)] bg-white px-3 py-2">
                      <div className="flex items-start gap-1.5">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-lime-400 text-white">
                          <Icon name={category.icon} className="h-2.5 w-2.5" />
                        </div>
                        <p className="text-xs leading-4 text-forest-800">{item}</p>
                      </div>
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
