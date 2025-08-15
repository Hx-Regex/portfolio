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
      <div>
        <Timeline data={EXPERIENCE_TIMELINE} />
      </div>
    </div>
   </section>
  )
}

