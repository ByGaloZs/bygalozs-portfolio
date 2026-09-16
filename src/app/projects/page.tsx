import { Box } from "lucide-react";

import { SelectedProjects } from "@/components/cv/selected-projects";
import { PortfolioPageHeading } from "@/components/layout/portfolio-page-heading";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl">
      <PortfolioPageHeading description="A selection of engineering and software projects, from concept through delivery." icon={Box} title="Projects" />
      <div className="mt-8"><SelectedProjects projects={projects} /></div>
    </section>
  );
}
