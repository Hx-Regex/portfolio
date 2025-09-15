"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface TechSkill {
  icon: React.ReactNode | string
  name: string
  description: string
  optimize?: boolean
}

interface TechCardProps {
  skill: TechSkill
}

export function TechCard({ skill }: TechCardProps) {
  const renderIcon = () => {
    if (typeof skill.icon === 'string') {
      // Check if it's an image path
      if (skill.icon.includes('<img') && skill.icon.includes('src=')) {
        // Extract src from img tag
        const srcMatch = skill.icon.match(/src="([^"]+)"/);
        const src = srcMatch ? srcMatch[1] : '';
        if (!src) return null;

        if (skill.optimize !== false) {
          return (
            <div className="h-6 sm:h-6 md:h-8 flex items-center justify-center mb-2 sm:mb-2">
              <Image
                src={src}
                alt={`${skill.name} logo`}
                width={32}
                height={32}
                className="h-6 sm:h-6 md:h-8 w-auto object-contain"
              />
            </div>
          );
        } else {
          // Use regular img tag when optimize is false
          return (
            <div className="h-6 sm:h-6 md:h-8 flex items-center justify-center mb-2 sm:mb-2">
              <img
                src={src}
                alt={`${skill.name} logo`}
                className="h-6 sm:h-6 md:h-8 w-auto object-contain"
              />
            </div>
          );
        }
      }
      // If it's an SVG string, render it as HTML
      return <div className="h-6 sm:h-6 md:h-8 flex items-center justify-center mb-2 sm:mb-2" dangerouslySetInnerHTML={{ __html: skill.icon }} />;
    }
    // If it's a React component, render it normally
    return <div className="flex items-center justify-center mb-2 sm:mb-2">{skill.icon}</div>;
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="group relative w-full">
          <Card className="border aspect-square shadow-none border-black/70  hover:shadow-lg transition-all duration-300 rounded hover:scale-105 cursor-pointer w-full">
            <CardContent className="p-1 sm:p-2 md:p-3 h-full flex flex-col items-center justify-center">
              {renderIcon()}
              <div className="text-center">
                <h4 className="font-medium text-black/70 text-[10px] sm:text-xs leading-tight">{skill.name}</h4>
              </div>
            </CardContent>
          </Card>
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-white border border-black/70 rounded-sm shadow-sm text-black">
        <h2 className="text-md font-bold text-center">{skill.name}</h2>
        <p className="text-sm text-center">{skill.description}</p>
      </TooltipContent>
    </Tooltip>
  )
}
