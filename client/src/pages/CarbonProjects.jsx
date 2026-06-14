import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceGroup from "../components/ServiceGroup";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { carbonGroups, carbonStandards, approachSteps } from "../data/site";

const groupId = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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

      {/* Category chooser */}
      <section id="services" className="section">
        <div className="container-cc">
          <SectionHeading eyebrow="Carbon Services" title="Choose a category">
            Select a category to jump straight to its services.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {carbonGroups.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 60}>
                <a
                  href={`#${groupId(g.title)}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-md"
                >
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br from-forest-500 to-lime-500 text-white">
                    <Icon name={g.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-head text-[1.02rem] font-semibold leading-snug text-forest-800">
                      {g.title}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1.5 font-head text-sm font-semibold text-forest-600">
                      {g.items.length} services
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed services per category */}
      <section className="section bg-mist pt-0">
        <div className="container-cc space-y-7 pt-16">
          {carbonGroups.map((g, i) => (
            <div key={g.title} id={groupId(g.title)} className="scroll-mt-32">
              <ServiceGroup group={g} delay={(i % 2) * 80} wide />
            </div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section id="standards" className="section forest-gradient text-forest-100">
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
      <section id="approach" className="section bg-mist">
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
