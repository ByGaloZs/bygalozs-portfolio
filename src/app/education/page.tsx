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
            {entry.startDate ? <p className="mt-2 text-sm text-slate-500">{entry.startDate} - {entry.endDate ?? "Present"}</p> : null}
            {entry.summary.map((item) => <p className="mt-2 text-slate-700" key={item}>{item}</p>)}
            {entry.details?.overview ? <p className="mt-2 text-slate-700">{entry.details.overview}</p> : null}
            {entry.details?.coursework?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {entry.details.coursework.map((course) => <li key={course}>{course}</li>)}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
