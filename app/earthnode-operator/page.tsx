import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import JoinDiscussion from '../../components/pages/earthnode-operator/discussions';
import FAQSection from '../../components/pages/earthnode-operator/FAQ';
import EarthNodeSetupGuide from '../../components/pages/earthnode-operator/EarthNodeSetupGuide';
import EarthNodeExplainer from '../../components/pages/earthnode-operator/EarthNodeExplainer';
import PurchaseEarthNodeNFT from '../../components/pages/earthnode-operator/PurchaseEarthNodeNFT';
import MetaFields from '../../components/pages/earthnode-operator/metafields';
import EarthNodeInfo from '../../components/pages/earthnode-operator/earthNodeInfo';

export default function EarthNodeOperatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      {/* Metadata for SEO */}
      <MetaFields />

      {/* Header */}
      <Header />

      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-aeonik-bold mb-6 text-white text-center px-4 md:px-6">
              Become an{' '}
              <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
                EarthNode Operator
              </span>
            </h1>
            <p className="mb-6 leading-relaxed text-lg text-gray-300 text-center px-4 md:px-6">
              Validate transactions on the World Mobile network, earn rewards and contribute to the blockchain-based sharing economy.
            </p>
          </header>

          {/* EarthNode Info Section */}  
          <section aria-labelledby="earthnode-info">
            <EarthNodeInfo />
          </section>

          {/* Purchase EarthNode NFT Section */}
          <section aria-labelledby="purchase-earthnode-nft">
            <PurchaseEarthNodeNFT />
          </section>

          {/* EarthNode Setup Guide Section */}
          <section aria-labelledby="earthnode-setup-guide">
            <EarthNodeSetupGuide />
          </section>

          {/* EarthNode Explainer Section */}
          <section aria-labelledby="earthnode-explainer">
            <EarthNodeExplainer />
          </section>

          {/* Frequently Asked Questions */}
          <section aria-labelledby="faq-section">
            <FAQSection />
          </section>

          {/* Join Discussion Section */}
          <section aria-labelledby="join-discussion">
            <JoinDiscussion />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
