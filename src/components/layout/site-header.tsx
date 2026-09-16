import Link from "next/link";

import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { href: "/cv", label: "CV" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
];

export function SiteHeader() {
  return (
    <header className="site-header border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Link className="font-semibold tracking-tight" href="/">
          bygalozs.dev
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
            {navigation.map((item) => (
              <Link className="hover:text-slate-950" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
