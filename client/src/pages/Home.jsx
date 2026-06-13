import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CTABand from "../components/CTABand";
import {
  company,
  stats,
  serviceCategories,
  approachSteps,
  carbonStandards,
  values,
} from "../data/site";

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
              Growing <span className="text-sage-300">Climate Solutions</span> Naturally
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

      {/* Intro / mission */}
      <section className="section">
        <div className="container-cc grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="/img/scene-forest.svg"
              alt="Restored forest landscape"
              className="w-full rounded-xl shadow-md"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow mb-3">Who We Are</span>
            <h2 className="text-3xl md:text-4xl">
              A professional carbon &amp; forestry consultancy rooted in nature
            </h2>
            <p className="mt-4 text-muted">{company.mission}</p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {[
                "High-integrity carbon projects",
                "Indigenous forest restoration",
                "Climate-smart agroforestry",
                "Community empowerment & FPIC",
              ].map((t) => (
                <li key={t} className="check-bullet">
                  {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-ghost mt-7">
              More About Us <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Service categories */}
      <section className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="What We Do" title="Our Core Service Areas">
            From carbon project development to forestry, agroforestry, and full project management — an
            end-to-end partner for climate and land restoration.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link to={`/${c.slug}`} className="card group flex h-full flex-col">
                  <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-forest-50 text-forest-700">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="text-xl">{c.title}</h3>
                  <p className="mt-1 text-[0.97rem]">{c.blurb}</p>
                  <ul className="mt-4 grid gap-1.5">
                    {c.highlights.map((h) => (
                      <li key={h} className="leaf-bullet text-sm">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-head text-sm font-semibold text-forest-600">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section forest-gradient text-forest-100">
        <div className="container-cc">
          <SectionHeading eyebrow="Our Approach" title="A proven path from idea to impact" light>
            Every engagement follows a rigorous, transparent lifecycle that delivers measurable,
            verifiable results.
          </SectionHeading>
          <Reveal className="flex flex-wrap items-center justify-center gap-3">
            {approachSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-head font-semibold text-forest-50">
                  <span className="h-2.5 w-2.5 rounded-full bg-sage-300" />
                  {step}
                </span>
                {i < approachSteps.length - 1 && (
                  <Icon name="arrow" className="hidden h-5 w-5 text-sage-300 sm:block" />
                )}
              </div>
            ))}
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

      {/* Values teaser */}
      <section className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="Our Values" title="Principles that guide every project">
            Ten core values keep our work credible, inclusive, and impact-driven.
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.slice(0, 6).map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className="card">
                <h3 className="text-lg">{v.title}</h3>
                <p className="mt-1 text-[0.93rem]">{v.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/about" className="btn btn-ghost">
              See all 10 values <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
