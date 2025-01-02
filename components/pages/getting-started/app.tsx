import React from 'react';
import Image from 'next/image';

const WorldMobileApp = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="space-y-8 bg-[rgba(255,255,255,0.05)] p-8 rounded-lg">
          <h2 className="text-4xl font-extrabold text-white">
            The{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              World Mobile
            </span>{' '}
            App
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Manage your data bundles, interact with web3 assets, scan your surroundings for Points, and enjoy a suite of features designed to empower your digital experience.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=io.worldmobile.app"
            className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-12 py-3 rounded-full shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the World Mobile App
          </a>
        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="https://wmtx.worldmobile.club/images/world-mobile-app.png"
              alt="World Mobile App"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMobileApp;
