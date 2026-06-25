import { useEffect } from "react";

const BASE = "CarbonCanopy Solutions";

const setMeta = (selector, attr, value) => {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [a, v] = attr.includes(":") ? ["property", attr] : ["name", attr];
    el.setAttribute(a, v);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

// Sets document title, meta description, and Open Graph / Twitter tags per page.
export default function useSeo(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${BASE}` : `${BASE} — Growing Climate Solutions Naturally`;
    document.title = fullTitle;

    if (description) {
      setMeta('meta[name="description"]', "description", description);
      setMeta('meta[property="og:description"]', "og:description", description);
      setMeta('meta[name="twitter:description"]', "twitter:description", description);
    }

    setMeta('meta[property="og:title"]', "og:title", fullTitle);
    setMeta('meta[property="og:type"]', "og:type", "website");
    setMeta('meta[property="og:site_name"]', "og:site_name", BASE);
    setMeta('meta[name="twitter:card"]', "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "twitter:title", fullTitle);
  }, [title, description]);
}
