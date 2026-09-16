import { notFound } from "next/navigation";

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
    <article className="max-w-3xl">
      <p className="text-sm text-slate-500">Experience</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{experience.role}</h1>
      <p className="mt-2 text-slate-600">{experience.company}</p>
      {experience.details?.overview ? <p className="mt-8 text-slate-700">{experience.details.overview}</p> : <p className="mt-8 text-slate-600">Detailed content will be added.</p>}
    </article>
  );
}
