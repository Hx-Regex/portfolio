import { BlurImage } from "@/components/ui/blur-image";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress"
// Video component with intersection observer and progress indicator
const VideoWithProgress = ({ src, className }: { src: string; className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          video.play().catch(() => {
            // Handle autoplay restrictions
          });
        } else {
          setIsVisible(false);
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    // const updateProgress = () => {
    //   if (video.duration) {
    //     setProgress((video.currentTime / video.duration) * 100);
    //   }
    // };

    // video.addEventListener('timeupdate', updateProgress);

    return () => {
      observer.disconnect();
      // video.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className={className}
      />
      {/* Progress indicator overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-bl-lg rounded-br-lg overflow-hidden">
        <div
          className="h-full bg-yellow-500/80 transition-all "
          style={{ width: `${progress}%` }}
        />
      </div> */}
    </div>
  );
};

export const EXPERIENCE_TIMELINE = [
  {
    title: "2023",
    content: (
      <div>
        {/* <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">iLotusLand</h3> */}
        {/* Original text:
        I obtained my BSc in Computer Science at The "Faculté des Sciences Ben M'sick". 
        To obtain it, I studied for 3 years and completed my Final Year Porject with 2 of my colleagues.
        My project was about building a 'Smart Cafeteria System' using IoT technologies and Mobile App to Monitor and Control the Cafeteria.
        I also launched my first attempt at a full stack project i built PDF-ORCA , a Pdf converter website using React and Express.js,
        and hosted the app using a VPS.
        after that, I started improving my skills by learning new technologies and frameworks.
        and I got my first freelance project to build Africkana Radio Website.
        */}
        <div className="space-y-4 mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            Got my <strong>BSc in Computer Science</strong> from "Faculté des Sciences Ben M'sick" after 3 years.
            For my final project, I worked with 2 classmates on a <strong>Smart Cafeteria System</strong> using IoT and mobile apps to control cafeteria operations.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            After graduation, I built <strong>PDF-ORCA</strong>, my first full-stack project - a PDF converter website using React and Express.js.
            Deployed it on a VPS to learn about production deployment.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            Started freelancing and got my first client project: the <strong>Africkana Radio Website</strong>.
            Kept learning new technologies and frameworks during this time.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <BlurImage
            src="/assets/projects/smartcafeteria/smart_cafeteria_project.jpg"
            alt="smart cafeteria project"
            width={500}
            height={1000}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />

          <BlurImage
            src="/assets/projects/smartcafeteria/smart_cafeteria_day.jpg"
            alt="smart cafeteria day"
            width={500}
            height={1000}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <div className="mt-4">
          <BlurImage
            src="/assets/projects/pdforca/pdf_orca.jpg"
            alt="pdf orca"
            width={500}
            height={1000}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2024",
    content: (
      <div>
        {/* Original text:
        I started My Master's in Data Science & Big Data at the "Faculté des Sciences Ben M'sick". 
        I also joined Soft Skills Club as the person in charge of digitalisation , I was responsible for creating and maintaning the club's website. 
        where i created a Main Website and the Admin Dashbaord using Next.js and Tailwind CSS and shadcn/ui and Firebase as the database and hosted it using Vercel.
        */}
        <div className="space-y-4 mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            Started my <strong>Master's in Data Science & Big Data</strong> at "Faculté des Sciences Ben M'sick" to learn more about data analytics and machine learning.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            Also joined the <strong>Soft Skills Club</strong> as Digitalization Lead, responsible for their website.
            Built both the main site and admin dashboard using Next.js, Tailwind CSS, shadcn/ui, and Firebase.
            Deployed everything on Vercel.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <VideoWithProgress
            src="/assets/projects/soft_skills/soft-skills-website.mp4"
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          {/* <BlurImage
            src="/assets/projects/soft_skills/soft_skills_site.png"
            alt="soft skills website"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
          {/* <BlurImage
            src="/images/ilotusland/ilotusland_section2_2.JPG"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          /> */}
        </div>
      </div>
    ),
  },
  {
    title: "Late 2024",
    content: (
      <div>
        {/* Original text:
        I Finished my first year of My Master's degree and started working on side projects and freelancing. 
        In my Freelancing, I worked on a project for Kora Awards , Where i built a Online Paid Voting System using Next.js, Tailwind CSS, shadcn/ui, express.js and Firebase as the database and selfhosted the app using a VPS using a ci/cd pipeline. 
        also proposed a new design for the Africkana Radio Website using Figma and implemented it using my new set of technologies.
        */}
        <div className="space-y-4 mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            After finishing my first year of Master's, I started freelancing and working on side projects to apply what I learned.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            Built an <strong>Online Paid Voting System</strong> for <strong>Kora Awards</strong> using Next.js, Tailwind CSS, shadcn/ui, Express.js, and Firebase.
            Set up CI/CD with GitHub Actions and self-hosted it on a VPS using Docker.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            Also redesigned the <strong>Africkana Radio Website</strong> - designed it in Figma first, then built it with my tech stack.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <BlurImage
            src="/assets/projects/kora/kora.jpg"
            alt="kora awards"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/assets/projects/kora/kora_website.png"
            alt="kora awards website"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/assets/projects/africkanaradio/africkana_radio_v2.png"
            alt="africkana radio website"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <BlurImage
            src="/assets/projects/africkanaradio/africkana_radio_v2_dash.png"
            alt="africkana radio dashboard"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        {/* Original text:
        My last year of Master's degree and started my internship of 6 months at Sofimed Maroc one of the biggest Industrial Furniture Company in Morocco. 
        I was responsible for building a new AI based Support System for the company using Langgraph,Next.js,Supabase and OpenAI. 
        I created a  fully functional Ai Agent that can answer questions about the company's products and services. 
        The Agent can also give product recommendation based on the user's needs and use cases with accuracy of 70%. 
        After defending my thesis, I started working on a new project for the company, a Internal Ticketing System 
        during my free time , I started working on a POS System trying to expirement with Offline First Technologies with Data Syncing.
        */}
        <div className="space-y-4 mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            In my final year of Master's, I got a <strong>6-month internship at Sofimed Maroc</strong>, one of Morocco's biggest industrial furniture companies.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            Built an <strong>AI Support System</strong> using LangGraph, Next.js, Supabase, and OpenAI.
            Created an AI agent that answers customer questions about products and services.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            The AI agent gives <strong>product recommendations</strong> with <strong>70% accuracy</strong> based on user needs.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal leading-relaxed">
            After defending my thesis, I still had 14 days left in my internship.
            Using my experience and knowledge, plus leveraging AI tools, I successfully built the <strong>Internal Ticketing System</strong> in those 14 days.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <VideoWithProgress
            src="/assets/projects/sofimedticket/Internal-ticket-system.mp4"
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
]