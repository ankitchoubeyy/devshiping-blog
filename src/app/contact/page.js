"use client"
import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle, MapPin, Clock, Phone } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => {
                setFormData({ name: "", email: "", message: "" });
                setStatus("");
            }, 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            {/* Hero Section */}
            <div className="bg-primary text-white">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-white backdrop-blur-sm p-4 rounded-2xl ">
                            <MessageSquare className="w-12 h-12 text-secondary" />
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-center text-slate-300 text-lg max-w-2xl mx-auto">
                        Have a question, suggestion, or partnership idea? We&apos;d love to hear from you.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information Sidebar */}
                    <div className="space-y-6">
                        {/* Direct Contact Card */}
                        <div className="bg-gradient-to-br from-primary  to-primary/80 rounded-2xl shadow-lg p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-white backdrop-blur-sm p-3 rounded-xl text-secondary">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-slate-300 text-sm mb-1">Email</p>
                                        <a
                                            href="mailto:contact@devshiping.com"
                                            className="font-semibold hover:text-blue-300 transition-colors"
                                        >
                                            contact@devshiping.com
                                        </a>
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-white backdrop-blur-sm p-3 rounded-xl text-secondary">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-slate-300 text-sm mb-1">Response Time</p>
                                        <p className="font-semibold">Within 24 hours</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-white backdrop-blur-sm p-3 rounded-xl text-secondary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-slate-300 text-sm mb-1">Location</p>
                                        <p className="font-semibold">Remote Team</p>
                                        <p className="text-slate-400 text-sm">Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                    {/* Contact Form - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-blue-50 p-2 rounded-lg">
                                    <Send className="w-5 h-5 text-secondary" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Send us a Message</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder="John Doe"
                                        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-blue-100 transition-all"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        autoComplete="off"
                                        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-blue-100 transition-all"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        placeholder="Tell us what's on your mind..."
                                        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={status === "loading"}
                                    className="w-full bg-secondary text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {/* Success Message */}
                                {status === "success" && (
                                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                                        <div>
                                            <p className="text-green-800 font-semibold">Message sent successfully!</p>
                                            <p className="text-green-600 text-sm">We&apos;ll get back to you as soon as possible.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}