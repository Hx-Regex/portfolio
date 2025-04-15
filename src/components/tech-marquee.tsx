
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