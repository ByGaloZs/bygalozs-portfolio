import Image from "next/image";

import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { languages } from "@/data/languages";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export const metadata = { title: "Mario Padilla Franco CV" };

export default function PrintableCvPage() {
  return (
    <article className="print-cv mx-auto max-w-[1120px] text-slate-900">
      <section className="print-page print-page-one">
        <header className="flex items-start justify-between gap-6 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-4">
            <Image alt="Mario Padilla Franco" className="size-20 rounded-full border border-slate-200 object-cover object-[center_30%]" height={80} src="/images/profile.png" width={80} />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950">{profile.name}</h1>
              <p className="mt-0.5 text-base text-slate-600">{profile.headline}</p>
              <p className="mt-2 text-[11px] text-slate-500">{[profile.location, profile.email, "LinkedIn", "GitHub", profile.website].filter(Boolean).join(" · ")}</p>
            </div>
          </div>
        </header>

        <section className="mt-5 border-b border-slate-200 pb-5">
          <h2 className="text-lg font-bold tracking-tight text-slate-900">Professional Profile</h2>
          <p className="mt-2 text-[11px] leading-[1.45] text-slate-700">{profile.pdfSummary}</p>
        </section>

        <div className="mt-5 grid grid-cols-[minmax(0,1.7fr)_minmax(220px,0.8fr)] gap-7">
          <section>
            <h2 className="border-b border-slate-200 pb-2 text-lg font-bold tracking-tight text-slate-900">Professional Experience</h2>
            <div className="mt-3 space-y-4">
              {experiences.map((experience) => (
                <article key={experience.slug}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="text-[13px] font-bold leading-4 text-slate-900">{experience.role}</h3>
                      <p className="text-[11px] font-medium text-[#0D6EFD]">{experience.company}</p>
                    </div>
                    <p className="shrink-0 text-right text-[10px] text-slate-500">{experience.startDate} - {experience.endDate ?? "Present"}</p>
                  </div>
                  <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[10px] leading-[1.35] text-slate-700">
                    {(experience.details?.pdfHighlights ?? experience.summary).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-5 border-l border-slate-200 pl-5">
            <section>
              <h2 className="border-b border-slate-200 pb-2 text-base font-bold tracking-tight text-slate-900">Education</h2>
              <div className="mt-3 space-y-3">
                {education.map((entry) => (
                  <article key={entry.slug}>
                    <p className="text-[10px] text-slate-500">{entry.startDate} - {entry.endDate ?? "Present"}</p>
                    <h3 className="mt-0.5 text-[11px] font-bold leading-[1.3] text-slate-900">{entry.qualification}</h3>
                    <p className="mt-0.5 text-[10px] font-medium leading-[1.3] text-[#0D6EFD]">{entry.institution}</p>
                    {entry.summary[0] ? <p className="mt-1 text-[10px] leading-[1.3] text-slate-600">{entry.summary[0]}</p> : null}
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="border-b border-slate-200 pb-2 text-base font-bold tracking-tight text-slate-900">Certifications</h2>
              <ul className="mt-3 space-y-2 text-[10px] leading-[1.3] text-slate-700">
                {certifications.map((certification) => (
                  <li key={certification.name}>
                    <span className="font-semibold text-slate-900">{certification.name}</span>
                    {certification.issuer || certification.date ? ` · ${[certification.issuer, certification.date].filter(Boolean).join(", ")}` : null}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="border-b border-slate-200 pb-2 text-base font-bold tracking-tight text-slate-900">Languages</h2>
              <p className="mt-3 text-[10px] leading-[1.5] text-slate-700">{languages.map((language) => `${language.name}: ${language.proficiency}`).join(" · ")}</p>
            </section>
          </aside>
        </div>
      </section>

      <section className="print-page print-page-two">
        <h2 className="border-b border-slate-200 pb-2 text-lg font-bold tracking-tight text-slate-900">Selected Projects</h2>
        <div className="mt-4 grid grid-cols-2 gap-x-7 gap-y-4">
          {projects.map((project) => (
            <article key={project.slug}>
              <h3 className="text-[12px] font-bold leading-4 text-slate-900">{project.name}</h3>
              <p className="mt-0.5 text-[9px] leading-[1.3] text-[#0D6EFD]">{project.technologies?.join(" · ")}</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[10px] leading-[1.35] text-slate-700">
                {(project.details?.pdfHighlights ?? project.summary).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-5 border-t border-slate-200 pt-4">
          <h2 className="text-lg font-bold tracking-tight text-slate-900">Technical Skills</h2>
          <div className="mt-3 grid grid-cols-2 gap-x-7 gap-y-3">
            {skillGroups.map((group) => (
              <article key={group.category}>
                <h3 className="text-[11px] font-bold text-slate-900">{group.category}</h3>
                <p className="mt-1 text-[10px] leading-[1.35] text-slate-700">{group.skills.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </article>
  );
}
