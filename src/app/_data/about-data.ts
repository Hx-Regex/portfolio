import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPrisma, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiFigma 
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

export const education = [
  {
    year: "2023 - Present",
    degree: "Master in Data Science",
    school: "Faculté des Sciences Ben M'Sick",
    description: "Currently in 2nd year, focusing on advanced data analytics and machine learning"
  },
  {
    year: "2020 - 2023",
    degree: "Bachelor in Computer Science",
    school: "Faculté des Sciences Ben M'Sick",
    description: "Focused on software engineering fundamentals and web development"
  }
];

export const experience = [
  {
    year: "2023 - Present",
    role: "Freelance Developer",
    company: "Self-employed",
    description: "Built notable projects including e-vote.koraawards.com (a paid voting platform) and radio.africkana.com (an online radio streaming platform), specializing in full-stack development for African businesses"
  }
];

export const skills = {
  frontend: [
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Tailwind", Icon: SiTailwindcss }
  ],
  backend: [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Prisma", Icon: SiPrisma },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "PostgreSQL", Icon: SiPostgresql }
  ],
  tools: [
    { name: "Git", Icon: SiGit },
    { name: "Docker", Icon: SiDocker },
    { name: "Figma", Icon: SiFigma },
    { name: "VS Code", Icon: VscVscode }
  ]
};