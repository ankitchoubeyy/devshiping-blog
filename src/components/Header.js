"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slice/postsSlice.js";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchOpen, setSearchOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/news", label: "Tech News" },
        { href: "/ai", label: "AI Updates" },
        { href: "/tools", label: "Dev Tools" },
        { href: "/trends", label: "Programming Trends" },
    ];

    const dispatch = useDispatch();
    const { items: posts, status } = useSelector((state) => state.posts);

    // Fetch posts
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle search input
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setSearchResults([]);
        } else {
            const filtered = posts.filter((post) => {
                const title = String(post.title?.rendered || "");
                return title.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setSearchResults(filtered);
        }
    }, [searchTerm, posts]);

    // Close search on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && searchOpen) {
                setSearchOpen(false);
                setSearchTerm("");
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [searchOpen]);

    return (
        <header
            className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg py-2" : "shadow-md py-3"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 flex flex-row-reverse md:flex-row justify-between items-center">

                {/* Mobile Header - Toggle between Logo and Search */}
                <div className="md:hidden flex items-center justify-between w-full">
                    {/* Search Mode */}
                    {searchOpen ? (
                        <div className="flex items-center gap-2 w-full animate-slideInRight">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search posts..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    autoFocus
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-200"
                                />
                                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <button
                                className="p-2 rounded-xl bg-secondary text-white text-xl hover:scale-110 active:scale-95 transition-transform duration-200 shadow-md hover:shadow-lg flex-shrink-0"
                                onClick={() => {
                                    setSearchOpen(false);
                                    setSearchTerm("");
                                }}
                                aria-label="Close Search"
                            >
                                <FaTimes />
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Menu Button */}
                            <button
                                className="p-2 rounded-xl bg-secondary text-white text-2xl hover:scale-110 active:scale-95 transition-transform duration-200 shadow-md hover:shadow-lg"
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

                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2 group">
                                <span className="text-2xl font-extrabold text-primary transition-all duration-300 group-hover:scale-105">
                                    DEV<span className="text-secondary relative">
                                        SHIPING
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                                    </span>
                                </span>
                            </Link>

                            {/* Search Button */}
                            <button
                                className="p-2 rounded-xl bg-secondary text-white text-2xl hover:scale-110 active:scale-95 transition-transform duration-200 shadow-md hover:shadow-lg"
                                onClick={() => setSearchOpen(true)}
                                aria-label="Open Search"
                            >
                                <FaSearch />
                            </button>
                        </>
                    )}
                </div>

                {/* Desktop Logo */}
                <Link href="/" className="hidden md:flex items-center gap-2 group">
                    <span className="text-2xl font-extrabold text-primary transition-all duration-300 group-hover:scale-105">
                        DEV<span className="text-secondary relative">
                            SHIPING
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </span>
                </Link>

                {/* Desktop Nav */}
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
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${activeLink === link.href
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                    }`}
                            ></span>
                        </Link>
                    ))}

                    {/* Desktop Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-200"
                        />
                        {searchResults.length > 0 && (
                            <div className="absolute top-full left-0 w-64 bg-white border border-gray-300 shadow-md mt-1 rounded-md z-50 max-h-60 overflow-auto">
                                {searchResults.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/post/${post.id}`}
                                        onClick={() => setSearchTerm("")}
                                        className="block px-3 py-2 hover:bg-gray-100"
                                    >
                                        {post.title.rendered}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            {/* Mobile Search Results Dropdown */}
            {searchOpen && searchResults.length > 0 && (
                <div className="md:hidden absolute z-50 w-[79vw] ml-4 mt-1 bg-white border border-gray-300 shadow-md rounded-md max-h-60 overflow-auto">
                        {searchResults.map((post) => (
                            <Link
                                key={post.id}
                                href={`/posts/${post.slug}`}
                                onClick={() => {
                                    setSearchTerm("");
                                    setSearchOpen(false);
                                }}
                                className="block px-4 py-2 text-sm hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                            >
                                {post.title.rendered}
                            </Link>
                        ))}
                    </div>
            )}

            {/* Mobile Menu */}
            {menuOpen && (
                <>
                    <div
                        className="fixed top-15 inset-0 bg-background bg-opacity-30 backdrop-blur-sm z-40 animate-fadeIn"
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    <div className="md:hidden fixed top-15 left-0 h-screen w-[80%] bg-white z-50 shadow-2xl animate-slideInLeft">
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
        </header>
    );
}