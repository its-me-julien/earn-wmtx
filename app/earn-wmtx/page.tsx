import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CoinMarketCapWidget from "../../components/pages/earn-wmtx/CoinMarketCapWidget";
import WaysToEarn from '../../components/pages/earn-wmtx/ways-to-earn';
import HowWMTxWorks from '../../components/pages/earn-wmtx/HowWMTxWorks';
import JoinDiscussion from '../../components/pages/earn-wmtx/discussions';
import MetaFields from '../../components/pages/earn-wmtx/metafields'


export default function Home() {
  return (
    <div className="font-aeonik-regular">

      <MetaFields />
      
      <Header />

      <main className="w-full py-10 px-4 bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
        {/* Page Header */}
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
          <div>
            <h1 className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6">
              Earn {' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                WMTx
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              World Mobile brings connectivity to communities worldwide through decentralized infrastructure. Here&#39;s how you can earn more WMTx tokens:
            </p>
          </div>
        </div>

        {/* Ways to Earn Section */}
        <div className="mt-16">
          <WaysToEarn />
        </div>

        {/* How WMTx Works Section */}
        <div className="mt-16">
          <HowWMTxWorks />
        </div>

        {/* CoinMarketCap Section */}
        <div className="mt-16">
          <CoinMarketCapWidget />
        </div>

          {/* Final Summary Section */}
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4 mt-20">
          <div>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Power the blockchain-based sharing economy of World Mobile. Whether you&#39;re bringing connectivity as an AirNode Operator, processing transactions with an EarthNode, staking WMTx, or contributing through the World Mobile app, there&#39;s a rewarding role for everyone.
            </p>
          </div>
        </div>


        {/* Join Discussion Section */}
        <div className="mt-20">
        <JoinDiscussion />
      </div>

      
      </main>

      <Footer />
    </div>
  );
}