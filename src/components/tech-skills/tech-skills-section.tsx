"use client"

import { Plus } from "lucide-react"
import { techCategories } from "./data"
import { TechCard } from "./tech-card"

export default function TechSkillsSection() {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="mx-auto pb-10 text-center">
          <h2 className="text-lg md:text-5xl mb-4 text-black dark:text-white font-bold">
            Current Technologies
          </h2>
          <p className="text-neutral-500 dark:text-neutral-300 text-sm md:text-base max-w-3xl mx-auto">
            I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions.
            These are some of my <b>Main</b> technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scale-95 divide-gray-700 dark:divide-gray-700">
          {techCategories.map((category, index) => (
            <div
              key={category.id}
              className={`p-5 dark:border-gray-700 border-gray-300 relative ${
                index === 0 ? 'border-r border-b border-l' : 
                index === 1 ? 'border-r border-b' : 
                index === 2 ? 'border-r border-b' : 
                index === 3 ? 'border-b  border-r' : 
                index === 4 ? 'border-r border-l' : 
                index === 5 ? 'border-r' : 
                index === 6 ? 'border-r' : 
                'border-r'
              }`}
            >
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-center text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <TechCard key={skillIndex} skill={skill} />
                ))}
              </div>
              
              {/* Plus icons for visual appeal */}
              {index === 0 && (
                <>
                  <div className="bg-background absolute -left-3 -bottom-3 text-gray-400">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div className="bg-background absolute -right-3 -bottom-3 text-gray-400">
                    <Plus className="w-6 h-6" />
                  </div>
                </>
              )}
              {index === 1 && (
                <div className="bg-background absolute -right-3 -bottom-3 text-gray-400">
                  <Plus className="w-6 h-6" />
                </div>
              )}
              {index === 2 && (
                <div className="bg-background absolute -right-3 -bottom-3 text-gray-400">
                  <Plus className="w-6 h-6" />
                </div>
              )}
              {index === 3 && (
                <div className="bg-background absolute -right-3 -bottom-3 text-gray-400">
                  <Plus className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
