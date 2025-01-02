"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Discuss SIM Staking",
    description: "Join the SIM Staking community to learn about exclusive benefits like VPN services and DID authentication, and connect with other World Mobile SIM users.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "SIM Staking",
        headline: "Unlock exclusive benefits by staking with your World Mobile SIM",
        url: "https://worldmobile.club/c/broadban-sim-customers/sim-staking/65",
        description: "Engage with the World Mobile community to discuss SIM staking strategies, explore unique rewards, and learn how to maximize the benefits of your SIM.",
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
              World Mobile
            </span>{' '}
            Community
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Connect with other World Mobile SIM customers to explore staking opportunities, share insights, and learn how to unlock exclusive benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Card: SIM Staking */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Explore SIM Staking
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Learn about the benefits of SIM staking while supporting the decentralized World Mobile network. Join discussions to optimize your experience as a World Mobile SIM user.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/broadban-sim-customers/sim-staking/65"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the SIM Staking discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Join The Club
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
