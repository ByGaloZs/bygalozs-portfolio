import Link from "next/link";

import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article className="rounded-md border border-slate-200 bg-white p-5" key={project.slug}>
            <h2 className="font-medium">{project.name}</h2>
            <Link className="mt-3 inline-block text-sm font-medium underline" href={`/projects/${project.slug}`}>
              View project
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
