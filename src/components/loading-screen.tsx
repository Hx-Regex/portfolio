// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"

// const phrases = [
//   "Brewing some cool Things",
//   "Loading awesome content",
//   "Getting things ready",
//   "Almost there"
// ]

// export function LoadingScreen() {
//   const textRef = useRef<HTMLDivElement>(null)
//   const subTextRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!textRef.current) return

//     let currentIndex = 0
    
//     const tl = gsap.timeline({ repeat: -1 })

//     const animateText = () => {
//       tl.to(textRef.current, {
//         opacity: 0,
//         y: -20,
//         duration: 0.5,
//         onComplete: () => {
//           if (textRef.current) {
//             currentIndex = (currentIndex + 1) % phrases.length
//             textRef.current.textContent = phrases[currentIndex]
//           }
//         }
//       })
//       .to(textRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.5
//       })
//       .to({}, { duration: 2 }) // Pause between phrases
//     }

//     // Initial animation
//     tl.set(textRef.current, { opacity: 0, y: 20 })
//       .to(textRef.current, { opacity: 1, y: 0, duration: 0.5 })
//       .to({}, { duration: 2 })

//     // Repeat for each phrase
//     phrases.forEach(() => animateText())

//     // Subtle floating animation for "Please wait" text
//     gsap.to(subTextRef.current, {
//       y: 5,
//       duration: 2,
//       ease: "power1.inOut",
//       repeat: -1,
//       yoyo: true
//     })

//     return () => {
//       tl.kill()
//     }
//   }, [])

//   return (
//     <div className="fixed inset-0 flex min-h-screen flex-col items-center justify-center bg-black text-white">
//       <div 
//         ref={textRef}
//         className="text-center text-4xl font-medium tracking-wider md:text-5xl lg:text-6xl"
//         style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.2)" }}
//       >
//         {phrases[0]}
//       </div>
//       <div 
//         ref={subTextRef}
//         className="mt-8 text-sm text-gray-400 opacity-50"
//       >
//         Please wait, content is loading
//       </div>
//     </div>
//   )
// }

