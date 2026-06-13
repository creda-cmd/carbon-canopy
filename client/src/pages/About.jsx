import useSeo from "../hooks/useSeo";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTABand from "../components/CTABand";
import { company, values } from "../data/site";

const _t = company.taglines;

export default function About() {
  useSeo(
    "About Us",
    "Learn about CarbonCanopy Solutions — our vision, mission, ten core values, and our motto: Restoring Landscapes. Creating Carbon Value. Empowering Communities."
  );

  return (
    <>
      <PageHero eyebrow="About Us" title="Restoring landscapes, creating carbon value" crumb="About Us">
        We are a professional carbon, forestry, and climate-smart consultancy committed to measurable
        environmental, social, and economic impact.
      </PageHero>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container-cc grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-mist p-9">
            <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-forest-600 text-white">
              <Icon name="globe" className="h-7 w-7" />
            </span>
            <h2 className="text-2xl">Our Vision</h2>
            <p className="mt-3 text-muted">{company.vision}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-line bg-mist p-9">
            <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-forest-600 text-white">
              <Icon name="sprout" className="h-7 w-7" />
            </span>
            <h2 className="text-2xl">Our Mission</h2>
            <p className="mt-3 text-muted">{company.mission}</p>
          </Reveal>
        </div>
      </section>

      {/* Motto band */}
      <section className="section cta-gradient text-center text-forest-100">
        <div className="container-cc">
          <Reveal>
            <span className="eyebrow mb-3 justify-center text-sage-300">Our Motto</span>
            <p className="mx-auto max-w-3xl font-head text-2xl font-semibold text-white md:text-4xl">
              “{company.motto}”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container-cc">
          <SectionHeading eyebrow="Core Values" title="Ten principles that guide our work">
            Our values define how we operate, partner, and deliver impact across every engagement.
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 3) * 80}
                className="h-full rounded-xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="mb-3.5 grid h-12 w-12 place-items-center rounded-xl bg-forest-50 font-head text-xl font-bold text-forest-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg">{v.title}</h3>
                <p className="mt-1 text-[0.93rem]">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Taglines */}
      <section className="section bg-mist">
        <div className="container-cc">
          <SectionHeading eyebrow="What We Stand For" title="Our promise, in a few words">
            Different ways we express our commitment to nature-based climate action.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {_t.map((t, i) => (
              <Reveal
                key={t}
                delay={(i % 3) * 70}
                className="flex items-center gap-3 rounded-xl border border-line bg-white p-5 shadow-sm"
              >
                <Icon name="leaf" className="h-6 w-6 flex-none text-forest-500" />
                <span className="font-head font-medium text-forest-800">“{t}”</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Work with a team that delivers measurable impact" />
    </>
  );
}
