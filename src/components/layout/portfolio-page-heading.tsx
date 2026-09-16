import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type PortfolioPageHeadingProps = {
  title: string;
  icon: LucideIcon;
  description?: string;
};

export function PortfolioPageHeading({ title, icon: Icon, description }: PortfolioPageHeadingProps) {
  return (
    <header className="border-b border-slate-200 pb-7 sm:pb-8">
      <Link className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0D6EFD] hover:underline" href="/cv">
        <span aria-hidden="true">←</span>
        CV overview
      </Link>
      <div className="mt-5 flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0D6EFD]">
          <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
        </span>
        <div>
          <p className="text-sm font-medium text-[#0D6EFD]">Portfolio</p>
          <h1 className="mt-0.5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
        </div>
      </div>
      {description ? <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">{description}</p> : null}
    </header>
  );
}
