"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label={mounted && isDark ? "Use light theme" : "Use dark theme"}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:text-[#0D6EFD]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      {mounted && isDark ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
    </button>
  );
}
