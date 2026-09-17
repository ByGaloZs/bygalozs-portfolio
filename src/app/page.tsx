import { ArrowRight, BriefcaseBusiness, Code2, GraduationCap, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { profile } from "@/data/profile";

const firstName = profile.name.split(" ")[0];

const workLinks = [
  { href: "/experience", label: "Experience", description: "Roles, responsibilities, and professional impact.", icon: BriefcaseBusiness },
  { href: "/projects", label: "Projects", description: "Selected technical work and outcomes.", icon: Code2 },
  { href: "/education", label: "Education", description: "Academic background and specialized training.", icon: GraduationCap },
];

export default function HomePage() {
  return (
    <section className="home-page relative left-1/2 -my-8 min-h-[calc(100vh-73px)] w-screen -translate-x-1/2 overflow-hidden">
      <div className="home-background" aria-hidden="true" />

      <div className="home-content mx-auto max-w-[1180px] px-6 pb-10 pt-14 sm:px-10 lg:px-14 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="home-intro relative z-10 max-w-[590px]">
            <p className="home-eyebrow">Software Engineer</p>
            <h1 className="mt-5 text-6xl font-bold leading-[0.88] tracking-[-0.065em] text-slate-950 sm:text-7xl lg:text-[5.8rem]">
              Hi,<br />I&apos;m <span>{firstName}</span>
            </h1>
            <p className="mt-5 text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-2xl">{profile.headline}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">{profile.professionalSummary[0]}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link className="home-primary-button" href={`mailto:${profile.email}`}>Get in touch <Mail aria-hidden="true" className="size-4" /></Link>
              <Link className="home-secondary-button" href="/cv">View CV <ArrowRight aria-hidden="true" className="size-4" /></Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-600">
              <a aria-label="LinkedIn" className="home-social" href={profile.linkedInUrl} rel="noreferrer" target="_blank">
                <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.33V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.31 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.04H3.53V8.98h3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" /></svg>
              </a>
              <a aria-label="GitHub" className="home-social" href={profile.githubUrl} rel="noreferrer" target="_blank">
                <svg aria-hidden="true" className="size-5 fill-current" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.33-5.48-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.43 11.43 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.89.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.58A12 12 0 0 0 12 .3Z" /></svg>
              </a>
            </div>
          </div>
          <div className="home-portrait-wrap relative mx-auto w-full max-w-[490px] lg:max-w-none">
            <div className="home-portrait-shape">
              <Image alt={`Portrait of ${profile.name}`} className="home-portrait dark:hidden" height={1241} priority src="/images/profile-hero.png" width={1267} />
              <Image alt={`Portrait of ${profile.name}`} className="home-portrait hidden dark:block" height={1254} priority src="/images/profile-hero-dark.png" width={1254} />
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 lg:mt-8">
          <p className="home-work-label">Explore my work</p>
          <div className="grid gap-4 md:grid-cols-3">
            {workLinks.map(({ href, label, description, icon: Icon }) => (
              <Link className="home-work-card" href={href} key={href}>
                <span className="home-work-icon"><Icon aria-hidden="true" className="size-7" /></span>
                <span className="min-w-0"><strong>{label}</strong><small>{description}</small></span>
                <ArrowRight aria-hidden="true" className="home-work-arrow size-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
