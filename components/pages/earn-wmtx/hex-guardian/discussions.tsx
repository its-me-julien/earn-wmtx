"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Join the Hex Guardian Community",
    description: "Engage with the Hex Guardian community to optimize Hex management, explore trading opportunities, and strategize network expansion.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "Hex Management",
        headline: "Strategize and optimize your Hex territory",
        url: "https://worldmobile.club/c/hex-guardians/hex-management/63",
        description: "Explore discussions on infrastructure deployment, community engagement, and strategic development to maximize Hex potential.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
      {
        "@type": "DiscussionForumPosting",
        name: "Hex Marketplace",
        headline: "Trade and explore Hex opportunities",
        url: "https://worldmobile.club/c/hex-guardians/buy-or-sell-a-hex/21",
        description: "Discuss buying, selling, and trading of Hex territories while connecting with potential partners.",
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
            Engage with the{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Hex Guardian Community
            </span>
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Join discussions to learn, strategize, and optimize Hex operations. Discover trading opportunities and connect with community members to grow your impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: Hex Management */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Hex Management
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Discuss strategic planning, infrastructure deployment, and community engagement to maximize your Hex territory&#39;s potential.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/hex-guardians/hex-management/63"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Hex Management discussions"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Explore Hex Management
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Hex Marketplace */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Hex Marketplace
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Buy, sell, or trade Hex territories. Connect with partners and discuss valuations to unlock new opportunities.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/hex-guardians/buy-or-sell-a-hex/21"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Hex Marketplace discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Visit Hex Marketplace
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
