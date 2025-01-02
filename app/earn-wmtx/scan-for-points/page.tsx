import React from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import JoinDiscussion from '../../../components/pages/earn-wmtx/scan-for-points/discussions';
import MetaFields from '../../../components/pages/earn-wmtx/scan-for-points/metafields';
import Info from '../../../components/pages/earn-wmtx/scan-for-points/Info';
import Faq from '../../../components/pages/earn-wmtx/scan-for-points/FAQ';
import Map from '../../../components/pages/earn-wmtx/scan-for-points/map';
import App from '../../../components/pages/earn-wmtx/scan-for-points/app';
import Leaderboard from '../../../components/pages/earn-wmtx/scan-for-points/leaderboard';

export default function ScanForPointsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      {/* Header and Metadata */}
      <Header />
      <MetaFields />

      {/* Main Content */}
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header
            className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4"
            aria-labelledby="scan-for-points-header"
          >
            <h1
              id="scan-for-points-header"
              className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6"
            >
              Scan for{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                Points
              </span>
            </h1>
            <p className="leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Join the World Mobile network revolution by scanning for points. Help identify network gaps, suggest new AirNode locations, and earn rewards while enhancing global connectivity.
            </p>
          </header>

          {/* Information Section */}
          <section aria-labelledby="info-section" className="space-y-16">
            <h2 id="info-section" className="sr-only">
              About Scan for Points
            </h2>
            <Info />
          </section>

          {/* App Section */}
          <section aria-labelledby="app-section" className="space-y-16">
            <h2 id="app-section" className="sr-only">
              Get the World Mobile App
            </h2>
            <App />
          </section>

          {/* Map Section */}
          <section aria-labelledby="map-section" className="space-y-16">
            <h2 id="map-section" className="sr-only">
              How to Read the Scan for Points Map
            </h2>
            <Map />
          </section>

          {/* Leaderboard Section */}
          <section aria-labelledby="leaderboard-section" className="space-y-16">
            <h2 id="leaderboard-section" className="sr-only">
              Track Your Points in the Leaderboard
            </h2>
            <Leaderboard />
          </section>

          {/* FAQ Section */}
          <section aria-labelledby="faq-section" className="space-y-16">
            <h2 id="faq-section" className="sr-only">
              Frequently Asked Questions
            </h2>
            <Faq />
          </section>

          {/* Join Discussion Section */}
          <section
            aria-labelledby="join-discussion-section"
            className="space-y-16"
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
