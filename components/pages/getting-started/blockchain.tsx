import React from 'react';
import Image from 'next/image';

const Blockchain = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Column 1: Image */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/images/world-mobile-blockchain.png"
              alt="World Mobile Blockchain Ecosystem"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25 rounded-lg"></div>
          </div>
        </div>

        {/* Column 2: Content */}
        <div className="space-y-8 bg-[rgba(255,255,255,0.05)] p-8 rounded-lg">
          <h2 className="text-4xl font-extrabold text-white">
            Blockchain: The{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Backbone of World Mobile
            </span>
          </h2>
          <p className="text-gray-200 leading-relaxed">
            The World Mobile Chain (WMC), powered by Base, ensures transparency, security, and scalability.
          </p>

          {/* Badges Section */}
          <div className="space-y-6">
            <div>
              <span className="badge bg-gradient-to-r from-[#D42E58] to-[#F6642D] text-white font-medium px-4 py-2 text-base rounded-md shadow-sm border-0">
                Transparency
              </span>
              <p className="mt-3 text-gray-200">
                WMC provides an immutable, verifiable ledger of transactions, ensuring trust and accountability.
              </p>
            </div>
            <div>
              <span className="badge bg-gradient-to-r from-[#D42E58] to-[#F6642D] text-white font-medium px-4 py-2 text-base rounded-md shadow-sm border-0">
                $WMTX Token
              </span>
              <p className="mt-3 text-gray-200">
                The native utility token powers all on-chain transactions. With a multi-chain presence, $WMTX ensures liquidity and accessibility across ecosystems.
              </p>
            </div>
            <div>
              <span className="badge bg-gradient-to-r from-[#D42E58] to-[#F6642D] text-white font-medium px-4 py-2 text-base rounded-md shadow-sm border-0">
                The Core
              </span>
              <p className="mt-3 text-gray-200">
                EarthNodes validate transactions, ensuring that the network operates efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blockchain;
