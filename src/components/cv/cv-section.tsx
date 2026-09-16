import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type CvSectionProps = {
  id?: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
  href?: string;
};

export function CvSection({ id, title, icon: Icon, children, className = "", href }: CvSectionProps) {
  return (
    <section className={`border-t border-slate-200 pt-7 ${className}`} id={id}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900 sm:text-[22px]">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0D6EFD]">
            <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
          </span>
          {title}
        </h2>
        {href ? (
          <Link className="shrink-0 text-sm font-medium text-[#0D6EFD] hover:underline" href={href}>
            View complete
          </Link>
        ) : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
