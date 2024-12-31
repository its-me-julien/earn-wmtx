"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Join the AirNode Host Community",
    description: "Connect with AirNode Hosts to explore hosting opportunities, discuss hosting insights, and grow within the decentralized World Mobile network.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "Discuss AirNode Hosting",
        headline: "Learn about hosting requirements, earnings, and the sharing economy",
        url: "https://worldmobile.club/c/airnode/host-an-airnode/14",
        description: "Discover resources to become a successful AirNode host. Learn about requirements, earnings, and participating in the sharing economy.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
      {
        "@type": "DiscussionForumPosting",
        name: "AirNode Host Introduction",
        headline: "Connect with fellow hosts and share experiences",
        url: "https://worldmobile.club/c/airnode/host-and-operators-introductions/17",
        description: "Share experiences, find opportunities, and expand your journey within the World Mobile network.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="mt-16 max-w-7xl mx-auto px-4 space-y-16">
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4 text-center">
          <h2 className="mb-8 text-4xl font-extrabold text-white">
            Join the{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              AirNode Host Community
            </span>
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Engage with the World Mobile AirNode host community to learn, share, and grow in the decentralized telecommunications network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: Discuss AirNode Hosting */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Discuss AirNode Hosting
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Discover resources to become a successful AirNode Host. Learn about hosting requirements, earnings, and participating in the sharing economy.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/airnode/host-an-airnode/14"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore AirNode Hosting discussions"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Explore Hosting Discussions
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: AirNode Host Introduction */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                AirNode Host Introduction
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Connect with fellow Hosts and Operators. Share experiences, find opportunities, and grow your involvement in the World Mobile network.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/airnode/host-and-operators-introductions/17"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the AirNode Host Club"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Join the Club
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinDiscussion;
