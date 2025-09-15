import {
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiGraphql,
  SiSocketdotio,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiFramer,
  SiJest,
  SiCypress,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiAmazon,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiGit,
  SiPostman,
  SiEslint,
  SiPrettier,
  SiVite,
  SiStorybook,
  SiNotion,
  SiStripe,
  SiAuth0,
  SiAppwrite,
  SiPython,
  SiWebrtc,
  SiLemonsqueezy,
  SiTrpc,
} from "react-icons/si"

export interface TechSkill {
  icon: React.ReactNode | string
  name: string
  description: string
  optimize?: boolean
}

export interface TechCategory {
  id: string
  title: string
  skills: TechSkill[]
}

export const techCategories: TechCategory[] = [
  {
    id: "database",
    title: "DATABASE",
    skills: [
      {
        icon: <SiPostgresql className="text-blue-700 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "PostgreSQL",
        description: "Advanced relational database with JSON support"
      },
      {
        icon: <SiMongodb className="text-green-700 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "MongoDB",
        description: "Flexible NoSQL document database"
      },
      {
        icon: <SiMysql className="text-blue-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "MySQL",
        description: "Popular relational database"
      },
      {
        icon: <SiRedis className="text-red-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Redis",
        description: "In-memory data structure store"
      },
      {
        icon: <SiPrisma className="text-blue-800 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Prisma",
        description: "Next-generation ORM for Node.js"
      }
    ]
  },
  {
    id: "backend",
    title: "BACKEND",
    skills: [
      {
        icon: <SiNodedotjs className="text-green-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Node.js",
        description: "JavaScript runtime built on Chrome's V8"
      },
      {
        icon: <SiExpress className="text-gray-700 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Express",
        description: "Fast, minimalist web framework"
      },
      {
        icon: <SiFastapi className="text-green-500 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "FastAPI",
        description: "Modern Python web framework"
      },
      {
        icon: <SiTrpc className="text-blue-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "tRPC",
        description: "TypeScript-first API framework"
      }
    ]
  },
  {
    id: "frontend",
    title: "FRONTEND",
    skills: [
      {
        icon: <SiReact className="text-cyan-500 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "React",
        description: "Popular JavaScript library for UIs"
      },
      {
        icon: <SiNextdotjs className="text-gray-900 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Next.js",
        description: "Production-ready React framework"
      },
      {
        icon: <SiTypescript className="text-blue-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "TypeScript",
        description: "JavaScript with static type definitions"
      },
      {
        icon: <SiTailwindcss className="text-cyan-500 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Tailwind",
        description: "Utility-first CSS framework"
      },
      {
        icon: <SiJavascript className="text-yellow-500 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "JavaScript",
        description: "Dynamic programming language"
      },
      {
        icon: <SiFramer className="text-purple-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Framer",
        description: "Interactive design and prototyping"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="46" fill="none" viewBox="0 0 82 30">
  <path fill="#0ae448" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
  <path fill="#0ae448" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
  <path fill="#0ae448" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/>
  <path fill="#0ae448" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/>
</svg>`,
        name: "GSAP",
        description: "JavaScript animation library"
      }
    ]
  },
  {
    id: "testing",
    title: "TESTING",
    skills: [
      {
        icon: <SiJest className="text-red-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Jest",
        description: "JavaScript testing framework"
      }
    ]
  },
  {
    id: "devops-cloud",
    title: "DEVOPS & CLOUD",
    skills: [
      {
        icon: <SiDocker className="text-blue-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Docker",
        description: "Containerization platform"
      },
      {
        icon: <SiVercel className="text-black h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Vercel",
        description: "Frontend deployment platform"
      },
      {
        icon: <SiFirebase className="text-orange-500 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Firebase",
        description: "Google's app development platform"
      },
      {
        icon: <SiGithub className="text-gray-900 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "GitHub",
        description: "Git repository hosting service"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559 446" class="h-8 w-auto"><path class="fill-primary stroke-primary" d="M390 56v12c.1 2.3.5 4 1 6a73 73 0 0 0 12 24c2 2.3 5.7 4 7 7 4 3.4 9.6 6.8 14 9 1.7.6 5.7 1.1 7 2 1.9 1.3 2.9 2.3 0 4v1c-.6 1.8-1.9 3.5-3 5q-3 4-7 7c-4.3 3.2-9.5 6.8-15 7h-1q-2 1.6-5 2h-4c-5.2.7-12.9 2.2-18 0h-6c-1.6 0-3-.8-4-1h-3a17 17 0 0 1-6-2h-1c-2.5-.1-4-1.2-6-2l-4-1c-8.4-2-20.3-6.6-27-12h-1c-4.6-1-9.5-4.3-13.7-6.3s-10.5-3-13.3-6.7h-1c-4-1-8.9-3.5-12-6h-1c-6.8-1.6-13.6-6-20-9-6.5-2.8-14.6-5.7-20-10h-1c-7-1.2-15.4-4-22-6h-97c-5.3 4.3-13.7 4.3-18.7 10.3S90.8 101 88 108c-.4 1.5-.8 2.3-1 4-.2 1.6-.8 4-1 5v51c.2 1.2.8 3.2 1 5 .2 2 .5 3.2 1 5a79 79 0 0 0 6 12c.8.7 1.4 2.2 2 3 1.8 2 4.9 3.4 6 6 9.5 8.3 23.5 10.3 33 18h1c5.1 1.2 12 4.8 16 8h1c4 1 8.9 3.5 12 6h1q4.6 1.2 8 4h1c2 .1 2.6 1.3 4 2 1.6.8 2.7.7 4 2h1q2.5.3 4 2h1c3 .7 6.7 2 9 4h1c4.7.8 13.4 3.1 17 6h1c2.5.1 4 1.3 6 2 1.8.4 3 .8 5 1q3 .4 5 1c1.6-.2 2 0 3 1h1q2.5-.5 4 1h1q2.5-.5 4 1h1c2.2-.2 4.5-.3 6 1h1q4-.4 7 1h45c1.2-.2 3.1-1 5-1h6c1.5-.6 2.9-1.3 5-1h1q1.5-1.4 4-1h1q1.5-1.4 4-1h1c2.4-1.3 5-1.6 8-2l5-1c2-.7 3.6-1.6 6-2 4-.7 7.2-1.7 11-3 2.3-1 4.2-2.5 7-3h1q1.5-1.7 4-2h1c1.9-1.5 3.9-2 6-3q2.9-1.6 6-3a95 95 0 0 0 11-5c4.4-2.8 8.9-6 14-8 0 0 .6.2 1 0 1.8-2.8 7-4.8 10-6 0 0 .6.2 1 0 1.5-2.4 5.3-4 8-5 0 0 .6.2 1 0 1.5-2.4 5.3-4 8-5 0 0 .6.2 1 0 1.3-2 3.8-3.1 6-4 0 0 .6.2 1 0 2-3 7.7-5.6 11-7l5-2c6.3-3.8 11.8-9.6 18-14v-1c0-1.9-.4-4.2 0-6-1-4.5-3.9-5.5-7-8h-1c-1.2 0-2.8-.2-4 0-8.9 1.7-16.5 11.3-25.2 14.8-8.8 3.4-16.9 10.7-25.8 14.2h-1c-10.9 10.6-29.2 16-42.7 23.3S343.7 234.6 328 235h-1q-1.5 1.4-4 1h-1q-1.5 1.4-4 1h-1c-1.5 1.3-3.9 1.2-6 1h-1c-1.7 1.3-4.6 1.2-7 1-1 .2-2.4 1-4 1h-5c-6.6 0-13.4.4-20 0-1.9-.1-2.7.3-4-1h-8c-2.8-.2-5.7-1.3-8-2h-2q-5.7.4-10-2h-1q-4.5 0-8-2h-1a10 10 0 0 1-6-2h-1c-5.9-.2-12-3.8-17-6l-4-1c-1.7-.5-2.8-.7-4-2h-1q-2.5-.2-4-2h-1q-3.4-.9-6-3h-1c-3.5-.8-7.3-2.9-10-5h-1c-1.7 0-2.2-.7-3-2h-1c-11.6-2.7-23.2-11.5-34.2-15.8-11-4.2-25.9-9.2-29.8-21.2h4c16.2 0 32.8-1 49 0 1.7.1 3 .8 4 1 2.1.4 3.4-.5 5 1h1c3.6.1 8.4 1.8 11 4h1a45 45 0 0 1 18 8h1q4.6 1.2 8 4h1c4.2 1 8.3 3.4 12 5q3.4 1.2 7 2c5.7 1.3 13 2.3 18 5h1c3.7-.2 7 1.1 10 2h9c1.6 0 3 .8 4 1h32c2.2-1.6 6-1 9-1h1a63 63 0 0 1 22-4 22 22 0 0 1 8-2c1.7-1.4 3.7-1.6 6-2a81 81 0 0 0 12-3c2.3-1 4.2-2.5 7-3h1q1.5-1.7 4-2h1c1.9-1.5 3.6-2.2 6-3l3-1c4.1-2.3 8.4-5.2 13-7 0 0 .6.2 1 0 1.5-2.4 6.3-5 9-6 0 0 .6.2 1 0 5.3-8.1 17.6-12.5 24.8-20.2C439.9 144 445 133 452 126v-1a12 12 0 0 1 2-5c2.1-2.2 8.9-1 12-1q2 .2 4 0c1-.2 2.3-1.2 4-1h1q2.1-1.5 5-2h1q2.1-1.9 5-3s.6.2 1 0c9-9.3 18-15.4 23-28 1.1-2.8 3.5-6.4 4-9 .2-1 .2-3 0-4-1.5-6-12.3-2.4-15.7 2.3S484.7 80 479 80h-7c-7.8 4.3-19.3 5.7-23 16a37 37 0 0 0-22-24c-1.5-.5-2.5-.7-4-1-2.1-.5-3.6-.2-5-2h-1a22 22 0 0 1-12-8c-2-2.9-3.4-6.5-6-9h-1c-3.9-.6-6.1 1-8 4m-181 45h1c2.2-.2 4.5-.3 6 1h1q2.5-.5 4 1h1a33 33 0 0 1 17 7h1c4.4 1 8.2 4.1 12 6 2.1 1 4.1 1.5 6 3h1c4 1 8.9 3.5 12 6h1c4 1 8.9 3.5 12 6h1c4 1 8.9 3.5 12 6h1a61 61 0 0 1 21 10h1c3.5.8 7.3 2.9 10 5h1c6.1 1.4 12.3 5 18 7 1.8.4 3 .8 5 1 1.8.2 3.7.8 5 1q2.5-.5 4 1h6c2.5 0 4 .3 6 1h3q-.7 2.1-3 2a46 46 0 0 1-16 7l-10 3c-2 .8-3.4 1.9-6 2h-1c-2.6 2.1-7.5 3-11 3h-1c-3.1 2.5-10.7 3.5-15 3h-1c-1.5 1.3-3.9 1.2-6 1-1 .2-2.4 1-4 1h-11c-3.8.4-8.3.4-12 0h-9c-2.3 0-4.3-.7-6-1h-3c-1.8 0-2.9-.7-4-1-3.5-.8-7-.7-10-2h-1c-4.1-.7-9.8-1.4-13-4h-1q-4-.6-7-3h-1q-2.5-.2-4-2h-1q-3.4-.9-6-3h-1c-7.2-1.7-13.3-5.9-20.2-8.8-7-2.8-16.2-4.3-22.8-7.2h-11c-14 0-28.9.3-42-1-2.3 0-4.8.3-7 0a6 6 0 0 1-5-5c-1.8-4.8-.4-10.4 0-15 0-4.3-.4-8.7 0-13 .2-3.2 2.2-7.3 4-10q2-3 5-5c2.1-2 5.4-2.3 8-3 15.6-3.9 36.3-1 53-1 5.2 0 12-.5 17 0s12.2-1.8 16 1Z"></path><path class="fill-primary stroke-primary" d="M162 132v1c1.8 2.9 4.5 5.3 8 6 .3-.2 3.7-.2 4 0 7-1.4 9.2-8.8 7-15v-1a14 14 0 0 0-7-4c-.3.2-3.7.2-4 0-6.5 1.3-8.6 6.8-8 13Z"></path><path class="fill-primary stroke-primary" d="M465 211h-1c-18.2 14.6-41.2 24.6-60 39-19 14.2-42.7 29.3-66 34l-4 1c-2.4 1-4 2-7 2h-1q-3.5 2-8 2h-1c-1.3 1.2-3 1.1-5 1h-2q-2.6 1.1-6 1h-2c-3 1.2-6.5 1-10 1-6.3.6-13.8.6-20 0-3.4 0-8.4.9-11-1h-1c-2.2.2-4.5.3-6-1h-1c-2 .2-3.7.2-5-1h-1c-7.6.5-16.5-3.4-23-6l-4-1a129 129 0 0 1-36.2-15.8c-10.4-6.6-23.2-12.8-32.5-20.5-9.2-7.7-23.8-12.8-30.3-22.7h-1c-2.3-1.4-4.5-2.7-6-5h-1c-4-2.5-8.5-5.2-12-8h-9a9 9 0 0 0-6 7c.3 3.3 0 6.7 0 10v9c.2 1.6 1 3.8 1 6v3c.2 1 1.2 2.2 1 4v1c1.2 1.2.8 2.2 1 4 .8 6.7 3 12.6 5 19 1.7 4.3 4.2 9.1 5 14v1q1.8 1.5 2 4v1a36 36 0 0 1 5 10c.7 2 1 3 2 5 8 12.7 15.7 25.5 25.8 37.3 10 11.7 20.8 20.6 32.4 30.4 11.7 9.9 28.3 14 39.8 23.3h1q2.5.3 4 2h1c2.8.4 4.8 2 7 3l7 2c5.7 1.3 13 2.3 18 5h1c2.1-.3 3.6.8 5 1h3c2.8.2 5.8 1 8 2h8c2.1 0 4.6.8 6 1h21c1.2-.2 3.2-1 5-1h9c3.3-1 7-2.4 11-2h1c2.7-2.2 7.4-2.4 11-3a55 55 0 0 0 8-2c6.5-2.6 13.9-6.3 21-8h1c8.5-6.8 20.6-9.7 29.2-16.8 8.7-7 18.3-12.8 26.8-20.2 4.4-3.8 9-9 13-13 14.8-14.8 20.7-34.6 33-50v-1q.9-3.4 3-6v-1q.3-2.5 2-4v-1c.5-3.3 2-8.6 4-11v-1q0-3.5 2-6v-1c1.1-6.7 2.4-15 5-21v-1c-.2-2-.2-3.7 1-5v-8c0-5.3-.5-10.8 0-16a14 14 0 0 0-4-6c-1-.5-1.1-.4-2-1h-6q-2.1 1.5-5 2m-6 38c-2.1 13.4-21.2 20.3-31 30-10 9.5-23.7 19-35 27-11.5 8-25.1 19.7-39 23h-1a22 22 0 0 1-10 4h-1a25 25 0 0 1-12 4h-1q-3.5 2-8 2h-1c-1.1 1.1-2.3 1-4 1h-2c-1.2.4-2.2 1-4 1h-2c-1.8.7-3.6 1.3-6 1h-1c-1.2 1.2-2.3 1-4 1h-5c-5.7.6-12.3.8-18 0h-4c-1.9 0-2.7-.6-4-1h-6c-1.9 0-2.7.3-4-1h-1q-2.5.5-4-1h-1c-8.1.5-16.8-3.6-24.2-5.8S210 329.8 204 325h-1c-12.8-5-27.1-15.6-37.7-24.3S138.8 284.2 131 273c-.3-.2-1 0-1 0-5.7-4.4-16.6-10-19-17-.9-2.6-1-5.4-2-8-.8-2.2-2.5-5-2-8a667 667 0 0 0 88 56h1q3.4.9 6 3h1c2.8.4 4.8 2 7 3q5 1.8 10 3l6 2q2.9.6 6 1 3 .4 5 1c1.6-.2 2 0 3 1h1c2-.2 3.7-.2 5 1h1c2.2-.3 3.4.4 5 1h8c1.6 0 3 .9 4 1h40c1.8-1.3 4.6-1.2 7-1h1c1.2-1.2 3.2-1.2 5-1h1c1.2-1.2 3.2-1.2 5-1h1c1.1-1.1 2.3-1 4-1h2c3.5-1.7 6.9-2.3 11-3l4-1c3.4-1.4 7.1-3 11-4 1.5-.4 2.5-.5 4-1 1.4-.7 2-1.9 4-2h1q2.6-2.1 6-3h1c2.5-2 6-3.8 9-5l3-1c1.4-.9 2-2.5 4-3h1q1.4-2.2 4-3h1c7.3-7.7 19-13.2 27.7-19.3 8.8-6.1 18.2-15 28.3-18.7.4-.2 1 0 1 0q3.8-3.9 9-6c1.3 2.5-.5 6.7-1 10m-20 55c-.2.4 0 1 0 1-3.4 9.6-12.7 19-19 27a88 88 0 0 1-12 12 214 214 0 0 1-26.7 20.3c-9.5 5.8-20 14.8-31.3 16.7h-1a22 22 0 0 1-10 4h-1c-3.2 2.6-8.9 3.3-13 4h-1q-1.5 1.4-4 1h-1q-1.5 1.4-4 1h-1c-4.9 2.3-10.5 1-16 2-1 .2-2.5 1-4 1-6.2.4-12.8.3-19 0-1.8 0-3.8-.8-5-1h-4c-1.6 0-3-.9-4-1h-4c-3.9-.3-8.8-1.3-12-3h-1c-3.3-.5-7.5-1-10-3h-1c-3.6-.1-8.4-1.8-11-4h-1c-3.9-.6-8-2.6-11-5h-1c-16.1-3.8-32.2-18.9-45-29a200 200 0 0 1-40-51c17.7 11.5 35 25.5 52 38h1c4 1.6 12.8 5.4 15 9h1c4.6 1 10.4 4.1 14 7h1q2.5.3 4 2h1c3.3.5 8.6 2 11 4h1q3.5 0 6 2h1q2.5-.5 4 1h1q2.5-.5 4 1h1c3.8-.2 7.9 1 11 2h9c1.6 0 3 .8 4 1h32c1.2-.2 3.2-1 5-1h8a139 139 0 0 1 20-4l5-1c2-.7 3.7-1.5 6-2l4-1c1.5-.6 3-1.7 5-2h1q3-2.4 7-3h1q2.6-2.1 6-3h1c11.7-9.4 27.6-14.6 39-25 11.6-10.3 25-18.5 37-28a15 15 0 0 1-5 10Z"></path></svg>`,
        name: "Dokploy",
        description: "Open Source Deployment platform"
      },
      {
        icon: <SiSupabase className="text-green-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Supabase",
        description: "Open source Firebase alternative"
      },
      {
        icon: <SiAppwrite className="text-pink-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Appwrite",
        description: "Open source backend server"
      }
    ]
  },
  {
    id: "tools",
    title: "TOOLS",
    skills: [
      {
        icon: <SiFigma className="text-purple-500 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Figma",
        description: "Collaborative design tool"
      },
      {
        icon: <SiGit className="text-orange-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Git",
        description: "Distributed version control"
      },
      {
        icon: <SiPostman className="text-orange-500 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Postman",
        description: "API development environment"
      },
      {
        icon: <SiEslint className="text-purple-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "ESLint",
        description: "JavaScript linting utility"
      },
      {
        icon: <SiPrettier className="text-pink-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Prettier",
        description: "Code formatter"
      },
      {
        icon: <SiVite className="text-purple-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Vite",
        description: "Fast build tool"
      },
      {
        icon: <SiStorybook className="text-pink-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Storybook",
        description: "Tool for building UI components"
      },
      {
        icon: <SiNotion className="text-black h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Notion",
        description: "All-in-one workspace"
      }
    ]
  },
  {
    id: "integrations",
    title: "INTEGRATIONS",
    skills: [
      {
        icon: <SiStripe className="text-purple-700 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Stripe",
        description: "Online payment processing"
      },
      {
        icon: <SiLemonsqueezy className="text-yellow-400 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "Lemon squeezy",
        description: "Online payment processing"
      },
      {
        icon: '<img src="/assets/tools/onafriq.png" alt="ONAFRIQ logo" className="h-8 w-auto" />',
        name: "Onafriq",
        description: "Pan-African payments company"
      },
      {
        icon: '<img src="https://camo.githubusercontent.com/243909f00e726430f4d7e31c0f5e5c87e3abde526714482c806445852907d319/68747470733a2f2f6e6578742d617574682e6a732e6f72672f696d672f6c6f676f2f6c6f676f2d736d2e706e67" alt="NextAuth logo" className="h-8 w-auto" />',
        name: "NextAuth",
        description: "Authentication for Next.js",
        optimize: false
      }
    ]
  },
  {
    id: "api",
    title: "API",
    skills: [
      {
        icon: <SiExpress className="text-gray-700 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "REST",
        description: "Representational State Transfer API"
      },
      {
        icon: <SiGraphql className="text-pink-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "GraphQL",
        description: "Query language for APIs"
      },
      {
        icon: <SiWebrtc className="text-blue-600 h-4 w-4 sm:h-6 sm:w-6" />,
        name: "WebSockets",
        description: "Real-time bidirectional communication"
      }
    ]
  }
]
