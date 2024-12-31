import React from 'react';

const Info = () => {
  const sections = [
    {
      title: "What is Scan for Points?",
      content:
        "Scan for Points is a gamified tool that lets World Mobile users help expand the network by scanning and collecting valuable data on connectivity performance.",
    },
    {
      title: "Who Can Use Scan for Points?",
      content:
        "Anyone with the World Mobile Android app can scan while walking, running, or traveling, contributing to network improvements.",
    },
    {
      title: "Why Use Scan for Points?",
      content:
        "Earn loyalty points for enhancing connectivity and enjoy benefits like value-added services while supporting global network growth.",
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

export default Info;
