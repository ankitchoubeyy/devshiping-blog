"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/news", label: "Tech News" },
        { href: "/ai", label: "AI Updates" },
        { href: "/tools", label: "Dev Tools" },
        { href: "/trends", label: "Programming Trends" },
    ];

    return (
        <header className="bg-white sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-row-reverse md:flex-row justify-between items-center">

                {/* Search */}
                <div className="md:hidden">
                    <button className="p-2 rounded-xl bg-secondary text-white text-2xl">
                        <FaSearch />
                    </button>
                </div>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-primary">
                        DEV<span className="text-secondary">SHIPING</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-black hover:text-secondary transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-xl bg-secondary text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>



            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <>
                    {/* Blurred Background Overlay */}
                    <div
                        className="fixed top-15 inset-0 bg-opacity-30 backdrop-blur-sm z-40"
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    {/* Side Menu */}
                    <div className="md:hidden fixed top-15 left-0 h-screen w-[80%] bg-white z-50">
                        <nav className="flex flex-col ml-5 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-black hover:text-red-600 font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </>
            )}

        </header>
    );
}
