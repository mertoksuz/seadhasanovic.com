"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Crosshair, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, lang, toggle } = useI18n();

  const links = [
    { href: "#bio", label: t.nav.bio },
    { href: "#gear", label: t.nav.gear },
    { href: "#results", label: t.nav.results },
    { href: "#gallery", label: t.nav.gallery },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur"
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2">
          <Crosshair className="h-5 w-5 text-rival-500" />
          <span className="font-display text-xl tracking-widest">
            SEAD HASANOVIĆ
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-white/70 transition-colors hover:text-rival-400"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={t.langAria}
            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 text-xs font-semibold tracking-widest text-white/80 transition-colors hover:border-rival-500/40 hover:text-rival-400"
            title={t.langAria}
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "BS" : "EN"}
          </button>

          <button
            aria-label={t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md p-2 text-white/80 hover:bg-white/5"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden border-t border-white/5 bg-ink-900"
        >
          <ul className="container-x flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-white/80 hover:text-rival-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
