"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered application that generates marketing content based on user prompts.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Interactive dashboard for tracking investment portfolio performance with real-time data.",
    tags: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
    image: "/placeholder.svg?height=600&width=800",
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
                      src={project.image || "assets/projects/radiologo.png"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
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
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
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
