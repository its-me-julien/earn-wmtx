import React from 'react';

const Info = () => {
  const sections = [
    {
      title: "What is an AirNode?",
      content:
        "An AirNode is a wireless access point that connects users to the World Mobile network, providing reliable internet, voice, and text services in underserved areas. AirNodes play a vital role in expanding connectivity and bridging the digital divide.",
    },
    {
      title: "Who can stake with an AirNode?",
      content:
        "Anyone holding $WMTx tokens can stake with an AirNode. By delegating tokens, stakers contribute to network growth, expand coverage, and earn rewards proportional to their stake.",
    },
    {
      title: "Why stake with an AirNode?",
      content:
        "Staking with an AirNode allows $WMTx holders to support decentralized connectivity while earning rewards. It’s a simple way to contribute to global telecom innovation and benefit financially from the network's success.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="w-full max-w-2xl mx-auto">
            <div className="card-body text-left">
              <h3 className="text-2xl font-extrabold mb-4">{section.title}</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] mb-4"></div>
              <p className="text-lg leading-relaxed text-gray-300">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
