import { HeroSectionV2 } from "@/components/hero-section-v2";
import { MarqueeDemo } from "@/components/tech-marquee";
import CrossBorder from "@/components/ui/cross-border";

export function HeroSectionWrapper() {
  return (
    <div className="md:h-[99svh] h-auto md:max-h-[1060px] flex flex-col">
      <div className="md:h-[83vh] h-auto w-full container xl:max-w-[70svw]  mx-auto relative md:max-h-[900px] border-r border-l border-black/70 bg-[#FBFAF9]">
        <HeroSectionV2 />
      </div>

      <div className="container xl:max-w-[70svw] mx-auto border border-black/70 p-1 relative bg-[#FBFAF9] ">
        <CrossBorder />
        <p className="text-center text-lg text-gray-600 mb-6">Worked with</p>
        <MarqueeDemo />
      </div>
    </div>
  );
}
