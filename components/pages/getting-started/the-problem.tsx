import React from 'react';
import Image from 'next/image';

const Problem = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto space-y-12">
      {/* Title Section */}
      <header className="text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] mb-6">
          3 Billion Unconnected
        </h2>
        <p className="text-lg text-gray-300 max-w-lg mx-auto">
          Nearly half the world’s population lacks consistent internet access. This digital divide hinders education, healthcare, and economic opportunities, perpetuating inequality globally.
        </p>
      </header>

      {/* Full-Width Image Section */}
      <div className="w-full mb-8">
        <Image
          src="/images/digital-divide-world-mobile.png"
          alt="Digital Divide: Connectivity Gap"
          layout="responsive"
          width={1600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Problem Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: Global Connectivity Challenges */}
        <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content shadow-lg border border-[rgba(255,255,255,0.1)] hover:shadow-2xl transition-shadow">
          <div className="card-body">
            <h3 className="card-title text-2xl font-extrabold text-white mb-4">
              Global Connectivity Challenges
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Over 150 million people in developed countries remain offline due to high costs and limited rural infrastructure. In emerging economies, 40% lack mobile internet due to affordability and logistical barriers.
            </p>
          </div>
        </div>

        {/* Card 2: The Limits of Traditional Telecom */}
        <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content shadow-lg border border-[rgba(255,255,255,0.1)] hover:shadow-2xl transition-shadow">
          <div className="card-body">
            <h3 className="card-title text-2xl font-extrabold text-white mb-4">
              The Limits of Traditional Telecom
            </h3>
            <p className="text-gray-300 leading-relaxed">
              High costs, regulations, and reliance on centralized infrastructure make it uneconomical for traditional telecoms to serve underserved areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
