import React from 'react';
import { Shield, Lock, Eye, Users, FileText, Bell, Globe, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Information We Collect",
            content: (
                <>
                    <p className="text-gray-600 mb-4">
                        We collect information to improve our services and enhance user experience. This may include:
                    </p>
                    <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                            <p className="text-gray-600 text-sm">Such as your name and email address when you subscribe to our newsletter or contact us.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <h4 className="font-semibold text-gray-900 mb-2">Non-Personal Information</h4>
                            <p className="text-gray-600 text-sm">Like browser type, device information, and pages visited, collected through analytics tools.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <h4 className="font-semibold text-gray-900 mb-2">Cookies</h4>
                            <p className="text-gray-600 text-sm">Small files stored on your device to personalize your experience and analyze site traffic.</p>
                        </div>
                    </div>
                </>
            )
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "How We Use Your Information",
            content: (
                <>
                    <p className="text-gray-600 mb-4">
                        We may use the collected data for purposes such as:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-secondary mr-3 mt-1">•</span>
                            <span className="text-gray-600">Improving our website and user experience</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-secondary mr-3 mt-1">•</span>
                            <span className="text-gray-600">Sending newsletters or updates (if you have subscribed)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-secondary mr-3 mt-1">•</span>
                            <span className="text-gray-600">Analyzing website traffic and performance</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-secondary mr-3 mt-1">•</span>
                            <span className="text-gray-600">Responding to your messages or inquiries</span>
                        </li>
                    </ul>
                </>
            )
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Sharing Your Information",
            content: (
                <>
                    <p className="text-gray-600 mb-4">
                        We <strong className="text-gray-900">do not sell</strong> or trade your personal information. However, we may share data with:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-secondary mr-3 mt-1">•</span>
                            <span className="text-gray-600">Trusted service providers who assist in website analytics or email delivery</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-secondary mr-3 mt-1">•</span>
                            <span className="text-gray-600">Legal authorities, if required by law or to protect our rights</span>
                        </li>
                    </ul>
                </>
            )
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Third-Party Services",
            content: (
                <p className="text-gray-600">
                    Our website may contain links to external websites or embedded content (like YouTube videos or ads). These third-party sites have their own privacy policies, and we are not responsible for their practices.
                </p>
            )
        },
        {
            icon: <Bell className="w-6 h-6" />,
            title: "Cookies Policy",
            content: (
                <p className="text-gray-600">
                    Cookies help us recognize returning visitors and improve site performance. You can disable cookies through your browser settings, but some parts of the site may not function properly.
                </p>
            )
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Data Retention",
            content: (
                <p className="text-gray-600">
                    We retain collected information for as long as necessary to provide our services or comply with legal obligations.
                </p>
            )
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Your Rights",
            content: (
                <p className="text-gray-600">
                    Depending on your location, you may have rights to access, correct, or delete your personal information. You can contact us anytime to make such requests.
                </p>
            )
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Updates to This Policy",
            content: (
                <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
                </p>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <div className="bg-primary text-white">
                <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                            <Shield className="w-12 h-12" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-center text-blue-100 text-lg max-w-2xl mx-auto">
                        Your privacy matters to us. Learn how we protect and handle your information.
                    </p>
                    <div className="text-center mt-6">
                        <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                            Last updated: October 2025
                        </span>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
                    <p className="text-gray-700 leading-relaxed text-lg text-justify">
                        Welcome to <strong className="text-gray-900">DevShiping.</strong>
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website{' '}
                        <strong className="text-secondary">devshiping.com</strong>
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-6 mb-12">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                            <div className="p-8">
                                <div className="flex flex-col md:flex-row items-start mb-4">
                                    <div className="bg-blue-50 p-3 mb-3 md:mb-0 rounded-lg text-secondary mr-4">
                                        {section.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="md:text-2xl font-semibold text-gray-900 mb-4">
                                            {index + 1}. {section.title}
                                        </h2>
                                        <div>{section.content}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="bg-primary/10 rounded-xl shadow-sm border border-blue-200 p-8">
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="bg-secondary p-3 rounded-lg text-white mr-4 mb-3 md:mb-0">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                Contact Us
                            </h2>
                            <p className="text-gray-700 mb-4">
                                If you have questions about this Privacy Policy or how we handle your data, please contact us at:
                            </p>
                            <div className='flex md:justify-center md:mt-2 w-full'>
                                <Link
                                href="/contact"
                                className="inline-flex bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-full items-center  font-medium "
                            >
                                Contact Us
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="border-t border-gray-200 bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-gray-600 text-sm">
                        This privacy policy is effective as of October 2025 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                    </p>
                </div>
            </div>
        </div>
    );
}