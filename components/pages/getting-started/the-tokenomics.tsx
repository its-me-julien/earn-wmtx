import React from 'react';
import CoinMarketCapWidget from "../earn-wmtx/CoinMarketCapWidget";

const Tokenomics = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Column 1: Content */}
        <div className="space-y-8 bg-[rgba(255,255,255,0.05)] p-8 rounded-lg">
          <h2 className="text-4xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              World Mobile
            </span>{' '}
            Tokenomics
          </h2>
          <p className="text-gray-200 leading-relaxed">
            $WMTX powers the circular economic incentives of the World Mobile Chain.
          </p>
          <div className="space-y-6">
            <div>
              <span className="badge bg-gradient-to-r from-[#D42E58] to-[#F6642D] text-white font-medium px-4 py-2 text-base rounded-md shadow-sm border-0">
                Utility
              </span>
              <p className="mt-3 text-gray-200">
                $WMTX is used for all on-chain transaction fees.
              </p>
            </div>
            <div>
              <span className="badge bg-gradient-to-r from-[#D42E58] to-[#F6642D] text-white font-medium px-4 py-2 text-base rounded-md shadow-sm border-0">
                Supply Model
              </span>
              <p className="mt-3 text-gray-200">
                With a fixed maximum supply of 2 billion tokens, $WMTX employs a decelerating inflation model to incentivize early adoption.
              </p>
            </div>
          </div>
          <p className="text-gray-200 leading-relaxed">
            As network usage grows, demand for $WMTX increases, enhancing its value while maintaining sustainability through its fixed supply and decreasing inflation curve.
          </p>
        </div>

        {/* Column 2: Widget */}
        <div className="flex justify-center">
          <div className="bg-[rgba(255,255,255,0.05)] p-6 rounded-lg shadow-lg">
            <CoinMarketCapWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
