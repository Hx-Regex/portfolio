"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processes = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your vision, goals, and requirements through in-depth consultation."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Crafting a tailored approach that aligns with your brand and objectives."
  },
  {
    number: "03",
    title: "Design",
    description: "Creating intuitive, visually stunning interfaces that engage users."
  },
  {
    number: "04",
    title: "Development",
    description: "Building robust, scalable solutions using cutting-edge technologies."
  }
];

export function ProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = document.querySelectorAll('.process-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(item,
        { 
          opacity: 0,
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            end: "bottom center",
            scrub: 1
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-white py-20">
      <div className="max-w-[1800px] mx-auto px-10">
        <h2 className="text-6xl font-semibold mb-20">Work Process</h2>
        <div className="grid grid-cols-2 gap-20">
          {processes.map((process) => (
            <div key={process.number} className="process-item">
              <span className="text-8xl font-bold text-black/10">{process.number}</span>
              <h3 className="text-2xl font-medium mt-4">{process.title}</h3>
              <p className="mt-4 text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 