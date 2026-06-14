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
    "group relative flex items-center gap-1.5 whitespace-nowrap px-3.5 py-3 font-head text-[0.9rem] font-semibold tracking-wide transition-colors";
  const topText = (active) => (active ? "text-lime-300" : "text-forest-50 hover:text-lime-300");

  const Underline = ({ active }) => (
    <span
      className={`pointer-events-none absolute inset-x-3 bottom-1 h-[2px] origin-left rounded-full bg-lime-300 transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  );

  // Compact dropdown row: circular icon, label, and a muted meta line.
  const MenuItem = ({ item, onClick }) => (
    <Link
      to={item.to}
      onClick={onClick}
      className="group/it flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-lime-50"
    >
      <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-forest-50 text-forest-600 transition-colors group-hover/it:bg-forest-600 group-hover/it:text-white">
        <Icon name={item.icon || "leaf"} className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-head text-[0.9rem] font-semibold leading-tight text-forest-800 group-hover/it:text-forest-700">
          {item.label}
        </span>
        {item.desc && (
          <span className="mt-0.5 block truncate font-body text-[0.74rem] leading-snug text-muted">
            {item.desc}
          </span>
        )}
      </span>
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
      {/* Top band (logo) — solid lime green, with a forest-green divider line below */}
      <div className="border-b-2 border-forest-800 bg-[#a3e635]">
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

      {/* Desktop nav row (quick links) — solid forest green */}
      <nav className="hidden bg-forest-700 lg:block">
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
                    name="arrow"
                    className={`h-3 w-3 rotate-90 text-lime-300 transition-transform ${
                      menu === l.label ? "-rotate-90" : ""
                    }`}
                  />
                  <Underline active={isGroupActive(l) || menu === l.label} />
                </button>
                {menu === l.label &&
                  (() => {
                    const n = l.children.length;
                    const cols = n > 10 ? 3 : n > 4 ? 2 : 1;
                    const widthClass =
                      cols === 3 ? "w-[760px]" : cols === 2 ? "w-[560px]" : "w-[336px]";
                    const gridClass =
                      cols === 3 ? "sm:grid-cols-3" : cols === 2 ? "sm:grid-cols-2" : "";
                    const alignRight = ["Projects Portfolio", "Agroforestry Solutions"].includes(l.label);
                    const posClass = alignRight
                      ? "right-0"
                      : "left-1/2 -translate-x-1/2";
                    return (
                      <div
                        className={`absolute top-[calc(100%-2px)] z-50 max-w-[calc(100vw-2rem)] pt-3 ${posClass} ${widthClass}`}
                      >
                        <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-xl animate-dropIn">
                          <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-forest-700 to-forest-600 px-5 py-3">
                            <span className="font-head text-[0.8rem] font-bold uppercase tracking-wide text-lime-300">
                              {l.label}
                            </span>
                            <Link
                              to={l.to}
                              onClick={closeAll}
                              className="flex-none rounded-full bg-lime-300 px-3 py-1 font-head text-[0.7rem] font-bold uppercase tracking-wide text-forest-800 transition-colors hover:bg-lime-200"
                            >
                              View all
                            </Link>
                          </div>
                          <ul className={`relative grid gap-0.5 p-2.5 ${gridClass}`}>
                            {l.children.map((c) => (
                              <li key={c.to}>
                                <MenuItem item={c} onClick={closeAll} />
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
                  className="flex w-full items-center justify-between rounded-xl px-3.5 py-3 font-head text-[0.95rem] font-semibold text-forest-800 hover:bg-mist"
                >
                  {l.label}
                  <Icon
                    name="arrow"
                    className={`h-4 w-4 rotate-90 text-forest-500 transition-transform ${
                      menu === l.label ? "-rotate-90" : ""
                    }`}
                  />
                </button>
                {menu === l.label && (
                  <ul className="mb-1 ml-2 space-y-0.5 border-l-2 border-lime-200 pl-2 pt-0.5">
                    {l.children.map((c) => (
                      <li key={c.to}>
                        <MenuItem item={c} onClick={closeAll} />
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
