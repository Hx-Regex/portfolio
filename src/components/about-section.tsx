"use client";

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { education, experience, skills } from "../app/_data/about-data"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: "power2.out" }
    })

    // Animate section title and description
    timeline.from(".section-header", {
      y: 50,
      opacity: 0,
      duration: 1
    })

    // Animate timeline items with stagger
    const items = gsap.utils.toArray('.timeline-item')
    items.forEach((item) => {
      gsap.fromTo(
        item as Element,
        { 
          opacity: 0,
          x: -30 
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item as Element,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Animate skill cards with stagger
    gsap.from(".skill-card", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    })

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className=" bg-gradient-to-b from-transparent to-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-header max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            About
          </h2>
          <p className="text-lg text-gray-600">
            Passionate about creating seamless digital experiences through code and design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Education</CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="timeline-item relative pl-8 border-l-2 border-gray-300 mb-8 last:mb-0 hover:border-gray-500 transition-colors duration-300"
                >
                  <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-300 transition-colors duration-300"/>
                  <span className="text-sm text-gray-600 font-medium">{edu.year}</span>
                  <h4 className="text-xl font-medium mt-2 text-gray-800">{edu.degree}</h4>
                  <p className="text-gray-600 mt-1">{edu.school}</p>
                  <p className="text-sm text-gray-500 mt-2">{edu.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="timeline-item relative pl-8 border-l-2 border-gray-300 mb-8 last:mb-0 hover:border-gray-500 transition-colors duration-300"
                >
                  <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-300"/>
                  <span className="text-sm text-gray-600 font-medium">{exp.year}</span>
                  <h4 className="text-xl font-medium mt-2 text-gray-800">{exp.role}</h4>
                  <p className="text-gray-600 mt-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 mt-2">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-gray-800">Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-medium text-center capitalize text-gray-700">{category}</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {skillList.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="skill-card flex flex-col items-center justify-center p-4 
                                 bg-white hover:bg-gray-50 transition-all duration-300 
                                 rounded-xl shadow-sm hover:shadow-md w-[100px] h-[100px]
                                 border border-gray-200 hover:scale-105"
                      >
                        <div className="text-3xl mb-2 text-gray-700">
                          <skill.Icon />
                        </div>
                        <span className="text-sm font-medium text-center text-gray-600">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
