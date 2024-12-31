import React from 'react';

const GettingStartedForOperators = () => {
  const steps = [
    {
      number: "1",
      title: "Create an Account",
      description: (
        <>
          Sign up to purchase an AirNode and access the coverage map.{" "}
          <a
            href="https://airnode.worldmobile.net/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001f44] hover:underline font-bold"
          >
            Create an account
          </a>
          .
        </>
      ),
      bgColor: "bg-gradient-to-r from-[#F6642D] to-[#E35A45]",
    },
    {
      number: "2",
      title: "Choose Your AirNode",
      description:
        "Select an AirNode model that fits your budget, community's needs, and connectivity goals.",
      bgColor: "bg-gradient-to-r from-[#E35A45] to-[#D0505D]",
    },
    {
      number: "3",
      title: "Choose Location",
      description: (
        <>
          Ensure you own or have access to a property at the location to be eligible to host. 
        </>
      ),
      bgColor: "bg-gradient-to-r from-[#D0505D] to-[#BD4675]",
    },
    {
      number: "4",
      title: "Deployment & Activation",
      description:
        "World Mobile will guide you through the installation process, ensuring your AirNode is set up and ready to connect your community.",
      bgColor: "bg-gradient-to-r from-[#BD4675] to-[#AA3C8D]",
    },
    {
      number: "5",
      title: "Manage Your AirNode",
      description:
        "Track AirNode performance, connectivity data, and operational metrics through your dashboard.",
      bgColor: "bg-gradient-to-r from-[#AA3C8D] to-[#9732A5]",
    },
    {
      number: "6",
      title: "Earn Rewards",
      description:
        "Start earning rewards within 48 hours of deployment.",
      bgColor: "bg-gradient-to-r from-[#9732A5] to-[#5A2FBA]",
    },
  ];

  return (
    <section className="mt-10 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Getting Started as a <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">Host Operator</span>
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Combine hosting and operating roles to connect your community while earning rewards through the World Mobile network.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 ${step.bgColor}`}
          >
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#001f44] mb-4">{step.number}</div>
              <h3 className="text-xl font-extrabold text-white mb-3">{step.title}</h3>
              <p className="text-white text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingStartedForOperators;
