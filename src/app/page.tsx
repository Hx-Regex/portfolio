import { Suspense } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { HeroSection } from "@/components/hero-section";
// import { TechMarquee } from "@/components/tech-marquee";
import { NavBar } from "@/components/nav-bar";
import { CursorFollower } from "@/components/cursorFollower/cursor-follower";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { Marquee } from "@/components/marquee";
import { MarqueeDemo } from "@/components/tech-marquee";
import TechnologiesSection from "@/components/tech-skills";
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function HomeContent() {
  return (
    <>
      <CursorFollower />
      <NavBar />
      <div className="h-[100svh] flex flex-col">

     
      <div className="w-full absolute top-0 left-0">
        <HeroSection />
      </div>
      <div className="h-[83vh] w-full " />
      <p className="text-center text-lg text-gray-600 mb-6">Worked with</p>
      {/* <TechMarquee /> */}
      <MarqueeDemo />
      </div>
      <TechnologiesSection />
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
