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
      {/* Transition Carousel */}
      <section id="transition" className="section overflow-hidden">
        <div className="container-cc">
          <div className="mx-auto max-w-6xl">
            <div className="relative h-72 rounded-3xl shadow-lg md:h-96 lg:h-[520px] overflow-hidden">
              {transitionSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
                >
                  <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start gap-4 text-white md:flex-row md:items-center md:justify-between">
                    <div className="max-w-xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-200">{slide.title}</p>
                      <p className="mt-2 text-sm leading-6">{slide.desc}</p>
                    </div>
                    <div className="mt-4 flex gap-3 md:mt-0">
                      <Link to="/services" className="btn btn-primary">
                        View Services
                      </Link>
                      <Link to="/contact" className="btn btn-light">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="section bg-gradient-to-b from-white to-lime-50">
        <div className="container-cc">
          <SectionHeading 
            eyebrow="Our Approach" 
            title="Our Approach"
          />
          
          <Reveal className="mt-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
              {approachSteps.map((item, idx) => (
                <div key={item.step} className="group relative">
                  <div className="rounded-2xl border border-forest-200 bg-gradient-to-br from-lime-50 to-white p-6 text-center transition-all hover:shadow-lg hover:border-lime-400">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-lime-400 text-white">
                        <Icon name={item.icon} className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="font-bold text-forest-900 text-lg">{item.step}</h3>
                    <p className="mt-2 text-sm text-forest-600">{item.desc}</p>
                  </div>
                  {idx < approachSteps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden w-8 -translate-y-1/2 translate-x-1/2 lg:block">
                      <svg className="text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section id="standards" className="section bg-forest-50">
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
                className="rounded-xl border border-forest-200 bg-white p-4 text-center transition-all hover:border-lime-400 hover:shadow-md"
              >
                <Icon name="badge" className="mx-auto mb-2 h-5 w-5 text-lime-500" />
                <p className="font-semibold text-forest-900 text-sm">{s}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

    </>
  );
}
