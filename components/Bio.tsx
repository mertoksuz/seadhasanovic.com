"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Trophy, Flame } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Bio() {
  const { t } = useI18n();
  return (
    <section id="bio" className="border-b border-white/5 py-24">
      <div className="container-x grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5"
        >
          <Image
            src="/images/sead-portrait.jpg"
            alt="Sead Hasanović"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">{t.bio.eyebrow}</span>
          <h2 className="section-title mt-4">
            {t.bio.title1}{" "}
            <span className="text-rival-500">{t.bio.titleAccent}</span>{" "}
            {t.bio.title2}
          </h2>
          <div className="mt-6 space-y-4 text-white/70">
            <p>
              {t.bio.p1Prefix}{" "}
              <strong className="text-white">{t.bio.p1Strong}</strong>
              {t.bio.p1}
            </p>
            <p>{t.bio.p2}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Pill icon={<Trophy className="h-4 w-4" />} title={t.bio.pill1Title} sub={t.bio.pill1Sub} />
            <Pill icon={<GraduationCap className="h-4 w-4" />} title={t.bio.pill2Title} sub={t.bio.pill2Sub} />
            <Pill icon={<Flame className="h-4 w-4" />} title={t.bio.pill3Title} sub={t.bio.pill3Sub} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pill({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="card flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-rival-500/15 text-rival-400">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs text-white/60">{sub}</div>
      </div>
    </div>
  );
}
