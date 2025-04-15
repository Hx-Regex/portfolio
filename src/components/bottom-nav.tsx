"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function BottomNav() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial fade in
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1,
        ease: "power2.out",
      }
    );

    // Fade out when scrolling past
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Start fading when element is 80% from top of viewport
        end: "top 20%", // Complete fade by 20% from top
        scrub: true,
        // opacity: 0,
      },
    });
  }, []);

  const handleScroll = () => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-[10vh] w-full border-b border-gray-400 opacity-0"
    >
      <div className="max-w-[1800px] mx-auto h-full flex items-center justify-between px-10">
        <div
          onClick={handleScroll}
          data-cursor="scroll"
          className="flex items-center gap-8 h-full justify-center cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
            data-cursor="scroll"
          >
            <path
              d="M10 2L10 18M10 18L3 11M10 18L17 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span data-cursor="scroll" className="text-md select-none">
            Scroll to Explore
          </span>
        </div>

        <div className="text-sm font-medium select-none">Featured Projects</div>
      </div>
    </div>
  );
}
