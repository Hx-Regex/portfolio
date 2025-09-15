"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const socialLinks = [
    {
        name: "LinkedIn",
        username: "Ismail Chabane",
        url: "https://www.linkedin.com/in/ismail-chabane/",
        icon: (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        bgColor: "bg-blue-600"
    },
    {
        name: "GitHub",
        username: "Ismail Chabane",
        url: "https://github.com/IsmailChabane  ",
        icon: (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        bgColor: "bg-gray-800"
    },
    {
        name: "X (Twitter)",
        username: "Ismail Chabane",
        url: "https://x.com/Hx0dev",
        icon: (
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        bgColor: "bg-black"
    },
    {
        name: "More Coming Soon ✨",
        username: "Stay tuned",
        url: "#",
        icon: (
            <span className=" text-4xl">
                🧙🏻‍♂️
            </span>
        ),
        bgColor: "bg-white border border-black/70"
    }
];

export function HeroSectionV2() {
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const badgeRef = useRef(null);
    const leftSectionRef = useRef(null);
    const rightTopRef = useRef(null);
    const rightBottomRef = useRef(null);

    useEffect(() => {
        // Left section animation (30%)
        gsap.fromTo(
            leftSectionRef.current,
            {
                opacity: 0,
                x: -50,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
            }
        );

        // Right top section animation (70% top)
        gsap.fromTo(
            rightTopRef.current,
            {
                opacity: 0,
                y: -30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out",
            }
        );

        // Right bottom section animation (70% bottom)
        gsap.fromTo(
            rightBottomRef.current,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out",
            }
        );

        // Name animation
        gsap.fromTo(
            nameRef.current,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.6,
                ease: "power3.out",
            }
        );

        // Description fade in
        gsap.fromTo(
            descriptionRef.current,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.9,
                ease: "power2.out",
            }
        );

        // Badge animation
        gsap.fromTo(
            badgeRef.current,
            {
                opacity: 0,
                scale: 0.8,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                delay: 1.2,
                ease: "elastic.out(1, 0.5)",
            }
        );
    }, []);

    return (
        <section className="flex h-full mx-auto flex-col items-center justify-between text-center relative  md:mt-0 mt-15">
            {/* Top Section - 30% */}
            <div
                ref={leftSectionRef}
                className="w-full h-[35%] flex flex-col items-center justify-center opacity-0 "
            >

            </div>

            {/* Bottom Section - 70% */}
            <div className="w-full h-[70%] flex flex-col md:flex-row  ">
                {/* Bottom Left Section - 70% left */}
                <div
                    // ref={rightBottomRef}
                    className="w-full md:w-[50%] h-full flex flex-col items-center    border-black/70  opacity-100"
                >
                    <div className="w-full flex h-52 ">
                        <div className="sm:w-52 flex-shrink-0 sm:h-52 w-36 h-36 mt-auto border border-l-0 border-black/70 p-1">
                            <div className="w-full h-full rounded-full bg-purple-200 relative">
                                {/* <Image
                                    src=""
                                    alt="Ismail Chabane"
                                    fill
                                    className="object-fit rounded-full border border-black/70"
                                /> */}
                                <Avatar className="w-full h-full">
                                    <AvatarImage className="object-fit rounded-full border border-black/70" src="/assets/pfp/images.jpg" />
                                    <AvatarFallback className="text-white text-2xl bg-black font-medium">IC</AvatarFallback>
                                </Avatar>
                            </div>



                        </div>
                        <div className="w-full sm:h-1/2 h-1/3 mt-auto border flex flex-col justify-center items-start border-black/70 border-r border-l-0 ">
                            <div className="text-black/80 h-2/3 px-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold flex items-center justify-center flex-col ">
                                <span>Ismail Chabane</span>
                            </div>
                            <div className="text-black/80 h-1/3 text-xs sm:text-sm lg:text-base xl:text-lg p-2 flex border-t border-black/70 w-full items-center justify-start font-semibold">
                                Software Engineer
                            </div>
                        </div>

                    </div>
                    <div className="w-full h-full mt-auto border-r border-black/70 p-4 flex flex-col">
                        {/* About Section - 75% of available height */}
                        <div className="h-[75%] text-start mb-4 overflow-y-auto">
                            <h3 className="text-black/80 font-semibold mb-3 text-base sm:text-lg lg:text-xl">About</h3>
                            <div className="xl:text-sm text-xs text-black/90 leading-relaxed space-y-2 lg:space-y-3 font-medium">
                                <p>
                                    Hello! I am Ismail Chabane , a Software Engineer passionate about building
                                    high-performance, scalable applications with modern technologies and best practices.
                                </p>

                                <p>
                                    With 3+ years of experience, I specialize in full-stack development using Next.js,
                                    React, TypeScript, and cloud technologies. I excel in DevOps practices, implementing
                                    CI/CD pipelines, containerization, and automated testing with TDD/BDD methodologies.
                                </p>

                                <p>
                                    My recent projects include an AI-powered recommendation system at Sofimed using
                                    LangGraph and vector embeddings, a scalable voting platform for Kora Awards with
                                    microservices architecture, and a progressive web app for Africkana with offline
                                    streaming capabilities.
                                </p>
                                {/*                                 
                                <p>
                                    I'm passionate about turning complex technical challenges into elegant, user-friendly 
                                    solutions. Let's connect and collaborate!
                                </p> */}
                            </div>
                        </div>

                        {/* Contact Information - 25% of available height */}
                        <div className="h-[25%] min-h-[80px] border-t border-black/20 pt-3 flex items-center">
                            <div className="grid grid-cols-2 gap-2 lg:gap-4 w-full">
                                {/* Email */}
                                <div className="text-center">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-black/60 mx-auto mb-1">
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div className="text-xs sm:text-sm lg:text-sm text-black/80 font-medium break-words">ismailchabane2@gmail.com</div>
                                </div>

                                {/* Location */}
                                {/* <div className="text-center">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-black/60 mx-auto mb-1">
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                        </svg>
                                    </div>
                                    <div className="text-xs sm:text-sm lg:text-sm text-black/80 font-medium">Morocco</div>
                                </div> */}

                                {/* Phone */}
                                <div className="text-center">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-black/60 mx-auto mb-1">
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                    </div>
                                    <div className="text-xs sm:text-sm lg:text-sm text-black/80 font-medium">+212 6 55 19 15 79</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Right Section - 70% right */}

                <div
                    ref={rightTopRef}
                    className="w-full md:w-[50%] h-full flex flex-col items-center border-black/70 opacity-100"
                >
                    <div className="w-full md:h-26 flex-shrink-0 mt-auto border-black/70" />
                    <div className="w-full flex-1 mt-auto border-t border-black/70 flex flex-col">
                        {socialLinks.map((social, index) => (
                            <React.Fragment key={index}>
                                <Link
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 w-full p-1 hover:bg-white/5 transition-colors duration-200 ${index > 0 ? 'border-t border-black/70' : ''
                                        } ${index < socialLinks.length - 1 ? 'border-b border-black/70' : ''
                                        }`}
                                >
                                    <div className="w-full h-full flex items-center px-1 py-2">
                                        <div className={`aspect-square h-full ${social.bgColor} rounded-md flex items-center justify-center flex-shrink-0`}>
                                            {social.icon}
                                        </div>
                                        <div className="w-full h-full flex flex-col items-start justify-center ml-4">
                                            <span className="text-black/80 text-xl font-semibold text-start">
                                                {social.name}
                                            </span>
                                            <span className="text-black/80 text-sm font-semibold text-start">
                                                {social.username}
                                            </span>
                                        </div>
                                        <div className="w-4 h-4 flex items-center justify-center mr-4">
                                            <ExternalLink className="w-4 h-4 text-black/80" />
                                        </div>
                                    </div>
                                </Link>

                                {index < socialLinks.length - 1 && (
                                    <div className="relative h-8 w-full overflow-hidden flex-shrink-0">
                                        <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,transparent_0,transparent_4px,black_4px,black_5px)] opacity-20"></div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
