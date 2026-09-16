import Link from "next/link";

import { experiences } from "@/data/experience";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
      <div className="mt-8 space-y-4">
        {experiences.map((experience) => (
          <article className="rounded-md border border-slate-200 bg-white p-5" key={experience.slug}>
            <h2 className="font-medium">{experience.role}</h2>
            <p className="mt-1 text-slate-600">{experience.company}</p>
            <Link className="mt-3 inline-block text-sm font-medium underline" href={`/experience/${experience.slug}`}>
              View experience
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
