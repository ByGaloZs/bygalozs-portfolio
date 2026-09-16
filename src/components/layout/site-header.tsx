import Link from "next/link";

import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { href: "/cv", label: "CV" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/languages", label: "Languages" },
];

export function SiteHeader() {
  return (
    <header className="site-header border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-4 px-6 py-4 sm:px-8 xl:px-10 lg:flex-row lg:items-center lg:justify-between">
        <Link className="text-base font-bold tracking-tight text-slate-950" href="/">
          bygalozs<span className="text-[#0D6EFD]">.dev</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-5">
          <nav aria-label="Main navigation" className="flex min-w-0 gap-x-4 overflow-x-auto text-sm text-slate-500 sm:gap-x-5">
            {navigation.map((item) => (
              <Link className="shrink-0 transition-colors hover:text-[#0D6EFD]" href={item.href} key={item.href}>
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
