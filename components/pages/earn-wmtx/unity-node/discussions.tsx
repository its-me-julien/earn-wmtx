"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Discuss the Unity Node",
    description:
      "Join the discussion about the Unity Node and Minutes Network to explore decentralized voice and messaging solutions while earning rewards with your unused call minutes.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "Unity Node and Minutes Network",
        headline: "Revolutionizing global telecom with decentralized solutions",
        url: "https://worldmobile.club/c/wmtx-token/minutes-network-mnt/64",
        description:
          "Engage in discussions about the Unity Node and Minutes Network, exploring how they deliver decentralized call and SMS services. Share insights and learn how to contribute to the network's growth while earning rewards.",
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
              Unity Node
            </span>{' '}
            Discussion
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Connect with the World Mobile community to explore the Unity Node
            and Minutes Network.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Card: Unity Node Discussion */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Discuss the Unity Node
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Dive into the future of decentralized telecom with the Unity
                Node and Minutes Network. Share your experiences, ask questions,
                and discover how these innovations are shaping global
                communication.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/wmtx-token/minutes-network-mnt/64"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the Unity Node discussion forum"
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
