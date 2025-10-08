"use client";

import { Share2, Twitter, Facebook, Linkedin, Link2 } from "lucide-react";
import { toast } from "sonner";

// Social Share Component
function SocialShare({ url, title }) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    // Shareable links
    const shareLinks = [
        {
            name: "Twitter",
            icon: Twitter,
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: "hover:text-sky-500",
        },
        {
            name: "Facebook",
            icon: Facebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: "hover:text-blue-600",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: "hover:text-blue-700",
        },
    ];

    //   Function to copy the URL
    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        toast.success("Link Copied successfully");
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-700">
                <Share2 size={20} />
                <span className="font-medium">Share this article</span>
            </div>
            <div className="flex items-center gap-3">
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full border bg-secondary  text-white hover:text-white/80 hover:border-secondary transition-colors`}
                        aria-label={`Share on ${link.name}`}
                    >
                        <link.icon size={20} />
                    </a>
                ))}
                <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-full border bg-secondary  text-white hover:text-white/80 hover:border-secondary transition-colors"
                    aria-label="Copy link"
                >
                    <Link2 size={20} />
                </button>
            </div>
        </div>
    );
}

export default SocialShare;