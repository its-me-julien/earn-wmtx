import React from 'react';

const EarthNodeSelection = () => {
  const selectionGuides = [
    {
      title: "Track Record & Performance",
      content: "Review operational history focusing on uptime and network reliability. Strong performance indicates professional operation and higher potential rewards.",
      iconClass: "bg-gradient-to-r from-[#F6642D] to-[#D42E58]"
    },
    {
      title: "Operator Reliability",
      content: "Choose operators known for transparent communication and community engagement. The best partners maintain regular updates and have built trust within the World Mobile ecosystem.",
      iconClass: "bg-gradient-to-r from-[#D42E58] to-[#5A2FBA]"
    },
    {
      title: "Reward Rates",
      content: "Compare operator tax rates to maximize your returns. While EarthNode rewards are network-consistent, each operator sets their own rate for distributing rewards to stakers.",
      iconClass: "bg-gradient-to-r from-[#5A2FBA] to-[#F6642D]"
    },
    {
      title: "Technical Infrastructure",
      content: "Consider nodes with robust hardware and strategic locations near AirNodes. Optimal positioning increases transaction processing opportunities and network efficiency.",
      iconClass: "bg-gradient-to-r from-[#D42E58] to-[#5A2FBA]"
    }
  ];

  return (
    <section className="mt-16 max-w-7xl mx-auto px-4 space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Choosing the Right{' '}
          <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
            EarthNode
          </span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Your choice of EarthNode influences both your rewards and the network&#39;s future. The best operators demonstrate commitment through consistent performance, transparent communication, and active community participation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {selectionGuides.map((guide, index) => (
          <div
            key={index}
            className="card bg-[rgba(55,10,81,0.19)] text-neutral-content rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform"
          >
            <div className="card-body">
              <div className={`h-1 w-24 ${guide.iconClass} mb-4`}></div>
              <h3 className="card-title text-2xl font-extrabold text-white mb-4">
                {guide.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {guide.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EarthNodeSelection;