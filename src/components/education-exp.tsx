"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface EducationCardProps {
  degree: string;
  years: string;
  institution: string;
  description: string;
}

interface ExperienceCardProps {
  position: string;
  years: string;
  description: string;
  children?: React.ReactNode;
}

export default function EducationExperienceSection() {
  return (
    <section className="py-16" style={{ backgroundColor: "oklch(0.93 0.0058 264.53 / 90%)" }}>
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6      ">Education</h2>
            <div className="space-y-4">
              <EducationCard
                degree="Master's Degree"
                years="2023 - 2025"
                institution="Faculté des Sciences Ben M’Sick"
                description="[TBA]"
              />
              <EducationCard
                degree="Bachelor's Degree"
                years="2021 - 2023"
                institution="Faculté des Sciences Ben M’Sicks"
                description="[TBA]"
              />
            </div>
          </div>

          {/* Professional Experience Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-4">
              <ExperienceCard
                position="Freelance Developer"
                years="2023 - 2025"
                description="[TBA]"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Check my projects
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </ExperienceCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationCard({ degree, years, institution, description }: EducationCardProps) {
  return (
    <div className="bg-white rounded-lg p-5 border-2 border-black border-b-4 border-r-4  shadow-md hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-xl text-gray-900">{degree}</h3>
        <span className="text-sm font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">{years}</span>
      </div>
      <p className="text-gray-700 font-medium">{institution}</p>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  )
}

function ExperienceCard({ position, years, description, children }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg p-5 border-2 border-black border-b-4 border-r-4  shadow-md hover:shadow-lg transition-all ">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-xl text-gray-900">{position}</h3>
        <span className="text-sm font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded border ">{years}</span>
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
      {children}
    </div>
  )
}
