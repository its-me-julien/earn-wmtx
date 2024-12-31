"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Join the EarthNode Operator Community",
    description: "Engage with the World Mobile EarthNode community to explore promotions, optimize operations, and participate in the EarthNode NFT marketplace.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "EarthNode Promotions",
        headline: "Showcase your EarthNode's unique value",
        url: "https://worldmobile.club/c/earthnodes/earthnode-promotions/11",
        description: "Introduce your team, share motivations, and highlight contributions to the World Mobile ecosystem.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
      {
        "@type": "DiscussionForumPosting",
        name: "EarthNode Operations",
        headline: "Optimize performance and maximize rewards",
        url: "https://worldmobile.club/c/earthnodes/operate-an-earthnode/9",
        description: "Discuss operational strategies, share experiences, and learn effective management techniques.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
      {
        "@type": "DiscussionForumPosting",
        name: "EarthNode Marketplace",
        headline: "Explore EarthNode NFT trading opportunities",
        url: "https://worldmobile.club/c/earthnodes/buy-or-sell-an-earthnode/12",
        description: "Buy, sell, or trade EarthNode NFTs. Connect with partners and discuss valuations.",
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
            Be Part of the{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Join the World Mobile EarthNode community to learn, share, and grow as a pivotal contributor to decentralized telecommunications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1: EarthNode Promotions */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                EarthNode Promotions
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Showcase your EarthNode’s unique value. Build trust by introducing your team, explaining your motivations, and sharing your contributions to the World Mobile ecosystem.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/earthnodes/earthnode-promotions/11"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore EarthNode Promotions discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Explore Promotions
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: EarthNode Operations */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                EarthNode Operations
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Dive into operational discussions. Share experiences, optimize performance, and learn strategies for effective EarthNode management and maximizing rewards.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/earthnodes/operate-an-earthnode/9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join EarthNode Operations discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Join Operations
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: EarthNode Marketplace */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                EarthNode Marketplace
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Explore buying, selling, and trading opportunities for EarthNode NFTs. Connect with potential partners and discuss valuations in the marketplace.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/earthnodes/buy-or-sell-an-earthnode/12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the EarthNode Marketplace discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Visit Marketplace
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
