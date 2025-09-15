import { Instagram, Linkedin } from "lucide-react"
import { SiGithub } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="  container xl:max-w-[70svw] mx-auto py-8 md:py-8 w-full border-x border-black/70 bg-[#FBFAF9] ">
            <div className="px-4 md:px-6">
                {/* Top section with copyright and social links */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <span className="text-gray-600 text-xs sm:text-sm">© 2025 Ismail Chabane</span>
                        <a  target="_blank" href="mailto:ismailchabane2@gmail.com" className="text-gray-600 text-xs sm:text-sm hover:text-gray-900 transition-colors underline">
                            Ismailchabane2@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* <a
                            href="https://twitter.com"
                            className="w-7 h-7 md:w-8 md:h-8 bg-white  border border-gray-300 shadow-sm transition-colors rounded flex items-center justify-center"
                            aria-label="Follow us on X (Twitter)"
                        >
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com"
                            className="w-7 h-7 md:w-8 md:h-8 bg-white  border border-gray-300 shadow-sm transition-colors rounded flex items-center justify-center"
                            aria-label="Follow us on Instagram"
                        >
                            <Instagram className="w-3 h-3 md:w-4 md:h-4 text-black" />
                        </a> */}
                        <a
                            href="https://github.com/IsmailChabane"
                            className="w-7 h-7 md:w-8 md:h-8 bg-white  border border-gray-300 shadow-sm transition-colors rounded flex items-center justify-center"
                            aria-label="Follow us on GitHub"
                            target="_blank"
                        >
                            <SiGithub className="w-3 h-3 md:w-4 md:h-4 text-black" />
                        </a>
                        <a
                            href="https://linkedin.com/in/ismail-chabane"
                            className="w-7 h-7 md:w-8 md:h-8 bg-white  border border-gray-300 shadow-sm transition-colors rounded flex items-center justify-center"
                            aria-label="Follow us on LinkedIn"
                            target="_blank"
                        >
                            <Linkedin className="w-3 h-3 md:w-4 md:h-4 text-black" />
                        </a>
                    </div>
                </div>

                {/* Separator line */}
                <div className="border-t border-black mb-8 md:mb-12"></div>

                {/* Large brand text */}
                <div className="text-center ">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[90px] font-bold text-primary tracking-wider md:tracking-widest uppercase font-serif leading-tight">
                        IsmailChabane.com
                    </h1>
                </div>
            </div>
        </footer>
    )
}
