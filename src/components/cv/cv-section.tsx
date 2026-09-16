import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type CvSectionProps = {
  id?: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
};

export function CvSection({ id, title, icon: Icon, children, className = "" }: CvSectionProps) {
  return (
    <section className={`border-t border-slate-200 pt-7 ${className}`} id={id}>
      <h2 className="flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900 sm:text-[22px]">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0D6EFD]">
          <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
        </span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
