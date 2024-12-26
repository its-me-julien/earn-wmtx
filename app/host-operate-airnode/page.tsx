import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JoinDiscussion from '../../components/airnode-hosting/discussions';
import AirNodeInfo from '../../components/airnode-hosting/airnode-info';
import AirNodeEarnings from '../../components/airnode-hosting/AirNodeEarnings';
import GettingStartedSection from '../../components/airnode-hosting/GettingStartedSection';
import FAQSection from '../../components/airnode-hosting/FAQ';
import Image from 'next/image';
import airnodeHostingImg from '../../assets/airnode/airnode_hosting-min.jpg';

export const metadata = {
  title: "Host an AirNode | Grow the Network & Earn Rewards",
  description: "Host an AirNode with World Mobile to expand connectivity and earn rewards. No equipment needed—just your location and support.",
};

export default function HostAnAirNode() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-[#0e0525]">
      <Header />
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">

          {/* Page Header */}
          <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6">
              Host an{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                AirNode
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Host an AirNode to bring connectivity to your community, earn rewards, and grow the World Mobile network —no equipment or technical expertise required.
            </p>
          </header>

          {/* Features Section */}
          <AirNodeInfo />

          {/* Image Section */}
          <div className="w-full max-w-lg mx-auto px-4 mt-16">
            <figure className="rounded-lg shadow-lg">
              <Image
                src={airnodeHostingImg}
                alt="AirNode Hosting"
                className="rounded-lg"
              />
            </figure>
          </div>

          {/* Earnings Section */}
          <AirNodeEarnings />

          {/* Call to Action Button */}
          <div className="flex justify-center mt-16">
            <a
              href="https://airnode.worldmobile.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-12 py-3 rounded-full"
            >
              Apply to become an AirNode Host
            </a>
          </div>

          {/* Getting Started Section */}
          <GettingStartedSection />

          {/* Frequently Asked Questions */}
          <FAQSection />

          {/* Join Discussion Section */}
          <JoinDiscussion />
        </div>
      </main>
      <Footer />
    </div>
  );
}
