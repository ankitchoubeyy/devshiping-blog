"use client";

import axios from "axios";
import { Mail, Heart, Code, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slice/postsSlice.js";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const postCount = useSelector((state) => state.posts.items.length);
  const status = useSelector((state) => state.posts.status);

  // Function to handle newsletter form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiEndpoint = "https://silver-gerbil-607908.hostingersite.com/api/newsletter.php";

    try {
      const response = await axios.post(apiEndpoint, { email });

      if (response.data.success) {
        toast.success(`${response.data.message}`);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error(`${error.response.data.message}`);
        } else if (error.response.status === 400) {
          toast.error("Invalid email address!");
        } else {
          toast.error("Server error, please try again later.");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  // Footer Sections
  const sections = [
    {
      title: "Quick Links",
      icon: <BookOpen className="w-5 h-5 text-secondary" />,
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Guides", href: "/guides" },
      ],
    },
    {
      title: "Categories",
      icon: <Code className="w-5 h-5 text-secondary" />,
      links: [
        { name: "AI", href: "/category/ai" },
        { name: "JavaScript", href: "/category/javascript" },
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

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  autoComplete="off"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 bg-primary border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 cursor-pointer bg-secondary text-white rounded-lg flex items-center justify-center transition-all duration-200 ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-secondary/90"
                    }`}
                >
                  {loading ? (
                    <svg
                      className="w-4 h-4 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </button>

              </form>
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
              <div className="text-2xl font-bold text-white">
                {status === "succeeded" ? postCount : "0"}
              </div>
              <div className="text-gray-500">Articles</div>
            </div>
            <div className="w-px h-10 bg-secondary"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1K+</div>
              <div className="text-gray-500">Readers</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/60 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-gray-400 font-medium">Devshiping.com</span>.
            All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">Made in 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
