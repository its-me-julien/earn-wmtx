import React from 'react';

const Info = () => {
  const sections = [
    {
      title: "What is the Unity Node?",
      content:
        "The Unity Node is an innovative tool that allows you to convert unused telephone minutes into cryptocurrency rewards. It’s simple to install, easy to use, and helps you earn while supporting decentralized network growth.",
    },
    {
      title: "Who Can Run a Unity Node?",
      content:
        "Anyone with a compatible device can run a Unity Node. Whether you're in the U.S. or abroad, the Unity Node enables global participation, with full features available in some regions and optimized functionality elsewhere.",
    },
    {
      title: "Why Use the Unity Node?",
      content:
        "Turn your unused minutes into passive income. The Unity Node offers a seamless way to earn cryptocurrency while contributing to telecom innovation and decentralized connectivity.",
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
