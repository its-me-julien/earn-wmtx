import React from 'react';

const AirNodeInfo = () => {
  const sections = [
    {
      title: "What is an AirNode?",
      content:
        "An AirNode is a wireless access point that connects local users to World Mobile's decentralized network, providing reliable internet, voice calls, and text messaging services in areas where traditional networks fail to reach.",
    },
    {
      title: "What is a Host Operator?",
      content: (
        <p className="text-lg leading-relaxed text-gray-300">
          A Host Operator combines the roles of{' '}
          <a
            href="https://wmtx.worldmobile.club/airnode-host/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F6642D] hover:text-[#D42E58] underline"
          >
            hosting
          </a>{' '}
          and{' '}
          <a
            href="https://wmtx.worldmobile.club/airnode-operator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F6642D] hover:text-[#D42E58] underline"
          >
            operating
          </a>{' '}
          an AirNode. By providing a suitable location and managing operations, Host Operators help expand connectivity while earning rewards for their contributions.
        </p>
      ),
    },
    {
      title: "What is required?",
      content: (
        <>
          <p className="text-lg leading-relaxed text-gray-300">
            Becoming a Host Operator involves meeting these requirements:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Financial investment:</strong> Sufficient funds to purchase an AirNode.
            </li>
            <li>
              <strong>Property:</strong> A suitable location for AirNode installation with good coverage potential.
            </li>
            <li>
              <strong>Power supply:</strong> Reliable and consistent electricity to keep the AirNode running.
            </li>
            <li>
              <strong>Technical capability:</strong> Ability to monitor and maintain the AirNode equipment.
            </li>
          </ul>
        </>
      )
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
