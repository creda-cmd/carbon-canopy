import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceGroup from "../components/ServiceGroup";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { showcase, portfolioGroups, portfolioSectors } from "../data/site";

export default function Portfolio() {
  useSeo(
    "Projects Portfolio",
    "CarbonCanopy Solutions delivers end-to-end project development, management, MERL, safeguards, GIS, and fundraising support across carbon, forestry, agroforestry, and environmental sectors."
  );

  return (
    <>
      <PageHero
        eyebrow="Projects Portfolio"
        title="End-to-end project development & management"
        crumb="Portfolio"
      >
        We develop, manage, monitor, and report on carbon, forestry, agroforestry, and environmental
        projects that generate measurable impact.
      </PageHero>

      {/* Showcase */}
      <section className="section">
        <div className="container-cc">
          <SectionHeading eyebrow="Representative Work" title="The kinds of projects we deliver">
            Illustrative examples of project types across our service areas.
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

      {/* Portfolio services */}
      <section className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="Portfolio Services" title="Full project lifecycle support">
            Comprehensive capabilities from concept to completion and learning.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioGroups.map((g, i) => (
              <ServiceGroup key={g.title} group={g} delay={(i % 3) * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section forest-gradient text-forest-100">
        <div className="container-cc">
          <SectionHeading eyebrow="Sectors Served" title="Where we create impact" light>
            We work across the full spectrum of climate, environment, and community development.
          </SectionHeading>
          <Reveal className="flex flex-wrap justify-center gap-3">
            {portfolioSectors.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-head font-medium text-forest-50"
              >
                <Icon name="check" className="h-4 w-4 text-sage-300" />
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand title="Have a project in mind?" />
    </>
  );
}
