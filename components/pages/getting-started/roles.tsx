import React from 'react';
import Image from 'next/image';

const ParticipateInWorldMobile = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-extrabold text-white">
          How Can You{' '}
          <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
            Participate in World Mobile?
          </span>
        </h2>
        <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Contribute to the World Mobile ecosystem and earn rewards while improving global connectivity.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          {
            src: '/images/World-Mobile-Home-Broadband-Customer-min.png',
            alt: 'Home Broadband Customer',
            title: 'Home Broadband Customer',
            description: 'Enjoy reliable, high-speed internet powered by the World Mobile network in your home.',
          },
          {
            src: '/images/World-Mobile-Mobile-Phone-Plan-min.png',
            alt: 'Mobile Phone Plan Customer',
            title: 'Mobile Phone Plan Customer',
            description: 'Access affordable and decentralized mobile phone plans while supporting the network.',
          },
          {
            src: '/images/earn-wmtx/EarthNode.png',
            alt: 'EarthNode Operator',
            title: 'EarthNode Operator',
            description: 'Power the network by operating an EarthNode, validating transactions, and earning rewards.',
            link: 'https://wmtx.worldmobile.club/earn-wmtx/earthnode-operator/',
          },
          {
            src: '/images/earn-wmtx/airnode_operator.png',
            alt: 'AirNode Operator',
            title: 'AirNode Operator',
            description: 'Manage AirNodes to bring connectivity to communities and earn rewards.',
            link: 'https://wmtx.worldmobile.club/earn-wmtx/airnode-operator/',
          },
          {
            src: '/images/earn-wmtx/airnode_host.png',
            alt: 'AirNode Host',
            title: 'AirNode Host',
            description: 'Host an AirNode on your property to provide internet access and earn passive rewards.',
            link: 'https://wmtx.worldmobile.club/earn-wmtx/airnode-host/',
          },
          {
            src: '/images/earn-wmtx/hex_guardian.png',
            alt: 'Hex Guardian',
            title: 'Hex Guardian',
            description: 'Own and manage a HEX to promote World Mobile and optimize network coverage while earning rewards.',
            link: 'https://wmtx.worldmobile.club/earn-wmtx/hex-guardian/',
          },
          {
            src: '/images/WMTx-Holder-min.png',
            alt: 'WMTx Holder',
            title: 'WMTx Holder',
            description: 'Stake your WMTx tokens to support the network and earn staking rewards.',
            link: 'https://wmtx.worldmobile.club/earn-wmtx/',
          },
          {
            src: '/images/earn-wmtx/scan_for_points.png',
            alt: 'Connectivity Scanner',
            title: 'Connectivity Scanner',
            description: 'Scan for points to improve connectivity and earn redeemable loyalty rewards.',
            link: 'https://wmtx.worldmobile.club/earn-wmtx/scan-for-points/',
          },
          {
            src: '/images/world-mobile-dev-min.png',
            alt: 'App Builder',
            title: 'App Builder',
            description: 'Build on the World Mobile Chain to offer additional services and grow the ecosystem.',
            link: 'https://wmtx.worldmobile.club/grant-hub/',
          },
        ].map((card, index) => (
          <a
            key={index}
            href={card.link || '#'}
            target={card.link ? '_blank' : undefined}
            rel={card.link ? 'noopener noreferrer' : undefined}
            className="card bg-gradient-to-b from-[rgba(55,10,81,0.3)] to-[rgba(55,10,81,0.6)] shadow-lg p-8 rounded-lg text-center hover:shadow-xl transition-transform"
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={100}
              height={100}
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
            <p className="text-gray-100 text-sm leading-relaxed">{card.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ParticipateInWorldMobile;
