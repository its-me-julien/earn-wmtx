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
            className="text-[#F6642D] hover:underline font-bold"
          >
            Create an account
          </a>
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
          Operate and host the AirNode yourself as a <strong>Host Operator</strong>, or own it remotely with a Host managing deployment as a <strong>Remote Operator</strong>. Cellular models (Portal and Titan) require a Host, while fixed wireless models (Link and Apex) can be self-hosted.
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
        "View your rewards in the dashboard within 48 hours of deployment. Customize your payment preferences.",
      bgColor: "bg-gradient-to-r from-[#712EBA] to-[#5A2FBA]",
    },
  ];

  return (
    <div className="mt-10 max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-white">Getting Started for AirNode Operators</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-center ${step.bgColor}`}
          >
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-[#001f44] mb-4">{step.number}</div>
              <h3 className="text-xl font-extrabold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStartedForOperators;
