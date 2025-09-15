"use client";

import { AnimatePresence, motion, useSpring } from "framer-motion";
import { Play, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerPlayButton,
  VideoPlayerTimeRange,
  VideoPlayerMuteButton,
} from "@/components/ui/skiper-ui/skiper67";
import type { ProjectData } from "./project-data";

interface VideoProjectCardProps {
  project: ProjectData;
}

export const VideoProjectCard = ({ project }: VideoProjectCardProps) => {
  const [showVideoPopOver, setShowVideoPopOver] = useState(false);

  const SPRING = {
    mass: 0.1,
  };

  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    opacity.set(1);
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  };

  return (
    <>
      <div className="group relative overflow-hidden  transition-all duration-300  h-full w-full">
        {/* Project Image */}
        <div
          onMouseMove={handlePointerMove}
          onMouseLeave={() => {
            opacity.set(0);
          }}
          onClick={() => setShowVideoPopOver(true)}
          className="relative    cursor-pointer overflow-hidden aspect-video border-black/70 "
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Play Button Overlay */}
          <motion.div
            style={{ x, y, opacity }}
            className="absolute z-20 flex w-fit select-none items-center justify-center gap-2 rounded-full bg-black/70 p-3 text-sm text-white backdrop-blur-sm"
          >
            <Play className="size-4 fill-white" />
            <span className="hidden sm:inline">Play</span>
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Project Title */}
        <div className=" ">
          <h3 className="text-xl font-semi-bold text-black ">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {showVideoPopOver && (
          <VideoPopOver
            project={project}
            setShowVideoPopOver={setShowVideoPopOver}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const VideoPopOver = ({
  project,
  setShowVideoPopOver,
}: {
  project: ProjectData;
  setShowVideoPopOver: (showVideoPopOver: boolean) => void;
}) => {
  return (
    <div className="fixed left-0 top-0 z-[101] flex h-screen w-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-black/50 absolute left-0 top-0 h-full w-full backdrop-blur-lg"
        onClick={() => setShowVideoPopOver(false)}
      />

      <motion.div
        initial={{ clipPath: "inset(43.5% 43.5% 33.5% 43.5% )", opacity: 0 }}
        animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
        exit={{
          clipPath: "inset(43.5% 43.5% 33.5% 43.5% )",
          opacity: 0,
          transition: {
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.2, delay: 0.8 },
          },
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="relative aspect-video max-w-7xl w-full mx-4"
      >
        <VideoPlayer style={{ width: "100%", height: "100%" }}>
          <VideoPlayerContent
            src={project.video}
            autoPlay
            slot="media"
            className="w-full object-cover"
            style={{ width: "100%", height: "100%" }}
          />

          {/* Close Button */}
          <button
            onClick={() => setShowVideoPopOver(false)}
            className="absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-black/50 p-2 transition-colors hover:bg-black/70"
          >
            <Plus className="size-5 rotate-45 text-white" />
          </button>

          {/* Video Controls */}
          <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-center px-5 mix-blend-exclusion md:px-10 md:py-5">
            <VideoPlayerPlayButton className="h-4 bg-transparent" />
            <VideoPlayerTimeRange className="bg-transparent" />
            <VideoPlayerMuteButton className="size-4 bg-transparent" />
          </VideoPlayerControlBar>
        </VideoPlayer>

        {/* Project Info Overlay */}
        {/* <div className="absolute left-4 top-4 z-10 max-w-md">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
            {project.title}
          </h3>
          <p className="text-sm text-white/90 drop-shadow-md">
            {project.description}
          </p>
        </div> */}
      </motion.div>
    </div>
  );
};
