"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  SiSupabase, 
  SiPostgresql, 
  SiMongodb,
  SiAppwrite,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiGit 
} from "react-icons/si"

export default function TechnologiesSection() {
  return (
    <section className="py-16 ">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-2">Current technologies</h2>
        <p className="text-gray-600 mb-10">
          I&apos;m proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my <b>Main</b> technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* DATABASE */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">DATABASE</h3>
            <div className="space-y-4">
              <TechCard icon={<SiPostgresql className="text-blue-700 text-4xl" />} name="PostgreSQL" description="Relational database" />
              <TechCard icon={<SiMongodb className="text-green-700 text-4xl" />} name="MongoDB" description="NoSQL database" />
            </div>
          </div>

          {/* BACKEND TOOLS */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">BACKEND TOOLS</h3>
            <div className="space-y-4">
              <TechCard icon={<SiAppwrite className="text-pink-600 text-4xl" />} name="Appwrite" description="Backend tool" />
              <TechCard icon={<SiSupabase className="text-green-600 text-4xl" />} name="Supabase" description="Backend tool" />
              <TechCard icon={<SiNodedotjs className="text-green-600 text-4xl" />} name="Node.js" description="JavaScript runtime" />
              <TechCard icon={<SiExpress className="text-gray-700 text-4xl" />} name="Express" description="Web framework" />
            </div>
          </div>

          {/* FRAMEWORKS */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Code</h3>
            <div className="space-y-4">
              <TechCard icon={<SiReact  className="text-cyan-500 text-4xl" />} name="React" description="JavaScript Library" />
              <TechCard icon={<SiNextdotjs className="text-gray-900 text-4xl" />} name="NextJS" description="React framework" />
              <TechCard icon={<SiTypescript className="text-blue-600 text-4xl" />} name="TypeScript" description="JavaScript but better" />
              <TechCard icon={<SiTailwindcss className="text-cyan-500 text-4xl" />} name="Tailwind" description="CSS Framework" />
            </div>
          </div>

          {/* DESIGN TOOLS */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">DESIGN TOOLS</h3>
            <div className="space-y-4">
              <TechCard icon={<SiFigma className="text-purple-500 text-4xl" />} name="Figma" description="Design tool" />
              <TechCard icon={<SiGit className="text-orange-600 text-4xl" />} name="Git" description="Version control" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechCard({ icon, name, description }: { icon: React.ReactNode, name: string, description: string }) {
  return (
    <Card className="border-2 border-black border-b-4 border-r-4 shadow-sm hover:shadow-md transition-shadow rounded-md ">
      <CardContent className="p-4 flex items-center gap-4 py-0">
        <div className="w-8 h-8 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
