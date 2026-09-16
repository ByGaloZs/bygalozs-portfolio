import { notFound } from "next/navigation";

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
    <article className="max-w-3xl">
      <p className="text-sm text-slate-500">Project</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{project.name}</h1>
      {project.details?.overview ? <p className="mt-8 text-slate-700">{project.details.overview}</p> : <p className="mt-8 text-slate-600">Detailed content will be added.</p>}
    </article>
  );
}
