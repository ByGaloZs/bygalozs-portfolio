import { BadgeCheck } from "lucide-react";

import { PortfolioPageHeading } from "@/components/layout/portfolio-page-heading";
import { certifications } from "@/data/certifications";

export const metadata = { title: "Certifications" };

export default function CertificationsPage() {
  return (
    <section className="mx-auto max-w-5xl">
      <PortfolioPageHeading description="Professional certifications and continuing education relevant to my technical practice." icon={BadgeCheck} title="Certifications" />
      {certifications.length > 0 ? (
        <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {certifications.map((certification) => (
            <li className="grid grid-cols-[12px_minmax(0,1fr)] gap-4 py-5" key={certification.name}>
              <span className="mt-2 size-2 rounded-full bg-[#0D6EFD] ring-4 ring-blue-50" />
              <div>
              <h2 className="text-base font-bold text-slate-900">{certification.name}</h2>
              {certification.issuer || certification.date ? <p className="mt-1 text-sm font-medium text-[#0D6EFD]">{[certification.issuer, certification.date].filter(Boolean).join(" · ")}</p> : null}
              {certification.details?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-slate-600">
                  {certification.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-slate-600">Certification content will be added.</p>
      )}
    </section>
  );
}
