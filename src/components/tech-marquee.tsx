// "use client";

// import { Marquee } from "@/components/marquee";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const Companies = [
//   {
//     src: "/assets/companies/africkana.png",
//     alt: "Africkana Radio",
//     width: 200
//   },
//   {
//     src: "/assets/companies/kora.png",
//     alt: "Kora Awards",
//     width: 200
//   },
//   {
//     src: "/assets/companies/africkana.png",
//     alt: "This is Willo",
//     width: 200
//   }
// ];

// export function TechMarquee() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       containerRef.current,
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         delay: 1,
//         ease: "power2.out",
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="h-[10vh] w-full opacity-0"
//     >
//       <Marquee className="h-full" pauseOnHover speed={20}>
//         {Companies.map((company, index) => (
//           <div
//             key={index}
//             className="relative h-full w-fit mx-[2rem] flex items-center justify-start"
//           >
//             <Image 
//               src={company.src}
//               alt={company.alt}
//               width={company.width}
//               height={company.width}
//               className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
//             />
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// } 

import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const CompanyLogos = [
  {
    src: "/assets/companies/africkana.png",
    alt: "Africkana",
    width: 200
  },
  {
    src: "/assets/companies/kora.png",
    alt: "Kora",
    width: 200
  }
];

export function MarqueeDemo() {
  // Duplicate logos for more content in the marquee
  const logos = [...CompanyLogos, ...CompanyLogos, ...CompanyLogos, ...CompanyLogos];

  return (
    <Marquee
      speed={30}
      pauseOnHover
      className="py-4 w-full"
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative h-full w-fit mx-[4rem] flex items-center justify-start opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 "
        >
          <Image 
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={60}
            className="object-contain"
          />
        </div>
      ))}
    </Marquee>
  )
}