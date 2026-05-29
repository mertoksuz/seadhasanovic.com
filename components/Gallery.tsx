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

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="border-b border-white/5 py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{t.gallery.eyebrow}</span>
          <h2 className="section-title mt-4">
            {t.gallery.title1}{" "}
            <span className="text-rival-500">{t.gallery.titleAccent}</span>
          </h2>
          <p className="mt-4 text-white/60">{t.gallery.desc}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-ink-800"
            >
              <Image
                src={`/images/${src}`}
                alt={t.gallery.photoAlt(i + 1)}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
