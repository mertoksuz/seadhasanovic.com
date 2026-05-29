"use client";

/**
 * Marquee - continuous horizontal scroll of brand tokens.
 * Unique editorial detail to set this site apart from a generic portfolio.
 */
export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  // Duplicate so the loop is seamless.
  const loop = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden border-y border-white/5 bg-ink-900/70 py-4 ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-lg tracking-[0.25em] text-white/80 sm:text-xl">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{it}</span>
            <span className="text-rival-500">✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}
