import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CTABand from "../components/CTABand";
import { stats, carbonStandards, showcase } from "../data/site";

export default function Home() {
  useSeo(
    "",
    "CarbonCanopy Solutions delivers carbon project development, forestry, agroforestry, and climate-smart consulting that restore landscapes, create carbon value, and empower communities."
  );

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden text-forest-100">
        <div className="container-cc relative z-10 grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-forest-100">
              <Icon name="leaf" className="h-4 w-4 text-sage-300" />
              Nature-Based Solutions for a Sustainable Future
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-[3.4rem]">
              Restoring <span className="text-lime-300">Landscapes</span>. Creating{" "}
              <span className="text-lime-300">Carbon Value</span>. Empowering{" "}
              <span className="text-lime-300">Communities</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-forest-100">
              CarbonCanopy Solutions develops high-integrity carbon projects, restores forests and
              landscapes, and builds climate-smart agroforestry systems that empower communities and
              create measurable impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn btn-light">
                Start a Project
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <strong className="block font-head text-3xl text-white">{s.value}</strong>
                  <span className="text-sm text-forest-200">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="hidden lg:block">
            <div className="animate-floaty rounded-2xl border border-white/15 bg-white/5 p-5 shadow-lg backdrop-blur">
              <img
                src="/img/scene-carbon.svg"
                alt="Illustration of the carbon cycle with a tree, soil and CO2"
                className="w-full rounded-xl"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {["Assess", "Restore", "Verify"].map((t) => (
                  <div key={t} className="rounded-lg bg-white/10 py-2.5 font-head text-sm text-white">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section className="section">
        <div className="container-cc">
          <SectionHeading eyebrow="Standards & Methodologies" title="Carbon standards we work with">
            We develop and support projects across the world's leading voluntary and jurisdictional
            carbon standards.
          </SectionHeading>
          <Reveal className="flex flex-wrap justify-center gap-3">
            {carbonStandards.map((s) => (
              <span key={s} className="chip">
                <Icon name="badge" className="h-4 w-4" />
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Completed projects */}
      <section className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="Our Work" title="Completed projects">
            A selection of projects we've delivered across carbon, forestry, and agroforestry.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {showcase.map((p, i) => (
              <Reveal
                key={p.title}
                delay={(i % 3) * 80}
                className="group h-full overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={`/img/scene-${p.scene}.svg`}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1.5 font-head text-[0.72rem] font-semibold uppercase tracking-wide text-forest-700">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-1 text-[0.93rem]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
