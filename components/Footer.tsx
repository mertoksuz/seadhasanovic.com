"use client";

import { Crosshair } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-white/70">
          <Crosshair className="h-4 w-4 text-rival-500" />
          <span className="font-display tracking-widest">SEAD HASANOVIĆ</span>
        </div>
        <p className="text-xs text-white/40">
          {t.footer.copy(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
}
