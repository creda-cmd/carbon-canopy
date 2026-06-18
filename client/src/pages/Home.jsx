import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Slider from "../components/Slider";
import { carbonStandards } from "../data/site";

export default function Home() {
  const slides = [
    {
      tag: "Carbon",
      title: "Carbon Project Development in Action",
      desc: "Visualize carbon finance, project design, and verification work across living landscapes.",
      icon: "carbon",
      image: "/img/scene-carbon.svg",
    },
    {
      tag: "Agroforestry",
      title: "Climate-Smart Agroforestry Systems",
      desc: "See resilient tree-based farming and community-led landscape restoration in motion.",
      icon: "leaf",
      image: "/img/scene-forest.svg",
    },
    {
      tag: "Forestry",
      title: "Forest Restoration & Nursery Support",
      desc: "Highlighting indigenous nursery, planting and ecosystem recovery work across our projects.",
      icon: "tree",
      image: "/img/scene-forest.svg",
    },
  ];

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
              <Icon name="leaf" className="h-4 w-4 text-lime-200" />
              Nature-Based Solutions for a Sustainable Future
            </span>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-[3.4rem]">
              Restoring <span className="text-lime-300">Landscapes</span>. Creating{' '}
              <span className="text-lime-300">Carbon Value</span>. Empowering{' '}
              <span className="text-lime-300">Communities</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-forest-100">
              CarbonCanopy Solutions develops high-integrity carbon projects, restores forests and
              landscapes, and builds climate-smart agroforestry systems that empower communities and
              create measurable impact.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {['Assess', 'Restore', 'Verify'].map((t) => (
                <div key={t} className="rounded-3xl border border-white/20 bg-white/10 px-4 py-4 text-center text-sm font-semibold text-white shadow-sm backdrop-blur">
                  {t}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="block">
            <Slider slides={slides} />
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section id="standards" className="section">
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

    </>
  );
}
