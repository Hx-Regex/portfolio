"use client"

import { useState, useEffect } from "react"
import { Flame, Github, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
// import logoImage from "/public/assets/logo/logo.png"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    // ${isScrolled ? "bg-red-700/40 border border-b-2 border-r-2 border-black backdrop-blur-sm   shadow-sm max-w-7xl" : "bg-transparent"}
    return (
        <nav
            className={`fixed  left-1/2 -translate-x-1/2 top-4 z-50 container px-12 mx-auto transition-[max-width] sm:container sm:max-w-[70svw] max-w-[60svw] duration-500 `}
        >
            <div className={`" mx-auto transition-all duration-500 px-6 ${isScrolled ? " border border-black/40 bg-white/70   *:backdrop-blur-sm   " : "bg-transparent border border-background"} rounded-lg `}>
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        {/* <Image 
                            src={logoImage}
                            alt="logo"
                            width={70}
                            height={70}
                        /> */}
                        <span className="text-2xl font-bold text-black">IC</span>
                        <div className="hidden md:flex  space-x-8  ml-10">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Home
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Projects
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors"> Contact</a>
                            {/* <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Events
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Contact us
                        </a> */}
                            {/* <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Blog
                        </a> */}
                        </div>

                    </div>

                    {/* Desktop Navigation Links */}

                    {/* Right Side */}
                    <div className=" ">
                        {/* GitHub Stars */}
                        {/* <Button  variant="outline" className=" px-6">Verify Vote</Button> */}

                        {/* Sign Up Button - Hidden on mobile */}
                        <Button className="hidden md:block bg-primary text-white px-6 cursor-pointer">Let's Talk</Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
                        <a
                            href="#"
                            className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                        <Button className="w-full bg-primary text-white px-6 cursor-pointer mt-4">
                            Let's Talk
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    )
}

