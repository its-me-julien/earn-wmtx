"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Join the World Mobile AirNode Community",
    description: "Connect with AirNode hosts and operators to share insights, discuss operations, and explore hosting opportunities within the decentralized World Mobile network.",
    mainEntity: [
      {
        "@type": "DiscussionForumPosting",
        name: "Join the Club",
        headline: "Meet other AirNode hosts and operators",
        url: "https://worldmobile.club/c/airnode/host-and-operators-introductions/17",
        description: "Engage with the World Mobile community to exchange ideas, share experiences, and collaborate.",
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
        description: "Learn about tracking AirNode performance, optimizing operations, and maximizing rewards.",
        author: {
          "@type": "Person",
          name: "World Mobile Club",
        },
        datePublished: "2025-01-01",
      },
      {
        "@type": "DiscussionForumPosting",
        name: "Discuss AirNode Hosting",
        headline: "Insights into hosting AirNodes and their community impact",
        url: "https://worldmobile.club/c/airnode/host-an-airnode/14",
        description: "Explore hosting opportunities, share insights, and learn how hosting AirNodes can make a community impact.",
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
              AirNode Community
            </span>
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Connect with AirNode Hosts and Operators, share knowledge, and contribute to the decentralized telecommunications network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">Join the AirNode Club</h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Meet other AirNode Hosts and Operators to exchange ideas, share experiences, and collaborate within the World Mobile network.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/airnode/host-and-operators-introductions/17"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join the AirNode Community discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Join the Discussion
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">AirNode Operations</h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Learn how to track AirNode performance, optimize operations, and maximize rewards while contributing to the network&apos;s growth.
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

          {/* Card 3 */}
          <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
            <div className="card-body">
              <h3 className="card-title text-2xl font-extrabold text-white">AirNode Hosting Insights</h3>
              <p className="text-gray-300 leading-relaxed mt-4">
                Explore hosting opportunities, share insights, and learn how hosting AirNodes can make a community impact.
              </p>
              <div className="mt-6">
                <a
                  href="https://worldmobile.club/c/airnode/host-an-airnode/14"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore AirNode Hosting discussion forum"
                  className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
                >
                  Explore Hosting
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
