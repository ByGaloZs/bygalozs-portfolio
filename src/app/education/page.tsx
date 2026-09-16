import { GraduationCap } from "lucide-react";

import { PortfolioPageHeading } from "@/components/layout/portfolio-page-heading";
import { education } from "@/data/education";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <section className="mx-auto max-w-5xl">
      <PortfolioPageHeading description="Academic foundations and specialized training supporting my engineering work." icon={GraduationCap} title="Education" />
      <div className="mt-8 space-y-8">
        {education.map((entry) => (
          <article className="grid grid-cols-[88px_24px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[120px_28px_minmax(0,1fr)] sm:gap-x-4" key={entry.slug}>
            <p className="pt-0.5 text-xs leading-5 text-slate-500 sm:text-[13px]">{entry.startDate ? <>{entry.startDate}<br />{entry.endDate ?? "Present"}</> : null}</p>
            <div className="relative border-l border-slate-200"><span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-[#0D6EFD] ring-4 ring-white" /></div>
            <div>
              <h2 className="text-base font-bold text-slate-900">{entry.qualification}</h2>
              <p className="mt-1 text-sm font-medium text-[#0D6EFD]">{entry.institution}</p>
              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                {entry.summary.map((item) => <p key={item}>{item}</p>)}
                {entry.details?.overview ? <p>{entry.details.overview}</p> : null}
              </div>
            {entry.details?.coursework?.length ? (
              <ul className="mt-4 list-disc space-y-1 pl-4 text-sm leading-6 text-slate-600">
                {entry.details.coursework.map((course) => <li key={course}>{course}</li>)}
              </ul>
            ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
