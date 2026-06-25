// Lightweight inline SVG icon set (stroke-based, currentColor).
const paths = {
  carbon: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7c2 1.6 3 3.2 3 4.6a3 3 0 0 1-6 0c0-1.4 1-3 3-4.6z" />
    </>
  ),
  tree: (
    <>
      <path d="M12 3c3 2.5 5 4.8 5 7a5 5 0 0 1-10 0c0-2.2 2-4.5 5-7z" />
      <path d="M12 15v6" />
    </>
  ),
  leaf: <path d="M5 18c0-7 5-12 14-13C18 13 13 18 6 18H5z M5 18c2-3 5-5 9-6" />,
  sprout: (
    <>
      <path d="M12 20v-7" />
      <path d="M12 13C9 13 6 11 6 7c4 0 6 2 6 6z" />
      <path d="M12 11c0-3 2-5 6-5 0 4-3 5-6 5z" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <path d="M16 5a3 3 0 0 1 0 6M22 20c0-2.5-1.5-4-4-4.5" />
    </>
  ),
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />,
  doc: (
    <>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="10" r="6" />
      <path d="M9 15l-1 6 4-2 4 2-1-6" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
  report: (
    <>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M9 13l2 2 4-4" />
    </>
  ),
  map: (
    <>
      <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="6" ry="3" />
      <path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3" />
      <path d="M15 12c3.3 0 6-1.3 6-3s-2.7-3-6-3" />
      <path d="M9 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  grad: (
    <>
      <path d="M12 4l10 5-10 5L2 9l10-5z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </>
  ),
  landscape: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 16l5-5 4 4 3-3 6 6" />
      <circle cx="8" cy="9" r="1.4" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="9" r="2.2" />
      <path d="M12 9c0-3-2-5-2-5s4 0 4 3M12 9c3 0 5-2 5-2s0 4-3 4M12 9c0 3 2 5 2 5s-4 0-4-3M12 9c-3 0-5-2-5-2s0 4 3 4" />
      <path d="M12 12v9" />
    </>
  ),
  fruit: (
    <>
      <path d="M12 7c-3 0-5 2-5 6s3 7 5 7 5-3 5-7-2-6-5-6z" />
      <path d="M12 7c0-2 1-4 3-4" />
    </>
  ),
  bug: (
    <>
      <ellipse cx="12" cy="13" rx="5" ry="6" />
      <path d="M12 7V4M7 13H3M21 13h-4M7 9L4 7M17 9l3-2M7 17l-3 2M17 17l3 2" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  chat: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h5" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3zm0 2a7 7 0 0 1 5.9 10.8c-.3.5-.3.8.1 1.3l-2.4-.7c-.3-.1-.6 0-.9.1A7 7 0 1 1 12 5zm-2.6 3.3c-.2 0-.5 0-.7.4-.3.5-.9 1.2-.9 2.3s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1l-.6-.3c-.3-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.2-1.5-.3-.4 0-.6.2-.9.1-.2.1-.3.2-.5v-.4l-.8-2c-.2-.4-.4-.4-.6-.4z" />
  ),
};

export default function Icon({ name, className = "", strokeWidth = 1.8 }) {
  const node = paths[name] || paths.leaf;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={name === "whatsapp" ? "currentColor" : "none"}
      stroke={name === "whatsapp" ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {node}
    </svg>
  );
}
