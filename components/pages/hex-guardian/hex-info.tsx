import React from 'react';

const HexGuardianInfo = () => {
  const sections = [
    {
      title: "What is a World Mobile Hex?",
      content: "A Hex is a defined coverage area represented as a hexagon on the World Mobile network map. Hexes allow precise network planning, ensuring optimal connectivity and efficient resource management."
    },
    {
      title: "What does a Hex Guardian do?",
      content: "Hex Guardians manage and optimize AirNode operations within their Hex. They promote World Mobile subscriptions, support operators and hosts, and ensure reliable network coverage for their communities."
    },
    {
      title: "Who can become a Hex Guardian?",
      content: "Anyone can become a Hex Guardian by purchasing a Hex NFT (HNFT). Ownership of an HNFT empowers individuals to actively contribute to network expansion and earn rewards."
    }    
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

export default HexGuardianInfo;
