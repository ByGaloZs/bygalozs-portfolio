import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "industrial-palletizing-automation",
    name: "Industrial Palletizing Automation",
    technologies: ["Doosan", "Robotics", "Palletizing", "Automation"],
    summary: [
      "Developed, programmed and commissioned a robotic palletizing application with pick/place logic, dynamic positions, vacuum handling, recovery behavior and production-oriented motion safeguards.",
    ],
  },
  {
    slug: "industrial-robot-programming-commissioning",
    name: "Industrial Robot Programming & Commissioning",
    technologies: ["Robotics", "Commissioning", "Welding", "Pick-and-Place", "Screwdriving", "Polishing"],
    summary: [
      "Programmed and commissioned 10+ industrial and collaborative robots across multiple production environments. Selected projects: Toyota, Nissan, Toyoda Gosei, Beiersdorf/Nivea, Panita Foods, Valeo and Schneider Electric.",
    ],
  },
  {
    slug: "conversational-agent-engineering",
    name: "Conversational Agent Engineering (CAE)",
    technologies: ["OpenAI API", "Cekura", "Retell", "LiveKit", "LLM Agents", "Voice AI"],
    summary: [
      "Developed a reusable framework for designing, generating and QA-testing conversational agents through structured agent design, stress testing, quality metrics, edge-case analysis and regression testing.",
    ],
  },
];
