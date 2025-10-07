"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/news", label: "Tech News" },
        { href: "/ai", label: "AI Updates" },
        { href: "/tools", label: "Dev Tools" },
        { href: "/trends", label: "Programming Trends" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg py-2" : "shadow-md py-3"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-row-reverse md:flex-row justify-between items-center">

                {/* Search - Mobile */}
                <div className="md:hidden">
                    <button className="p-2 rounded-xl bg-secondary text-white text-2xl hover:scale-110 active:scale-95 transition-transform duration-200 shadow-md hover:shadow-lg">
                        <FaSearch />
                    </button>
                </div>

                {/* Logo with Animation */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-extrabold text-primary transition-all duration-300 group-hover:scale-105">
                        DEV<span className="text-secondary relative">
                            SHIPING
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </span>
                </Link>

                {/* Desktop Nav with Hover Effects */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`relative text-black font-medium transition-all duration-300 hover:text-secondary group ${activeLink === link.href ? "text-secondary" : ""
                                }`}
                        >
                            {link.label}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                                }`}></span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button with Animation */}
                <button
                    className="md:hidden p-2 rounded-xl bg-secondary text-white text-2xl hover:scale-110 active:scale-95 transition-transform duration-200 shadow-md hover:shadow-lg"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <FaBars
                            className={`absolute transition-all duration-300 ${menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                                }`}
                        />
                        <FaTimes
                            className={`absolute transition-all duration-300 ${menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <>
                    {/* Blurred Background Overlay with Fade */}
                    <div
                        className="fixed top-15 inset-0 bg-background bg-opacity-30 backdrop-blur-sm z-40 animate-fadeIn"
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    {/* Side Menu with Slide Animation */}
                    <div className="md:hidden fixed top-15 left-0 h-screen w-[80%] bg-white z-50 shadow-2xl animate-slideInLeft">
                        {/* Menu Header */}
                        <div className="p-4 border-b border-gray-200">
                            <span className="text-xl font-extrabold text-primary">
                                DEV<span className="text-secondary">SHIPING</span>
                            </span>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col py-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveLink(link.href);
                                        setMenuOpen(false);
                                    }}
                                    className={`px-6 py-3 text-black hover:bg-gray-50 hover:text-secondary font-medium transition-all duration-200 border-l-4 ${activeLink === link.href
                                            ? "border-secondary text-secondary bg-gray-50"
                                            : "border-transparent"
                                        }`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideInLeft {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.3s ease-out;
                }
            `}</style>
        </header>
    );
}