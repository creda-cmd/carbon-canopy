import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceGroup from "../components/ServiceGroup";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { carbonGroups, carbonStandards, approachSteps } from "../data/site";

export default function CarbonProjects() {
  useSeo(
    "Carbon Projects",
    "Carbon project development services: feasibility, baselines, PDD, MRV, validation & verification, registration (Verra, Gold Standard, ART/TREES, Plan Vivo), GIS, and carbon finance advisory."
  );

  return (
    <>
      <PageHero
        eyebrow="Carbon Project Development"
        title="High-integrity carbon projects, end to end"
        crumb="Carbon Projects"
      >
        From feasibility and baselines through PDD, MRV, validation, registration, and finance advisory —
        we develop credible, verifiable carbon projects across leading standards.
      </PageHero>

      <section className="section">
        <div className="container-cc">
          <SectionHeading eyebrow="Carbon Services" title="Our full carbon project capability">
            Comprehensive support across every stage of the carbon project lifecycle.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {carbonGroups.map((g, i) => (
              <ServiceGroup key={g.title} group={g} delay={(i % 3) * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section forest-gradient text-forest-100">
        <div className="container-cc">
          <SectionHeading eyebrow="Standards Expertise" title="Carbon standards & methodologies" light>
            We develop and support projects across the world's leading carbon standards and frameworks.
          </SectionHeading>
          <Reveal className="flex flex-wrap justify-center gap-3">
            {carbonStandards.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-head font-medium text-forest-50"
              >
                <Icon name="badge" className="h-4 w-4 text-sage-300" />
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="Project Lifecycle" title="Assess → Verify → Scale">
            A disciplined methodology that turns land and community potential into verified carbon value.
          </SectionHeading>
          <Reveal className="flex flex-wrap items-center justify-center gap-3">
            {approachSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-3 font-head font-semibold text-forest-700 shadow-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-forest-600 text-xs text-white">
                    {i + 1}
                  </span>
                  {step}
                </span>
                {i < approachSteps.length - 1 && (
                  <Icon name="arrow" className="hidden h-5 w-5 text-forest-400 sm:block" />
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand title="Ready to develop your carbon project?" />
    </>
  );
}
