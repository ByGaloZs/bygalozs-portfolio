import { skillGroups } from "@/data/skills";

export const metadata = { title: "Technical Skills" };

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-5xl">
      <p className="text-sm font-medium text-[#0D6EFD]">Portfolio</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Technical Skills</h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article className="rounded-lg border border-slate-200 bg-white p-5" key={group.category}>
            <h2 className="text-lg font-bold text-slate-900">{group.category}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
