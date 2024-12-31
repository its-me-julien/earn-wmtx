import React from 'react';

const WorldMobileHowItWorks = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
      {/* Header Section */}
      <header className="text-center space-y-4">
      <h2 className="text-4xl font-extrabold text-white animate-fadeIn">
            How{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                World Mobile
            </span>{' '}
            Works?
            </h2>
        <p className="text-lg text-gray-300">
          Discover the three pillars of World Mobile infrastructure and how they reshape global connectivity.
        </p>
      </header>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* EarthNodes */}
        <div className="card bg-[rgba(55,10,81,0.19)] shadow-lg p-8 text-center rounded-lg border border-[rgba(255,255,255,0.1)] hover:shadow-2xl hover:scale-105 transition-transform">
          <i className="fas fa-server text-5xl text-[#F6642D] mx-auto mb-6"></i>
          <h3 className="text-2xl font-bold text-white mb-4">EarthNodes</h3>
          <p className="text-gray-300 leading-relaxed">
            The backbone of the network, EarthNodes process transactions, validate data, and manage essential services on the World Mobile Chain.
          </p>
        </div>

        {/* AirNodes */}
        <div className="card bg-[rgba(55,10,81,0.19)] shadow-lg p-8 text-center rounded-lg border border-[rgba(255,255,255,0.1)] hover:shadow-2xl hover:scale-105 transition-transform">
          <i className="fas fa-broadcast-tower text-5xl text-[#D42E58] mx-auto mb-6"></i>
          <h3 className="text-2xl font-bold text-white mb-4">AirNodes</h3>
          <p className="text-gray-300 leading-relaxed">
            AirNodes provide connectivity to communities, acting as the physical layer that brings people online.
          </p>
        </div>

        {/* AetherNodes */}
        <div className="card bg-[rgba(55,10,81,0.19)] shadow-lg p-8 text-center rounded-lg border border-[rgba(255,255,255,0.1)] hover:shadow-2xl hover:scale-105 transition-transform">
          <i className="fas fa-network-wired text-5xl text-[#5A2FBA] mx-auto mb-6"></i>
          <h3 className="text-2xl font-bold text-white mb-4">AetherNodes</h3>
          <p className="text-gray-300 leading-relaxed">
            AetherNodes bridge decentralized and traditional telecoms, ensuring seamless integration with legacy systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorldMobileHowItWorks;