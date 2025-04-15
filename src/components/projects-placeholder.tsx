"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsPlaceholder() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 60%",
        scrub: 0.5,
        immediateRender: false,
      }
    });

    // Set initial positions
    projectRefs.current.forEach((projectRef, index) => {
      if (!projectRef) return;
      
      gsap.set(projectRef, {
        y: -150,
        scale: 0.95,
        opacity: 0.5
      });
    });

    // Add to timeline
    projectRefs.current.forEach((projectRef, index) => {
      tl.to(projectRef, {
        y: 0,
        scale: 1,
        opacity: 1,
      }, index * 0.1);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="placeholder-section min-h-screen bg-gray-200 py-20 w-full">
      <div className="mx-auto max-w-[1750px]">
        <div className="flex h-[60vh] gap-20">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              ref={el => {projectRefs.current[index] = el}}
              className="w-1/3 relative overflow-hidden rounded-lg bg-gray-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl text-gray-400">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 