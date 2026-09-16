import { certifications } from "@/data/certifications";

export const metadata = { title: "Certifications" };

export default function CertificationsPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tight">Certifications</h1>
      {certifications.length > 0 ? (
        <ul className="mt-8 space-y-3">
          {certifications.map((certification) => (
            <li className="rounded-md border border-slate-200 bg-white p-5" key={certification.name}>
              <h2 className="font-medium">{certification.name}</h2>
              {certification.issuer || certification.date ? <p className="mt-1 text-sm text-slate-600">{[certification.issuer, certification.date].filter(Boolean).join(" · ")}</p> : null}
              {certification.details?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {certification.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-slate-600">Certification content will be added.</p>
      )}
    </section>
  );
}
