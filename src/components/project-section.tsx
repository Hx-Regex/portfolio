"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { SiNextdotjs, SiTailwindcss, SiExpress, SiDocker, SiFirebase, SiReact, SiGoogleanalytics, SiC, SiPwa } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { HiOutlineDatabase } from "react-icons/hi"
import { SiUmami } from "react-icons/si"
import type { IconType } from "react-icons"

// Technology badge configuration with icons and colors
interface TechConfig {
  icon: IconType;
  color: string;
  borderColor: string;
  textColor: string;
}

const techConfig: Record<string, TechConfig> = {
  "Next.js": { 
    icon: SiNextdotjs, 
    color: "text-black", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-gray-800"
  },
  "Tailwind CSS": { 
    icon: SiTailwindcss, 
    color: "text-[#38bdf8]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#38bdf8]"
  },
  "Express.js": { 
    icon: SiExpress, 
    color: "text-[#000000]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#000000]"
  },
  "Docker": { 
    icon: SiDocker, 
    color: "text-[#2496ED]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#2496ED]"
  },
  "Firebase": { 
    icon: SiFirebase, 
    color: "text-[#FFCA28]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#FFCA28]"
  },
  "React": { 
    icon: SiReact, 
    color: "text-[#61DAFB]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#61DAFB]"
  },
  "Umami": { 
    icon: SiUmami, 
    color: "text-[#6c5ce7]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#6c5ce7]"
  },
  "Google Analytics": { 
    icon: SiGoogleanalytics, 
    color: "text-[#E37400]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#E37400]"
  },
  "PWA": { 
    icon: SiPwa, 
    color: "text-[#5a0fc8]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#5a0fc8]"
  },
  "C": { 
    icon: SiC, 
    color: "text-[#5c6bc0]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#5c6bc0]"
  },
  "React Native": { 
    icon: TbBrandReactNative, 
    color: "text-[#61DAFB]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#61DAFB]"
  },
  "Firebase Real TimeDB": { 
    icon: HiOutlineDatabase, 
    color: "text-[#FF8F00]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#FF8F00]"
  },
  "Firebase Firestore": { 
    icon: HiOutlineDatabase, 
    color: "text-[#FF8F00]", 
    borderColor: "border-black border-b-2 border-r-2",
    textColor: "text-[#FF8F00]"
  },
}

const projects = [
  {
    id: 1,
    title: "Kora Awards Voting Platform",
    description: "Online paid voting platform with multiple payment gateways integration (Onafriq, Ngenius, Pvit) and analytics dashboard to monitor transactions, revenue, and server performance.",
    tags: ["Next.js", "Tailwind CSS", "Express.js", "Docker", "Firebase", "React", "Umami"],
    image: "/assets/projects/kora.png",
    link: "https://e-vote.koraawards.com",
  },
  {
    id: 2,
    title: "Africkana Radio Website",
    description: "Created a dynamic dashboard for managing radios, playlists, podcasts, and advertisements (MP3 and banners). Implemented responsive design and ad management system.",
    tags: ["Next.js", "Tailwind CSS", "React", "Google Analytics", "PWA"],
    image: "/assets/projects/africkana.png",
    link: "https://radio.africkana.com",
  },
  {
    id: 3,
    title: "Smart Cafeteria IoT System",
    description: "Academic project featuring an IoT-based cafeteria management system with mobile app integration and real-time database functionality.",
    tags: ["C", "React Native", "Firebase Real TimeDB", "Firebase Firestore"],
    image: "/assets/projects/02hero.jpg",
    link: "#",
  },
]

export default function ProjectSectionClean() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Set up refs array with proper length
    projectRefs.current = projectRefs.current.slice(0, projects.length)
    
    const ctx = gsap.context(() => {
      // Simple fade in animation for the section
      gsap.from(".section-title", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      })

      // Staggered appearance for project items
      gsap.from(projectRefs.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: "oklch(0.93 0.0058 264.53 / 90%)" }}>
      <div className="container px-4 mx-auto ">
        <h2 className="section-title text-3xl font-bold mb-2 text-gray-900">Featured Projects</h2>
        <p className="text-gray-600 mb-12">
          A selection of my recent work showcasing my skills and expertise in various technologies.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              // data-cursor="project"
              key={project.id}
              ref={el => {
                projectRefs.current[index] = el;
              }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Project image */}
              <div className="w-full md:w-1/2">
                <div className="bg-white p-3 rounded-lg shadow-md border border-black border-black h-full border-b-4 border-r-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      data-cursor="project"
                      src={project.image || "assets/projects/radiologo.png"}
                      alt={project.title}
                      fill
                      className="object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                      onClick={() => {
                        window.open(project.link, "_blank");
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-md border border-black h-full border-b-4 border-r-4">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => {
                      const tech = techConfig[tag] || { 
                        icon: null, 
                        color: "text-gray-700", 
                        borderColor: "border-gray-300",
                        textColor: "text-gray-800" 
                      };
                      const IconComponent = tech.icon;
                      
                      return (
                        <span 
                          key={tag} 
                          className={`text-sm font-medium px-3 py-1 rounded-md bg-white border ${tech.borderColor} ${tech.textColor} flex items-center gap-1 shadow-sm`}
                        >
                          {IconComponent && <IconComponent className={`h-4 w-4 ${tech.color}`} />}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors group"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
