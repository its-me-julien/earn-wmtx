import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Metafields from '../../components/pages/grant-hub/metafields';

export default function GrantHub() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
     
     <Metafields />
      <Header />
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto space-y-16">

          {/* Page Header */}
          <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold text-white mb-6 px-4 flex justify-center items-center gap-2">
              <span className="text-white">Grant</span>
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] text-white px-3 py-1 rounded-md">
                Hub
              </span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-300">
              Accelerating innovation through community-funded grants.
            </p>
            <div className="flex justify-center">
              <span className="text-2xl text-gray-300 animate-bounce" aria-label="Scroll down arrow">
                ↓
              </span>
            </div>
          </header>

          {/* Introduction Section */}
          <section className="p-6 bg-[#5A2FBA] text-white rounded-lg max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4 text-center">
              Grant Hub is the cornerstone of World Mobile’s innovation strategy, offering non-dilutive funding to empower developers and visionaries. By fostering new projects, Grant Hub is paving the way for the future of World Mobile.
            </p>
          </section>

          {/* Apply for a Grant Section */}
          <section className="card bg-[rgba(55,10,81,0.19)] text-neutral-content text-center rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform max-w-3xl mx-auto">
            <div className="card-body flex flex-col items-center">
              <h3 className="card-title text-2xl font-extrabold text-white text-center">Apply for a Grant</h3>
              <p className="text-gray-300 leading-relaxed mt-4 text-center">
                Have a groundbreaking idea to transform decentralized connectivity? Submit your proposal and access funding to bring your vision to reality.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScRsIrdSj3LNZzn08V6jcmk_WE5No228MpUiuTIOBOlLD_8LA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Apply Now
              </a>
            </div>
          </section>

          {/* Funded Projects Section */}
          <section className="card bg-[rgba(55,10,81,0.19)] text-neutral-content text-center rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform max-w-3xl mx-auto">
            <div className="card-body flex flex-col items-center">
              <h3 className="card-title text-2xl font-extrabold text-white text-center">Funded Projects</h3>
              <p className="text-gray-300 leading-relaxed mt-4 text-center">
                Explore innovative projects funded by Grant Hub and learn how they’re advancing connectivity solutions globally.
              </p>
              <a
                href="https://worldmobile.club/c/world-mobile-club/grant-hub/34"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Explore Projects
              </a>
            </div>
          </section>

          {/* Focus Areas Section */}
          <section className="p-8 bg-gradient-to-br from-[#5A2FBA] via-[#D42E58] to-[#F6642D] text-white rounded-lg shadow-lg max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black bg-opacity-30 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Telecommunications</h3>
                <p className="text-gray-300 text-sm">
                  Revolutionizing connectivity with decentralized solutions.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Physical Infrastructure</h3>
                <p className="text-gray-300 text-sm">
                  Building real-world systems to support decentralized telecom.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Web2 to Web3 Bridges</h3>
                <p className="text-gray-300 text-sm">
                  Transitioning traditional applications to Web3 ecosystems.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Real-World Assets</h3>
                <p className="text-gray-300 text-sm">
                  Tokenizing physical assets for on-chain integration.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Data Security</h3>
                <p className="text-gray-300 text-sm">
                  Advancing zero-knowledge proofs and privacy solutions.
                </p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Digital Identity</h3>
                <p className="text-gray-300 text-sm">
                  Managing decentralized identities for secure applications.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
