import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import JoinDiscussion from '../../components/pages/hex-guardian/discussions';
import MetaFields from '../../components/pages/hex-guardian/metafields';

export default function HexGuardianPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      {/* Header and Meta Fields */}
      <Header />
      <MetaFields />

      {/* Main Content */}
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">

          {/* Page Header */}
          <header
            className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4"
            aria-labelledby="hex-guardian-header"
          >
            <h1
              id="hex-guardian-header"
              className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6"
            >
              Become a{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                Hex Guardian
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Take charge of decentralized telecom ownership by becoming a Hex Guardian. Manage AirNode infrastructure within your Hex, earn rewards, and drive network growth while bridging connectivity gaps in your community.
            </p>
            <p className="leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Launching in Q1 2025, the Hex Guardian Program empowers individuals to own and operate AirNode infrastructure within designated Hex territories. By leveraging the shared economy, decentralized infrastructure, and blockchain, you can shape the future of global connectivity.
            </p>
          </header>

          {/* Join Discussion Section */}
          <section
            aria-labelledby="join-discussion-section"
            className="space-y-8"
          >
            <h2 id="join-discussion-section" className="sr-only">
              Join the Discussion
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