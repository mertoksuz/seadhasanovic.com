"use client";

import { motion } from "framer-motion";
import {
  Award,
  CalendarDays,
  ExternalLink,
  MapPin,
  Trophy,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Classification = "MA" | "EX" | "SS" | "MM" | "NV";
type LocKey = "bosnia" | "balkans" | "europe";

type Match = {
  date: string;
  name: string;
  locKey?: LocKey;
  tier?: string;
  classification: Classification;
  classPlace: number;
};

const matches: Match[] = [
  {
    date: "2025-12-20",
    name: "Sarajevo IDPA Winter Games 2025",
    locKey: "bosnia",
    classification: "EX",
    classPlace: 14,
  },
  {
    date: "2025-11-01",
    name: "II kolo IDPA lige BiH — Zigana Cup 2025",
    locKey: "bosnia",
    classification: "MM",
    classPlace: 3,
  },
  {
    date: "2025-09-19",
    name: "Balkan Cup 2025 — Tier 3 powered by Canik",
    tier: "Tier 3",
    locKey: "balkans",
    classification: "EX",
    classPlace: 127,
  },
  {
    date: "2025-06-21",
    name: "B&H IDPA National Championship 2025 — Tier II",
    tier: "Tier 2",
    locKey: "bosnia",
    classification: "EX",
    classPlace: 30,
  },
  {
    date: "2024-12-21",
    name: "Sarajevo Winter IDPA Games 2024",
    locKey: "bosnia",
    classification: "EX",
    classPlace: 15,
  },
  {
    date: "2024-09-20",
    name: "B&H IDPA National Championship 2024",
    locKey: "bosnia",
    classification: "EX",
    classPlace: 29,
  },
  {
    date: "2024-08-03",
    name: "IV kolo BiH IDPA lige 2024",
    locKey: "bosnia",
    classification: "EX",
    classPlace: 10,
  },
  {
    date: "2024-07-20",
    name: "IV Kolo Srpske IDPA Lige",
    locKey: "balkans",
    classification: "EX",
    classPlace: 14,
  },
  {
    date: "2024-07-06",
    name: "III kolo BiH IDPA lige 2024",
    locKey: "bosnia",
    classification: "EX",
    classPlace: 6,
  },
  {
    date: "2024-04-27",
    name: "I kolo BiH IDPA lige 2024",
    locKey: "bosnia",
    classification: "EX",
    classPlace: 3,
  },
  {
    date: "2023-12-02",
    name: "Sarajevo IDPA Winter Games 2023",
    locKey: "bosnia",
    classification: "MM",
    classPlace: 16,
  },
  {
    date: "2023-10-27",
    name: "Turkish National Championship 2023 — Tier 3",
    tier: "Tier 3",
    locKey: "europe",
    classification: "MM",
    classPlace: 63,
  },
  {
    date: "2023-09-23",
    name: "Državno IDPA BiH Championship 2023",
    locKey: "bosnia",
    classification: "MM",
    classPlace: 5,
  },
  {
    date: "2023-07-08",
    name: "II kolo IDPA BiH lige 2023",
    locKey: "bosnia",
    classification: "MM",
    classPlace: 16,
  },
  {
    date: "2023-06-10",
    name: "I kolo IDPA BiH lige 2023",
    locKey: "bosnia",
    classification: "MM",
    classPlace: 4,
  },
  {
    date: "2022-07-17",
    name: "4. Kolo Lige Regije BiH 2022",
    locKey: "bosnia",
    classification: "MM",
    classPlace: 35,
  },
];

function placeStyle(place: number) {
  if (place === 1) return "border-yellow-400/40 bg-yellow-400/10 text-yellow-300";
  if (place === 2) return "border-zinc-300/40 bg-zinc-300/10 text-zinc-200";
  if (place === 3) return "border-amber-600/40 bg-amber-600/10 text-amber-400";
  if (place <= 10) return "border-rival-500/30 bg-rival-500/10 text-rival-400";
  return "border-white/10 bg-white/5 text-white/70";
}

const classLabel: Record<Classification, string> = {
  MA: "Master",
  EX: "Expert",
  SS: "Sharpshooter",
  MM: "Marksman",
  NV: "Novice",
};

function classStyle(c: Classification) {
  switch (c) {
    case "MA": return "border-tac-500/40 bg-tac-500/10 text-tac-500";
    case "EX": return "border-rival-400/40 bg-rival-400/10 text-rival-400";
    case "SS": return "border-emerald-400/40 bg-emerald-400/10 text-emerald-300";
    case "MM": return "border-sky-400/40 bg-sky-400/10 text-sky-300";
    default:   return "border-white/10 bg-white/5 text-white/70";
  }
}

export default function Results() {
  const { t } = useI18n();

  const locText: Record<LocKey, string> = {
    bosnia: t.results.locBosnia,
    balkans: t.results.locBalkans,
    europe: t.results.locEurope,
  };

  return (
    <section id="results" className="border-b border-white/5 py-28">
      <div className="container-x">
        <div className="section-num mb-10">
          <span className="num">/ 04</span>
          <span>{t.results.eyebrow}</span>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="section-title">
              {t.results.title1}{" "}
              <span className="text-rival-500">{t.results.titleAccent}</span>
            </h2>
            <p className="mt-4 text-white/60">
              {t.results.desc1}{" "}
              <span className="text-white">{t.results.descMid}</span>
              {t.results.desc2}
            </p>
          </div>
          <a
            href="https://practiscore.com/clubs/sk_4tactic/results"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            {t.results.practiscore} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-800/80 text-xs uppercase tracking-widest text-white/50">
              <tr>
                <th className="px-5 py-4">{t.results.thDate}</th>
                <th className="px-5 py-4">{t.results.thMatch}</th>
                <th className="hidden px-5 py-4 md:table-cell">{t.results.thLocation}</th>
                <th className="px-5 py-4">{t.results.thTier}</th>
                <th className="px-5 py-4">{t.results.thClass}</th>
                <th className="px-5 py-4 text-right">{t.results.thPlace}</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, i) => (
                <motion.tr
                  key={m.date + m.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="border-t border-white/5 bg-ink-900/40 hover:bg-ink-800/60"
                >
                  <td className="whitespace-nowrap px-5 py-5 text-white/70">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-3.5 w-3.5 text-rival-400" />
                      {m.date}
                    </span>
                  </td>
                  <td className="px-5 py-5 font-medium text-white">{m.name}</td>
                  <td className="hidden px-5 py-5 text-white/60 md:table-cell">
                    {m.locKey && (
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" />
                        {locText[m.locKey]}
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-5">
                    {m.tier ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-rival-500/30 bg-rival-500/10 px-2.5 py-1 text-xs font-semibold text-rival-400">
                        <Trophy className="h-3 w-3" />
                        {m.tier}
                      </span>
                    ) : (
                      <span className="text-white/40">—</span>
                    )}
                  </td>
                  <td className="px-5 py-5">
                    <span
                      title={classLabel[m.classification]}
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold tracking-widest ${classStyle(
                        m.classification
                      )}`}
                    >
                      {m.classification}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${placeStyle(
                        m.classPlace
                      )}`}
                    >
                      <Award className="h-3 w-3" />
                      {m.classPlace === 1
                        ? t.results.placeFirst(classLabel[m.classification])
                        : t.results.placeOther(m.classPlace)}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-white/40">{t.results.footnote}</p>
      </div>
    </section>
  );
}
