import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceGroup from "../components/ServiceGroup";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { forestryGroups, forestryFocus } from "../data/site";

export default function Forestry() {
  useSeo(
    "Forestry & Landscaping",
    "Forestry, landscaping & nursery services: indigenous seed & seedling supply, nursery establishment, reforestation & restoration, landscaping, ornamentals, and environmental conservation."
  );

  return (
    <>
      <PageHero
        eyebrow="Forestry, Landscaping & Nursery"
        title="Indigenous trees, restored landscapes, green spaces"
        crumb="Forestry & Landscaping"
      >
        We source and propagate indigenous trees, establish nurseries, restore landscapes, and design
        beautiful, sustainable green spaces.
      </PageHero>

      {/* Intro split */}
      <section className="section">
        <div className="container-cc grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img src="/img/scene-forest.svg" alt="Forest landscape" className="w-full rounded-xl shadow-md" />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow mb-3">Rooted in Restoration</span>
            <h2 className="text-3xl md:text-4xl">From seed to standing forest</h2>
            <p className="mt-4 text-muted">
              We connect buyers and sellers of indigenous tree seeds and seedlings, build community
              nurseries, and deliver large-scale reforestation, afforestation, and restoration programs —
              alongside professional landscaping and ornamental services.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {forestryFocus.map((f) => (
                <span key={f} className="chip">
                  <Icon name="leaf" className="h-4 w-4" />
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service groups */}
      <section className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="Forestry Services" title="Our forestry, nursery & landscaping services">
            A complete offering across the supply, restoration, landscaping, and conservation spectrum.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forestryGroups.map((g, i) => (
              <ServiceGroup key={g.title} group={g} delay={(i % 3) * 80} />
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Let's restore your landscape" text="Whether you need indigenous seedlings, a nursery, a restoration program, or professional landscaping, our team is ready to help." />
    </>
  );
}
