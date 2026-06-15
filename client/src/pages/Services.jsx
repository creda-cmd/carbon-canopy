import { useLocation, useNavigate } from "react-router-dom";
import useSeo from "../hooks/useSeo";
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

  return (
    <section className="section">
      <div className="container-cc">
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

        <div id={category.id} className="scroll-mt-32">
          <h2 className="mb-6 text-center text-2xl">{category.title}</h2>
          <ul className="mx-auto grid max-w-3xl list-none gap-x-10 gap-y-2 p-0 sm:grid-cols-2">
            {category.items.map((item) => (
              <li key={item} className="text-[0.97rem] text-forest-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
