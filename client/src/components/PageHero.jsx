import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, children, crumb }) {
  return (
    <section className="hero-gradient relative overflow-hidden text-forest-100">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 300px at 80% 0%, rgba(67,185,106,0.22), transparent 60%)",
        }}
      />
      <div className="container-cc relative z-10 py-16 md:py-20">
        <p className="mb-3 text-sm text-forest-200">
          <Link to="/" className="text-sage-300 hover:text-white">
            Home
          </Link>{" "}
          <span className="opacity-60">/</span> {crumb || title}
        </p>
        {eyebrow && <span className="eyebrow mb-3 text-sage-300">{eyebrow}</span>}
        <h1 className="text-3xl text-white md:text-5xl">{title}</h1>
        {children && <p className="mt-4 max-w-2xl text-lg text-forest-100">{children}</p>}
      </div>
    </section>
  );
}
