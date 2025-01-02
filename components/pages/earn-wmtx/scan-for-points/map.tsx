import React from 'react';
import Image from 'next/image';

const HowToReadMap = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Column 1: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/scan-for-points-world-mobile.png"
            alt="Guide to interpreting the Scan for Points map for World Mobile"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            aria-label="Scan for Points map guide"
          />
        </div>

        {/* Column 2: Content */}
        <div className="space-y-4 text-gray-300">
          <h2 className="text-4xl font-extrabold text-white">
            How to Read the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA]">
              Scan for Points Map
            </span>
          </h2>
          <p className="leading-relaxed">
            Use the Scan for Points map to monitor your contributions to the World Mobile network and identify earning opportunities. Here&apos;s how to interpret the hex colors:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold text-[#F6642D]">Yellow Hex:</span> Represents a fully scanned area with a checkmark. All data has been collected.
            </li>
            <li>
              <span className="font-bold text-[#6C757D]">Grey Hex:</span> Indicates that all points in the hex have been claimed by other users.
            </li>
            <li>
              <span className="font-bold text-[#28A745]">Green Hex:</span> Shows an active opportunity to earn points, ranging from 1 to 5, depending on previous scans.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToReadMap;
