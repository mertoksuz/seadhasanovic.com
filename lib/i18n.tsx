"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "bs";

export const dict = {
  en: {
    nav: {
      bio: "Biography",
      gear: "Gear",
      results: "Results",
      gallery: "Gallery",
      openMenu: "Open menu",
    },
    hero: {
      eyebrow: "Professional Practical Shooter",
      tagline:
        "Fast, accurate, decisive. On the line in IPSC & IDPA matches across the Balkans and beyond.",
      ctaResults: "Match Results",
      ctaGallery: "Gallery",
      stat1Label: "Discipline",
      stat1Value: "IPSC / IDPA",
      stat2Label: "Based In",
      stat2Value: "Bosnia & Herzegovina",
      stat3Label: "Focus",
      stat3Value: "Practical Pistol",
      slideAria: (i: number) => `Slide ${i}`,
    },
    bio: {
      eyebrow: "Biography",
      title1: "Discipline downrange,",
      titleAccent: "calm",
      title2: "on the trigger.",
      p1Prefix: "I'm",
      p1Strong: "Sead Hasanović",
      p1: ", a professional practical pistol shooter from Bosnia & Herzegovina, competing in national and international IPSC and IDPA matches.",
      p2: "My journey is built on refining technique, mental endurance, and the value of every millisecond — pushing the line between speed and precision, one stage at a time.",
      p2Mentor: "",
      p2Suffix: "",
      pill1Title: "Tier 2 / 3",
      pill1Sub: "Match Experience",
      pill2Title: "Balkans",
      pill2Sub: "Regional Circuit",
      pill3Title: "Passion",
      pill3Sub: "Practical Pistol",
    },
    gear: {
      eyebrow: "Gear",
      title1: "The instrument",
      titleAccent: "of the range",
      desc: "The hardware I trust on match day. Every part chosen for performance and repeatability.",
      tagline: "Primary Pistol",
      pistolName1: "Canik",
      pistolName2: "Rival-S",
      summary:
        "The Canik Rival-S — a steel-frame competition pistol built for the practical line. Crisp trigger, balanced weight, and dead-reliable feed on match day.",
      specCaliber: "Caliber",
      specMag: "Magazine",
      specFrame: "Frame",
      specFrameValue: "Steel",
      specTrigger: "Trigger",
      specTriggerValue: "Match Tuned",
      specDivision: "Division",
      specDivisionValue: "SSP",
    },
    results: {
      eyebrow: "Achievements",
      title1: "Match",
      titleAccent: "history",
      desc1: "Selected matches from my",
      descMid: "competition record",
      desc2: ".",
      practiscore: "Practiscore Profile",
      thDate: "Date",
      thMatch: "Match",
      thLocation: "Location",
      thTier: "Tier",
      thClass: "Class",
      thPlace: "Place",
      footnote:
        "* Place reflects my position within the IDPA classification I competed in for that match.",
      locBosnia: "Bosnia & Herzegovina",
      locBalkans: "Balkans",
      locEurope: "Europe",
      placeFirst: (cls: string) => `${cls} 1st`,
      placeOther: (n: number) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
      },
    },
    gallery: {
      eyebrow: "Gallery",
      title1: "Frames",
      titleAccent: "from the range",
      desc: "Selected shots from recent matches.",
      photoAlt: (i: number) => `Match photo ${i}`,
    },
    footer: {
      copy: (year: number) =>
        `© ${year} Sead Hasanović. All rights reserved.`,
    },
    langLabel: "BS",
    langAria: "Pređi na bosanski",
  },
  bs: {
    nav: {
      bio: "Biografija",
      gear: "Oprema",
      results: "Rezultati",
      gallery: "Galerija",
      openMenu: "Otvori meni",
    },
    hero: {
      eyebrow: "Profesionalni strijelac",
      tagline:
        "Brzo, precizno, odlučno. Na liniji IPSC i IDPA takmičenja širom Balkana.",
      ctaResults: "Rezultati",
      ctaGallery: "Galerija",
      stat1Label: "Disciplina",
      stat1Value: "IPSC / IDPA",
      stat2Label: "Lokacija",
      stat2Value: "Bosna i Hercegovina",
      stat3Label: "Fokus",
      stat3Value: "Praktični pištolj",
      slideAria: (i: number) => `Slika ${i}`,
    },
    bio: {
      eyebrow: "Biografija",
      title1: "Disciplina na liniji,",
      titleAccent: "smirenost",
      title2: "na obaraču.",
      p1Prefix: "Ja sam",
      p1Strong: "Sead Hasanović",
      p1: ", profesionalni strijelac iz Bosne i Hercegovine. Takmičim se na domaćim i međunarodnim IPSC i IDPA takmičenjima.",
      p2: "Moj put gradi se na usavršavanju tehnike, mentalnoj izdržljivosti i vrijednosti svake milisekunde — između brzine i preciznosti, stage po stage.",
      p2Mentor: "",
      p2Suffix: "",
      pill1Title: "Tier 2 / 3",
      pill1Sub: "Iskustvo",
      pill2Title: "Balkan",
      pill2Sub: "Regionalna scena",
      pill3Title: "Strast",
      pill3Sub: "Praktični pištolj",
    },
    gear: {
      eyebrow: "Oprema",
      title1: "Instrument",
      titleAccent: "linije",
      desc: "Oprema u koju vjerujem na dan takmičenja. Svaki dio biran za performanse i ponovljivost.",
      tagline: "Primarni pištolj",
      pistolName1: "Canik",
      pistolName2: "Rival-S",
      summary:
        "Canik Rival-S — takmičarski pištolj sa čeličnim okvirom za praktičnu liniju. Oštar okidač, izbalansirana težina i pouzdano dohranjivanje na dan takmičenja.",
      specCaliber: "Kalibar",
      specMag: "Šaržer",
      specFrame: "Okvir",
      specFrameValue: "Čelik",
      specTrigger: "Okidač",
      specTriggerValue: "Match Tuned",
      specDivision: "Divizija",
      specDivisionValue: "SSP",
    },
    results: {
      eyebrow: "Postignuća",
      title1: "Historija",
      titleAccent: "takmičenja",
      desc1: "Izabrana takmičenja iz mog",
      descMid: "takmičarskog dosijea",
      desc2: ".",
      practiscore: "Practiscore profil",
      thDate: "Datum",
      thMatch: "Takmičenje",
      thLocation: "Lokacija",
      thTier: "Tier",
      thClass: "Klasa",
      thPlace: "Pozicija",
      footnote:
        "* Pozicija odražava plasman unutar IDPA klase u kojoj sam se takmičio.",
      locBosnia: "Bosna i Hercegovina",
      locBalkans: "Balkan",
      locEurope: "Evropa",
      placeFirst: (cls: string) => `${cls} 1.`,
      placeOther: (n: number) => `${n}.`,
    },
    gallery: {
      eyebrow: "Galerija",
      title1: "Kadrovi",
      titleAccent: "sa linije",
      desc: "Izabrane fotografije sa nedavnih takmičenja.",
      photoAlt: (i: number) => `Fotografija ${i}`,
    },
    footer: {
      copy: (year: number) =>
        `© ${year} Sead Hasanović. Sva prava zadržana.`,
    },
    langLabel: "EN",
    langAria: "Switch to English",
  },
} as const;

export type Dict = (typeof dict)["en"];

interface I18nCtx {
  lang: Lang;
  t: Dict;
  toggle: () => void;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<I18nCtx | null>(null);

const STORAGE_KEY = "seadhasanovic.lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "bs") {
        setLangState(saved);
        return;
      }
      const nav = (navigator.language || "en").toLowerCase();
      // Bosnian / Croatian / Serbian speakers default to BS
      if (nav.startsWith("bs") || nav.startsWith("hr") || nav.startsWith("sr")) {
        setLangState("bs");
      } else {
        setLangState("en");
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "en" ? "bs" : "en"),
    [lang, setLang]
  );

  const value = useMemo<I18nCtx>(
    () => ({ lang, t: dict[lang] as Dict, toggle, setLang }),
    [lang, toggle, setLang]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
