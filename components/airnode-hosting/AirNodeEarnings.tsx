import React from 'react';

const AirNodeEarnings = () => {
  const earningsData = [
    {
      title: "Portal 180",
      range: "$36/year for 1 subscriber to $9,000/year for 250 subscribers",
      description: "A Portal 180 is ideal for small to medium communities looking to enhance local connectivity."
    },
    {
      title: "Portal 360",
      range: "$36/year for 1 subscriber to $18,000/year for 500 subscribers",
      description: "The Portal 360 delivers expanded coverage range for small to medium communities."
    },
    {
      title: "Titan",
      range: "$36/year for 1 subscriber to $23,400/year for 600 subscribers",
      description: "The Titan is best suited for high-demand areas needing robust connectivity solutions."
    }
  ];

  return (
    <section className="mt-12 max-w-7xl mx-auto px-4 space-y-8">
      <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
        <div>
          <h2 className="mb-6 text-4xl font-extrabold text-white text-center px-4 md:px-6">
            AirNode Host: How Much Can You Earn?
          </h2>
          <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
            By hosting an AirNode, you receive a share of the rewards generated from providing connectivity to your community. Your earnings grow as more users connect through your hosted AirNode. Potential earnings with our more powerful AirNodes:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {earningsData.map((data, index) => (
          <div key={index} className="p-6 border border-[#5A2FBA] shadow-sm rounded-lg text-center">
            <h3 className="text-2xl font-extrabold text-white mb-4">{data.title}</h3>
            <p className="text-gray-300 mb-4">
              Earnings range from <span className="font-bold text-[#F6642D]">{data.range}</span>
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AirNodeEarnings;
