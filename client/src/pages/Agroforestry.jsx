import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CategoryServices from "../components/CategoryServices";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { agroforestryGroups, fruitSpecies, agroforestrySpecies } from "../data/site";

function SpeciesCard({ title, icon, species }) {
  return (
    <Reveal className="rounded-2xl border border-line bg-white p-8 shadow-sm">
      <div className="mb-4 flex items-center gap-3.5">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-50 text-forest-700">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        <h3 className="m-0 text-xl">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {species.map((s) => (
          <span key={s} className="rounded-full bg-forest-50 px-4 py-2 text-sm font-medium text-forest-700">
            {s}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export default function Agroforestry() {
  useSeo(
    "Agroforestry Solutions",
    "Agroforestry & agricultural services: agroforestry design, fruit tree & orchard development, agroforestry tree propagation, IPM, climate-smart agriculture advisory, and farmer training."
  );

  return (
    <>
      <PageHero
        eyebrow="Agroforestry Solutions & Agriculture"
        title="Transforming farms through agroforestry"
        crumb="Agroforestry"
      >
        Climate-smart agroforestry design, fruit-tree and agroforestry tree production, integrated pest
        management, and farmer capacity building for resilient, productive farms.
      </PageHero>

      <CategoryServices
        groups={agroforestryGroups}
        eyebrow="Agroforestry Services"
        title="Choose a category"
        intro="Select a category to jump straight to its agroforestry & agricultural services."
      />

      {/* Species */}
      <section id="species" className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="Planting Material" title="Species we propagate & supply">
            Quality fruit and multipurpose agroforestry tree species suited to local conditions.
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-2">
            <SpeciesCard title="Fruit Tree Species" icon="fruit" species={fruitSpecies} />
            <SpeciesCard title="Agroforestry Tree Species" icon="sprout" species={agroforestrySpecies} />
          </div>
        </div>
      </section>

      <CTABand
        title="Grow more from every acre"
        text="Partner with us to design climate-smart agroforestry systems, establish orchards, and build farmer capacity."
      />
    </>
  );
}
