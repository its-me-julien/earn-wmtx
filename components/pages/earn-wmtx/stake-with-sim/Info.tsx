import React from 'react';

const Info = () => {
  const sections = [
    {
      title: "What is SIM Staking?",
      content:
        "SIM Staking allows World Mobile SIM users to earn rewards by staking their $WMTx tokens to their SIM. This innovative feature empowers users to actively contribute to the network while enjoying enhanced benefits.",
    },
    {
      title: "Who Can Stake with a SIM?",
      content:
        "Any World Mobile SIM holder with $WMTx tokens can participate in SIM staking.",
    },
    {
      title: "Why Stake with a SIM?",
      content:
        "Staking with your SIM unlocks exclusive benefits, including access to premium services. It’s a unique way to enhance your mobile experience while supporting the expansion of a decentralized connectivity ecosystem.",
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
