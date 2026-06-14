import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import CategoryServices from "../components/CategoryServices";
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
      <section id="focus" className="section">
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

      <CategoryServices
        groups={forestryGroups}
        eyebrow="Forestry Services"
        title="Our forestry, nursery & landscaping services"
        intro="Our full range of forestry, nursery and landscaping services — use the menu or search to jump to a category."
      />

      <CTABand title="Let's restore your landscape" text="Whether you need indigenous seedlings, a nursery, a restoration program, or professional landscaping, our team is ready to help." />
    </>
  );
}
