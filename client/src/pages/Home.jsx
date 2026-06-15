import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CTABand from "../components/CTABand";
import { stats, carbonStandards } from "../data/site";

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
              Growing <span className="text-lime-300">Climate Solutions</span> Naturally
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

      <CTABand />
    </>
  );
}
