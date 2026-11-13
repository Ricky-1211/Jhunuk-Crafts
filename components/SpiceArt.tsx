// Illustrative spice jar / bowl drawn in SVG so the site needs no external images.
export default function SpiceArt({ color, label, variant = "jar", className = "" }: { color: string; label: string; variant?: "jar" | "bowl"; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={label} className={className}>
      <defs>
        <radialGradient id={`g-${color.slice(1)}`} cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fff" stopOpacity=".35" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="#F6E7CC" />
      <circle cx="100" cy="110" r="84" fill="#FFF8EC" />
      {variant === "jar" ? (
        <g>
          <rect x="62" y="40" width="76" height="22" rx="5" fill="#44251D" />
          <rect x="56" y="60" width="88" height="112" rx="14" fill="#fff" stroke="#44251D" strokeWidth="3" />
          <rect x="62" y="104" width="76" height="62" rx="9" fill={`url(#g-${color.slice(1)})`} />
          <rect x="68" y="76" width="64" height="24" rx="4" fill="#D77B22" />
          <rect x="76" y="85" width="48" height="4" rx="2" fill="#FFF8EC" />
        </g>
      ) : (
        <g>
          <path d="M30 100 Q100 190 170 100 Z" fill="#44251D" />
          <ellipse cx="100" cy="100" rx="70" ry="16" fill="#6B3A22" />
          <path d="M45 98 Q100 52 155 98 Q100 112 45 98Z" fill={`url(#g-${color.slice(1)})`} />
        </g>
      )}
    </svg>
  );
}
