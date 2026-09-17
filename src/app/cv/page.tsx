import {
  BadgeCheck,
  Box,
  BriefcaseBusiness,
  Code2,
  Download,
  GitFork,
  Globe2,
  GraduationCap,
  Link as LinkIcon,
  Mail,
  MapPin,
  Send,
  UserRound,
} from "lucide-react";
import Image from "next/image";

import { CvSection } from "@/components/cv/cv-section";
import { CvSectionNavigation } from "@/components/cv/cv-section-navigation";
import { ExperienceTimeline } from "@/components/cv/experience-timeline";
import { SelectedProjects } from "@/components/cv/selected-projects";
import { SkillTag } from "@/components/cv/skill-tag";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { languages } from "@/data/languages";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export const metadata = { title: "CV" };

const cvNavigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function CvPage() {
  return (
    <div className="cv-page pb-32 text-slate-900">
      <header className="flex flex-col gap-7 border-b border-slate-200 pb-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <Image
            alt="Mario Padilla Franco"
            className="size-28 shrink-0 rounded-full border border-slate-200 object-cover object-[center_30%] sm:size-32"
            height={128}
            priority
            src="/images/profile.png"
            width={128}
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950">{profile.name}</h1>
            {profile.headline ? <p className="mt-1 text-lg text-slate-600 sm:text-xl">{profile.headline}</p> : null}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
              {profile.location ? (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin aria-hidden="true" className="size-4 text-slate-700" />
                  {profile.location}
                </span>
              ) : null}
               {profile.githubUrl ? <a className="inline-flex items-center gap-1.5 text-[#0D6EFD] hover:underline" href={profile.githubUrl} rel="noreferrer" target="_blank">
                 <GitFork aria-hidden="true" className="size-4 text-slate-900" />
                 GitHub
               </a> : null}
               {profile.linkedInUrl ? <a className="inline-flex items-center gap-1.5 text-[#0D6EFD] hover:underline" href={profile.linkedInUrl} rel="noreferrer" target="_blank">
                 <LinkIcon aria-hidden="true" className="size-4" />
                 LinkedIn
               </a> : null}
               {profile.email ? <a className="inline-flex items-center gap-1.5 text-[#0D6EFD] hover:underline" href={`mailto:${profile.email}`}>
                 <Mail aria-hidden="true" className="size-4" />
                 Email
               </a> : null}
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-start gap-4 md:justify-end">
          <ThemeToggle />
          <a className="inline-flex items-center gap-2 rounded-lg bg-[#0D6EFD] px-4 py-2.5 text-sm font-medium text-white shadow-sm" download href="/cv/mario-padilla-franco-cv.pdf">
            <Download aria-hidden="true" className="size-4" />
            Download CV
          </a>
        </div>
      </header>

      <CvSectionNavigation items={cvNavigation} />

      <div className="cv-content mt-4 grid gap-x-9 gap-y-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(280px,0.9fr)]">
        <div className="order-1 space-y-8 lg:order-none">
          <CvSection icon={UserRound} id="about" title="Professional Summary" className="scroll-mt-6">
          <div className="max-w-4xl text-base font-semibold leading-7 text-slate-700">
            {profile.professionalSummary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          </CvSection>

          <div className="space-y-8 lg:pt-8">
            <CvSection icon={BriefcaseBusiness} id="experience" title="Experience" className="scroll-mt-6" href="/experience">
              <ExperienceTimeline experiences={experiences} />
            </CvSection>

            <CvSection icon={Box} id="projects" title="Selected Projects" className="scroll-mt-6" href="/projects">
              <SelectedProjects projects={projects.filter((project) => project.featured)} />
            </CvSection>
          </div>
        </div>

        <CvSection icon={Code2} id="skills" title="Technical Skills" className="order-2 scroll-mt-6 lg:order-none lg:col-span-2 lg:row-start-2" href="/skills">
          <div className="grid gap-y-5 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-slate-200">
            {skillGroups.map((group) => (
              <div className="xl:px-4 xl:first:pl-0 xl:last:pr-0" key={group.category}>
                <h3 className="text-sm font-bold text-slate-800">{group.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                {(group.websiteSkills ?? group.skills).map((skill) => (
                    <SkillTag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CvSection>

        <aside className="order-3 space-y-7 border-t border-slate-200 pt-7 lg:order-none lg:col-start-2 lg:row-start-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <section aria-label="Professional highlights" className="space-y-5 border-b border-slate-200 pb-7">
            <div className="rounded-lg bg-blue-50 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-[#0D6EFD]">
                  <Send aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-base font-bold text-slate-900">Open to opportunities</h2>
              </div>
              <p className="mt-4 text-sm leading-5 text-slate-600">I&apos;m always interested in challenging projects and collaborations. Feel free to reach out!</p>
            </div>

            <div className="grid w-full grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="py-2 text-center sm:px-3 sm:py-0">
                <p className="text-lg font-bold tracking-tight text-[#0D6EFD]">5+</p>
                <p className="mt-1 text-xs text-slate-500">Years of Engineering</p>
              </div>
              <div className="py-2 text-center sm:px-3 sm:py-0">
                <p className="text-lg font-bold tracking-tight text-[#0D6EFD]">10+</p>
                <p className="mt-1 text-xs text-slate-500">Robots Commissioned</p>
              </div>
              <div className="py-2 text-center sm:px-3 sm:py-0">
                <p className="text-base font-bold tracking-tight text-[#0D6EFD]">AI + Robotics</p>
                <p className="mt-1 text-xs text-slate-500">Current Focus</p>
              </div>
            </div>
          </section>

          <CvSection icon={GraduationCap} id="education" title="Education" className="scroll-mt-6 border-t-0 pt-0" href="/education">
            <div className="space-y-6">
              {education.map((entry) => (
                <article className="grid grid-cols-[16px_minmax(0,1fr)] gap-3" key={entry.slug}>
                  <div className="relative border-l border-slate-200">
                    <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-[#0D6EFD] ring-4 ring-white" />
                  </div>
                  <div>
                    {entry.startDate ? <p className="text-xs text-slate-500">{entry.startDate} - {entry.endDate ?? "Present"}</p> : null}
                    <h3 className="mt-1 text-[15px] font-bold leading-5 text-slate-900">{entry.qualification}</h3>
                    <p className="mt-1 text-sm font-medium text-[#0D6EFD]">{entry.institution}</p>
                    {entry.summary.map((item) => (
                      <p className="mt-1 text-xs italic text-slate-500" key={item}>
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </CvSection>

          <CvSection icon={BadgeCheck} id="certifications" title="Certifications" className="scroll-mt-6" href="/certifications">
            <div className="space-y-5">
              {certifications.map((certification) => (
                <article className="grid grid-cols-[8px_minmax(0,1fr)] gap-3" key={certification.name}>
                  <span className="mt-2 size-1.5 rounded-full bg-slate-800" />
                  <div>
                    <h3 className="text-sm font-bold leading-5 text-slate-800">{certification.name}</h3>
                    {certification.issuer || certification.date ? <p className="mt-1 text-xs text-slate-500">{[certification.issuer, certification.date].filter(Boolean).join(" · ")}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </CvSection>

          <CvSection icon={Globe2} id="languages" title="Languages" className="scroll-mt-6">
            <div className="space-y-4">
              {languages.map((language) => (
                <div key={language.name}>
                  <p className="text-sm font-bold text-slate-800">{language.name}</p>
                  {language.proficiency ? <p className="mt-1 text-sm text-slate-500">{language.proficiency}</p> : null}
                </div>
              ))}
            </div>
          </CvSection>
        </aside>
      </div>
    </div>
  );
}
