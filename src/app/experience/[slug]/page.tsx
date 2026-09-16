import { notFound } from "next/navigation";
import { BriefcaseBusiness } from "lucide-react";

import { SkillTag } from "@/components/cv/skill-tag";
import { DetailSection } from "@/components/layout/detail-section";
import { PortfolioPageHeading } from "@/components/layout/portfolio-page-heading";
import { experiences } from "@/data/experience";

type ExperienceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map(({ slug }) => ({ slug }));
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { slug } = await params;
  const experience = experiences.find((entry) => entry.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl">
      <PortfolioPageHeading icon={BriefcaseBusiness} title={experience.role} />
      <div className="border-b border-slate-200 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p className="text-lg font-medium text-[#0D6EFD]">{experience.company}</p>
        {experience.startDate || experience.location ? (
          <p className="mt-2 text-sm text-slate-500 sm:mt-0 sm:text-right">
            {[experience.startDate ? `${experience.startDate} - ${experience.endDate ?? "Present"}` : null, experience.location]
              .filter(Boolean)
              .join(" · ")}
          </p>
        ) : null}
      </div>

      {experience.details?.overview ? (
        <p className="mt-8 text-base leading-7 text-slate-700">{experience.details.overview}</p>
      ) : null}

      {experience.summary.length > 0 ? (
        <DetailSection first title="Role summary">
          <ul className="list-disc space-y-2 pl-5 leading-7">
            {experience.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection>
      ) : null}

      {experience.details?.responsibilities?.length ? (
        <DetailSection title="Responsibilities">
          <ul className="list-disc space-y-2 pl-5 leading-7">
            {experience.details.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection>
      ) : null}

      {experience.details?.achievements?.length ? (
        <DetailSection title="Achievements">
          <ul className="list-disc space-y-2 pl-5 leading-7">
            {experience.details.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection>
      ) : null}

      {experience.details?.technologies?.length ? (
        <DetailSection title="Technologies"><div className="flex flex-wrap gap-2">{experience.details.technologies.map((technology) => <SkillTag key={technology} label={technology} />)}</div></DetailSection>
      ) : null}

      {experience.details?.projects?.length ? (
        <DetailSection title="Related projects">
          <ul className="list-disc space-y-2 pl-5 leading-7">
            {experience.details.projects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection>
      ) : null}
    </article>
  );
}
