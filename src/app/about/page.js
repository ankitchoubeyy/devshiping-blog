import Image from "next/image";

export const metadata = {
  title: "About Us | DevShiping",
  description:
    "Learn more about DevShiping — a platform built for developers to stay updated with the latest in tech, AI, and programming.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About <span className="text-secondary">Us</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed text-justify">
            DevShiping is a modern tech media platform dedicated to helping
            developers, engineers, and tech enthusiasts stay informed about
            the ever-evolving world of technology, software, and AI.
          </p>
        </div>

        {/* Mission & Coverage Section */}
        <section className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Image */}
          <div className="relative w-full h-70 sm:h-80 md:h-96 rounded-3xl  overflow-hidden shadow-lg">
            <Image
              src="https://whitesmoke-wildcat-383702.hostingersite.com/wp-content/uploads/2025/10/about-us-page-scaled.jpg"
              alt="Collaborative team of developers innovating in a modern tech environment"
              fill
              className="object-cover transition-transform hover:scale-105 duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Side - Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Our goal is to simplify how developers and tech enthusiasts consume
                the latest trends and updates in the tech world. From AI and
                programming frameworks to new tools and software releases — we
                deliver everything that keeps you one step ahead.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                What We Cover
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                  <span>Latest Tech & AI News</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                  <span>Programming Tutorials & Best Practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                  <span>Software & Framework Releases</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                  <span>Developer Tools and Productivity Insights</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="md:text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            Built for Tech Lovers
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed md:text-center text-justify">
            DevShiping was created with one vision — to empower developers by
            sharing reliable knowledge, deep insights, and the latest updates
            that truly matter. We believe in community-driven growth and in
            making technology accessible to everyone.
          </p>
        </section>

        {/* Contact CTA */}
        <section className="md:text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
            Let&apos;s Connect
          </h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Have a story idea, partnership proposal, or feedback?  
            Reach out — we&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary text-white font-medium py-4 px-8 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </section>
      </section>
    </main>
  );
}