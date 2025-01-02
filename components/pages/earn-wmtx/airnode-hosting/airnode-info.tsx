import React from 'react';

const AirNodeInfo = () => {
  const sections = [
    {
      title: "What is an AirNode?",
      content: "An AirNode is a wireless access point that connects local users to World Mobile's network, delivering internet, voice calls, and text messaging services to your community."
    },
    {
      title: "What does a Host do?",
      content: "An AirNode Host provides a strategic location for World Mobile's network equipment and earns rewards based on the connectivity services delivered through their hosted AirNode."
    },
    {
      title: "What is required?",
      content: (
        <>
          <p className="text-lg leading-relaxed text-gray-300">
            You don&apos;t need to purchase any equipment—World Mobile&apos;s AirNode operators handle that. You just need:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>A suitable location</li>
            <li>Reliable power supply for the AirNode</li>
            <li>Ability to provide maintenance access when needed</li>
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
