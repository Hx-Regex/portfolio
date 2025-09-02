import { Suspense } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { HeroSection } from "@/components/hero-section";
// import { TechMarquee } from "@/components/tech-marquee";
import { CursorFollower } from "@/components/cursorFollower/cursor-follower";
import { AboutSection } from "@/components/about-section";
import { Marquee } from "@/components/marquee";
import { MarqueeDemo } from "@/components/tech-marquee";
import TechnologiesSection from "@/components/tech-skills";
import EducationExperienceSection from "@/components/education-exp";
import ProjectSectionClean from "@/components/project-section";

import CrossBorder from "@/components/ui/cross-border";
import { WorkExperience } from "@/components/experience/work-experience";
import { WORK_EXPERIENCE } from "@/components/experience/data";
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomeContent() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="h-[99svh] max-h-[1060px] flex flex-col">


        {/* <div className="container  mx-auto absolute top-0 left-1/2 -translate-x-1/2 border-r border-l border-gray-300">

        </div> */}
        <div className="h-[83vh] w-full sm:container max-w-[70svw] mx-auto relative max-h-[900px] border-r border-l border-gray-300">
          <HeroSection />
        </div>

        <div className="sm:container max-w-[70svw] mx-auto border border-gray-300 p-1 relative ">
          <CrossBorder />

          <p className="text-center text-lg text-gray-600 mb-6">Worked with</p>
          <MarqueeDemo />
        </div>
      </div>
      <div className="sm:container max-w-[70svw] mx-auto border border-gray-300 p-1 relative  border-t-0 pt-10 px-10">

        <TechnologiesSection />

      </div>
      <div className="sm:container max-w-[70svw] mx-auto border border-gray-300 p-1 relative  border-t-0 px-10 py-10">
        <CrossBorder />

        <div className="mx-auto pb-10 text-center">
          <h2 className="text-lg md:text-5xl mb-4 text-black dark:text-white font-bold">
            My Professional Experience
          </h2>
          <p className="text-neutral-500 dark:text-neutral-300 text-sm md:text-base max-w-3xl mx-auto">
            I've worked on diverse projects ranging from AI-powered recommendation systems to comprehensive web platforms, specializing in Next.js, TypeScript, and modern web technologies. My experience spans full-stack development, AI integration, and building scalable solutions that deliver exceptional user experiences.
          </p>
        </div>
        <div className=" border border-gray-300  duration-300 relative">
          <CrossBorder />
          <WorkExperience experiences={WORK_EXPERIENCE} />
        </div>


        {/* <EducationExperienceSection /> */}
      </div>

      {/* <ProjectSectionClean /> */}
      {/* <AboutSection />
      <ProjectsSection /> */}
    </>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HomeContent />
    </main>
  );
}
