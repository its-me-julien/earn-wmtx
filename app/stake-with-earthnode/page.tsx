import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import JoinDiscussion from '../../components/pages/stake-with-earthnode/discussions'; 
import MetaFields from '../../components/pages/stake-with-earthnode/metafields';
import Info from '../../components/pages/stake-with-earthnode/Info';

export default function EarthNodeOperatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      <Header />
      <MetaFields />
      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6">
              Stake with{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                EarthNodes
              </span>
            </h1>
            <p className="leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Earn rewards by staking your $WMTx tokens with World Mobile EarthNodes. Contribute to the network’s tokenomics and support its decentralized ecosystem.
            </p>
          </header>

           {/* Gradient Section - Disclaimer */}
           <section className="p-6 rounded-lg bg-gradient-to-r from-[#F6642D] to-[#D42E58] text-white text-center">
            <p className="text-lg font-semibold">
              COMING: Launching in Q1 2025, EarthNode staking will enable $WMTx holders to earn rewards and support the World Mobile network.
            </p>
          </section>

          {/* Info Section */}
          <Info />

         

          {/* Join Discussion Section */}
          <JoinDiscussion />
        </div>
      </main>

      <Footer />
    </div>
  );
}
