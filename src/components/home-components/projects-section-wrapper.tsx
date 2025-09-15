import CrossBorder from "@/components/ui/cross-border";
import { VideoProjectCard } from "@/components/projects/video-project-card";
import { projectsData } from "@/components/projects/project-data";

export function ProjectsSectionWrapper() {
  return (
    <div className="container xl:max-w-[70svw] mx-auto border border-black/70 p-1 relative border-t-0 px-10 py-10 bg-[#FBFAF9]">
      <CrossBorder />

      <div className="mx-auto pb-10 text-center">
        <h2 className="text-lg md:text-8xl mb-4 text-[#222222] dark:text-white font-bold">
          Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {projectsData.map((project) => (
          <VideoProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
