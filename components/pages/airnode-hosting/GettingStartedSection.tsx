import React from 'react';

const GettingStartedSection = () => {
  const steps = [
    {
      number: "1",
      title: "Create an Account",
      description: (
        <>
          Sign up and submit your details through a simple verification process.{" "}
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
      title: "Create Your Profile",
      description: "Once verified, build your Host Profile describing your location's features.",
      bgColor: "bg-gradient-to-r from-[#E35A45] to-[#D0505D]",
    },
    {
      number: "3",
      title: "Connect with Operators",
      description: "Match with AirNode Operators looking for quality hosting locations.",
      bgColor: "bg-gradient-to-r from-[#D0505D] to-[#BD4675]",
    },
    {
      number: "4",
      title: "Setup the AirNode on Your Property",
      description: "Work with the operator and World Mobile technician to install the AirNode on your property and ensure it's operational.",
      bgColor: "bg-gradient-to-r from-[#BD4675] to-[#AA3C8D]",
    },
    {
      number: "5",
      title: "Start Earning Rewards",
      description: "Begin earning rewards as your AirNode provides connectivity to the community.",
      bgColor: "bg-gradient-to-r from-[#AA3C8D] to-[#9732A5]",
    },
  ];

  return (
    <section className="mt-10 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Getting Started as a <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">Host</span>
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Learn the steps to become a successful AirNode host and contribute to expanding decentralized connectivity while earning rewards.
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
              <p className="text-white text-m">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingStartedSection;
