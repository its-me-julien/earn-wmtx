import React from 'react';
import Image from 'next/image';

const AirNodeInvestmentTiers = () => {
  const tiers = [
    {
      level: "Mid-Range",
      range: "$5,000 - $20,000",
      nodes: [
        {
          name: "Portal 180",
          price: 9000,
          description: "A high-performance AirNode designed to provide high-bandwidth wireless connectivity, ideal for medium-scale deployments.",
          earningsPerSubscriber: 180,
          maxSubscribers: 250,
          maxEarnings: 45000,
          link: "https://worldmobile.club/t/portal-airnode-discussion-thread/60/6",
          image: "/images/airnode/portal180-airnode.png",
        },
        {
          name: "Portal 360",
          price: 18000,
          description: "Two Portal 180 units combined for 360° coverage, delivering powerful connectivity for larger areas.",
          earningsPerSubscriber: 180,
          maxSubscribers: 500,
          maxEarnings: 90000,
          link: "https://worldmobile.club/t/portal-airnode-discussion-thread/60/6",
          image: "/images/airnode/portal360-airnode.png",
        },
      ],
    },
    {
      level: "Premium",
      range: "$20,000 - $100,000",
      nodes: [
        {
          name: "Titan",
          price: 100000,
          description: "The flagship AirNode offering long-range connectivity and robust performance for large-scale networks.",
          earningsPerSubscriber: 195,
          maxSubscribers: 600,
          maxEarnings: 117000,
          link: "https://worldmobile.club/t/titan-airnode-discussion-thread/61",
          image: "/images/airnode/titan-airnode.png",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          AirNode <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">Investment Tiers</span> & Earnings
        </h2>
        {tiers.map((tier, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-3xl font-bold mb-6 text-center">
              {tier.level} ({tier.range})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier.nodes.map((node, idx) => (
                <div
                  key={idx}
                  className="card p-6 rounded-md bg-[rgba(55,10,81,0.19)] text-white shadow-lg border border-[rgba(255,255,255,0.1)] transition-transform transform hover:scale-105"
                >
                  <div className="flex flex-col items-center mb-4">
                    <Image
                      src={node.image}
                      alt={node.name}
                      className="rounded-md"
                      width={120}
                      height={120}
                      objectFit="cover"
                    />
                    <h4 className="text-xl font-bold mt-4 mb-2 text-center">{node.name}</h4>
                  </div>
                  <div className="text-left">
                    <p className="text-m text-gray-300 mb-3">{node.description}</p>
                    <p className="text-m mb-2">
                      <span className="text-white">Purchase Cost:</span>{' '}
                      <span className="font-bold text-[#F6642D]">${node.price.toLocaleString()}</span>
                    </p>
                    <p className="text-m mb-2">
                      <span className="text-white">Annual Earnings per Subscriber:</span>{' '}
                      <span className="font-bold text-[#F6642D]">${node.earningsPerSubscriber.toLocaleString()}</span>
                    </p>
                    <p className="text-m mb-2">
                      <span className="text-white">Max Subscribers:</span>{' '}
                      <span className="font-bold text-[#F6642D]">{node.maxSubscribers}</span>
                    </p>
                    <p className="text-m mb-4">
                      <span className="text-white">Max Yearly Earnings:</span>{' '}
                      <span className="font-bold text-[#F6642D]">${node.maxEarnings.toLocaleString()}</span>
                    </p>
                    <a
                      href={node.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gradient-to-r from-[#F6642D] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-2 rounded-full text-center mt-4"
                    >
                      Explore the {node.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AirNodeInvestmentTiers;
