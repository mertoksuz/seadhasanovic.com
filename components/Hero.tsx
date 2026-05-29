"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
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

const SLIDE_MS = 6000;

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
      className="relative isolate overflow-hidden border-b border-white/5"
    >
      <div className="absolute inset-0 -z-10">
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === idx ? 1 : 0 }}
          >
            <Image
              src={src}
              alt="Sead Hasanović"
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
        <div className="absolute inset-0 bg-radial-spot" />
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-25" />
      </div>

      <div className="container-x relative flex min-h-[88vh] flex-col justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">
            <Target className="h-3.5 w-3.5" /> {t.hero.eyebrow}
          </span>

          <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl md:text-8xl">
            SEAD
            <br />
            <span className="text-rival-500">HASANOVIĆ</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">{t.hero.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#results" className="btn-primary">
              {t.hero.ctaResults} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#gallery" className="btn-ghost">
              {t.hero.ctaGallery}
            </Link>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/5 pt-6">
            <Stat label={t.hero.stat1Label} value={t.hero.stat1Value} />
            <Stat label={t.hero.stat2Label} value={t.hero.stat2Value} />
            <Stat label={t.hero.stat3Label} value={t.hero.stat3Value} />
          </div>
        </motion.div>

        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={t.hero.slideAria(i + 1)}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx
                  ? "w-8 bg-rival-500"
                  : "w-3 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">
        {label}
      </div>
      <div className="mt-1 font-display text-lg tracking-wide text-white">
        {value}
      </div>
    </div>
  );
}
