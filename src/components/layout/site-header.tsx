"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 sm:px-8 lg:px-10">
        <Link className="shrink-0 text-xl font-bold tracking-tight text-slate-950" href="/">
          bygalozs<span className="text-[#0D6EFD]">.dev</span>
        </Link>
        <nav aria-label="Main navigation" className="flex min-w-0 justify-start gap-x-4 overflow-x-auto text-[0.95rem] font-semibold text-slate-500 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center sm:gap-x-5 lg:gap-x-6">
          {navigation.map((item) => (
            <Link aria-current={pathname === item.href || (item.href !== "/cv" && pathname.startsWith(`${item.href}/`)) ? "page" : undefined} className={`site-nav-link shrink-0 transition-colors hover:text-[#0D6EFD] ${pathname === item.href || (item.href !== "/cv" && pathname.startsWith(`${item.href}/`)) ? "is-active" : ""}`} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
