"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function NavBar() {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const navRef = useRef<HTMLElement>(null)

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

    // Scroll animation for navbar background
    ScrollTrigger.create({
      start: "top -100",
      end: 99999,
      toggleClass: {
        targets: navRef.current,
        className: "nav-blur"
      }
    });
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="relative w-full px-8 py-4 flex justify-between items-center">
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

        <Button variant="outline" className="rounded-full px-6 text-black border-black bg-white">
          Let's Talk
        </Button>
      </div>
    </nav>
  )
}

