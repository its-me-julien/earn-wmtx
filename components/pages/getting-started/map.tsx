import React from 'react';
import Image from 'next/image';

const ConnectedWorld = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Column */}
        <div className="flex justify-center">
          <Image
            src="/images/world-mobile-explorer.png"
            alt="World Mobile Explorer"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </div>

        {/* Text Column */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl font-extrabold text-white">
            Create a{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Connected World
            </span>
          </h2>
          <p className="leading-relaxed">
            We&#39;re building the biggest mobile network in the world, revolutionizing connectivity to empower individuals and communities globally.
          </p>
          <a
            href="https://airnode.worldmobile.net/explore/ecosystem/"
            className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-12 py-3 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectedWorld;
