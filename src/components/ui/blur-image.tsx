/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
   type JSX,
} from "react"
// import {
//   IconArrowNarrowLeft,
//   IconArrowNarrowRight,
//   IconX,
// } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
// import { AnimatePresence, motion } from "motion/react"
import Image, { type ImageProps } from "next/image"
// import { useOutsideClick } from "@/hooks/use-outside-click"

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}



export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}