import { WorkExperience } from "@/components/experience/work-experience";
import { WORK_EXPERIENCE } from "@/components/experience/data";
import CrossBorder from "@/components/ui/cross-border";

export function ExperienceSectionWrapper() {
  return (
    <div className="container xl:max-w-[70svw] mx-auto border border-black/70 p-1 relative border-t-0 px-10 py-10 bg-[#FBFAF9]">
      <CrossBorder />

      <div className="mx-auto pb-10 text-center">
        <h2 className="text-lg md:text-8xl mb-4 text-[#222222] dark:text-white font-bold">
          Experience
        </h2>
      </div>
      
      <div className="border border-black/70 duration-300 relative">
        <CrossBorder />
        <WorkExperience experiences={WORK_EXPERIENCE} />
      </div>
    </div>
  );
}
