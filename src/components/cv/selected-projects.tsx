import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { SkillTag } from "@/components/cv/skill-tag";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Project } from "@/types/portfolio";

type SelectedProjectsProps = {
  projects: Project[];
};

export function SelectedProjects({ projects }: SelectedProjectsProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ScrollReveal delay={index * 55} key={project.slug}>
        <article className="flex min-h-56 flex-col rounded-lg border border-slate-200 bg-white p-4 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#0D6EFD] hover:shadow-sm">
          <h3 className="text-sm font-bold text-slate-900">{project.name}</h3>
          {project.technologies ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <SkillTag key={technology} label={technology} />
              ))}
            </div>
          ) : null}
          {project.summary.map((item) => (
            <p className="mt-3 text-[13px] leading-5 text-slate-600" key={item}>
              {item}
            </p>
          ))}
          <Link className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-medium text-[#0D6EFD] hover:underline" href={`/projects/${project.slug}`}>
            View more <ArrowUpRight aria-hidden="true" className="size-3" />
          </Link>
        </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
