"use client"

import { Plus } from "lucide-react"
import { techCategories } from "./data"
import { TechCard } from "./tech-card"

export default function TechSkillsSection() {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="mx-auto  text-center">
          <h2 className="text-lg md:text-7xl mb-4 text-[#222222] dark:text-white font-bold">
            Technologies
          </h2>
          {/* <p className="text-neutral-500 dark:text-neutral-300 text-sm md:text-base max-w-3xl mx-auto">
            I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions.
            These are some of my <b>Main</b> technologies.
          </p> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:divide-black/70 dark:md:divide-black/70 mt-10">
          {techCategories.map((category, index) => (
            <div
              key={category.id}
              className={`p-3 md:p-5 relative mb-4 md:mb-0 border-black/70 ${
                // Only show borders on md and larger screens
                index === 0 ? 'md:border-r md:border-b md:border-l' : 
                index === 1 ? 'md:border-r md:border-b' : 
                index === 2 ? 'md:border-r md:border-b' : 
                index === 3 ? 'md:border-b md:border-r' : 
                index === 4 ? 'md:border-r md:border-l' : 
                index === 5 ? 'md:border-r' : 
                index === 6 ? 'md:border-r' : 
                'md:border-r'
              }`}
            >
              <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-4 uppercase tracking-wide text-center text-black/70 dark:text-black/70">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <TechCard key={skillIndex} skill={skill} />
                ))}
              </div>
              
              {/* Plus icons for visual appeal */}
              {index === 0 && (
                <>
                  <div className="bg-background absolute -left-3 -bottom-3 text-black/70 md:block hidden">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div className="bg-background absolute -right-3 -bottom-3 text-black/70 md:block hidden">
                    <Plus className="w-6 h-6" />
                  </div>
                </>
              )}
              {index === 1 && (
                <div className="bg-background absolute -right-3 -bottom-3 text-black/70 md:block hidden">
                  <Plus className="w-6 h-6" />
                </div>
              )}
              {index === 2 && (
                <div className="bg-background absolute -right-3 -bottom-3 text-black/70 md:block hidden">
                  <Plus className="w-6 h-6" />
                </div>
              )}
              {index === 3 && (
                <div className="bg-background absolute -right-3 -bottom-3 text-black/70 md:block hidden">
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
