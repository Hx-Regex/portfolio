"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ProjectsPlaceholder } from "./projects-placeholder";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Africkana Radio",
    category: "Branding",
    image: "/assets/projects/radiologo.png",
    hoverImage: "/assets/projects/africkana.png",
    background: "bg-pink-500",
    year: "2024",
  },
  {
    id: "02",
    title: "Kora Awards",
    category: "Web Development",
    image: "/assets/projects/koralogo.png?cashew",
    hoverImage: "/assets/projects/kora.png?cashew",
    background: "bg-white",
    link: "https://e-vote.koraawards.com",
    year: "2024",
  },
  {
    id: "03",
    title: "This is Willo",
    category: "Web Design",
    image: "/assets/projects/02hero.jpg",
    hoverImage: "/assets/projects/02hover.jpg",
    background: "bg-black",
  },
];

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "top 40%",
        scrub: true,
      },
    });

    // Show initial active content
    const initialContent = contentRefs.current[activeIndex];
    if (initialContent) {
      gsap.to(initialContent, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, []);

  const handleMouseEnter = (index: number) => {
    // Hide previous content instantly
    const previousContent = contentRefs.current[activeIndex];
    if (previousContent) {
      gsap.to(previousContent, {
        opacity: 0,
        duration: 0.1, // Much faster fade out
        ease: "none", // Linear animation
      });
    }

    setActiveIndex(index);

    // Show new content quickly
    const content = contentRefs.current[index];
    if (content) {
      gsap.to(content, {
        opacity: 1,
        duration: 0.2, // Faster fade in
        ease: "none", // Linear animation
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gray-200 py-20 w-full projects-section"
    >
      <div className="mx-auto max-w-[1750px]">
        <div className="flex flex-col gap-20">
          <div className="flex h-[70vh] gap-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group flex flex-col transition-all duration-300 ease-in-out ${
                  index === activeIndex ? "w-[60%]" : "w-[20%]"
                }`}
              >
                <Link
                  href={project.link || `/projects/${project.id}`}
                  target={project.link ? "_blank" : undefined}
                  onMouseEnter={() => handleMouseEnter(index)}
                  className={`relative h-full overflow-hidden rounded-lg ${project.background} transition-all duration-500 ease-in-out`}
                >
                  <div
                    className="absolute inset-0 z-10 cursor-none"
                    data-cursor="project"
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.hoverImage && (
                    <Image
                      src={project.hoverImage}
                      alt={`${project.title} hover`}
                      fill
                      className="object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute top-8 left-8">
                    {project.year && (
                      <span className="inline-block rounded-full bg-black/10 px-4 py-1 text-sm text-white backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {project.year}
                      </span>
                    )}
                  </div>
                </Link>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className={`mt-2 opacity-0 flex justify-between items-center ${
                    index === activeIndex ? "opacity-100" : ""
                  }`}
                >
                  <h3 className="relative">
                    <span className="text-2xl font-medium text-gray-900">
                      {project.title}
                    </span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-gray-900 transform origin-left transition-transform duration-500 ease-out ${
                        index === activeIndex ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </h3>
                  <p className="text-sm uppercase tracking-wider text-gray-600">
                    {project.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
