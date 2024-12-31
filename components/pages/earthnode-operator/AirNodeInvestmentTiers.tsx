import React from 'react';
import Image from 'next/image';

const AirNodeInvestmentTiers = () => {
  const tiers = [
    {
      level: "Entry-Level",
      range: "$50 - $1,000",
      nodes: [
        {
          name: "Spark AirNode",
          price: 62.99,
          description: "Provides internet access to residential and business subscribers.",
          earningsPerSubscriber: 20,
          maxSubscribers: 1,
          maxEarnings: 20,
          link: "https://worldmobile.club/t/spark-airnode-discussion-thread/57",
          image: "/images/airnode/spark-airnode.png",
        },
        {
          name: "Link AirNode",
          price: 749,
          description: "High-speed internet endpoint connectivity solution.",
          earningsPerSubscriber: "$96 - $1,140",
          maxSubscribers: 1,
          maxEarnings: 1140,
          link: "https://worldmobile.club/t/link-airnode-discussion-thread/58",
          image: "/images/airnode/Link-airnode.png",
        },
      ],
    },
    {
      level: "Mid-Range",
      range: "$5,000 - $20,000",
      nodes: [
        {
          name: "Portal 180",
          price: 9000,
          description: "Broadcast device offering high-bandwidth wireless coverage.",
          earningsPerSubscriber: 144,
          maxSubscribers: 250,
          maxEarnings: 36000,
          link: "https://worldmobile.club/t/portal-airnode-discussion-thread/60/6",
          image: "/images/airnode/portal180-airnode.png",
        },
        {
          name: "Apex 90",
          price: 15999,
          description: "Powerful device for high-bandwidth wireless coverage.",
          earningsPerSubscriber: 204,
          maxSubscribers: 200,
          maxEarnings: 40800,
          link: "https://worldmobile.club/t/apex-airnode-discussion-thread/59/2",
          image: "/images/airnode/apex-airnode.png",
        },
        {
          name: "Portal 360",
          price: 18000,
          description: "Combines two Portal 180 units for expanded coverage.",
          earningsPerSubscriber: 144,
          maxSubscribers: 500,
          maxEarnings: 72000,
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
          name: "Apex 180",
          price: 31998,
          description: "Built from two Apex 90 units for enhanced connectivity.",
          earningsPerSubscriber: 204,
          maxSubscribers: 400,
          maxEarnings: 81600,
          link: "https://worldmobile.club/t/apex-airnode-discussion-thread/59/2",
          image: "/images/airnode/apex-180-airnode.png",
        },
        {
          name: "Titan",
          price: 100000,
          description: "Supports large volumes of users with robust coverage.",
          earningsPerSubscriber: 144,
          maxSubscribers: 600,
          maxEarnings: 93600,
          link: "https://worldmobile.club/t/titan-airnode-discussion-thread/61",
          image: "/images/airnode/titan-airnode.png",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          AirNode <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">Investment Tiers</span> & Earnings Potential
        </h2>
        {tiers.map((tier, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{tier.level} ({tier.range})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier.nodes.map((node, idx) => (
                <div
                  key={idx}
                  className="card p-6 rounded-md bg-[rgba(55,10,81,0.19)] text-white shadow-lg border border-[rgba(255,255,255,0.1)]"
                >
                  <div className="flex flex-col items-center mb-4">
                    <Image
                      src={node.image}
                      alt={node.name}
                      className="rounded-md"
                      width={100}
                      height={100}
                      objectFit="cover"
                    />
                    <h4 className="text-xl font-bold mt-4 mb-2 text-center">{node.name}</h4>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-300 mb-2">{node.description}</p>
                    <p className="text-sm mb-2">
                      <span className="text-white">Purchase Cost:</span>{' '}
                      <span className="font-bold text-[#F6642D]">${node.price.toFixed(2)}</span>
                    </p>
                    <p className="text-sm mb-2">
                      <span className="text-white">Annual Earnings per Subscriber:</span>{' '}
                      <span className="font-bold text-[#F6642D]">{node.earningsPerSubscriber}</span>
                    </p>
                    <p className="text-sm mb-2">
                      <span className="text-white">Max Subscribers:</span>{' '}
                      <span className="font-bold text-[#F6642D]">{node.maxSubscribers}</span>
                    </p>
                    <p className="text-sm mb-4">
                      <span className="text-white">Max Yearly Earnings:</span>{' '}
                      <span className="font-bold text-[#F6642D]">${node.maxEarnings.toLocaleString()}</span>
                    </p>
                    <a
                      href={node.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gradient-to-r from-[#F6642D] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-2 rounded-full text-center mt-4"
                    >
                      Read the community thread
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
