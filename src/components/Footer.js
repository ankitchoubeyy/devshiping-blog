"use client";

import { Mail, Heart, Code, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const currentYear = new Date().getFullYear();

  // Footer Sections
  const sections = [
    {
      title: "Quick Links",
      icon: <BookOpen className="w-5 h-5 text-secondary" />,
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Tutorials", href: "/tutorials" },
      ],
    },
    {
      title: "Categories",
      icon: <Code className="w-5 h-5 text-secondary" />,
      links: [
        { name: "Tech News", href: "/category/tech-news" },
        { name: "AI Updates", href: "/category/ai-updates" },
        { name: "Internet", href: "/category/internet" },
        { name: "React.js", href: "/category/react" },
      ],
    },
    {
      title: "Support",
      icon: <Users className="w-5 h-5 text-secondary" />,
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];

  // Social Links
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: <FaGithub className="w-5 h-5 text-white group-hover:text-white transition-colors" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/",
      icon: <FaX className="w-5 h-5 text-white group-hover:text-white transition-colors" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/",
      icon: <FaLinkedin className="w-5 h-5 text-white group-hover:text-white transition-colors" />,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary to-primary/90 text-gray-300">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
            906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
            214.34,3V0H0V27.35A600.21,600.21,0,0,0,
            321.39,56.44Z"
            className="fill-slate-50"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative pt-20 pb-8 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              DEV<span className="text-secondary">SHIPING</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Empowering developers with knowledge, tutorials, and inspiring stories from the world of code.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3 font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  autoComplete="off"
                  required
                  className="flex-1 px-4 py-2 bg-primary border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                />
                <button className="px-4 py-2 bg-secondary text-white rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                {section.icon}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials & Stats */}
        <div className="border-t border-secondary/60 pt-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-3">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
              >
                {social.icon}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-500">Articles</div>
            </div>
            <div className="w-px h-10 bg-secondary"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-gray-500">Readers</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/60 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-gray-400 font-medium">Devshiping.com</span>. 
            All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-500 fill-current" /> by developers, for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
