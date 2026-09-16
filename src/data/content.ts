import portfolioContent from "../../content/portfolio.json";

import type { Certification, Education, Experience, Language, Profile, Project, SkillGroup } from "@/types/portfolio";

type PortfolioContent = {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  skillGroups: SkillGroup[];
  languages: Language[];
};

export const portfolio = portfolioContent as PortfolioContent;
