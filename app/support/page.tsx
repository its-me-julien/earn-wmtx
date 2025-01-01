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
            <p className="text-lg text-gray-300">Your one-stop resource for all World Mobile support. Find help, answers, and contact information for your needs.</p>
          </header>

          {/* Scam Awareness Section */}
          <section className="p-6 bg-[#D42E58] text-white rounded-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Safe: Avoid Scams</h2>
            <p className="text-gray-300 mb-4">Scammers are always looking for ways to trick you. Here are some tips to stay safe and protect your World Mobile account:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Admins will never message first or ask for your password.</li>
              <li>Always verify information from official channels.</li>
              <li>Avoid clicking on unverified private links or attachments.</li>
              <li>Only use trusted official links from World Mobile&#39;s official website and platforms.</li>
              <li>If a deal seems too good to be true, it probably is.</li>
              <li>Never share your sensitive information in untrusted forums or messages.</li>
            </ul>
          </section>

          {/* Official Contacts Section */}
          <section className="card bg-[rgba(55,10,81,0.19)] text-neutral-content text-center rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform max-w-3xl mx-auto">
            <div className="card-body flex flex-col items-center">
              <h3 className="card-title text-2xl font-extrabold text-white text-center">Official Support Contacts</h3>
              <p className="text-gray-300 leading-relaxed mt-4 text-center">For direct assistance with your World Mobile account or token-related queries, please use the official contact methods below:</p>
              <a 
                href="https://worldmobile.io/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-gradient-to-r from-[#5A2FBA] to-[#D42E58] text-white hover:brightness-125 border-none px-6 py-3 rounded-full"
              >
                Contact Form
              </a>
              <div className="mt-6 space-y-4">
                <p className="text-lg font-bold text-white">Other Support Emails:</p>
                <p className="text-gray-300">For specific inquiries, you can email:</p>
                <ul className="space-y-2">
                  <li><a href="mailto:support@worldmobiletoken.com" className="text-[#D42E58]">support@worldmobiletoken.com</a> - World Mobile Support</li>
                  <li><a href="mailto:airnode@worldmobile.net" className="text-[#D42E58]">airnode@worldmobile.net</a> - AirNode Support</li>
                  <li><a href="mailto:esim@worldmobile.io" className="text-[#D42E58]">esim@worldmobile.io</a> - eSIM Support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Community Support Section */}
          <section className="card bg-[rgba(55,10,81,0.19)] text-neutral-content text-center rounded-lg shadow-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-transform max-w-3xl mx-auto">
            <div className="card-body flex flex-col items-center">
              <h3 className="card-title text-2xl font-extrabold text-white text-center">World Mobile Community Forum</h3>
              <p className="text-gray-300 leading-relaxed mt-4 text-center">Join the World Mobile community and get help directly from fellow customers and enthusiasts. The forum is a great place to ask questions, share knowledge, and stay updated.</p>
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
              <h3 className="card-title text-2xl font-extrabold text-white text-center">EarthNode Operator Support</h3>
              <p className="text-gray-300 leading-relaxed mt-4 text-center">If you&#39;re an EarthNode operator or looking to connect with one, the World Mobile EarthNode support forum is the place for you.</p>
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
