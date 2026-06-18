import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function Slider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-xl backdrop-blur-lg">
      <div className="relative h-72 overflow-hidden rounded-[28px] sm:h-[360px]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 shadow-sm backdrop-blur-sm">
                <Icon name={slide.icon} className="h-4 w-4" />
                {slide.tag}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{slide.title}</h3>
              <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-10 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
