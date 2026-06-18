import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import Search from "./Search";
import { navLinks } from "../data/site";

const basePath = (s) => s.split("#")[0];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(null); // open dropdown label
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

  const closeAll = () => {
    setMenu(null);
    setOpen(false);
  };

  const topBase =
    "group relative flex items-center gap-1 whitespace-nowrap px-3 py-2.5 font-head text-[0.88rem] font-semibold tracking-wide transition-colors";
  const topText = (active) => (active ? "text-forest-900" : "text-forest-800 hover:text-forest-900");

  const Underline = ({ active }) => (
    <span
      className={`pointer-events-none absolute inset-x-3 bottom-1 h-[2px] origin-left rounded-full bg-forest-700 transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  );

  // Dropdown card: gradient icon chip, label, and a muted meta line.
  const DropdownLink = ({ item, onClick }) => (
    <Link
      to={item.to}
      onClick={onClick}
      className="group block overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-forest-600 via-lime-400 to-lime-200 p-[1px] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start gap-3 rounded-[calc(1rem-1px)] bg-white px-4 py-4 text-sm font-medium text-forest-800">
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-forest-900">
            {item.label}
          </span>
          {item.desc && (
            <span className="mt-0.5 block text-xs text-forest-500">{item.desc}</span>
          )}
        </span>
      </div>
    </Link>
  );

  const MobileMenuItem = ({ item, onClick }) => (
    <Link
      to={item.to}
      onClick={onClick}
      className="block overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-forest-600 via-lime-400 to-lime-200 p-[1px] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="rounded-[calc(1rem-1px)] bg-white px-4 py-4 text-sm font-medium text-forest-800">
        {item.label}
      </div>
    </Link>
  );

  const isGroupActive = (l) =>
    pathname === basePath(l.to) || l.children?.some((c) => pathname === basePath(c.to));

  return (
    <header
      className={`sticky top-0 z-[100] backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Top band (logo) — forest green top band with logo */}
      <div className="border-b-2 border-forest-700 bg-forest-200">
      <div className="container-cc relative flex h-[72px] items-center justify-center">
        <button
          className="absolute left-0 grid h-11 w-11 place-items-center rounded-[10px] lg:hidden"
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

        <Link to="/" className="flex items-center" aria-label="CarbonCanopy Solutions home">
          <img src="/img/logo.png" alt="CarbonCanopy Solutions" className="h-12 w-auto sm:h-14" />
        </Link>

        <div className="absolute right-0">
          <Search />
        </div>
      </div>
      </div>

      {/* Desktop nav row (quick links) — solid lime green */}
      <nav className="hidden bg-lime-500 lg:block">
        <ul className="container-cc flex flex-nowrap items-center justify-center gap-0.5 py-1.5" ref={dropRef}>
          {navLinks.map((l) =>
            l.children ? (
              <li
                key={l.label}
                className="relative"
                onMouseEnter={() => setMenu(l.label)}
                onMouseLeave={() => setMenu((m) => (m === l.label ? null : m))}
              >
                <button
                  type="button"
                  onClick={() => setMenu((m) => (m === l.label ? null : l.label))}
                  className={`${topBase} ${topText(isGroupActive(l))}`}
                  aria-expanded={menu === l.label}
                >
                  {l.label}
                  <Icon
                    name="chevron"
                    className={`h-3.5 w-3.5 text-forest-700 transition-transform duration-200 ${
                      menu === l.label ? "rotate-180" : ""
                    }`}
                  />
                  <Underline active={isGroupActive(l) || menu === l.label} />
                </button>
                {menu === l.label &&
                  (() => {
                    const widthClass = "w-[min(100vw-2rem,420px)]";
                    const alignRight = ["Projects Portfolio", "Agroforestry Solutions"].includes(l.label);
                    const posClass = alignRight ? "right-0" : "left-1/2 -translate-x-1/2";
                    const gid = `nav-${l.label.replace(/\s+/g, "-").toLowerCase().replace(/[^a-z0-9\-]/g, "")}`;
                    const fid = `nf-${gid}`;
                    const palettes = {
                      "our services": ["#E8FFFA", "#CFF7D8"],
                      "carbon projects": ["#F0FBFF", "#DFF6FB"],
                      "forestry & landscaping": ["#F2FAF2", "#DFF1DD"],
                      "agroforestry solutions": ["#FFF8E8", "#FFEDBF"],
                      "projects portfolio": ["#FFF2F8", "#F9E8FB"],
                    };
                    const stops = palettes[l.label.toLowerCase()] || ["#F6FFED", "#D1FAE5"];
                    const shapeMap = {
                      "our services": "M50 0 C72 0 94 12 96 34 C98 56 86 74 68 84 C50 94 32 90 14 74 C2 60 0 36 10 18 C22 6 36 0 50 0 Z",
                      "carbon projects": "M50 0 C70 2 92 14 92 36 C90 58 76 72 60 82 C44 90 28 88 12 70 C6 56 6 36 16 18 C28 6 38 0 50 0 Z",
                      "forestry & landscaping": "M50 0 C68 0 90 10 95 30 C100 50 88 70 70 80 C52 90 36 86 20 70 C6 54 4 36 12 18 C24 6 36 0 50 0 Z",
                      "agroforestry solutions": "M50 0 C66 4 88 12 96 30 C104 50 94 68 76 80 C58 92 40 88 22 72 C6 56 4 36 12 18 C24 6 36 0 50 0 Z",
                      "projects portfolio": "M50 0 C64 0 84 8 96 28 C108 48 98 66 80 78 C62 90 44 86 26 72 C10 58 4 36 12 18 C24 6 36 0 50 0 Z",
                    };
                    const shape = shapeMap[l.label.toLowerCase()] || "M50 0 C68 0 90 10 95 30 C100 50 85 70 65 80 C45 90 30 85 12 70 C-2 54 0 30 10 15 C20 2 32 0 50 0 Z";
                    return (
                      <div className={`absolute top-[calc(100%-2px)] z-50 max-w-[calc(100vw-2rem)] pt-3 ${posClass} ${widthClass}`}>
                        <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-xl animate-dropIn">
                          <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-forest-600 via-lime-400 to-lime-200" />
                          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-2xl">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                              <defs>
                                <linearGradient id={gid} x1="0%" x2="100%">
                                  <stop offset="0%" stopColor={stops[0]} stopOpacity="0.98" />
                                  <stop offset="100%" stopColor={stops[1]} stopOpacity="0.95" />
                                </linearGradient>
                                <filter id={fid} x="-20%" y="-20%" width="140%" height="140%">
                                  <feGaussianBlur stdDeviation="6" result="b" />
                                  <feOffset dx="0" dy="6" in="b" result="off" />
                                  <feComposite in="off" in2="SourceGraphic" operator="over" result="comp" />
                                  <feMerge>
                                    <feMergeNode in="comp" />
                                    <feMergeNode in="SourceGraphic" />
                                  </feMerge>
                                </filter>
                              </defs>
                              <path fill={`url(#${gid})`} filter={`url(#${fid})`} d={shape} transform="translate(0,6) scale(1.05)" />
                              <path d={shape} fill="none" stroke="#0b3b1e" strokeOpacity="0.06" strokeWidth="1" transform="translate(0,6) scale(1.05)" />
                            </svg>
                          </div>
                          <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-4">
                            <span className="font-head text-[0.78rem] font-bold uppercase tracking-wide text-forest-700">
                              {l.label}
                            </span>
                            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-forest-600">
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-forest-100 text-forest-700">
                                <Icon name={l.icon || "leaf"} className="h-4 w-4" />
                              </span>
                            </div>
                          </div>
                          <ul className="space-y-2 p-3">
                            {l.children.map((c) => (
                              <li key={c.to} className="min-w-0">
                                <DropdownLink item={c} onClick={closeAll} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })()}
              </li>
            ) : (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={({ isActive }) => `${topBase} ${topText(isActive)}`}>
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <Underline active={isActive} />
                    </>
                  )}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[72px] z-[99] origin-top overflow-y-auto border-b border-line bg-white px-6 pb-6 shadow-md transition-transform lg:hidden ${
          open ? "translate-y-0" : "-translate-y-[130%]"
        }`}
        style={{ maxHeight: "calc(100vh - 72px)" }}
      >
        <ul className="space-y-1 pt-3">
          {navLinks.map((l) =>
            l.children ? (
              <li key={l.label}>
                <button
                  type="button"
                  onClick={() => setMenu((m) => (m === l.label ? null : l.label))}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 font-head text-[0.92rem] font-semibold text-forest-800 hover:bg-mist"
                >
                  {l.label}
                  <Icon
                    name="chevron"
                    className={`h-4 w-4 text-forest-500 transition-transform duration-200 ${
                      menu === l.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {menu === l.label && (
                  <ul className="mb-1 ml-2 space-y-1 border-l-2 border-lime-200 pl-2 pt-1">
                    {l.children.map((c) => (
                      <li key={c.to}>
                        <MobileMenuItem item={c} onClick={closeAll} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block rounded-xl px-3.5 py-3 font-head text-[0.95rem] font-semibold transition-colors ${
                      isActive ? "bg-forest-700 text-white" : "text-forest-800 hover:bg-mist"
                    }`
                  }
                  onClick={closeAll}
                >
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
