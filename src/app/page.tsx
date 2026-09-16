import { ArrowRight, BriefcaseBusiness, Code2, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="border-b border-slate-200 pb-10 pt-5 sm:pb-14 sm:pt-10">
        <p className="text-sm font-medium text-[#0D6EFD]">Engineering portfolio</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Clear technical work, presented with context.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">Explore my experience, selected projects, technical skills, and education in a recruiter-focused overview.</p>
        <Link className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#0D6EFD] px-4 py-2.5 text-sm font-medium text-white shadow-sm" href="/cv">View CV <ArrowRight aria-hidden="true" className="size-4" /></Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link className="group border border-slate-200 bg-white p-5 transition-colors hover:border-[#0D6EFD]" href="/experience"><BriefcaseBusiness className="size-5 text-[#0D6EFD]" /><h2 className="mt-5 font-bold text-slate-900">Experience</h2><p className="mt-2 text-sm leading-6 text-slate-600">Roles, responsibilities, and professional impact.</p></Link>
        <Link className="group border border-slate-200 bg-white p-5 transition-colors hover:border-[#0D6EFD]" href="/projects"><Code2 className="size-5 text-[#0D6EFD]" /><h2 className="mt-5 font-bold text-slate-900">Projects</h2><p className="mt-2 text-sm leading-6 text-slate-600">Selected technical work and outcomes.</p></Link>
        <Link className="group border border-slate-200 bg-white p-5 transition-colors hover:border-[#0D6EFD]" href="/education"><GraduationCap className="size-5 text-[#0D6EFD]" /><h2 className="mt-5 font-bold text-slate-900">Education</h2><p className="mt-2 text-sm leading-6 text-slate-600">Academic background and specialized training.</p></Link>
      </div>
    </section>
  );
}
