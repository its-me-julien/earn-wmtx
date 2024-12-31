import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import JoinDiscussion from '../../components/pages/airnode-operation/discussions';
import AirNodeInfo from '../../components/pages/airnode-operation/airnode-info';
import AirNodeInvestmentTiers from '../../components/pages/airnode-operation/AirNodeInvestmentTiers';
import GettingStartedSection from '../../components/pages/airnode-operation/GettingStartedSection';
import FAQSection from '../../components/pages/airnode-operation/FAQ';
import MetaFields from '../../components/pages/airnode-operation/metafields';

export default function OperateAnAirNode() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      {/* Metadata */}
      <MetaFields />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6">
              Become an{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                AirNode Operator
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Operate an AirNode to power the World Mobile network. Bring reliable connectivity to underserved areas while earning rewards in your local currency.
            </p>
          </header>

          {/* Features Section */}
          <section>
            <AirNodeInfo />
          </section>

          {/* Earnings Section */}
          <section>
            <AirNodeInvestmentTiers />
          </section>

          {/* Call to Action Button */}
          <section className="flex justify-center mt-16">
            <a
              href="https://airnode.worldmobile.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-12 py-3 rounded-full"
            >
              Apply to become an AirNode Operator
            </a>
          </section>

          {/* Getting Started Section */}
          <section>
            <GettingStartedSection />
          </section>

          {/* Frequently Asked Questions */}
          <section>
            <FAQSection />
          </section>

          {/* Join Discussion Section */}
          <section>
            <JoinDiscussion />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
