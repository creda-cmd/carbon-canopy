import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { servicesByCategory, approachSteps } from "../data/site";

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

      {/* Quick category chips */}
      <section id="categories" className="section pb-0">
        <div className="container-cc">
          <SectionHeading eyebrow="Service Categories" title="Four integrated service areas">
            Choose a category to jump to its full list of services.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicesByCategory.map((c, i) => (
              <Reveal key={c.id} delay={i * 70}>
                <a
                  href={`#${c.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-md"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-forest-500 to-lime-500 text-white">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-lg leading-snug">{c.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-head text-sm font-semibold text-forest-600 group-hover:text-forest-700">
                    {c.items.length} services
                    <Icon name="arrow" className="h-4 w-4 rotate-90 transition-transform group-hover:translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full category sections */}
      {servicesByCategory.map((c) => (
        <section key={c.id} id={c.id} className="section">
          <div className="container-cc">
            <Reveal className="mb-8 flex items-start gap-4">
              <span className="grid h-16 w-16 flex-none place-items-center rounded-2xl bg-gradient-to-br from-forest-500 to-lime-500 text-white">
                <Icon name={c.icon} className="h-8 w-8" />
              </span>
              <div>
                <h2 className="m-0 text-2xl">{c.title}</h2>
                <p className="mt-2 max-w-2xl text-muted">{c.blurb}</p>
              </div>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.items.map((item, idx) => (
                <Reveal
                  key={item}
                  delay={(idx % 3) * 60}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-300 hover:shadow-md"
                >
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-forest-50 font-head text-sm font-bold text-forest-600">
                    {idx + 1}
                  </span>
                  <span className="pt-1 font-head text-[0.95rem] font-medium text-forest-800">{item}</span>
                </Reveal>
              ))}
            </div>
            <Link to={`/${c.slug}`} className="btn btn-ghost mt-7">
              Explore {c.title.split(" ")[0]} details <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </section>
      ))}

      <section id="approach" className="section bg-mist">
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
