import React from 'react';
import Image from 'next/image';

const WorldMobile = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Column 1: Content */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl font-extrabold text-white">
            What Makes{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              World Mobile
            </span>{' '}
            Unique?
          </h2>

          <p className="leading-relaxed">
            World Mobile redefines telecom by combining new technology, blockchain, and community participation.
          </p>
          <div className="space-y-4">
            <div>
              <span className="badge bg-[#D42E58] text-white font-semibold border-none">
                Efficient Connectivity
              </span>
              <p className="mt-2">
                By leveraging decentralized infrastructure and innovative tech, World Mobile delivers internet access at up to 12x lower costs than legacy telecom providers.
              </p>
            </div>
            <div>
              <span className="badge bg-[#D42E58] text-white font-semibold border-none">
                Shared Ownership Model
              </span>
              <p className="mt-2">
                Infrastructure (AirNodes), planning (Hexes), and computing (EarthNodes) are owned and operated by the community, ensuring that value flows back to participants.
              </p>
            </div>
            <div>
              <span className="badge bg-[#D42E58] text-white font-semibold border-none">
                Resilient Global Network
              </span>
              <p className="mt-2">
                Built on blockchain, the network is scalable, secure, and immune to single points of failure.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/world-mobile-explained-min.png"
            alt="World Mobile's Decentralized Network Model"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default WorldMobile;
