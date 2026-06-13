import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
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

  const topClass = (active) =>
    `flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2.5 font-head text-[0.86rem] font-semibold transition-colors ${
      active ? "bg-forest-700 text-white" : "text-forest-800 hover:bg-lime-100 hover:text-forest-700"
    }`;

  const childClass = (active) =>
    `block rounded-lg px-3.5 py-2.5 font-head text-[0.88rem] font-medium transition-colors ${
      active ? "bg-forest-50 text-forest-700" : "text-forest-800 hover:bg-lime-100 hover:text-forest-700"
    }`;

  const isGroupActive = (l) =>
    pathname === basePath(l.to) || l.children?.some((c) => pathname === basePath(c.to));

  return (
    <header
      className={`sticky top-0 z-[100] border-b border-line bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="container-cc flex h-[76px] items-center justify-between gap-4">
        <Link to="/" className="flex flex-none items-center" aria-label="CarbonCanopy Solutions home">
          <img
            src="/img/logo.png"
            alt="CarbonCanopy Solutions"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden flex-nowrap items-center gap-0.5 lg:flex" ref={dropRef}>
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
                  className={topClass(isGroupActive(l))}
                  aria-expanded={menu === l.label}
                >
                  {l.label}
                  <Icon
                    name="arrow"
                    className={`h-3 w-3 rotate-90 transition-transform ${
                      menu === l.label ? "-rotate-90" : ""
                    }`}
                  />
                </button>
                {menu === l.label && (
                  <ul className="absolute left-0 top-full z-50 w-64 overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-lg">
                    {l.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} onClick={closeAll} className={childClass(false)}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className={({ isActive }) => topClass(isActive)}>
                  {l.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="grid h-11 w-11 flex-none place-items-center rounded-[10px] lg:hidden"
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
                  className="flex w-full items-center justify-between rounded-full px-3.5 py-2.5 font-head text-[0.92rem] font-semibold text-forest-800 hover:bg-lime-100"
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
                        <Link to={c.to} className={childClass(false)} onClick={closeAll}>
                          {c.label}
                        </Link>
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
                  className={({ isActive }) => topClass(isActive)}
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
