"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type CursorState = "default" | "nav" | "hero" | "button" | "project" | "scroll" | "linkedin";

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [hidden, setHidden] = useState(true);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  //@ts-expect-error
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      if (cursorState === "scroll") {
        setTargetPosition(newPosition);
      } else {
        setPosition(newPosition);
        setTargetPosition(newPosition); // Keep target updated for smooth transitions
      }
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorType = target.getAttribute("data-cursor") as CursorState;
      
      // Cancel any existing animation frame when state changes
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (cursorType) {
        setCursorState(cursorType);
      } else if (target.tagName.toLowerCase() === "button") {
        setCursorState("button");
      } else {
        setCursorState("default");
      }
    };

    // Smooth animation for scroll state
    const animate = () => {
      if (cursorState === "scroll") {
        setPosition(prev => ({
          x: prev.x + (targetPosition.x - prev.x) * 0.1,
          y: prev.y + (targetPosition.y - prev.y) * 0.1
        }));
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (cursorState === "scroll") {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", updateCursorPosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("mousemove", updateCursorPosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorState, targetPosition]);

  const getCursorStyle = () => {
    switch (cursorState) {
      case "linkedin":
        return { 
          className: "w-12 h-12 bg-blue-50/20 backdrop-blur-sm flex items-center justify-center", 
          size: 48,
          showPlane: true 
        };
      case "scroll":
        return { 
          className: "w-24 h-24 bg-white/10 backdrop-blur-sm border border-gray-400/20", 
          size: 96,
          showArrow: true 
        };
      case "nav":
        return { className: "bg-gray-300 w-20 h-20", size: 80 };
      case "hero":
        return {
          className: " w-24 h-24 ",
          size: 96,
          imgSrc: "/assets/pfp/images.jpg",
          imgAlt: "Ismail Chabane Profile Picture",
        };
      case "button":
        return { className: "bg-gray-300 w-12 h-12 scale-150", size: 48 };
      case "project":
        return {
          className:
            "h-32 w-32 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center",
          size: 128,
        };
      default:
        return { className: "border-2 border-gray-400 w-8 h-8", size: 24 };
    }
  };

  const cursorStyle = getCursorStyle();
  const offset = cursorStyle.size / 2;

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-50 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      style={{
        transform: `translate(${position.x - offset}px, ${position.y - offset}px)`,
        transition: cursorState === "scroll" 
          ? "opacity 0.3s ease-out" 
          : "transform 0.18s ease-out, width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease-out",
      }}
    >
      <div
        className={`rounded-full transition-all duration-300 overflow-hidden flex items-center justify-center ${cursorStyle.className}`}
      >
        {cursorStyle.showPlane && (
          <svg 
            className="w-6 h-6 text-blue-500 transform rotate-45" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 22l10-8 10 8L12 2z"/>
          </svg>
        )}
        {cursorStyle.showArrow && (
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 2L10 18M10 18L3 11M10 18L17 11" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
        {cursorStyle.imgSrc && (
          <Image
            src={cursorStyle.imgSrc}
            alt={cursorStyle.imgAlt || ""}
            fill
            className="object-cover rounded-full"
          />
        )}
        {cursorState === "project" && (
          <span className="text-white text-sm font-medium">[ OPEN ]</span>
        )}
      </div>
    </div>
  );
}
