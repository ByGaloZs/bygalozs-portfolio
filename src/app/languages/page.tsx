import { Globe2 } from "lucide-react";

import { PortfolioPageHeading } from "@/components/layout/portfolio-page-heading";
import { languages } from "@/data/languages";

export const metadata = { title: "Languages" };

export default function LanguagesPage() {
  return (
    <section className="mx-auto max-w-5xl">
      <PortfolioPageHeading description="Language capabilities for international technical collaboration and documentation." icon={Globe2} title="Languages" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {languages.map((language) => (
          <article className="border border-slate-200 bg-white p-5" key={language.name}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-base font-bold text-slate-900">{language.name}</h2>
              <span className="size-2.5 rounded-full bg-[#0D6EFD] ring-4 ring-blue-50" />
            </div>
            {language.proficiency ? <p className="mt-3 text-sm text-slate-600">{language.proficiency}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
