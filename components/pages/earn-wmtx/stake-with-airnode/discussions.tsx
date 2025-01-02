"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Discuss AirNode Staking",
    description: "Engage with the AirNode staking community to explore staking strategies, learn about rewards, and share insights to maximize staking potential.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "AirNode Staking",
        headline: "Maximize your AirNode staking potential",
        url: "https://worldmobile.club/c/airnode/airnode-staking/66",
        description: "Join discussions about AirNode staking strategies, reward mechanisms, delegate options, and tools for optimal staking management.",
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
              AirNode Staking
            </span>{' '}
            Community
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Collaborate with the World Mobile community to explore AirNode staking strategies, optimize rewards, and share insights for successful staking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Card: AirNode Staking */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Discuss AirNode Staking
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Learn about AirNode staking strategies, explore reward opportunities, and connect with the community to optimize your staking experience.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/airnode/airnode-staking/66"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the AirNode Staking discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Explore Discussions
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
