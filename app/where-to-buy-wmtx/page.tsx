import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MetaFields from '../../components/pages/earn-wmtx/metafields';

export default function Home() {
  return (
    <div className="font-aeonik-regular">
      <MetaFields />
      <Header />
      <main className="w-full py-16 px-4 bg-gradient-to-b from-[#150a2c] via-[#1a0b2a] to-[#000000]">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-aeonik-bold text-white mb-6">
            Where to Buy{' '}
            <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
              WMTx
            </span>
          </h1>
          <p className="text-lg text-gray-300 font-aeonik-regular">
            Discover the best platforms to buy WMTx tokens. Whether you prefer centralized exchanges (CEX) or decentralized exchanges (DEX), we&apos;ve got you covered with the most popular options.
          </p>
        </div>

        {/* Exchange Listings */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Centralized Exchanges (CEX) */}
          <div className="bg-[#1a0b2a] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-[#5A2FBA]">
            <h3 className="text-2xl font-aeonik-bold text-white mb-4 text-center">Centralized Exchanges (CEX)</h3>
            <div className="space-y-4">
              {[
                { name: 'HTX', pair: 'WMTX/USDT', url: 'https://www.htx.com' },
                { name: 'MEXC', pair: 'WMTX/USDT', url: 'https://www.mexc.com' },
                { name: 'KuCoin', pair: 'WMTX/USDT', url: 'https://www.kucoin.com' },
                { name: 'Gate.io', pair: 'WMTX/USDT', url: 'https://www.gate.io' },
                { name: 'BingX', pair: 'WMTX/USDT', url: 'https://bingx.com' },
                { name: 'LCX Exchange', pair: 'WMTX/EUR', url: 'https://exchange.lcx.com' },
                { name: 'Hibt', pair: 'WMTX/USDT', url: 'https://hibt.com' },
                { name: 'Bitrue', pair: 'WMTX/USDT', url: 'https://www.bitrue.com' },
              ].map((exchange) => (
                <a
                  key={exchange.name}
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#2b1e3d] p-4 rounded-md hover:bg-gradient-to-r hover:from-[#F6642D] hover:via-[#D42E58] hover:to-[#5A2FBA] transition-all duration-300 text-white"
                >
                  <div className="text-lg font-aeonik-bold">{exchange.name}</div>
                  <div className="text-sm font-aeonik-regular text-gray-400">{exchange.pair}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Decentralized Exchanges (DEX) */}
          <div className="bg-[#1a0b2a] p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-[#5A2FBA]">
            <h3 className="text-2xl font-aeonik-bold text-white mb-4 text-center">Decentralized Exchanges (DEX)</h3>
            <div className="space-y-4">
              {[
                { name: 'Uniswap V3 (Base)', pair: 'WMTX/WETH', url: 'https://app.uniswap.org' },
                { name: 'Sundaeswap', pair: 'WMTX/ADA', url: 'https://www.sundaeswap.finance' },
                { name: 'PancakeSwap V3 (BSC)', pair: 'WMTX/WBNB', url: 'https://pancakeswap.finance' },
                { name: 'Minswap', pair: 'WMTX/ADA', url: 'https://app.minswap.org' },
                { name: 'Aerodrome (Base)', pair: 'WMTX/WETH', url: 'https://aerodrome.finance' },
                { name: '1inch', pair: 'WMTX pairs available', url: 'https://1inch.io' },
              ].map((exchange) => (
                <a
                  key={exchange.name}
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#2b1e3d] p-4 rounded-md hover:bg-gradient-to-r hover:from-[#F6642D] hover:via-[#D42E58] hover:to-[#5A2FBA] transition-all duration-300 text-white"
                >
                  <div className="text-lg font-aeonik-bold">{exchange.name}</div>
                  <div className="text-sm font-aeonik-regular text-gray-400">{exchange.pair}</div>
                </a>
              ))}
            </div>
            <p className="text-gray-400 mt-6 text-center font-aeonik-regular">
              DEXs offer more control over your assets, but be mindful of transaction fees and slippage. Always ensure you&apos;re using a compatible wallet and verifying the WMTx smart contract address to avoid potential scams.
            </p>
          </div>
        </div>


   

       {/* Buying WMTx Guide */}
       <div className="max-w-4xl mx-auto mt-16 p-10 rounded-xl shadow-xl ">
          <h2 className="text-4xl font-aeonik-bold text-white mb-8 text-center">How to Buy WMTx: Step-by-Step Guide</h2>
          <ol className="space-y-10">
            {/* Step 1 */}
            <li className="bg-[#1a0b2a] p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-aeonik-bold text-white mb-4">Step 1: Choose a Cryptocurrency Exchange</h3>
              <p className="text-gray-300">Choose either a Decentralized Exchange (DEX) or a Centralized Exchange (CEX) to buy WMTx.</p>
              <p className="text-gray-300 mt-4">When selecting an exchange, consider:</p>
              <ul className="list-disc list-inside pl-5 mt-3 text-gray-400">
                <li>Availability in your region</li>
                <li>WMTx trading pairs</li>
                <li>Liquidity</li>
                <li>Fees</li>
                <li>Security measures</li>
              </ul>
            </li>

            {/* Step 2 */}
            <li className="bg-[#1a0b2a] p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-aeonik-bold text-white mb-4">Step 2: Create an Exchange Account</h3>
              <p className="text-gray-300">After selecting an exchange, set up an account by:</p>
              <ul className="list-disc list-inside pl-5 mt-3 text-gray-400">
                <li>Visiting the exchange&apos;s website and registering</li>
                <li>Providing personal information</li>
                <li>Completing the KYC process</li>
                <li>Enabling Two-Factor Authentication (2FA)</li>
              </ul>
            </li>

            {/* Step 3 */}
            <li className="bg-[#1a0b2a] p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-aeonik-bold text-white mb-4">Step 3: Fund Your Account</h3>
              <p className="text-gray-300">Add funds to your account via:</p>
              <ul className="list-disc list-inside pl-5 mt-3 text-gray-400">
                <li>Fiat currencies (e.g., bank transfers, credit/debit cards)</li>
                <li>Cryptocurrencies (e.g., BTC, ADA)</li>
              </ul>
            </li>

            {/* Step 4 */}
            <li className="bg-[#1a0b2a] p-6 rounded-lg shadow-md ">
              <h3 className="text-2xl font-aeonik-bold text-white mb-4">Step 4: Place Your WMTx Buy Order</h3>
              <p className="text-gray-300">With funds in your account, place a buy order:</p>
              <ul className="list-disc list-inside pl-5 mt-3 text-gray-400">
                <li>Navigate to the WMTx trading pair (e.g., WMTx/USDT)</li>
                <li>Choose Market or Limit order</li>
                <li>Enter the desired amount of WMTx</li>
              </ul>
            </li>

            {/* Step 5 */}
            <li className="bg-[#1a0b2a] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-aeonik-bold text-white mb-4">Step 5: Securely Store Your WMTx</h3>
              <p className="text-gray-300">After purchase, store your WMTx securely:</p>
              <ul className="list-disc list-inside pl-5 mt-3 text-gray-400">
                <li>Exchange wallet (short-term)</li>
                <li>Hardware wallet (long-term)</li>
                <li>Software wallet (balance between security and convenience)</li>
              </ul>
            </li>

            {/* Step 6 */}
            <li className="bg-[#1a0b2a] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-aeonik-bold text-white mb-4">Step 6: Monitor Your WMTx Investment</h3>
              <p className="text-gray-300">Stay updated by tracking prices, following news, and engaging with the World Mobile community.</p>
            </li>
          </ol>
        </div>



      </main>
      <Footer />
    </div>
  );
}
