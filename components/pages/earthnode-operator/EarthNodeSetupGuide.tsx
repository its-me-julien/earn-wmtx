import React from 'react';
import Image from 'next/image';

const EarthNodeSetupGuide = () => {
  return (
    <section className="py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Column 1: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold">
            How to Set Up a <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">World Mobile EarthNode</span>
          </h2>
          <p className="text-m text-gray-300 leading-relaxed">
            This guide provides complete, step-by-step instructions to implement a secure Earth Node using the currently recommended software version. You’ll learn both initial setup and ongoing maintenance procedures.
          </p>
          <a
            href="https://worldmobile.club/t/guide-how-to-set-up-a-world-mobile-earth-node/44"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-[#F6642D] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
          >
            View the Setup Guide
          </a>
        </div>

        {/* Column 2: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/setup-earth-node.png"
            alt="Earth Node Icon"
            width={300}
            height={300}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default EarthNodeSetupGuide;
