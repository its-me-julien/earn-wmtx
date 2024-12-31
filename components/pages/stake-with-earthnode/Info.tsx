import React from 'react';

const Info = () => {
  const sections = [
    {
      title: "What is an EarthNode?",
      content:
        "EarthNodes are the backbone of the World Mobile network. They validate blockchain transactions, manage decentralized identities, and route data traffic, ensuring a secure and efficient decentralized telecom ecosystem.",
    },
    {
      title: "Who can stake with an EarthNode?",
      content:
        "Anyone holding $WMTx tokens can stake with an EarthNode. By delegating tokens to an EarthNode, participants contribute to the network's economic stability and growth while earning staking rewards proportional to their contribution.",
    },
    {
      title: "Why stake with an EarthNode?",
      content:
        "Staking with an EarthNode supports the decentralized World Mobile network and offers financial incentives. Stakers earn $WMTx rewards and help maintain a robust, secure, and scalable telecom infrastructure.",
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
