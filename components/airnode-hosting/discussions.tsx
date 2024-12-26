"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  return (
<section className="mt-16 max-w-7xl mx-auto px-4 space-y-16">
      <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
        <div>
          <h2 className="mb-8 text-4xl font-extrabold text-white text-center px-4 md:px-6">
            Engage with the{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
            Connect with the World Mobile AirNode community to learn, share, and grow as part of the decentralized telecommunications revolution.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Card 1: Discuss AirNode Hosting */}
        <div className="card bg-[hsl(0deg_0%_45.93%_/_20%)] text-neutral-content rounded-lg shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl font-extrabold text-white">
              Discuss AirNode Hosting
            </h3>
            <p className="text-gray-300 leading-relaxed mt-4">
              Discover resources to become a successful AirNode host. Learn about requirements, earnings, and participating in the sharing economy.
            </p>
            <div className="mt-6">
              <a
                href="https://worldmobile.club/c/airnode/host-an-airnode/14"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Explore Hosting Discussions
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: AirNode Host Introduction */}
        <div className="card bg-[hsl(0deg_0%_45.93%_/_20%)] text-neutral-content rounded-lg shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl font-extrabold text-white">
              AirNode Host Introduction
            </h3>
            <p className="text-gray-300 leading-relaxed mt-4">
              Connect with fellow hosts and operators. Share experiences, find opportunities, and expand your World Mobile journey.
            </p>
            <div className="mt-6">
              <a
                href="https://worldmobile.club/c/airnode/host-and-operators-introductions/17"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Join the Club
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinDiscussion;
