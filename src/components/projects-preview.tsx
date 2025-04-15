"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Bob's Specials",
    category: "Branding",
    image: "/assets/projects/01hero.jpg",
    background: "bg-pink-500",
    year: "2024",
  },
  {
    id: "02",
    title: "This is Willo",
    category: "Web Design",
    image: "/assets/projects/02hero.jpg",
    background: "bg-black",
  },
  {
    id: "03",
    title: "Kora Awards",
    category: "Web Development",
    image: "/assets/projects/kora.jpg?cashew",
    background: "bg-gray-100",
    year: "2024",
  },
];

export function ProjectsPreview() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const previewRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hide actual projects content initially
    if (projectsSectionRef.current) {
      gsap.set(projectsSectionRef.current, { autoAlpha: 0 });
    }

    // Hide all content initially
    contentRefs.current.forEach((contentRef) => {
      if (contentRef) {
        gsap.set(contentRef, { opacity: 0 });
      }
    });

    // Initial squares animation timeline
    const initialTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 0.5,
      }
    });

    // Set initial states
    previewRefs.current.forEach((previewRef) => {
      if (!previewRef) return;
      gsap.set(previewRef, {
        y: 400,
      });
    });

    // Animate squares up
    previewRefs.current.forEach((previewRef, index) => {
      initialTl.to(previewRef, {
        y: -100,
        duration: 0.5,
      }, index * 0.1);
    });

    // Expansion timeline
    const expandTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "bottom center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    });

    // Animate container
    if (containerRef.current) {
      expandTl.to(containerRef.current, {
        width: "100%",
        gap: "5rem",
        padding: "0 2rem",
        duration: 0.5
      }, 0);
    }

    // Staggered expansion of previews with immediate switch to actual
    previewRefs.current.forEach((previewRef, index) => {
      if (!previewRef) return;
      
      expandTl.to(previewRef, {
        width: index === 1 ? "60%" : "20%",
        height: "60vh",
        duration: 0.5,
        onUpdate: function() {
          // Check if the animation is near completion
          if (this.progress() > 0.99) {
            if (containerRef.current && projectsSectionRef.current) {
              // Immediately hide preview and show actual
              gsap.set(containerRef.current, { display: 'none' });
              gsap.to(projectsSectionRef.current, {
                autoAlpha: 1,
                duration: 0.1
              });
            }
          }
        }
      }, index * 0.2);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    // Hide previous content first
    contentRefs.current.forEach((content, i) => {
      if (content) {
        gsap.to(content, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });

    setActiveIndex(index);
    
    // Show new content
    const content = contentRefs.current[index];
    if (content) {
      gsap.to(content, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    // Hide all content on mouse leave
    contentRefs.current.forEach((content) => {
      if (content) {
        gsap.to(content, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen w-full bg-gray-800"
    >
      {/* Preview squares */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 flex items-start justify-center w-full pt-20"
      >
        <div className="flex gap-20 w-full max-w-[1750px] px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => {previewRefs.current[index] = el}}
              className={`w-[20%] h-32 rounded-lg ${project.background} ${
                index === 1 ? 'w-[60%]' : ''
              }`}
              style={{ transformOrigin: "center center" }}
            />
          ))}
        </div>
      </div>

      {/* Actual projects section */}
      <div ref={projectsSectionRef} className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-[1750px] w-full px-4">
          <div className="flex h-[60vh] gap-20">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`relative overflow-hidden rounded-lg ${
                  project.background
                } transition-all duration-500 ease-in-out ${
                  index === activeIndex ? "w-[60%]" : "w-[20%]"
                }`}
              >
                <div
                  className="absolute inset-0 z-10 cursor-none"
                  data-cursor="project"
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-between p-8 opacity-0"
                >
                  <div>
                    {project.year && (
                      <span className="rounded-full bg-black/10 px-4 py-1 text-sm text-white backdrop-blur-sm">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-white/80 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-medium text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 