import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AirNodeInvestmentTiers from "../../components/airnode-operation/AirNodeInvestmentTiers";
import JoinDiscussion from '../../components/airnode-operation/discussions';
import AirNodeInfo from '../../components/airnode-operation/airnode-info';
import GettingStartedSection from '../../components/airnode-operation/GettingStartedSection';
import FAQSection from '../../components/airnode-operation/FAQ';

export const metadata = {
  title: "Operate an AirNode | Grow the Network & Earn Rewards",
  description: "Learn how to become an AirNode Operator with World Mobile. Expand internet access while earning rewards in your local currency.",
};

export default function AirNodeOperator() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-[#0e0525]">
      <Header />

      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">

          {/* Page Header */}
          <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6">
              Operate an{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                AirNode
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              As an AirNode Operator, you power the World Mobile Network & bring reliable internet connectivity while earning rewards in your local currency.
            </p>
          </header>

          {/* Features Section */}
          <AirNodeInfo />

          {/* Investment Tiers Section */}
          <AirNodeInvestmentTiers />

          {/* How to Get Started */}
          <GettingStartedSection />

          {/* Call to Action */}
          <section className="flex justify-center mt-16">
            <a
              href="https://airnode.worldmobile.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-12 py-3 rounded-full"
            >
              Apply to Operate an AirNode
            </a>
          </section>

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
