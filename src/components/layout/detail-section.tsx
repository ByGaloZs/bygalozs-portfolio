import type { ReactNode } from "react";

type DetailSectionProps = {
  title: string;
  children: ReactNode;
  first?: boolean;
};

export function DetailSection({ title, children, first = false }: DetailSectionProps) {
  return (
    <section className={first ? "mt-8" : "mt-8 border-t border-slate-200 pt-8"}>
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <div className="mt-4 text-slate-700">{children}</div>
    </section>
  );
}
