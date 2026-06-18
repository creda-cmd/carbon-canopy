import { useLocation, useNavigate } from "react-router-dom";
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

  const id = hash.slice(1);
  const active = servicesByCategory.some((c) => c.id === id) ? id : servicesByCategory[0].id;
  const category = servicesByCategory.find((c) => c.id === active) || servicesByCategory[0];
  const showCategorySelectors = !hash;

  return (
    <section className="section">
      <div className="container-cc">
        {showCategorySelectors && (
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {servicesByCategory.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => navigate(`${pathname}#${c.id}`)}
                className={`rounded-full border px-4 py-2 font-head text-sm font-semibold transition-colors ${
                  c.id === active
                    ? "border-forest-600 bg-forest-600 text-white"
                    : "border-line bg-white text-forest-700 hover:border-forest-300"
                }`}
              >
                {c.title}
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
