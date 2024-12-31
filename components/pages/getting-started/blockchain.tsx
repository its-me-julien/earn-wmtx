import React from 'react';
import Image from 'next/image';

const Blockchain = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Column 1: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/world-mobile-blockchain.png"
            alt="World Mobile Blockchain Ecosystem"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </div>

        {/* Column 2: Content */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl font-extrabold text-white">
            Blockchain: The{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Backbone of World Mobile
            </span>
          </h2>
          <p className="leading-relaxed">
            The World Mobile Chain (WMC), powered by Base, ensures transparency, security, and scalability.
          </p>
          <div className="space-y-4">
            <div>
              <span className="badge bg-[#D42E58] text-white font-semibold border-none">
                Transparency
              </span>
              <p className="mt-2">
                WMC provides an immutable, verifiable ledger of transactions, ensuring trust and accountability.
              </p>
            </div>
            <div>
              <span className="badge bg-[#D42E58] text-white font-semibold border-none">
                $WMTX Token
              </span>
              <p className="mt-2">
                The native utility token powers all on-chain transactions. With a multi-chain presence, $WMTX ensures liquidity and accessibility across ecosystems.
              </p>
            </div>
            <div>
              <span className="badge bg-[#D42E58] text-white font-semibold border-none">
                The Core
              </span>
              <p className="mt-2">
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
