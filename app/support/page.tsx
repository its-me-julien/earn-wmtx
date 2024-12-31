import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function WorldMobileSupport() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      <Header />
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto space-y-16">

          {/* Page Header */}
          <header className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-center px-4 md:px-6">
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                World Mobile
              </span>{' '}
              <span className="text-white">Support</span>
            </h1>
            <p className="text-lg text-gray-300">Find resources and assistance for all your World Mobile needs.</p>
          </header>

          {/* Scam Awareness Section */}
          <section className="p-6 bg-[#D42E58] text-white rounded-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Avoid Scams</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Admins will never message first or ask for passwords.</li>
              <li>Verify information in public channels.</li>
              <li>Avoid clicking on unverified private links.</li>
              <li>Use only official links from trusted platforms.</li>
              <li>Be cautious of deals that seem too good to be true.</li>
              <li>Never share sensitive information in untrusted forums.</li>
            </ul>
          </section>

          {/* Official Contacts Section */}
          <section className="card bg-[rgba(55,10,81,0.19)] text-neutral-content text-center rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform max-w-3xl mx-auto">
            <div className="card-body flex flex-col items-center">
              <h3 className="card-title text-2xl font-extrabold text-white text-center">Official Support</h3>
              <p className="text-gray-300 leading-relaxed mt-4 text-center">For official World Mobile customer and token holder support, contact:</p>
              <a 
                href="https://worldmobile.io/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                https://worldmobile.io/contact
              </a>
              <a 
                href="https://wmtx.worldmobile.club/official-world-mobile-links/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full mt-4"
              >
                Official Links
              </a>
            </div>
          </section>

          {/* Community Support Section */}
          <section className="card bg-[rgba(55,10,81,0.19)] text-neutral-content text-center rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform max-w-3xl mx-auto">
            <div className="card-body flex flex-col items-center">
              <h3 className="card-title text-2xl font-extrabold text-white text-center">World Mobile Customer Support Forum</h3>
              <p className="text-gray-300 leading-relaxed mt-4 text-center">Search for help or ask the community. A forum powered by users.</p>
              <a 
                href="https://worldmobile.club/c/broadban-sim-customers/world-mobile-support/20" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Visit Forum
              </a>
            </div>
          </section>

          {/* EarthNode Support Section */}
          <section className="card bg-[rgba(55,10,81,0.19)] text-neutral-content text-center rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform max-w-3xl mx-auto">
            <div className="card-body flex flex-col items-center">
              <h3 className="card-title text-2xl font-extrabold text-white text-center">EarthNode Support</h3>
              <p className="text-gray-300 leading-relaxed mt-4 text-center">Connect with EarthNode operators:</p>
              <a 
                href="https://worldmobile.club/c/earthnodes/earthnode-support/10" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Visit Forum
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
