"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export function HeroSection() {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Name animation
    gsap.fromTo(
      nameRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Description fade in
    gsap.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    // Badge animation
    gsap.fromTo(
      badgeRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.6,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  return (
    <section className="flex min-h-[83vh]  flex-col items-center justify-center text-center relative">
      <div className="absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mt-20">
        <Link
          href="https://www.linkedin.com/in/ismail-chabane-135aba255/"
          target="_blank"
          ref={badgeRef}
          data-cursor="linkedin"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                   bg-blue-50 border border-blue-200 hover:bg-blue-100 
                   transition-colors duration-300 opacity-0  mb-5"
        >
          <span data-cursor="linkedin" className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span data-cursor="linkedin" className="text-sm font-medium text-blue-800">
            Open to PFE Internship Opportunities
          </span>
          <svg
            data-cursor="linkedin"
            className="w-4 h-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
        
        <div className="relative">
          <h1
            ref={nameRef}
            data-cursor="hero"
            className="text-9xl font-semibold tracking-tight cursor-default select-none opacity-0"
          >
            Ismail Chabane
          </h1>
        </div>
        <div
          ref={descriptionRef}
          data-cursor="description"
          className=" opacity-0 space-y-2"
        >
          <p className="text-2xl font-medium">Software Engineer & Freelancer</p>
          <p className="text-xl text-gray-600">
            pursuing Master&apos;s in Data Science
          </p>
        </div>
      </div>
    </section>
  );
}
