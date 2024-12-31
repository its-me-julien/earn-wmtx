"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  return (
    <section className="mt-16 max-w-7xl mx-auto px-4 space-y-16">
      <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4 text-center">
        <h2 className="mb-8 text-4xl font-extrabold text-white">
          Join the{' '}
          <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
            WMTx
          </span>{' '}
          Community
        </h2>
        <p className="mb-6 leading-relaxed text-lg text-gray-300">
          Connect with the World Mobile community and explore in-depth discussions about token utility, network advancements, and staking strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Card 1: World Mobile Chain */}
        <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
          <div className="card-body">
            <h3 className="card-title text-2xl font-extrabold text-white">
              World Mobile Chain
            </h3>
            <p className="text-gray-300 leading-relaxed mt-4">
              Explore technical developments, partnerships, and native assets that power decentralized telecommunications.
            </p>
            <div className="mt-6">
              <a
                href="https://worldmobile.club/c/wmtx-token/world-mobile-chain/41"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about the World Mobile Chain"
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: WMTx Token */}
        <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
          <div className="card-body">
            <h3 className="card-title text-2xl font-extrabold text-white">
              WMTx Token
            </h3>
            <p className="text-gray-300 leading-relaxed mt-4">
              Dive into the utility of WMTx, staking strategies, and its pivotal role in driving the World Mobile ecosystem forward.
            </p>
            <div className="mt-6">
              <a
                href="https://worldmobile.club/c/wmtx-token/22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore WMTx discussions"
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Explore WMTx Discussions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinDiscussion;
