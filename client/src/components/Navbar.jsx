import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { company, navLinks } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const linkClass = ({ isActive }) =>
    `block rounded-full px-3.5 py-2.5 font-head text-[0.92rem] font-medium transition-colors ${
      isActive
        ? "bg-forest-700 text-white"
        : "text-forest-800 hover:bg-forest-50 hover:text-forest-700"
    }`;

  return (
    <header
      className={`sticky top-0 z-[100] border-b border-line bg-white/85 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="container-cc flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-11 w-11 flex-none" />
          <span className="font-head text-[1.15rem] font-bold leading-none text-forest-800">
            CarbonCanopy
            <small className="mt-1 block font-body text-[0.62rem] font-medium uppercase tracking-[0.14em] text-forest-500">
              Solutions
            </small>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={l.to === "/"}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={`tel:${company.phones[0]}`} className="btn btn-primary ml-2 px-5 py-2.5">
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="grid h-11 w-11 place-items-center rounded-[10px] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-forest-800 transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 w-6 bg-forest-800 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-forest-800 transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[76px] z-[99] origin-top overflow-y-auto border-b border-line bg-white px-6 pb-6 shadow-md transition-transform lg:hidden ${
          open ? "translate-y-0" : "-translate-y-[130%]"
        }`}
        style={{ maxHeight: "calc(100vh - 76px)" }}
      >
        <ul className="space-y-1 pt-3">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={l.to === "/"} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={`tel:${company.phones[0]}`}
              className="btn btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
