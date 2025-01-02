import React from 'react';
import Image from 'next/image';

const Problem = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto space-y-12 bg-black text-gray-300">
      {/* Title Section */}
      <header className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA]">
            3 Billion
          </span>{' '}
          <span className="text-white">Unconnected</span>
        </h2>
        <p className="text-lg max-w-lg mx-auto">
          Nearly half the world’s population lacks consistent internet access. This digital divide impacts education, healthcare, and economic opportunities, perpetuating inequality globally.
        </p>
      </header>

      {/* Full-Width Image Section */}
      <div className="w-full mb-8">
        <Image
          src="/images/digital-divide-world-mobile.png"
          alt="Illustration of global connectivity challenges showing digital divide"
          layout="responsive"
          width={1600}
          height={600}
          className="rounded-lg"
        />
      </div>

      {/* Problem Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: Global Connectivity Challenges */}
        <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content shadow-lg border border-[rgba(255,255,255,0.1)] rounded-lg p-6">
          <div className="flex items-center mb-4">
            <i className="fa-solid fa-globe text-3xl text-[#F6642D] mr-3"></i>
            <h3 className="card-title text-2xl font-extrabold text-white">
              Global Connectivity Challenges
            </h3>
          </div>
          <p className="leading-relaxed">
            Over <span className="font-aeonik-bold text-white">150 million people in developed countries</span> remain offline due to high costs and limited rural infrastructure.
          </p>
          <p className="mt-2 leading-relaxed">
            In emerging economies, <span className="font-aeonik-bold text-white">40%</span> lack mobile internet due to affordability and logistical barriers.
          </p>
        </div>

        {/* Card 2: The Limits of Traditional Telecom */}
        <div className="card bg-[rgba(55,10,81,0.19)] text-neutral-content shadow-lg border border-[rgba(255,255,255,0.1)] rounded-lg p-6">
          <div className="flex items-center mb-4">
            <i className="fas fa-broadcast-tower text-3xl text-[#D42E58] mr-3"></i>
            <h3 className="card-title text-2xl font-extrabold text-white">
              The Limits of Traditional Telecom
            </h3>
          </div>
          <p className="leading-relaxed">
            High costs, regulations, and reliance on centralized infrastructure make it uneconomical for traditional telecoms to serve underserved areas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
