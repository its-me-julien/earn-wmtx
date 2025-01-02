import React from 'react';

const AirNodeInfo = () => {
  const sections = [
    {
      title: "What is an AirNode?",
      content: "An AirNode is a device that connects users to World Mobile's decentralized network, providing reliable internet, voice, and text services, even in underserved areas."
    },
    {
      title: "What does an Operator do?",
      content: "Operators remotely own & manage AirNodes, ensuring connectivity and maintenance while earning rewards for providing internet access in their communities."
    },
    {
      title: "Who can operate an AirNode?",
      content: "Anyone, from anywhere, can operate an AirNode, from small-scale setups for homes to large solutions for businesses. Your choice depends on community needs and investment."
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

export default AirNodeInfo;
