import { notFound } from "next/navigation";
import Link from "next/link";

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
    <article className="mx-auto max-w-3xl">
      <Link className="text-sm font-medium text-[#0D6EFD] hover:underline" href="/cv#projects">
        ← Back to CV
      </Link>

      <header className="mt-8 border-b border-slate-200 pb-8">
        <p className="text-sm font-medium text-[#0D6EFD]">Project</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{project.name}</h1>
        {project.technologies?.length ? <p className="mt-4 text-sm text-slate-500">{project.technologies.join(" · ")}</p> : null}
      </header>

      {project.details?.overview ? <p className="mt-8 text-base leading-7 text-slate-700">{project.details.overview}</p> : null}

      {project.summary.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-900">Project summary</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-700">
            {project.summary.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>
      ) : null}

      {project.details?.achievements?.length ? (
        <section className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900">Key outcomes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
            {project.details.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.details?.technologies?.length ? (
        <section className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900">Technologies</h2>
          <p className="mt-4 text-slate-700">{project.details.technologies.join(" · ")}</p>
        </section>
      ) : null}
    </article>
  );
}
