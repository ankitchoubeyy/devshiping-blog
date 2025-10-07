import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import Providers from "@/components/Providers"; // client wrapper
import Script from "next/script";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devshiping",
  description: "Learn more about DevShiping — a platform built for tech enthusiasts to stay updated with the latest in tech, AI, and programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L7Q7EMK00H" />
        <Script id="google-analytics" strategy="afterInteractive">
          {
            `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L7Q7EMK00H');`
          }
        </Script>
        <Providers>
          <AnalyticsTracker />
          <Header />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
