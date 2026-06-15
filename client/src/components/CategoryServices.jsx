import { useLocation, useNavigate } from "react-router-dom";
import { slugify } from "../data/site";

// Per-category service list. Only the selected category's services are shown, as a
// plain list. Use the chips or the header dropdown to switch categories.
export default function CategoryServices({ groups }) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const id = hash.slice(1);
  const active = groups.some((g) => slugify(g.title) === id) ? id : slugify(groups[0].title);
  const activeGroup = groups.find((g) => slugify(g.title) === active) || groups[0];

  return (
    <section id="services" className="section">
      <div className="container-cc">
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {groups.map((g) => {
            const gid = slugify(g.title);
            const isActive = gid === active;
            return (
              <button
                key={g.title}
                type="button"
                onClick={() => navigate(`${pathname}#${gid}`)}
                className={`rounded-full border px-4 py-2 font-head text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-forest-600 bg-forest-600 text-white"
                    : "border-line bg-white text-forest-700 hover:border-forest-300"
                }`}
              >
                {g.title}
              </button>
            );
          })}
        </div>

        <div id={slugify(activeGroup.title)} className="scroll-mt-32">
          <h2 className="mb-6 text-center text-2xl">{activeGroup.title}</h2>
          <ul className="mx-auto grid max-w-3xl list-none gap-x-10 gap-y-2 p-0 sm:grid-cols-2">
            {activeGroup.items.map((item) => (
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
