import { ArrowRight, BriefcaseBusiness, Code2, GraduationCap, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { profile } from "@/data/profile";

const firstName = profile.name.split(" ")[0];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid items-center gap-10 border-b border-slate-200 pb-12 pt-5 sm:pb-16 sm:pt-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Hi,<br />
            I&apos;m <span className="text-[#0D6EFD]">{firstName}</span>
          </h1>
          <p className="mt-4 max-w-xl text-xl font-semibold leading-8 text-slate-900 sm:text-2xl">{profile.headline}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{profile.professionalSummary[0]}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link className="inline-flex items-center gap-2 rounded-lg bg-[#0D6EFD] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5" href={`mailto:${profile.email}`}>
              Get in touch <Mail aria-hidden="true" className="size-4" />
            </Link>
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-[#0D6EFD]" href="/cv">
              View CV <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-4 text-slate-600">
            <a aria-label="LinkedIn" className="transition-colors hover:text-[#0D6EFD]" href={profile.linkedInUrl} rel="noreferrer" target="_blank">
              <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.33V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.31 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.04H3.53V8.98h3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" /></svg>
            </a>
            <a aria-label="GitHub" className="transition-colors hover:text-[#0D6EFD]" href={profile.githubUrl} rel="noreferrer" target="_blank">
              <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.33-5.48-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.43 11.43 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.89.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.58A12 12 0 0 0 12 .3Z" /></svg>
            </a>
          </div>
        </div>
        <Image alt={`Portrait of ${profile.name}`} className="mx-auto w-full max-w-[420px] object-contain sm:max-w-[480px]" height={1241} priority src="/images/profile-hero.png" width={1267} />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link className="group border border-slate-200 bg-white p-5 transition-colors hover:border-[#0D6EFD]" href="/experience"><BriefcaseBusiness className="size-5 text-[#0D6EFD]" /><h2 className="mt-5 font-bold text-slate-900">Experience</h2><p className="mt-2 text-sm leading-6 text-slate-600">Roles, responsibilities, and professional impact.</p></Link>
        <Link className="group border border-slate-200 bg-white p-5 transition-colors hover:border-[#0D6EFD]" href="/projects"><Code2 className="size-5 text-[#0D6EFD]" /><h2 className="mt-5 font-bold text-slate-900">Projects</h2><p className="mt-2 text-sm leading-6 text-slate-600">Selected technical work and outcomes.</p></Link>
        <Link className="group border border-slate-200 bg-white p-5 transition-colors hover:border-[#0D6EFD]" href="/education"><GraduationCap className="size-5 text-[#0D6EFD]" /><h2 className="mt-5 font-bold text-slate-900">Education</h2><p className="mt-2 text-sm leading-6 text-slate-600">Academic background and specialized training.</p></Link>
      </div>
    </section>
  );
}
