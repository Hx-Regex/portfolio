"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
    <section className="py-16" style={{ backgroundColor: "oklch(0.93 0.0058 264.53 / 90%)" }}>
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-4">
              <EducationCard
                degree="Master's in Data Science"
                years="2023 - Present"
                institution="Faculté des Sciences Ben M'Sick"
                description="Pursuing advanced studies in data science with a focus on machine learning and cloud computing technologies."
                bulletPoints={[
                  "Machine Learning: Advanced algorithms, supervised & unsupervised learning techniques",
                  "Deep Learning: Neural networks, computer vision, and natural language processing",
                  "Cloud Computing: Distributed systems and cloud-based data processing",
                  "Big Data Analytics: Processing and analyzing large-scale datasets"
                ]}
              />
              <EducationCard
                degree="Bachelor's in Computer Science"
                years="2022 - 2023"
                institution="Faculté des Sciences Ben M'Sick"
                description="Completed comprehensive computer science education with emphasis on software development and database systems."
                bulletPoints={[
                  "Data Structures & Algorithms: Fundamental computational concepts and optimization",
                  "Database Management: SQL, database design, and data modeling principles",
                  "Statistics & Data Analysis: Statistical methods for data interpretation",
                  "Final Project: Developed a Smart Cafeteria IoT System using C, React Native, and Firebase integrations"
                ]}
              />
            </div>
          </div>

          {/* Professional Experience Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-4">
              <ExperienceCard
                position="Freelance Software Developer"
                years="2022 - Present"
                description="Working with various companies and agencies as a freelance developer, specializing in full-stack web applications and payment integrations."
                bulletPoints={[
                  "Kora Awards Voting Platform: Developed an online paid voting platform with multiple payment gateway integrations (Onafriq, Ngenius, Pvit) and analytics dashboard",
                  "Payment Systems: Implemented secure transaction processing with detailed monitoring and reporting",
                  "Analytics Dashboard: Created real-time performance monitoring tools for transactions, revenue tracking, and server metrics",
                  "Africkana Radio Website: Built a dynamic dashboard for managing radios, playlists, podcasts, and advertisements",
                  "Responsive Design: Ensured seamless user experience across all devices with modern UI/UX principles",
                  "Ad Management System: Developed comprehensive advertising systems for audio and banner advertisements"
                ]}
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

function EducationCard({ degree, years, institution, description, bulletPoints }: EducationCardProps) {
  return (
    <div className="bg-white rounded-lg p-5 border-2 border-black border-b-4 border-r-4 shadow-md hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-xl text-gray-900">{degree}</h3>
        <span className="text-sm font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">{years}</span>
      </div>
      <p className="text-gray-700 font-medium">{institution}</p>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
      
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function ExperienceCard({ position, years, description, bulletPoints, children }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg p-5 border-2 border-black border-b-4 border-r-4 shadow-md hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-xl text-gray-900">{position}</h3>
        <span className="text-sm font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded border">{years}</span>
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
      
      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
      
      {children}
    </div>
  )
}
