import React from 'react';

const TheMission = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] rounded-lg shadow-lg text-white">
      <div className="text-center space-y-8">
        {/* Mission Header */}
        <h2 className="text-4xl font-extrabold">The World Mobile Mission</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Connecting the unconnected to create a fairer, more inclusive world through decentralized telecom solutions.
        </p>

        {/* Objectives Header */}
        <div className="space-y-4">
          <h3 className="text-3xl font-extrabold">The Objectives</h3>
        </div>

        {/* Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Objective 1 */}
          <div className="card bg-[rgba(255,255,255,0.1)] text-center rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-white rounded-full p-3">
                <i className="fa-solid fa-users text-3xl text-[#F6642D]"></i>
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-2">Empower Communities</h4>
            <p className="leading-relaxed">
              Enabling entrepreneurs and stakeholders to own and manage telecom infrastructure.
            </p>
          </div>

          {/* Objective 2 */}
          <div className="card bg-[rgba(255,255,255,0.1)] text-center rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-white rounded-full p-3">
                <i className="fa-solid fa-globe text-3xl text-[#D42E58]"></i>
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-2">Close the Digital Divide</h4>
            <p className="leading-relaxed">
              Connecting the 4 billion unconnected by leveraging blockchain and cost-effective infrastructure.
            </p>
          </div>

          {/* Objective 3 */}
          <div className="card bg-[rgba(255,255,255,0.1)] text-center rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-white rounded-full p-3">
                <i className="fa-solid fa-coins text-3xl text-[#5A2FBA]"></i>
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-2">Build a Sharing Economy</h4>
            <p className="leading-relaxed">
              Rewarding all members who contribute to the network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheMission;
