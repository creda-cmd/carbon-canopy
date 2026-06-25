import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { carbonStandards } from "../data/site";

const projectGallery = [
  { src: "/WhatsApp Image 2026-06-22 at 3.00.06 PM.jpeg", title: "Project 1" },
  { src: "/WhatsApp Image 2026-06-22 at 3.09.17 PM.jpeg", title: "Project 2" },
  { src: "/WhatsApp Image 2026-06-22 at 3.09.18 PM.jpeg", title: "Project 3" },
  { src: "/WhatsApp Image 2026-06-22 at 3.09.27 PM.jpeg", title: "Project 4" },
  { src: "/WhatsApp Image 2026-06-22 at 3.10.22 PM.jpeg", title: "Project 5" },
  { src: "/WhatsApp Image 2026-06-23 at 10.04.14 PM.jpeg", title: "Project 6" },
  { src: "/5fe9a97d-1413-4025-a302-c956eb1fe5cb.jpg", title: "Project 7" },
  { src: "/0f191e18-a4e6-4b02-b3d5-deb20833110a.jpg", title: "Project 8" },
  { src: "/25c07683-b084-4ff4-a4d3-a4ae9b5e62b1.jpg", title: "Project 9" },
  { src: "/3d41b028-8d1a-4a54-9671-44379561037d.jpg", title: "Project 10" },
  { src: "/606928d3-d3b0-4ba9-bb05-7ae9d5316ef2.jpg", title: "Project 11" },
  { src: "/b4335611-d517-4a35-a855-6892616c3d74.jpg", title: "Project 12" },
  { src: "/c8101708-50df-48f7-8c63-1ad4660c23f2.jpg", title: "Project 13" },
  { src: "/ee3f00e1-2816-4967-8cfe-74b16fd17aaf.jpg", title: "Project 14" },
  { src: "/e8c16dab-48ec-4832-b836-095e35137555.jpg", title: "Project 15" },
  { src: "/WhatsApp Image 2026-06-22 at 2.58.04 PM.jpeg", title: "Project 16" },
];

const heroSlides = [
  {
    image: "/hero6.jpg",
    alt: "Building a green future",
    headline: ["Building a Green Future", "Through Carbon & Forestry."],
    sub: "We develop and implement nature-based solutions that create carbon value, restore landscapes, and empower communities for generations.",
  },
  {
    image: "/hero5.jpg",
    alt: "Forestry meets climate innovation",
    headline: ["Where Forestry Meets", "Climate Innovation."],
    sub: "From project design to verification, we connect landowners, communities, and carbon markets through science-led forestry and agroforestry.",
  },
  {
    image: "/hero1.jpeg",
    alt: "Growing climate solutions",
    headline: ["Growing Climate", "Solutions Naturally."],
    sub: "End-to-end carbon project development, forestry, agroforestry, and climate-smart consulting — turning degraded land into thriving ecosystems.",
  },
];

export default function Home() {
  useSeo(
    "",
    "CarbonCanopy Solutions delivers carbon project development, forestry, agroforestry, and climate-smart consulting that restore landscapes, create carbon value, and empower communities."
  );

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);
  const [lightbox, setLightbox] = useState(null);

  const approachSteps = [
    { step: 'Assess',     icon: 'search',  desc: 'Evaluate landscape potential and baseline conditions',              accent: 'from-forest-400 to-forest-600' },
    { step: 'Design',     icon: 'layers',  desc: 'Develop comprehensive project frameworks and methodology',          accent: 'from-forest-600 to-forest-800' },
    { step: 'Implement',  icon: 'sprout',  desc: 'Execute restoration and carbon activities on the ground',           accent: 'from-lime-400 to-forest-500' },
    { step: 'Monitor',    icon: 'chart',   desc: 'Track progress with real-time data collection',                     accent: 'from-forest-500 to-lime-500' },
    { step: 'Verify',     icon: 'shield',  desc: 'Validate results through rigorous third-party assessment',          accent: 'from-forest-700 to-forest-900' },
    { step: 'Report',     icon: 'doc',     desc: 'Document outcomes and generate verified carbon credits',             accent: 'from-lime-300 to-lime-500' },
    { step: 'Scale',      icon: 'globe',   desc: 'Expand successful models across landscapes and regions',             accent: 'from-forest-600 to-lime-400' },
  ];

  const stats = [
    { value: '10,000+', label: 'Trees Planted', icon: 'tree' },
    { value: '250+', label: 'Projects Done', icon: 'folder' },
    { value: '200+', label: 'Satisfied Clients', icon: 'users' },
    { value: '8', label: 'Carbon Standards', icon: 'badge' },
  ];

  return (
    <>
      {/* Hero — 3-slide crossfade, full viewport */}
      <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={`h-full w-full object-cover object-center hero-kb-${i + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
          </div>
        ))}
        <div className="container-cc relative z-10 flex flex-1 flex-col items-center justify-center py-32 text-center text-white">
          <Reveal>
            <h1 className="mx-auto max-w-4xl text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              {heroSlides[active].headline[0]}<br />
              <span className="text-lime-300">{heroSlides[active].headline[1]}</span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/services" className="btn btn-primary px-8 py-3 text-base shadow-xl">
                Explore Our Services
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn btn-light px-8 py-3 text-base shadow-xl">
                Contact Us
              </Link>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-lime-300" : "w-2.5 bg-white/40"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-forest-900 py-10">
        <div className="container-cc">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 text-white shadow-lg">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <p className="text-3xl font-black text-lime-300">{s.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach & Standards */}
      <section id="approach" className="section bg-forest-100">
        <div className="container-cc">

          {/* Approach heading */}
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold uppercase text-forest-900 md:text-4xl">Our Approach</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-forest-600 to-lime-400" />
          </Reveal>

          {/* Circular layout */}
          <Reveal>
            {/* Desktop wheel */}
            {(() => {
              const W = 760, H = 760, CX = 380, CY = 380, R = 270, nodeR = 72;
              const steps = approachSteps;
              const pts = steps.map((_, i) => {
                const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
                return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle), angle };
              });
              return (
                <div className="relative mx-auto hidden md:block" style={{ width: W, height: H }}>
                  {/* SVG: orbit ring + spokes */}
                  <svg className="absolute inset-0 pointer-events-none" width={W} height={H}>
                    <circle cx={CX} cy={CY} r={R} fill="none" stroke="#8fd0a4" strokeWidth="2" strokeDasharray="6 5" opacity="0.5" />
                    {pts.map((p, i) => (
                      <line key={i}
                        x1={CX + 68 * Math.cos(p.angle)} y1={CY + 68 * Math.sin(p.angle)}
                        x2={p.x - nodeR * Math.cos(p.angle)} y2={p.y - nodeR * Math.sin(p.angle)}
                        stroke="#2e9e54" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.45"
                      />
                    ))}
                  </svg>

                  {/* Centre hub — logo */}
                  <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex h-[136px] w-[136px] items-center justify-center rounded-full bg-white shadow-2xl ring-[5px] ring-forest-300">
                    <img src="/img/logo.svg" alt="CarbonCanopy" className="h-24 w-24 object-contain" />
                  </div>

                  {/* Step nodes */}
                  {steps.map((item, i) => {
                    const p = pts[i];
                    return (
                      <div
                        key={item.step}
                        className="group absolute z-10 transition-all duration-300 hover:scale-110 hover:z-30"
                        style={{ left: p.x - nodeR, top: p.y - nodeR, width: nodeR * 2, height: nodeR * 2 }}
                      >
                        {/* Gradient outer ring */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.accent} shadow-xl`} />
                        {/* White inner circle */}
                        <div className="absolute inset-[5px] rounded-full bg-white flex flex-col items-center justify-center gap-0.5 px-2">
                          {/* Step number */}
                          <span className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} text-[9px] font-black text-white shadow`}>
                            {i + 1}
                          </span>
                          {/* Icon */}
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${item.accent}`}>
                            <Icon name={item.icon} className="h-4 w-4 text-white" strokeWidth={2} />
                          </div>
                          {/* Title */}
                          <p className="text-center text-[11px] font-black leading-tight text-forest-900">{item.step}</p>
                          {/* Description */}
                          <p className="text-center text-[9px] font-semibold leading-[1.3] text-forest-700 px-1">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Mobile: stacked cards */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              {approachSteps.map((item, i) => (
                <div key={item.step} className="group relative flex flex-col items-center rounded-3xl bg-white p-4 shadow-md ring-2 ring-forest-100 transition-all hover:shadow-lg hover:ring-lime-300">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} shadow-md`}>
                    <Icon name={item.icon} className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="mt-1 text-[9px] font-black uppercase tracking-widest text-forest-400">Step {i + 1}</span>
                  <h3 className="mt-0.5 text-center text-xs font-black text-forest-900">{item.step}</h3>
                  <p className="mt-1 text-center text-[10px] leading-4 text-forest-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Dividing line */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-forest-300 to-transparent" />

          {/* Standards heading */}
          <Reveal className="mb-10 mt-10 text-center">
            <h2 className="text-3xl font-bold uppercase text-forest-900 md:text-4xl">Standards</h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-forest-600 to-lime-400" />
          </Reveal>

          {/* Standards grid */}
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {carbonStandards.map((s, i) => {
                const stdAccents = [
                  'from-forest-600 to-lime-400',
                  'from-forest-700 to-forest-500',
                  'from-lime-500 to-forest-600',
                  'from-forest-500 to-lime-500',
                  'from-forest-800 to-forest-600',
                  'from-lime-400 to-forest-700',
                  'from-forest-600 to-forest-800',
                  'from-lime-300 to-forest-500',
                ];
                const acc = stdAccents[i % stdAccents.length];
                return (
                  <div key={s} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-lime-300">
                    <div className={`h-1 w-full bg-gradient-to-r ${acc}`} />
                    <div className="flex items-center gap-3 px-4 py-3">
                      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${acc} text-white shadow transition-transform duration-300 group-hover:scale-110`}>
                        <Icon name="badge" className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span className="text-xs font-bold leading-tight text-forest-900">{s}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

        </div>
      </section>

      {/* Projects Gallery */}
      <section id="gallery" className="section bg-black">
        <div className="container-cc">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-bold uppercase text-lime-400">Projects Gallery</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400" />
          </Reveal>

          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projectGallery.map((img, i) => (
              <Reveal key={img.src} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => setLightbox(img)}
                  className="group relative block w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-bold text-white">{img.title}</p>
                  </div>
                  <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <Icon name="search" className="h-4 w-4" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="h-full w-full object-contain max-h-[80vh]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-base font-bold text-white">{lightbox.title}</p>
            </div>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
