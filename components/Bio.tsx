"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Trophy, Flame } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Bio() {
  const { t } = useI18n();
  return (
    <section id="bio" className="relative border-b border-white/5 py-28">
      <div className="container-x">
        {/* Section marker */}
        <div className="section-num mb-12">
          <span className="num">/ 02</span>
          <span>{t.bio.eyebrow}</span>
        </div>

        <div className="grid gap-16 md:grid-cols-12 md:items-start md:gap-12">
          {/* Portrait — offset with red bracket */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative md:col-span-5"
          >
            {/* Red corner bracket (top-left) */}
            <div className="absolute -left-3 -top-3 h-16 w-16 border-l-[3px] border-t-[3px] border-rival-500" />
            {/* Red corner bracket (bottom-right) */}
            <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b-[3px] border-r-[3px] border-rival-500" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/10">
              <Image
                src="/images/sead-portrait.jpg"
                alt="Sead Hasanović"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="noise" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              {/* Caption strip */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-ink-950/70 px-4 py-3 font-display text-xs tracking-[0.3em] text-white/80 backdrop-blur">
                <span>SEAD HASANOVIĆ</span>
                <span className="text-rival-500">BIH</span>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <h2 className="section-title">
              {t.bio.title1}{" "}
              <span className="text-rival-500">{t.bio.titleAccent}</span>{" "}
              {t.bio.title2}
            </h2>

            {/* Lead paragraph in larger pull-quote style */}
            <div className="mt-8 border-l-2 border-rival-500 pl-6">
              <p className="font-display text-xl leading-snug tracking-wide text-white sm:text-2xl">
                {t.bio.p1Prefix}{" "}
                <span className="text-rival-400">{t.bio.p1Strong}</span>
                {t.bio.p1}
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-white/70">{t.bio.p2}</p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Pill
                icon={<Trophy className="h-4 w-4" />}
                title={t.bio.pill1Title}
                sub={t.bio.pill1Sub}
              />
              <Pill
                icon={<GraduationCap className="h-4 w-4" />}
                title={t.bio.pill2Title}
                sub={t.bio.pill2Sub}
              />
              <Pill
                icon={<Flame className="h-4 w-4" />}
                title={t.bio.pill3Title}
                sub={t.bio.pill3Sub}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pill({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="group relative flex items-center gap-3 border border-white/5 bg-ink-900/60 p-4 transition-colors hover:border-rival-500/40">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-rival-500/15 text-rival-400">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs text-white/60">{sub}</div>
      </div>
    </div>
  );
}
