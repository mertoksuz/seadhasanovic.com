"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const slides = [
  "/images/sead-01.jpg",
  "/images/sead-02.jpg",
  "/images/sead-03.jpg",
  "/images/sead-04.jpg",
  "/images/sead-05.jpg",
  "/images/sead-06.jpg",
  "/images/sead-07.jpg",
  "/images/sead-08.jpg",
  "/images/sead-09.jpg",
];

const SLIDE_MS = 5500;

export default function Hero() {
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-white/5 bg-ink-950"
    >
      {/* Background ambient grid + spot */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30" />
        <div className="absolute inset-0 bg-radial-spot" />
      </div>

      {/* Left vertical rail label */}
      <div className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 md:block">
        <span className="side-rail">PRACTICAL • SHOOTER • BIH</span>
      </div>

      <div className="container-x relative grid min-h-[92vh] grid-cols-1 items-center gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-24">
        {/* LEFT — Editorial typography stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative md:col-span-7"
        >
          {/* Meta line */}
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/50">
            <span className="text-rival-500">— 01</span>
            <span>{t.hero.eyebrow}</span>
          </div>

          {/* Massive name — outlined SEAD, solid red HASANOVIĆ */}
          <h1 className="mt-6 font-display leading-[0.82] tracking-tight">
            <span className="block text-stroke text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem]">
              SEAD
            </span>
            <span className="mt-1 block text-6xl text-rival-500 sm:text-7xl md:text-[7.5rem] lg:text-[9rem]">
              HASANOVIĆ
            </span>
          </h1>

          {/* Red rule + tagline */}
          <div className="mt-8 flex max-w-xl items-start gap-4">
            <span className="mt-3 inline-block h-[2px] w-12 shrink-0 bg-rival-500" />
            <p className="text-lg text-white/70">{t.hero.tagline}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="#results" className="btn-primary">
              {t.hero.ctaResults} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#gallery" className="btn-ghost">
              {t.hero.ctaGallery}
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — Photo collage with diagonal red slab */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative md:col-span-5"
        >
          {/* Background red diagonal slab */}
          <div className="absolute -right-4 -top-4 h-full w-full -rotate-3 rounded-2xl bg-rival-500/90 md:-right-6 md:-top-6" />

          {/* Main photo frame */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/60">
            {slides.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-[1100ms] ease-in-out"
                style={{ opacity: i === idx ? 1 : 0 }}
              >
                <Image
                  src={src}
                  alt="Sead Hasanović"
                  fill
                  priority={i === 0}
                  sizes="(min-width:768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="noise" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

            {/* Frame counter */}
            <div className="absolute left-4 top-4 rounded bg-ink-950/70 px-2 py-1 font-display text-xs tracking-[0.3em] text-white/80 backdrop-blur">
              FRAME {String(idx + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </div>

            {/* Slide dots */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={t.hero.slideAria(i + 1)}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx
                      ? "w-6 bg-rival-500"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom stats ticker */}
      <div className="relative border-t border-white/5 bg-ink-900/60 backdrop-blur-sm">
        <div className="container-x grid grid-cols-3 divide-x divide-white/5">
          <TickerStat label={t.hero.stat1Label} value={t.hero.stat1Value} />
          <TickerStat label={t.hero.stat2Label} value={t.hero.stat2Value} />
          <TickerStat label={t.hero.stat3Label} value={t.hero.stat3Value} />
        </div>
      </div>
    </section>
  );
}

function TickerStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-4 sm:gap-4 sm:px-6">
      <span className="h-2 w-2 shrink-0 rounded-full bg-rival-500 shadow-[0_0_12px_#e10600]" />
      <div className="min-w-0">
        <div className="truncate text-[10px] uppercase tracking-[0.25em] text-white/40">
          {label}
        </div>
        <div className="truncate font-display text-base tracking-wide text-white sm:text-lg">
          {value}
        </div>
      </div>
    </div>
  );
}
