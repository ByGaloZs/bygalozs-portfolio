import { languages } from "@/data/languages";

export const metadata = { title: "Languages" };

export default function LanguagesPage() {
  return (
    <section className="mx-auto max-w-3xl">
      <p className="text-sm font-medium text-[#0D6EFD]">Portfolio</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Languages</h1>
      <div className="mt-8 space-y-4">
        {languages.map((language) => (
          <article className="rounded-lg border border-slate-200 bg-white p-5" key={language.name}>
            <h2 className="text-lg font-bold text-slate-900">{language.name}</h2>
            {language.proficiency ? <p className="mt-1 text-slate-600">{language.proficiency}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
