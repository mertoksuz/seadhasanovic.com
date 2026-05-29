"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const photos = [
  "sead-01.jpg",
  "sead-02.jpg",
  "sead-03.jpg",
  "sead-04.jpg",
  "sead-05.jpg",
  "sead-06.jpg",
  "sead-07.jpg",
  "sead-08.jpg",
  "sead-09.jpg",
];

// Bento-style layout: tile span classes for visual rhythm.
// Pattern repeats every 9 tiles. Tweak any time.
const tileSpans = [
  "md:col-span-2 md:row-span-2", // hero tile
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="border-b border-white/5 py-28">
      <div className="container-x">
        {/* Section marker */}
        <div className="section-num mb-10">
          <span className="num">/ 05</span>
          <span>{t.gallery.eyebrow}</span>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="section-title max-w-2xl">
            {t.gallery.title1}{" "}
            <span className="text-rival-500">{t.gallery.titleAccent}</span>
          </h2>
          <p className="max-w-md text-white/60">{t.gallery.desc}</p>
        </div>

        {/* Bento grid */}
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {photos.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className={`group relative overflow-hidden rounded-md border border-white/5 bg-ink-800 ${
                tileSpans[i % tileSpans.length]
              }`}
            >
              <Image
                src={`/images/${src}`}
                alt={t.gallery.photoAlt(i + 1)}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="noise opacity-[0.05]" />
              {/* Hover overlay with frame number */}
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex w-full items-center justify-between p-3 font-display text-[11px] tracking-[0.3em] text-white/80">
                  <span>
                    FRAME {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-rival-500">●</span>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
