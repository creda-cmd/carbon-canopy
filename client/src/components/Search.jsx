import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { searchSite } from "../data/site";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => searchSite(q), [q]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const go = (item) => {
    if (!item) return;
    setOpen(false);
    setQ("");
    navigate(item.to);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        aria-label="Search"
        onClick={() => setOpen((o) => !o)}
        className="grid h-10 w-10 place-items-center rounded-full text-forest-800 transition-colors hover:bg-lime-100 hover:text-forest-700"
      >
        <Icon name="search" className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-[min(92vw,360px)] overflow-hidden rounded-xl border border-line bg-white shadow-lg">
          <div className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
            <Icon name="search" className="h-4 w-4 flex-none text-muted" />
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setActive(0);
              }}
              onKeyDown={onKeyDown}
              placeholder="Search services, sections, species…"
              className="w-full bg-transparent font-body text-[0.95rem] text-ink outline-none placeholder:text-muted"
            />
          </div>

          {q.trim() && (
            <ul className="max-h-[60vh] overflow-y-auto p-1.5">
              {results.length === 0 ? (
                <li className="px-3 py-3 text-sm text-muted">No matches for “{q}”.</li>
              ) : (
                results.map((r, i) => (
                  <li key={`${r.label}-${r.to}-${i}`}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => go(r)}
                      className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                        i === active ? "bg-lime-100" : "hover:bg-mist"
                      }`}
                    >
                      <span className="font-head text-[0.92rem] font-medium text-forest-800">{r.label}</span>
                      <span className="flex-none rounded-full bg-forest-50 px-2.5 py-1 font-body text-[0.68rem] font-semibold uppercase tracking-wide text-forest-600">
                        {r.kind}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
