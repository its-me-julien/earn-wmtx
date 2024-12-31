import React from 'react';

const GettingStartedForOperators = () => {
  const steps = [
    {
      number: "1",
      title: "Create an Account",
      description: (
        <>
          Sign up to purchase AirNodes and access the coverage map.{" "}
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
        "Select the AirNode model that suits your community’s needs, existing coverage, and investment capacity.",
      bgColor: "bg-gradient-to-r from-[#E35A45] to-[#D0505D]",
    },
    {
      number: "3",
      title: "Decide on Hosting",
      description: (
        <>
          Operate and host the AirNode yourself as a{" "}
          <a
            href="https://wmtx.worldmobile.club/airnode-host-operator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001f44] hover:underline font-bold"
          >
            Host Operator
          </a>
          , or own it remotely with a Host managing deployment as a{" "}
          <a
            href="https://wmtx.worldmobile.club/airnode-host/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001f44] hover:underline font-bold"
          >
            Host
          </a>
          .
        </>
      ),
      bgColor: "bg-gradient-to-r from-[#D0505D] to-[#BD4675]",
    },
    {
      number: "4",
      title: "Select a Location",
      description: "Pick an available hex from the interactive map.",
      bgColor: "bg-gradient-to-r from-[#BD4675] to-[#AA3C8D]",
    },
    {
      number: "5",
      title: "Host Terms Agreement",
      description:
        "If using a Host, discuss and finalize terms before completing your purchase.",
      bgColor: "bg-gradient-to-r from-[#AA3C8D] to-[#9732A5]",
    },
    {
      number: "6",
      title: "Deployment & Activation",
      description:
        "Portal & Titan AirNodes require deployment at the Host location. Link & Apex AirNodes can be self-setup or are pre-deployed.",
      bgColor: "bg-gradient-to-r from-[#9732A5] to-[#8428BD]",
    },
    {
      number: "7",
      title: "Manage Your AirNode",
      description:
        "Track AirNode performance, connectivity data, and operational statistics through your dashboard.",
      bgColor: "bg-gradient-to-r from-[#8428BD] to-[#712EBA]",
    },
    {
      number: "8",
      title: "Earn Rewards",
      description:
        "View your rewards in the dashboard within 48 hours of deployment.",
      bgColor: "bg-gradient-to-r from-[#712EBA] to-[#5A2FBA]",
    },
  ];

  return (
    <section className="mt-10 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Getting Started as an{" "}
          <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
            AirNode Operator
          </span>
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Follow these steps to operate your AirNode and contribute to the decentralized connectivity revolution.
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

export default GettingStartedForOperators;
