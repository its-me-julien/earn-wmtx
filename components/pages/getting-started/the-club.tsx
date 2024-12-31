import React from 'react';
import Image from 'next/image';

const WorldMobileClub = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Column */}
        <div className="card bg-[rgba(0,0,0,0.3)] shadow-lg p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform flex justify-center">
          <Image
            src="/images/worldmobile-forum.png"
            alt="World Mobile Club"
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>

        {/* Text Column */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl font-bold text-white">
            The{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              World Mobile
            </span>{' '}
            Club
          </h2>
          <p className="leading-relaxed">
            The World Mobile Club is the hub for our community, where members
            share updates, celebrate milestones, and connect. Stay informed
            about the latest developments, join discussions, and collaborate
            within the ecosystem.
          </p>
          <a
            href="https://worldmobile.club/"
            className="btn mt-4 bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-12 py-3 rounded-full"
          >
            Join the Club
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorldMobileClub;
