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
              {certification.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-slate-600">Certification content will be added.</p>
      )}
    </section>
  );
}
