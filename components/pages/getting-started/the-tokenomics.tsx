import React from 'react';
import CoinMarketCapWidget from "../earn-wmtx/CoinMarketCapWidget";

const Tokenomics = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Column 1: Content */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              World Mobile
            </span>{' '}
            Tokenomics
          </h2>
          <p className="leading-relaxed">
            $WMTX powers the circular economic incentives of the World Mobile Chain.
          </p>
          <div className="space-y-4">
            <div>
              <span className="badge bg-[#D42E58] text-white font-semibold border-none">
                Utility
              </span>
              <p className="mt-2">
                $WMTX is used for all on-chain transaction fees.
              </p>
            </div>
            <div>
              <span className="badge bg-[#D42E58] text-white font-semibold border-none">
                Supply Model
              </span>
              <p className="mt-2">
                With a fixed maximum supply of 2 billion tokens, $WMTX employs a decelerating inflation model to incentivize early adoption.
              </p>
            </div>
          </div>
          <p className="leading-relaxed">
            As network usage grows, demand for $WMTX increases, enhancing its value while maintaining sustainability through its fixed supply and decreasing inflation curve.
          </p>
        </div>

        {/* Column 2: Widget */}
        <div className="flex justify-center">
          <CoinMarketCapWidget />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
