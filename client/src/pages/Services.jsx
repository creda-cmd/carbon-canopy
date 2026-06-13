import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { serviceCategories, approachSteps } from "../data/site";

export default function Services() {
  useSeo(
    "Our Services",
    "Explore CarbonCanopy Solutions services: carbon project development, forestry & nursery, agroforestry & agriculture, and full project portfolio support."
  );

  return (
    <>
      <PageHero eyebrow="Our Services" title="End-to-end climate & land restoration services" crumb="Our Services">
        Four integrated service areas covering the full lifecycle of carbon, forestry, agroforestry, and
        environmental projects.
      </PageHero>

      <section className="section">
        <div className="container-cc">
          <div className="grid gap-7 lg:grid-cols-2">
            {serviceCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <span className="grid h-16 w-16 flex-none place-items-center rounded-2xl bg-gradient-to-br from-forest-400 to-forest-600 text-white">
                      <Icon name={c.icon} className="h-8 w-8" />
                    </span>
                    <h2 className="m-0 text-2xl">{c.title}</h2>
                  </div>
                  <p className="mt-4 text-muted">{c.blurb}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {c.highlights.map((h) => (
                      <li key={h} className="check-bullet text-sm">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/${c.slug}`} className="btn btn-ghost mt-7 self-start">
                    View details <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="How We Work" title="Our delivery approach">
            A transparent, results-driven lifecycle applied to every project.
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

      <CTABand />
    </>
  );
}
