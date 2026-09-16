import { BriefcaseBusiness } from "lucide-react";

import { ExperienceTimeline } from "@/components/cv/experience-timeline";
import { PortfolioPageHeading } from "@/components/layout/portfolio-page-heading";
import { experiences } from "@/data/experience";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-5xl">
      <PortfolioPageHeading description="Engineering roles focused on building, commissioning, and improving complex technical systems." icon={BriefcaseBusiness} title="Experience" />
      <div className="mt-8"><ExperienceTimeline experiences={experiences} /></div>
    </section>
  );
}
