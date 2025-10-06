import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-primary text-gray-300 py-8 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold text-white">DEV<span className="text-secondary ">SHIPING</span></h2>
                    <p className="text-sm text-gray-400 mt-1">
                        Sharing knowledge, tutorials, and dev stories.
                    </p>
                </div>

                {/* Middle Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <Link href="/" className="hover:text-white transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-white transition">
                        About
                    </Link>
                    <Link href="/privacy-policy" className="hover:text-white transition">
                        Privacy Policy
                    </Link>
                    <Link href="/contact" className="hover:text-white transition">
                        Contact
                    </Link>

                </div>

                {/* Social Icons */}
                <div className=" justify-center gap-5 text-lg hidden">
                    <Link
                        href="https://github.com/"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://twitter.com/"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        <FaTwitter />
                    </Link>
                    <Link
                        href="https://linkedin.com/"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Devshiping.com All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
