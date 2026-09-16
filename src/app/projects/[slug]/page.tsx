import { notFound } from "next/navigation";
import { Box } from "lucide-react";

import { SkillTag } from "@/components/cv/skill-tag";
import { DetailSection } from "@/components/layout/detail-section";
import { PortfolioPageHeading } from "@/components/layout/portfolio-page-heading";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl">
      <PortfolioPageHeading icon={Box} title={project.name} />
      {project.technologies?.length ? <div className="flex flex-wrap gap-2 border-b border-slate-200 py-5">{project.technologies.map((technology) => <SkillTag key={technology} label={technology} />)}</div> : null}

      {project.details?.overview ? <p className="mt-8 text-base leading-7 text-slate-700">{project.details.overview}</p> : null}

      {project.summary.length > 0 ? (
        <DetailSection first title="Project summary">
          <div className="space-y-4 leading-7">
            {project.summary.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </DetailSection>
      ) : null}

      {project.details?.achievements?.length ? (
        <DetailSection title="Key outcomes">
          <ul className="list-disc space-y-2 pl-5 leading-7">
            {project.details.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection>
      ) : null}

      {project.details?.technologies?.length ? (
        <DetailSection title="Technologies"><div className="flex flex-wrap gap-2">{project.details.technologies.map((technology) => <SkillTag key={technology} label={technology} />)}</div></DetailSection>
      ) : null}
    </article>
  );
}
