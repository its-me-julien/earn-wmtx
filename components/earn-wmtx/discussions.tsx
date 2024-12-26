"use client";

import React from "react";

const JoinDiscussion: React.FC = () => {
  return (
    <section className="mt-16 max-w-7xl mx-auto px-4 space-y-16">
     
     <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
        <div>
          <h2 className="mb-8 text-4xl font-extrabold text-white text-center px-4 md:px-6">
          Discuss{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
            WMTx
            </span>
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
          Connect with the World Mobile community and explore discussions on our ecosystem and token utility.
          </p>
        </div>
      </div>
     
     
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Card 1: World Mobile Chain */}
        <div className="card bg-[hsl(0deg_0%_45.93%_/_20%)] text-neutral-content rounded-lg shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl font-extrabold text-white">
              World Mobile Chain
            </h3>
            <p className="text-gray-300 leading-relaxed mt-4">
              Explore technical developments, partnerships, and native assets driving decentralized telecommunications.
            </p>
            <div className="mt-6">
              <a
                href="https://worldmobile.club/c/wmtx-token/world-mobile-chain/41"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Learn more about the World Mobile Chain
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: WMTx Token */}
        <div className="card bg-[hsl(0deg_0%_45.93%_/_20%)] text-neutral-content rounded-lg shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-2xl font-extrabold text-white">
              WMTx Token
            </h3>
            <p className="text-gray-300 leading-relaxed mt-4">
              Dive into token utility, staking strategies, and how WMTx powers the World Mobile ecosystem.
            </p>
            <div className="mt-6">
              <a
                href="https://worldmobile.club/c/wmtx-token/22"
                target="_blank"
                rel="noopener noreferrer"
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
