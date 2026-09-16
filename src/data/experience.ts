import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    slug: "hubtalk",
    company: "HubTalk",
    role: "AI Engineer",
    location: "Madrid, Spain",
    startDate: "Feb 2026",
    summary: [
      "Design and maintain production voice and chat AI agents, including prompt architecture, conversation flows, guardrails, routing and escalation logic; validate behavior through structured QA, edge-case testing, regression checks and call reviews.",
      "Translate business requirements into reliable conversational logic and production-ready agent behavior.",
    ],
  },
  {
    slug: "gurego",
    company: "GUREGO",
    role: "Application Engineer",
    location: "Madrid, Spain",
    startDate: "May 2023",
    endDate: "Jan 2026",
    summary: [
      "Integrated, programmed and commissioned collaborative robots, AMRs, PLC-controlled systems and industrial vision applications for palletizing, pick-and-place and quality inspection.",
      "Troubleshot robot behavior, PLC signals and I/O, sensors, application logic, Python/C++ code, Linux environments and networking, while providing technical documentation and production support.",
    ],
  },
  {
    slug: "alliance-automation",
    company: "Alliance Automation",
    role: "Assembly Engineer",
    location: "Madrid, Spain",
    startDate: "Apr 2022",
    endDate: "Mar 2023",
    summary: [
      "Built and integrated custom automation equipment from mechanical and electrical drawings, including conveyors, palletizers, sorting systems and robotic subsystems; installed and tested sensors, actuators, control panels and safety devices.",
      "Supported calibration and pre-commissioning, diagnosing mechanical, electrical and integration issues to improve build quality and system readiness before handoff.",
    ],
  },
  {
    slug: "parque-tecnologico-iberoingenio",
    company: "Parque Tecnologico Iberoingenio",
    role: "Automation Engineer",
    location: "Madrid, Spain",
    startDate: "Aug 2021",
    endDate: "Apr 2022",
    summary: [
      "Supported deployment of an Industry 4.0 laboratory integrating robots, PLCs, remote I/O, sensors and safety systems; configured automation components and prepared technical documentation.",
      "Supported advanced automation technology demonstrations at Hannover Messe Leon 2021.",
    ],
  },
];
