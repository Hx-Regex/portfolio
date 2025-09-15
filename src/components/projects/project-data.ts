export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  technologies: string[];
  category: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "africkana-radio",
    title: "Africkana Radio",
    description: "A modern radio streaming platform with interactive features and real-time audio controls.",
    image: "/assets/projects/africkanaradio/africkana_radio_v2.png",
    video: "/assets/projects/africkanaradio/africkana_radio_v2_dash.png", // You can replace with actual video path
    technologies: ["React", "TypeScript", "Node.js", "WebRTC"],
    category: "Web Application"
  },
  {
    id: "sofimed-ticket",
    title: "Sofimed Ticket System",
    description: "Internal ticket management system for efficient workflow and issue tracking.",
    image: "/assets/projects/sofimedticket/thumbnail.png",
    video: "/assets/projects/sofimedticket/Internal-ticket-system.mp4",
    technologies: ["React", "TypeScript", "Express", "MySQL"],
    category: "Internal Tool"
  },
  {
    id: "kora-website",
    title: "Kora Website",
    description: "A sleek and modern website design with smooth animations and responsive layout.",
    image: "/assets/projects/kora/kora_website.png",
    video: "/assets/projects/kora/kora.jpg", // You can replace with actual video path
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Website"
  },
  {
    id: "soft-skills-site",
    title: "Soft Skills Platform",
    description: "Interactive learning platform for developing professional soft skills with gamified elements.",
    image: "/assets/projects/soft_skills/soft_skills_site.png",
    video: "/assets/projects/soft_skills/soft-skills-website.mp4",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io"],
    category: "Educational Platform"
  },
  {
    id: "smart-cafeteria",
    title: "Smart Cafeteria",
    description: "An intelligent cafeteria management system with automated ordering and payment processing.",
    image: "/assets/projects/smartcafeteria/smart_cafeteria_project.jpg",
    video: "/assets/projects/smartcafeteria/smart_cafeteria_day.jpg", // You can replace with actual video path
    technologies: ["React", "Express", "MongoDB", "Stripe"],
    category: "Web Application"
  },
  {
    id: "pdf-orca",
    title: "PDF Orca",
    description: "Advanced PDF processing tool with AI-powered document analysis and manipulation features.",
    image: "/assets/projects/pdforca/pdf_orca.jpg",
    video: "/assets/projects/pdforca/pdf_orca.jpg", // You can replace with actual video path
    technologies: ["Python", "FastAPI", "OpenAI", "PyPDF2"],
    category: "Desktop Application"
  },


];
