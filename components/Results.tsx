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

// TODO: Replace with Sead's real match results
const matches: Match[] = [
  {
    date: "2025-09-19",
    name: "Balkan Cup 2025",
    tier: "Tier 3",
    locKey: "balkans",
    classification: "EX",
    classPlace: 3,
  },
  {
    date: "2025-06-21",
    name: "Bosnia National 2025",
    tier: "Tier 2",
    locKey: "bosnia",
    classification: "EX",
    classPlace: 1,
  },
  {
    date: "2025-05-16",
    name: "Sarajevo Open 2025",
    tier: "Tier 2",
    locKey: "bosnia",
    classification: "SS",
    classPlace: 2,
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
