import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, children, align = "center", light = false }) {
  const alignment = align === "left" ? "text-left mx-0" : "text-center mx-auto";
  return (
    <Reveal className={`max-w-3xl ${alignment} mb-12`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2
        className={`text-3xl md:text-[2.6rem] leading-tight ${
          light ? "text-white" : "text-forest-800"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-lg ${light ? "text-forest-100" : "text-muted"}`}>{children}</p>
      )}
    </Reveal>
  );
}
