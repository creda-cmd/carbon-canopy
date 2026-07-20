import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { carbonStandards } from "../data/site";

const projectGallery = [
  { src: "/image 15.jpeg", title: "Project 1" },
  { src: "/c8101708-50df-48f7-8c63-1ad4660c23f2.jpg", title: "Project 2" },
  { src: "/WhatsApp Image 2026-06-22 at 3.09.18 PM.jpeg", title: "Project 3" },
  { src: "/WhatsApp Image 2026-06-22 at 3.09.27 PM.jpeg", title: "Project 4" },
  { src: "/WhatsApp Image 2026-06-22 at 3.10.22 PM.jpeg", title: "Project 5" },
  { src: "/WhatsApp Image 2026-06-23 at 10.04.14 PM.jpeg", title: "Project 6" },
  { src: "/5fe9a97d-1413-4025-a302-c956eb1fe5cb.jpg", title: "Project 7" },
  { src: "/0f191e18-a4e6-4b02-b3d5-deb20833110a.jpg", title: "Project 8" },
  { src: "/25c07683-b084-4ff4-a4d3-a4ae9b5e62b1.jpg", title: "Project 9" },
  { src: "/3d41b028-8d1a-4a54-9671-44379561037d.jpg", title: "Project 10" },
  { src: "/image 13.jpeg", title: "Project 11" },
  { src: "/WhatsApp Image 2026-06-22 at 3.09.17 PM.jpeg", title: "Project 12" },
  { src: "/ee3f00e1-2816-4967-8cfe-74b16fd17aaf.jpg", title: "Project 13" },
  { src: "/e8c16dab-48ec-4832-b836-095e35137555.jpg", title: "Project 14" },
  { src: "/image20.jpg", title: "Project 15" },
  { src: "/image14.jpeg", title: "Project 16" },
  { src: "/image18.jpg", title: "Project 17" },
  { src: "/image19.jpg", title: "Project 18" },
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

      {/* Who We Are */}
      <section className="section bg-forest-50">
        <div className="container-cc">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-lime-300/60" />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/canopy3.jpg"
                    alt="Growing seedlings — CarbonCanopy Solutions"
                    className="h-[420px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-lime-600">Who We Are</p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-forest-900 md:text-4xl">
                Rooted in Nature.<br />
                <span className="text-forest-600">Driven by Impact.</span>
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-forest-600" />
              <p className="mt-6 text-base leading-8 text-forest-500">
                CarbonCanopy Solutions specializes in delivering projects that generate measurable environmental, social, and economic impact while supporting climate resilience, sustainable livelihoods, and ecosystem restoration.
              </p>
              <p className="mt-4 text-base leading-8 text-forest-500">
                Based in Kenya, we work across the full project lifecycle, from feasibility and design through implementation, monitoring, verification, and scaling, serving communities, landowners, investors, and government bodies across the region.
              </p>
              <p className="mt-4 text-base leading-8 text-forest-500">
                Our work spans carbon project development, forestry and landscaping, agroforestry, and project portfolio management, all grounded in internationally recognised standards including Verra VCS, Gold Standard, Plan Vivo, and ART/TREES.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach & Standards */}
      <section id="approach" className="section bg-forest-100">
        <div className="container-cc">

          {/* Approach image + Standards side by side */}
          <div className="grid items-start gap-10 lg:grid-cols-2">

            {/* Left: Our Approach heading + image */}
            <Reveal>
              <h2 className="mb-3 text-3xl font-bold uppercase text-forest-900 md:text-4xl">Our Approach</h2>
              <div className="mb-6 h-1 w-20 rounded-full bg-forest-600" />
              <div className="overflow-hidden rounded-xl bg-forest-100 p-4">
                <img
                  src="/ChatGPT Image Jun 25, 2026, 11_17_55 PM.png"
                  alt="Our 7-step approach: Assess, Design, Implement, Monitor, Verify, Report, Scale"
                  className="w-full object-contain mix-blend-multiply"
                />
              </div>
            </Reveal>

            {/* Right: Standards heading + grid */}
            <Reveal delay={80}>
              <h2 className="mb-3 text-3xl font-bold uppercase text-forest-900 md:text-4xl">Standards</h2>
              <div className="mb-6 h-1 w-20 rounded-full bg-forest-600" />
              <div className="grid grid-cols-2 gap-3">
                {carbonStandards.map((s) => (
                    <div key={s} className="group relative overflow-hidden rounded-lg bg-forest-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="h-1 w-full bg-forest-600" />
                      <div className="flex items-center gap-3 px-3 py-2">
                        <Icon name="badge" className="h-4 w-4 flex-shrink-0 text-forest-600" strokeWidth={1.5} />
                        <span className="text-xs font-bold leading-tight text-forest-700">{s}</span>
                      </div>
                    </div>
                ))}
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* Projects Gallery */}
      <section id="gallery" className="section bg-black">
        <div className="container-cc">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-bold uppercase text-lime-400">Projects Gallery</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-lime-400" />
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
