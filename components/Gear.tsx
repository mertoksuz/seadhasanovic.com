"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cog, Crosshair, Shield, Target, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Gear() {
  const { t } = useI18n();
  const specs = [
    {
      icon: <Target className="h-4 w-4" />,
      label: t.gear.specDivision,
      value: t.gear.specDivisionValue,
    },
    {
      icon: <Crosshair className="h-4 w-4" />,
      label: t.gear.specCaliber,
      value: "9x19mm",
    },
    {
      icon: <Cog className="h-4 w-4" />,
      label: t.gear.specMag,
      value: "15+1",
    },
    {
      icon: <Shield className="h-4 w-4" />,
      label: t.gear.specFrame,
      value: t.gear.specFrameValue,
    },
    {
      icon: <Zap className="h-4 w-4" />,
      label: t.gear.specTrigger,
      value: t.gear.specTriggerValue,
    },
  ];

  return (
    <section id="gear" className="relative border-b border-white/5 py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{t.gear.eyebrow}</span>
          <h2 className="section-title mt-4">
            {t.gear.title1}{" "}
            <span className="text-rival-500">{t.gear.titleAccent}</span>
          </h2>
          <p className="mt-4 text-white/60">{t.gear.desc}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900"
        >
          <div className="grid items-center gap-0 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
              <Image
                src="/images/sead-02.jpg"
                alt="Canik Rival-S — competition pistol"
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 via-transparent to-transparent" />
            </div>

            <div className="p-8 md:p-12">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-tac-500">
                {t.gear.tagline}
              </div>
              <h3 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">
                {t.gear.pistolName1} <br />
                <span className="text-rival-500">
                  {t.gear.pistolName2}
                </span>
              </h3>
              <p className="mt-4 text-white/70">{t.gear.summary}</p>

              <dl className="mt-8 grid grid-cols-2 gap-3">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-ink-700/40 px-3 py-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-rival-500/15 text-rival-400">
                      {s.icon}
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-widest text-white/50">
                        {s.label}
                      </dt>
                      <dd className="text-sm font-semibold text-white">
                        {s.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
