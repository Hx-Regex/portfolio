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
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomeContent() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="h-[99svh] flex flex-col">


        <div className="container  mx-auto absolute top-0 left-1/2 -translate-x-1/2 border-r border-l border-gray-300">
          <HeroSection />
        </div>
        <div className="h-[83vh] w-full container mx-auto   " />
        <div className="container mx-auto border border-gray-300 p-1 relative ">
          <CrossBorder />

          <p className="text-center text-lg text-gray-600 mb-6">Worked with</p>
          <MarqueeDemo />
        </div>
      </div>
      <div className="container mx-auto border border-gray-300 p-1 relative  border-t-0 pt-10 px-10">

        <TechnologiesSection />

      </div>
      <div className="container mx-auto border border-gray-300 p-1 relative  border-t-0 px-10 py-10">
        <CrossBorder />
        <EducationExperienceSection />
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
