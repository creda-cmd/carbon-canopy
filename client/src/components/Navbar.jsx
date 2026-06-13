import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(null); // open dropdown label (desktop) / mobile
  const { pathname } = useLocation();
  const dropRef = useRef(null);

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

  // Close desktop dropdown on outside click.
  useEffect(() => {
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const linkClass = ({ isActive }) =>
    `block rounded-full px-3.5 py-2.5 font-head text-[0.92rem] font-medium transition-colors ${
      isActive
        ? "bg-forest-700 text-white"
        : "text-forest-800 hover:bg-lime-100 hover:text-forest-700"
    }`;

  const isGroupActive = (l) => l.children?.some((c) => pathname === c.to) || pathname === l.to;

  return (
    <header
      className={`sticky top-0 z-[100] border-b border-line bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="container-cc flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-11 w-11 flex-none" />
          <span className="font-head text-[1.15rem] font-bold leading-none text-forest-800">
            CarbonCanopy
            <small className="mt-1 block font-body text-[0.62rem] font-medium uppercase tracking-[0.14em] text-lime-600">
              Solutions
            </small>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex" ref={dropRef}>
          {navLinks.map((l) =>
            l.children ? (
              <li key={l.label} className="relative">
                <button
                  type="button"
                  onClick={() => setMenu((m) => (m === l.label ? null : l.label))}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2.5 font-head text-[0.92rem] font-medium transition-colors ${
                    isGroupActive(l)
                      ? "bg-forest-700 text-white"
                      : "text-forest-800 hover:bg-lime-100 hover:text-forest-700"
                  }`}
                  aria-expanded={menu === l.label}
                >
                  {l.label}
                  <Icon
                    name="arrow"
                    className={`h-3.5 w-3.5 rotate-90 transition-transform ${
                      menu === l.label ? "-rotate-90" : ""
                    }`}
                  />
                </button>
                {menu === l.label && (
                  <ul className="absolute left-0 top-[calc(100%+8px)] z-50 w-60 overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-lg">
                    {l.children.map((c) => (
                      <li key={c.to}>
                        <NavLink
                          to={c.to}
                          end
                          onClick={() => setMenu(null)}
                          className={({ isActive }) =>
                            `block rounded-lg px-3.5 py-2.5 font-head text-[0.9rem] font-medium transition-colors ${
                              isActive
                                ? "bg-forest-50 text-forest-700"
                                : "text-forest-800 hover:bg-lime-100 hover:text-forest-700"
                            }`
                          }
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.to}>
                <NavLink to={l.to} className={linkClass} end={l.to === "/"}>
                  {l.label}
                </NavLink>
              </li>
            )
          )}
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
          {navLinks.map((l) =>
            l.children ? (
              <li key={l.label}>
                <button
                  type="button"
                  onClick={() => setMenu((m) => (m === l.label ? null : l.label))}
                  className="flex w-full items-center justify-between rounded-full px-3.5 py-2.5 font-head text-[0.92rem] font-medium text-forest-800 hover:bg-lime-100"
                >
                  {l.label}
                  <Icon
                    name="arrow"
                    className={`h-4 w-4 rotate-90 transition-transform ${
                      menu === l.label ? "-rotate-90" : ""
                    }`}
                  />
                </button>
                {menu === l.label && (
                  <ul className="ml-3 space-y-1 border-l border-line pl-3 pt-1">
                    {l.children.map((c) => (
                      <li key={c.to}>
                        <NavLink to={c.to} end className={linkClass} onClick={() => setOpen(false)}>
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.to}>
                <NavLink to={l.to} className={linkClass} end={l.to === "/"} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
}
