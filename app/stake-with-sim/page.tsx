import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import JoinDiscussion from '../../components/pages/unity-node/discussions';
import MetaFields from '../../components/pages/unity-node/metafields';
import Info from '../../components/pages/unity-node/Info';

export default function SimStakingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      <Header />
      <MetaFields />
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6">
              Stake with your{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                SIM Card
              </span>
            </h1>
            <p className="leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Maximize your mobile experience by staking with World Mobile SIMs. Unlock unique benefits like VPN access, Decentralized Identity (DID) services, and more while supporting the decentralized telecom revolution.
            </p>
          </header>

          {/* Launch Disclaimer */}
          <section className="p-6 rounded-lg bg-gradient-to-r from-[#F6642D] to-[#D42E58] text-white text-center">
            <p className="text-lg font-semibold">
              COMING SOON: Launching in Q1 2025, SIM staking empowers users to actively contribute to the network while enjoying exclusive benefits.
            </p>
          </section>

          <Info />

          {/* Join Discussion Section */}
          <JoinDiscussion />
        </div>
      </main>

      <Footer />
    </div>
  );
}
