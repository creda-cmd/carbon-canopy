import useSeo from "../hooks/useSeo";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { company, values } from "../data/site";

const coreValues = values.slice(0, 6);

const valueIcons = {
  Sustainability: "leaf",
  Integrity: "shield",
  Innovation: "grad",
  Excellence: "badge",
  "Environmental Stewardship": "tree",
  "Community Empowerment": "users",
  Collaboration: "users",
  "Impact-Driven": "chart",
  Professionalism: "doc",
  Accountability: "check",
};

const valueAccents = [
  "from-forest-600 to-lime-400",
  "from-forest-700 to-forest-500",
  "from-lime-500 to-forest-600",
  "from-forest-500 to-lime-500",
  "from-forest-800 to-forest-600",
  "from-lime-400 to-forest-700",
];

export default function About() {
  useSeo(
    "About Us",
    "Learn about CarbonCanopy Solutions — our vision, mission, and core values that guide our work."
  );

  return (
    <div>

      {/* Who We Are */}
      <section className="section bg-white">
        <div className="container-cc">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Image */}
            <Reveal>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-lime-300/60" />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/img/transition-2.jpg"
                    alt="Growing seedlings — CarbonCanopy Solutions"
                    className="h-[420px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block rounded-full bg-lime-400/90 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-forest-900 shadow">
                      Est. Kenya
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={100}>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-lime-600">Who We Are</p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-forest-900 md:text-4xl">
                Rooted in Nature.<br />
                <span className="text-forest-600">Driven by Impact.</span>
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-forest-600 to-lime-400" />
              <p className="mt-6 text-base leading-8 text-forest-700">
                CarbonCanopy Solutions is an environmental consultancy specialising in carbon project development, forestry, agroforestry, and climate-smart land management. We bridge the gap between degraded landscapes and thriving ecosystems — turning idle land into measurable carbon value while uplifting the communities that depend on it.
              </p>
              <p className="mt-4 text-base leading-8 text-forest-700">
                From smallholder farmers to large landowners, government bodies to private investors, we work across the full project lifecycle — designing, registering, implementing, and verifying carbon and forestry projects against internationally recognised standards including Verra/VCS, Gold Standard, Plan Vivo, and ART/TREES.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-forest-100">
        <div className="container-cc">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-bold uppercase text-forest-900 md:text-4xl">Vision &amp; Mission</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-forest-600 to-lime-400" />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Vision */}
            <Reveal>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-forest-800 shadow-xl">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest-500 to-lime-400" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-lime-400/5 blur-2xl" />
                <div className="relative p-8">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-forest-500 text-white shadow-lg">
                      <Icon name="globe" className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-lime-400">Our Vision</p>
                      <h2 className="text-2xl font-black text-white">Where We're Headed</h2>
                    </div>
                  </div>
                  <div className="mb-5 h-px w-full bg-forest-700" />
                  <p className="text-sm leading-7 text-forest-200">{company.vision}</p>
                </div>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={100}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-forest-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-400 to-forest-500" />
                <div className="pointer-events-none absolute -left-10 -bottom-10 h-52 w-52 rounded-full bg-lime-100 blur-2xl" />
                <div className="relative p-8">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-500 to-lime-400 text-white shadow-lg">
                      <Icon name="sprout" className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-forest-500">Our Mission</p>
                      <h2 className="text-2xl font-black text-forest-900">What We Do</h2>
                    </div>
                  </div>
                  <div className="mb-5 h-px w-full bg-forest-100" />
                  <p className="text-sm leading-7 text-forest-700">{company.mission}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-forest-100">
        <div className="container-cc">
          <Reveal className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-600">What We Stand For</p>
            <h2 className="mt-2 text-3xl font-bold text-forest-900">Our Core Values</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-forest-500 to-lime-400" />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <Reveal key={value.title} delay={(index % 3) * 70}>
                <div className="group h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-lime-300">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${valueAccents[index % valueAccents.length]} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      <Icon name={valueIcons[value.title] ?? "leaf"} className="h-5 w-5" />
                    </span>
                    <h3 className="font-black text-forest-900">{value.title}</h3>
                  </div>
                  <div className={`mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r ${valueAccents[index % valueAccents.length]}`} />
                  <p className="mt-3 text-sm leading-6 text-forest-600">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
