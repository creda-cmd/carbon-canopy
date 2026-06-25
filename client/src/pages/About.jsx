import useSeo from "../hooks/useSeo";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";
import { company, values } from "../data/site";

const valueIcons = {
  Sustainability:            "leaf",
  Integrity:                 "shield",
  Innovation:                "layers",
  Excellence:                "badge",
  "Environmental Stewardship": "tree",
  "Community Empowerment":   "users",
  Collaboration:             "globe",
  "Impact-Driven":           "chart",
  Professionalism:           "doc",
  Accountability:            "check",
};

const valueAccents = [
  "from-forest-600 to-lime-400",
  "from-forest-700 to-forest-500",
  "from-lime-500 to-forest-600",
  "from-forest-500 to-lime-500",
  "from-forest-800 to-forest-600",
  "from-lime-400 to-forest-700",
  "from-forest-600 to-forest-800",
  "from-lime-300 to-forest-500",
  "from-forest-500 to-forest-700",
  "from-lime-500 to-forest-700",
];

export default function About() {
  useSeo(
    "About Us",
    "Learn about CarbonCanopy Solutions — our vision, mission, and core values that guide our work."
  );

  return (
    <div>

      {/* Vision & Mission */}
      <section className="section bg-forest-100">
        <div className="container-cc">
          <Reveal className="mb-12 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-600">Our Direction</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-forest-900 md:text-4xl">Vision &amp; Mission</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-forest-600 to-lime-400" />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Vision */}
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-xl bg-forest-200 p-8 shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-400 to-forest-500" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl" />
                <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-600">Vision</p>
                <h3 className="mt-2 text-xl font-black text-forest-900">Where We're Headed</h3>
                <div className="my-4 h-px w-full bg-forest-300" />
                <p className="text-sm leading-7 text-forest-600">{company.vision}</p>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={100}>
              <div className="relative h-full overflow-hidden rounded-xl bg-forest-200 p-8 shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest-500 to-lime-400" />
                <div className="pointer-events-none absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-lime-100/60 blur-3xl" />
                <p className="text-xs font-black uppercase tracking-[0.25em] text-forest-500">Mission</p>
                <h3 className="mt-2 text-xl font-black text-forest-900">What We Do</h3>
                <div className="my-4 h-px w-full bg-forest-300" />
                <p className="text-sm leading-7 text-forest-600">{company.mission}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-forest-100">
        <div className="container-cc">
          <Reveal className="mb-12 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-lime-600">What We Stand For</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-forest-900 md:text-4xl">Our Core Values</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-forest-600 to-lime-400" />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {values.slice(0, 8).map((value, index) => (
              <Reveal key={value.title} delay={(index % 4) * 60}>
                <div className="group h-full overflow-hidden rounded-lg bg-forest-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="h-1 w-full bg-gradient-to-r from-forest-600 to-lime-400" />
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${valueAccents[index % valueAccents.length]} text-white shadow-sm`}>
                        <Icon name={valueIcons[value.title] ?? "leaf"} className="h-4 w-4" />
                      </span>
                      <h3 className="text-sm font-black text-forest-700">{value.title}</h3>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-forest-500">{value.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
