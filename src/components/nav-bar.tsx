"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NavBar() {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Links animation
    linkRefs.current.forEach((link, index) => {
      if (!link) return

      // Initial fade in animation
      gsap.fromTo(
        link,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.1 * index,
          ease: "power2.out",
        }
      )

      // Create and append underline element
      const underline = document.createElement("div")
      underline.className = "absolute bottom-0 left-0 h-0.5 w-0 bg-black"
      link.appendChild(underline)

      // GSAP hover animations
      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.3,
          ease: "power2.out"
        })
      })

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          width: 0,
          duration: 0.3,
          ease: "power2.in"
        })
      })
    })

    // Add scroll event listener
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll)
    
    // Call once to set initial state
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className={cn(
        "relative w-full px-8 py-4 flex justify-between items-center transition-all duration-300",
        scrolled ? "bg-background backdrop-blur-md   border-b border-black" : "bg-transparent"
      )}>
        <Link href="/" className="text-2xl font-bold text-black" data-cursor="nav">
          Hx.
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-8">
            {["Index", "Projects", "Agency", "Resources"].map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                ref={(el) => {
                  linkRefs.current[index] = el
                }}
                className="relative inline-flex items-center py-2 text-sm font-medium text-black"
                data-cursor="nav"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <Button variant="outline" className="rounded-full px-6 text-black border-black bg-white border-2 border-b-4 border-r-4 " >
          Let's Talk
        </Button>
      </div>
    </nav>
  )
}

