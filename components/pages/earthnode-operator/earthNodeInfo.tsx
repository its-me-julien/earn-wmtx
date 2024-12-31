import React from 'react';

const earthNodeInfo = () => {
  const sections = [
    {
      title: "What is an EarthNode?",
      content:
        "EarthNodes are the core of the World Mobile network. They validate blockchain transactions, manage decentralized identities, and handle data traffic routing, creating a secure and efficient global telecom system.",
    },
    {
      title: "What does an EarthNode Operator do?",
      content:
        "EarthNode Operators (ENOs) manage and maintain EarthNode infrastructure globally. They configure servers, monitor performance, and ensure high uptime, low latency, and consistent availability to keep the network running smoothly.",
    },
    {
      title: "Who can operate an EarthNode?",
      content:
        "Anyone with an EarthNode NFT can operate an EarthNode. Operators must have reliable server infrastructure, technical skills, and the dedication to keep their node running efficiently.",
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
              {typeof section.content === "string" ? (
                <p className="text-lg leading-relaxed text-gray-300">{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default earthNodeInfo;
