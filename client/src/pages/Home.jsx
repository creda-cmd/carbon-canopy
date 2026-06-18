import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { carbonStandards } from "../data/site";

export default function Home() {
  useSeo(
    "",
    "CarbonCanopy Solutions delivers carbon project development, forestry, agroforestry, and climate-smart consulting that restore landscapes, create carbon value, and empower communities."
  );

  const transitionSlides = [
    {
      id: 1,
      image: "/img/transition-1.jpg",
      alt: "Carbon project landscape",
      title: "Carbon Project Development",
      desc: "Aerial view of a carbon project site showcasing forest restoration pathways.",
    },
    {
      id: 2,
      image: "/img/transition-2.jpg",
      alt: "Forest restoration work",
      title: "Forest Restoration",
      desc: "Hands-on planting, nursery care, and ecosystem recovery in forest landscapes.",
    },
    {
      id: 3,
      image: "/img/transition-3.jpg",
      alt: "Agroforestry systems",
      title: "Agroforestry Systems",
      desc: "Integrated tree-crop systems that boost productivity and climate resilience.",
    },
    {
      id: 4,
      image: "/img/transition-4.jpg",
      alt: "Community engagement",
      title: "Community Engagement",
      desc: "Local stakeholders collaborating on sustainable land use and livelihoods.",
    },
    {
      id: 5,
      image: "/img/transition-5.jpg",
      alt: "Environmental impact",
      title: "Climate & Biodiversity Impact",
      desc: "Measurable environmental and social impact from restoration and carbon work.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveSlide((s) => (s + 1) % transitionSlides.length), 5000);
    return () => clearInterval(id);
  }, [transitionSlides.length]);

  const approachSteps = [
    { step: 'Assess', icon: 'search', desc: 'Evaluate landscape potential and baseline conditions' },
    { step: 'Design', icon: 'pencil', desc: 'Develop comprehensive project frameworks' },
    { step: 'Implement', icon: 'check', desc: 'Execute restoration and carbon activities' },
    { step: 'Monitor', icon: 'eye', desc: 'Track progress with real-time data collection' },
    { step: 'Verify', icon: 'badge', desc: 'Validate results through rigorous assessment' },
    { step: 'Report', icon: 'file', desc: 'Document outcomes and generate carbon credits' },
    { step: 'Scale', icon: 'growth', desc: 'Expand successful models across landscapes' },
  ];

  return (
    <>
      {/* Transition Section */}
      <section id="transition" className="section overflow-hidden bg-lime-50">
        <div className="container-cc">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.7fr] items-stretch">
            <div className="group overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-forest-600 via-lime-400 to-lime-200 p-[1px] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-full flex-col justify-center rounded-[calc(1rem-1px)] bg-white p-10 text-center text-forest-900">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-forest-600">
                  Our Services
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-forest-900">
                  Restoring Landscapes, Creating Carbon Value
                </h2>
                <p className="mt-4 text-sm leading-6 text-forest-600">
                  Explore solutions built for restoration, carbon development, and climate-smart consulting.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link to="/services" className="btn btn-primary w-full sm:w-auto">
                    View Services
                  </Link>
                  <Link to="/contact" className="btn bg-lime-500 text-white hover:bg-lime-600 w-full sm:w-auto shadow-md">
                    Contact Us
                  </Link>
                </div>
                <p className="mt-6 text-sm leading-6 text-forest-600">
                  Need help selecting the right package? Our team can support scoping, verification, and long-term landscape outcomes.
                </p>
                <div className="mt-8 rounded-[1.5rem] bg-lime-400/10 p-5 text-left text-forest-900">
                  <p className="text-sm leading-6">
                    Prefer a direct conversation? We can connect you to project scoping and climate advisory support.
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <span className="text-sm text-forest-600">
                      Or call us for a faster response.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[720px] overflow-hidden rounded-3xl shadow-lg lg:h-[780px]">
              <img
                src={transitionSlides[activeSlide].image}
                alt={transitionSlides[activeSlide].alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-10 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-200">
                  {transitionSlides[activeSlide].title}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6">{transitionSlides[activeSlide].desc}</p>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-2">
                {transitionSlides.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setActiveSlide(dotIndex)}
                    className={`h-3 w-3 rounded-full transition-all ${dotIndex === activeSlide ? "bg-white" : "bg-white/40"}`}
                    aria-label={`Slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="section bg-lime-100">
        <div className="container-cc">
          <SectionHeading 
            eyebrow="Our Approach" 
            title="Our Approach"
          />
          
          <Reveal className="mt-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {approachSteps.map((item) => (
                <div key={item.step} className="group h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-forest-600 via-lime-400 to-lime-200 p-[1px] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="rounded-[calc(1rem-1px)] bg-white p-4 text-center text-forest-900">
                    <div className="mb-3 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-lime-400 text-white">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="h-1 w-full rounded-full bg-lime-400" />
                    <h3 className="mt-3 font-bold text-forest-900 text-base">{item.step}</h3>
                    <p className="mt-2 text-sm text-forest-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section id="standards" className="section bg-lime-200">
        <div className="container-cc">
          <SectionHeading 
            eyebrow="Standards & Methodologies" 
            title="Carbon standards we work with"
          >
            We develop and support projects across the world's leading voluntary and jurisdictional
            carbon standards.
          </SectionHeading>
          <Reveal className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {carbonStandards.map((s) => (
              <div 
                key={s} 
                className="group h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-forest-600 via-lime-400 to-lime-200 p-[1px] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="rounded-[calc(1rem-1px)] bg-white px-5 py-5 text-center text-forest-900">
                  <div className="h-1 w-full rounded-full bg-lime-400" />
                  <Icon name="badge" className="mx-auto my-3 h-5 w-5 text-lime-500" />
                  <p className="font-semibold text-forest-900 text-sm">{s}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

    </>
  );
}
