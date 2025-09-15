import { Suspense } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { CursorFollower } from "@/components/cursorFollower/cursor-follower";
import { AboutSection } from "@/components/about-section";
import { Marquee } from "@/components/marquee";
import EducationExperienceSection from "@/components/education-exp";
import ProjectSectionClean from "@/components/project-section";

import {
  HeroSectionWrapper,
  TechnologiesSectionWrapper,
  ExperienceSectionWrapper,
  ProjectsSectionWrapper,
} from "@/components/home-components";
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomeContent() {
  return (
    <>
      {/* <NavBar /> */}
      <HeroSectionWrapper />
      
      <TechnologiesSectionWrapper />
      
      <ExperienceSectionWrapper />
      
      <ProjectsSectionWrapper />

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
