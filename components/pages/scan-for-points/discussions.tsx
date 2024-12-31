"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Discuss Scan For Points",
    description:
      "Engage with the World Mobile community to optimize your Scan For Points activities, explore strategies, and contribute to building a decentralized global telecom network.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "Scan For Points",
        headline: "Join the community-driven effort to enhance global connectivity",
        url: "https://worldmobile.club/c/scan-for-points/53",
        description:
          "Discuss best practices for Scan For Points, share experiences, and maximize your contribution to the World Mobile Network. Collaborate with other users to improve connectivity worldwide.",
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
        {/* Header Section */}
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4 text-center">
          <h2 className="mb-8 text-4xl font-extrabold text-white">
            Join the{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Scan For Points
            </span>{' '}
            Community
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Connect with like-minded users to optimize your scanning activities,
            enhance network coverage, and share your experiences.
          </p>
        </div>

        {/* Discussion Card */}
        <div className="grid grid-cols-1 gap-12">
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">
                Share & Learn: Scan For Points
              </h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                The Scan For Points community empowers users to map and improve
                connectivity while earning rewards. Join discussions to refine
                your strategy, share tips, and collaborate with others
                committed to enhancing the World Mobile Network.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/scan-for-points/53"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the Scan For Points discussion forum"
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
