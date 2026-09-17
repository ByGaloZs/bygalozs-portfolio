import Link from "next/link";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Experience } from "@/types/portfolio";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-7">
      {experiences.map((experience, index) => (
        <ScrollReveal delay={index * 45} key={experience.slug}>
        <article className="grid grid-cols-[90px_22px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[116px_24px_minmax(0,1fr)] sm:gap-x-4">
          <div className="pt-0.5 text-xs leading-5 text-slate-500 sm:text-[13px]">
            {experience.startDate ? (
              <>
                <p>{experience.startDate}</p>
                <p>{experience.endDate ?? "Present"}</p>
              </>
            ) : null}
            {experience.location ? <p className="mt-1 hidden sm:block">{experience.location}</p> : null}
          </div>
          <div className="relative border-l border-slate-200">
            <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-[#0D6EFD] ring-4 ring-white" />
          </div>
          <div>
            <h3 className="text-[15px] font-bold leading-5 text-slate-900 sm:text-base">{experience.role}</h3>
            <p className="mt-0.5 text-sm font-medium text-[#0D6EFD]">{experience.company}</p>
            {experience.summary.length > 0 ? (
              <ul className="mt-2.5 list-disc space-y-1 pl-4 text-[13px] leading-5 text-slate-600">
                {experience.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <Link className="mt-2 inline-block text-xs font-medium text-[#0D6EFD] hover:underline" href={`/experience/${experience.slug}`}>
              View more →
            </Link>
          </div>
        </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
