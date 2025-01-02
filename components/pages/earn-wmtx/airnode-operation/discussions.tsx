"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Join the AirNode Operator Community",
    description: "Connect with AirNode Operators to share insights, discuss operations, and explore the marketplace within the decentralized World Mobile network.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "Meet other Hosts & Operators",
        headline: "Connect with fellow AirNode Operators and Hosts",
        url: "https://worldmobile.club/c/airnode/host-and-operators-introductions/17",
        description: "Join the World Mobile community to share experiences, exchange ideas, and grow as part of the decentralized network.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
      {
        "@type": "DiscussionForumPosting",
        name: "Discuss AirNode Operations & Rewards",
        headline: "Optimize AirNode performance and maximize rewards",
        url: "https://worldmobile.club/c/airnode/operate-an-airnode/15",
        description: "Learn about tracking AirNode performance, optimizing operations, and maximizing rewards while contributing to the network.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
      {
        "@type": "DiscussionForumPosting",
        name: "AirNode Marketplace",
        headline: "Explore AirNode trading opportunities",
        url: "https://worldmobile.club/t/about-the-airnode-marketplace-category/20",
        description: "Join discussions to buy, sell, and explore trading opportunities for AirNodes within the World Mobile network.",
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
              AirNode Operator Community
            </span>
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Join the World Mobile AirNode operator community to share insights, learn, and grow as part of the decentralized telecommunications network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1: Meet other Hosts & Operators */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Meet other Hosts & Operators
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Connect with fellow hosts and operators to share experiences, exchange ideas, and grow within the World Mobile network.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/airnode/host-and-operators-introductions/17"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the discussion forum for Hosts and Operators"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Join the Club
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Discuss AirNode Operations & Rewards */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Discuss AirNode Operations & Rewards
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Learn how to optimize performance, track metrics, and maximize rewards for your AirNode operations.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/airnode/operate-an-airnode/15"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore AirNode Operations discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Explore Operations
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: AirNode Marketplace */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                AirNode Marketplace
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Discover opportunities to buy, sell, and trade AirNodes in the decentralized marketplace.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/t/about-the-airnode-marketplace-category/20"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore the AirNode Marketplace discussion forum"
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
