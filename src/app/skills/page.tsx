import { Code2 } from "lucide-react";

import { SkillTag } from "@/components/cv/skill-tag";
import { PortfolioPageHeading } from "@/components/layout/portfolio-page-heading";
import { skillGroups } from "@/data/skills";

export const metadata = { title: "Technical Skills" };

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl">
      <PortfolioPageHeading description="Tools and technologies used across robotics, automation, data, and software development." icon={Code2} title="Technical Skills" />
      <div className="mt-8 grid gap-y-6 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-slate-200">
        {skillGroups.map((group) => (
          <article className="border-t border-slate-200 pt-5 xl:border-t-0 xl:px-5 xl:pt-0 xl:first:pl-0 xl:last:pr-0" key={group.category}>
            <h2 className="text-sm font-bold text-slate-800">{group.category}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
