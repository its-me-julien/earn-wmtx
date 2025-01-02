import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Blockchain from '../../components/pages/getting-started/blockchain';
import Mission from '../../components/pages/getting-started/the-mission';
import Problem from '../../components/pages/getting-started/the-problem';
import Tokenomics from '../../components/pages/getting-started/the-tokenomics';
import WorldMobile from '../../components/pages/getting-started/world-mobile';
import MetaFields from '../../components/pages/getting-started/metafields';
import HowitWorks from '../../components/pages/getting-started/how-it-works';
import Roles from '../../components/pages/getting-started/roles';
import Vault from '../../components/pages/getting-started/vault';
import Club from '../../components/pages/getting-started/the-club';
import App from '../../components/pages/getting-started/app';
import Map from '../../components/pages/getting-started/map';
import FAQ from '../../components/pages/getting-started/faq';

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#150a2c] to-[#000000]">
      {/* Metadata for SEO */}
      <MetaFields />

      {/* Header */}
      <Header />

      <main className="flex-grow w-full py-12 px-4">
        <div className="container mx-auto text-white space-y-16">
          {/* Page Header */}
          <header className="grid grid-cols-1 gap-6 max-w-3xl mx-auto text-center">
  <h1 className="text-6xl font-extrabold text-white mb-6 px-4">
    Getting Started with <br />
    <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
      World Mobile
    </span>
  </h1>
  <p className="mb-8 leading-relaxed text-lg text-gray-300">
    Reshaping connectivity worldwide with innovative blockchain-powered telecom solutions.
  </p>
  <div className="flex justify-center">
    <span
      className="text-2xl text-gray-300 animate-bounce"
      aria-label="Scroll down arrow"
    >
      ↓
    </span>
  </div>
</header>

          {/* Problem Section */}
          <section id="the-problem" className="py-4">
            <Problem />
          </section>

          {/* Mission Section */}
          <section id="the-mission" className="py-4">
            <Mission />
          </section>

          {/* World Mobile Overview */}
          <section id="world-mobile-overview" className="py-4">
            <WorldMobile />
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-4">
            <HowitWorks />
          </section>

          {/* Blockchain Section */}
          <section id="blockchain-technology" className="py-4">
            <Blockchain />
          </section>

          {/* Vault Section */}
          <section id="vault-section" className="py-4">
            <Vault />
          </section>

          {/* Tokenomics Section */}
          <section id="understanding-tokenomics" className="py-4">
            <Tokenomics />
          </section>

             {/* Map Section */}
             <section id="map-section" className="py-4">
            <Map />
          </section>

          {/* App Section */}
          <section id="app-section" className="py-4">
            <App />
          </section>

       

          {/* Club Section */}
          <section id="club-section" className="py-4">
            <Club />
          </section>

          {/* Roles Section */}
          <section id="roles" className="py-4">
            <Roles />
          </section>

         {/* FAQ */}
         <section id="FAQ" className="py-4">
            <FAQ />
          </section>


        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
