import { education } from "@/data/education";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Education</h1>
      <div className="mt-8 space-y-4">
        {education.map((entry) => (
          <article className="rounded-md border border-slate-200 bg-white p-5" key={entry.slug}>
            <h2 className="font-medium">{entry.qualification}</h2>
            <p className="mt-1 text-slate-600">{entry.institution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
