export default function Logo({ className = "h-11 w-11" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="CarbonCanopy Solutions logo">
      <defs>
        <linearGradient id="cc-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#43b96a" />
          <stop offset="1" stopColor="#14532d" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#e6f4ec" />
      <rect x="30" y="34" width="4" height="16" rx="2" fill="#1b6e3c" />
      <path d="M32 8c8 6 12 11 12 16a12 12 0 0 1-24 0c0-5 4-10 12-16z" fill="url(#cc-logo)" />
      <path d="M20 26c5 3 8 7 8 11a8 8 0 0 1-16 0c0-4 3-8 8-11z" fill="#2e9e54" opacity="0.92" />
      <path d="M44 26c5 3 8 7 8 11a8 8 0 0 1-16 0c0-4 3-8 8-11z" fill="#2e9e54" opacity="0.92" />
      <path
        d="M14 44a18 18 0 0 0 36 0"
        fill="none"
        stroke="#8fd0a4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
    </svg>
  );
}
