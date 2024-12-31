import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import JoinDiscussion from '../../components/pages/earthnode-setup-guide/discussions';
import Info from '../../components/pages/earthnode-setup-guide/Info';
import Metafields from '../../components/pages/earthnode-setup-guide/metafields';

export default function EarthNodeSetupGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      {/* Metadata for SEO */}
      <Metafields />

      {/* Header */}
      <Header />

      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header
            className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4 text-center"
            aria-labelledby="page-header"
          >
            <h1
              id="page-header"
              className="text-5xl font-aeonik-bold mb-6 text-white px-4 md:px-6"
            >
              EarthNode{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              Setup Guide
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 px-4 md:px-6">
              Follow this step-by-step guide to setup your EarthNode and
              join the blockchain-powered sharing economy.
            </p>
          </header>

          {/* Setup Info Section */}
          <section aria-labelledby="setup-info">
            <h2 id="setup-info" className="sr-only">
              Setup Information
            </h2>
            <Info />
          </section>

          {/* Join Discussion Section */}
          <section aria-labelledby="join-discussion" className="mt-12">
            <h2 id="join-discussion" className="sr-only">
              Join the EarthNode Club
            </h2>
            <JoinDiscussion />
          </section>


        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
