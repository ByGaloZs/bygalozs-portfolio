import { notFound } from "next/navigation";
import Link from "next/link";

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
    <article className="mx-auto max-w-3xl">
      <Link className="text-sm font-medium text-[#0D6EFD] hover:underline" href="/cv#experience">
        ← Back to CV
      </Link>

      <header className="mt-8 border-b border-slate-200 pb-8">
        <p className="text-sm font-medium text-[#0D6EFD]">Experience</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{experience.role}</h1>
        <p className="mt-2 text-lg font-medium text-slate-700">{experience.company}</p>
        {experience.startDate || experience.location ? (
          <p className="mt-4 text-sm text-slate-500">
            {[experience.startDate ? `${experience.startDate} - ${experience.endDate ?? "Present"}` : null, experience.location]
              .filter(Boolean)
              .join(" · ")}
          </p>
        ) : null}
      </header>

      {experience.details?.overview ? (
        <p className="mt-8 text-base leading-7 text-slate-700">{experience.details.overview}</p>
      ) : null}

      {experience.summary.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-900">Role summary</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            {experience.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {experience.details?.responsibilities?.length ? (
        <section className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900">Responsibilities</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            {experience.details.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {experience.details?.achievements?.length ? (
        <section className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900">Achievements</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            {experience.details.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {experience.details?.technologies?.length ? (
        <section className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900">Technologies</h2>
          <p className="mt-4 text-slate-700">{experience.details.technologies.join(" · ")}</p>
        </section>
      ) : null}

      {experience.details?.projects?.length ? (
        <section className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900">Related projects</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            {experience.details.projects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
