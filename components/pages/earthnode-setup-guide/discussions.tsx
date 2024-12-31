"use client";

import React from "react";

const EarthNodeStakingDiscussions: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EarthNode Setup and Operator Discussions",
    description:
      "Explore community discussions and resources for EarthNode operators. Learn how to set up EarthNodes, engage with operators, and contribute to the World Mobile ecosystem.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "EarthNode Setup Guide on The Club",
        headline: "Learn how to set up a World Mobile EarthNode",
        url: "https://worldmobile.club/t/guide-how-to-set-up-a-world-mobile-earth-node/44",
        description:
          "Join the community to discuss and improve the step-by-step EarthNode setup guide. Learn initial setup and maintenance procedures.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
      {
        "@type": "DiscussionForumPosting",
        name: "EarthNode Operators",
        headline: "Discussions for EarthNode Operators",
        url: "https://worldmobile.club/c/earthnodes/eno-amas/28",
        description:
          "Verified EarthNode operators discuss network validation, share insights, and receive updates on World Mobile’s ecosystem.",
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
            EarthNode{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Discussions
            </span>
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Join the community to explore setup guides, operator discussions, and resources for running World Mobile EarthNodes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: EarthNode Setup Guide */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                EarthNode Setup Guide
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Discuss and improve the community-powered EarthNode setup guide. Learn step-by-step instructions for secure setup and ongoing maintenance.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/t/guide-how-to-set-up-a-world-mobile-earth-node/44"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the EarthNode Setup Guide"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Contribute to the Guide
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: EarthNode Operators */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                EarthNode Operators
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Verified EarthNode operators can discuss validation, share insights, and stay updated on World Mobile’s ecosystem.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/earthnodes/eno-amas/28"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore EarthNode Operators discussions"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Join ENO Discussions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EarthNodeStakingDiscussions;
