import React from 'react';
import Image from 'next/image';
import earthNodeIcon from '/public/images/earth-node-explained.png';

const EarthNodeExplainer = () => {
  return (
    <section className="py-16 px-6 text-white bg-gradient-to-b from-[#0D0D28] to-[#1A1A3C]">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            Discover the <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">Power of EarthNodes</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            EarthNodes drive decentralized connectivity and provide essential services for the World Mobile network.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="hidden md:block">
            <Image
              src={earthNodeIcon}
              alt="EarthNode Icon"
              className="rounded-lg shadow-lg"
              width={400}
              height={400}
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            {/* What is an ENNFT */}
            <div>
              <h3 className="text-2xl font-extrabold mb-4">What is an ENNFT?</h3>
              <p className="text-m text-gray-300 leading-relaxed">
                An ENNFT (EarthNode Non-Fungible Token) is a unique digital pass that represents EarthNode ownership. Minted on the Cardano blockchain and capped at 1,000, these tokens enable their holders to operate EarthNodes.
              </p>
            </div>

            {/* What services does an EarthNode provide? */}
            <div>
              <h3 className="text-2xl font-extrabold mb-4">What services does an EarthNode provide?</h3>
              <p className="text-m text-gray-300 leading-relaxed">
                EarthNodes provide services that power the World Mobile network:
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed">
                <li><span className="font-bold">Telecommunication Services:</span> Enable global connectivity through decentralized infrastructure.</li>
                <li><span className="font-bold">Blockchain Services:</span> Validate transactions and maintain the distributed ledger layer.</li>
                <li><span className="font-bold">Authentication Services:</span> Provide secure identity verification and access management.</li>
                <li><span className="font-bold">VPN Module:</span> Ensure secure, private connections for all participants.</li>
                <li><span className="font-bold">Third-Party Integration:</span> Facilitate governance, ledger, and external services.</li>
              </ul>
            </div>

            {/* How Do EarthNodes Get Rewarded */}
            <div>
              <h3 className="text-2xl font-extrabold mb-4">How Do EarthNodes Get Rewarded?</h3>
              <p className="text-m text-gray-300 leading-relaxed">
                EarthNode operators earn rewards in $WMTx tokens by processing network transactions and providing reliable services. The more traffic and transactions handled, the greater the rewards, incentivizing high performance and consistent uptime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthNodeExplainer;
