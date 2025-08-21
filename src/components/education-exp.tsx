"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Timeline } from "./ui/timeline";
import { EXPERIENCE_TIMELINE } from "@/app/_data/experience";

interface EducationCardProps {
  degree: string;
  years: string;
  institution: string;
  description: string;
  bulletPoints?: string[];
}

interface ExperienceCardProps {
  position: string;
  years: string;
  description: string;
  bulletPoints?: string[];
  children?: React.ReactNode;
}

export default function EducationExperienceSection() {
  return (
    <section>
      <div>        
        <div className="mx-auto    text-center ">
        <h2 className="text-lg md:text-5xl mb-4 text-black dark:text-white  font-bold">
          Current Technologies
        </h2>
        <p className="text-neutral-500 dark:text-neutral-300 text-sm md:text-base max-w-3xl mx-auto ">
          I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions.
          These are some of my <b>Main</b> technologies.
        </p>
      </div>
        <div>
          <Timeline data={EXPERIENCE_TIMELINE} />
        </div>
      </div>
    </section>
  )
}

