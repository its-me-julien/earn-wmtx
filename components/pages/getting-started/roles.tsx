import React from 'react';
import Image from 'next/image';

const ParticipateInWorldMobile = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-white">
          How Can You{' '}
          <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
            Participate in World Mobile?
          </span>
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Contribute to the World Mobile ecosystem and earn rewards while improving global connectivity.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Cards */}
        <div className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/World-Mobile-Home-Broadband-Customer-min.png" alt="Home Broadband Customer" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Home Broadband Customer</h3>
          <p className="text-gray-300 leading-relaxed">
            Enjoy reliable, high-speed internet powered by the World Mobile network in your home.
          </p>
        </div>

        <div className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/World-Mobile-Mobile-Phone-Plan-min.png" alt="Mobile Phone Plan Customer" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Mobile Phone Plan Customer</h3>
          <p className="text-gray-300 leading-relaxed">
            Access affordable and decentralized mobile phone plans while supporting the network.
          </p>
        </div>

        <a href="https://wmtx.worldmobile.club/earthnode-operator/" className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/earn-wmtx/EarthNode.png" alt="EarthNode Operator" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">EarthNode Operator</h3>
          <p className="text-gray-300 leading-relaxed">
            Power the network by operating an EarthNode, validating transactions, and earning rewards.
          </p>
        </a>

        <a href="https://wmtx.worldmobile.club/airnode-operator/" className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/earn-wmtx/airnode_operator.png" alt="AirNode Operator" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">AirNode Operator</h3>
          <p className="text-gray-300 leading-relaxed">
            Manage AirNodes to bring connectivity to communities and earn rewards.
          </p>
        </a>

        <a href="https://wmtx.worldmobile.club/airnode-host/" className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/earn-wmtx/airnode_host.png" alt="AirNode Host" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">AirNode Host</h3>
          <p className="text-gray-300 leading-relaxed">
            Host an AirNode on your property to provide internet access and earn passive rewards.
          </p>
        </a>

        <a href="https://wmtx.worldmobile.club/hex-guardian/" className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/earn-wmtx/hex_guardian.png" alt="Hex Guardian" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Hex Guardian</h3>
          <p className="text-gray-300 leading-relaxed">
            Own and manage a HEX to promote World Mobile and optimize network coverage while earning rewards.
          </p>
        </a>

        <a href="https://wmtx.worldmobile.club/earn-wmtx/" className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/WMTx-Holder-min.png" alt="WMTx Holder" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">WMTx Holder</h3>
          <p className="text-gray-300 leading-relaxed">
            Stake your WMTx tokens to support the network and earn staking rewards.
          </p>
        </a>

        <a href="https://wmtx.worldmobile.club/scan-for-points/" className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/earn-wmtx/scan_for_points.png" alt="Connectivity Scanner" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Connectivity Scanner</h3>
          <p className="text-gray-300 leading-relaxed">
            Scan for points to improve connectivity and earn redeemable loyalty rewards.
          </p>
        </a>

        <a href="https://wmtx.worldmobile.club/grant-hub/" className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
          <Image src="/images/world-mobile-dev-min.png" alt="App Builder" width={80} height={80} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">App Builder</h3>
          <p className="text-gray-300 leading-relaxed">
            Build on the World Mobile Chain to offer additional services and grow the ecosystem.
          </p>
        </a>
      </div>
    </section>
  );
};

export default ParticipateInWorldMobile;
