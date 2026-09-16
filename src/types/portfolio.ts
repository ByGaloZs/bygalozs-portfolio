export type DetailContent = {
  overview?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
  projects?: string[];
};

export type Experience = {
  slug: string;
  company: string;
  role: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  summary: string[];
  details?: DetailContent;
};

export type Project = {
  slug: string;
  name: string;
  summary: string[];
  technologies?: string[];
  details?: DetailContent;
};

export type Education = {
  slug: string;
  institution: string;
  qualification: string;
  startDate?: string;
  endDate?: string;
  summary: string[];
  details?: {
    overview?: string;
    coursework?: string[];
    achievements?: string[];
  };
};

export type Certification = {
  name: string;
  issuer?: string;
  date?: string;
  credentialUrl?: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Language = {
  name: string;
  proficiency?: string;
};

export type Profile = {
  name: string;
  headline?: string;
  location?: string;
  availability?: string;
  website: string;
  professionalSummary: string[];
};
