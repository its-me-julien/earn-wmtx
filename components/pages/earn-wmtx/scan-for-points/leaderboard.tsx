import React from 'react';
import Image from 'next/image';

const LeaderboardSection = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Column 1: Content */}
        <div className="space-y-4 text-gray-300">
          <h2 className="text-4xl font-extrabold text-white">
            Track Your Points in the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA]">
              Leaderboard
            </span>
          </h2>
          <p className="leading-relaxed">
            Discover your impact on the World Mobile network with the Scan for Points Leaderboard. This feature enables you to monitor your earned points and visualize how your scans contribute to expanding decentralized connectivity.
          </p>
          <p className="leading-relaxed">
            See how others are contributing to scanning and take pride in playing a vital role in building the future of global connectivity.
          </p>
        </div>

        {/* Column 2: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/leaderboard-world-mobile-scan.png"
            alt="World Mobile Scan for Points Leaderboard"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
