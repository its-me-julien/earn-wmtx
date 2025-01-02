import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CoinMarketCapWidget from "../../components/pages/earn-wmtx/CoinMarketCapWidget";
import WaysToEarn from '../../components/pages/earn-wmtx/ways-to-earn';
import HowWMTxWorks from '../../components/pages/earn-wmtx/HowWMTxWorks';
import JoinDiscussion from '../../components/pages/earn-wmtx/discussions';
import MetaFields from '../../components/pages/earn-wmtx/metafields';

export default function Home() {
  return (
    <div className="font-aeonik-regular">

      <MetaFields />

      <Header />

      <main className="w-full py-10 px-4 bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
       
      <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto text-center">
  <h1 className="text-6xl font-extrabold text-white mb-6 px-4">
    Earn&nbsp;
    <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
    WMTx
    </span>
  </h1>
  <p className="mb-8 leading-relaxed text-lg text-gray-300">
  World Mobile brings connectivity to communities worldwide through decentralized infrastructure. Here&#39;s how you can earn more WMTx tokens.
  </p>

</header>
       
       
       
       
       
       


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
          <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="mb-6 text-white text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
          WMTx
        </span>{' '}
        Market Stats
      </h2>
          </div>
          <CoinMarketCapWidget />
        </div>

        {/* Final Summary Section */}
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4 mt-20">
          <p className="mb-6 leading-loose text-lg text-gray-300 text-center px-4 md:px-6">
            Power the blockchain-based sharing economy of World Mobile. Whether you&#39;re bringing connectivity as an AirNode Operator, processing transactions with an EarthNode, staking WMTx, or contributing through the World Mobile app, there&#39;s a rewarding role for everyone.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="/getting-started-with-world-mobile/"
              className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white px-8 py-3 rounded-full shadow-lg hover:brightness-125"
            >
              Learn More
            </a>
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
