import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-black to-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Box */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Club.</h2>
          <p className="text-gray-400">
            World Mobile Club Community-Powered Hub.
          </p>
        </div>

        {/* Second Box - Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/getting-started-with-world-mobile"
                title="Getting Started with World Mobile"
              >
                Getting Started
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/official-world-mobile-links"
                title="Official World Mobile Links"
              >
                Official Links
              </a>
            </li>
          </ul>
        </div>

        {/* Third Box - WMTx Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">WMTx</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/earn-wmtx/"
                title="Ways to Earn WMTx"
              >
                Ways to Earn
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/where-to-buy-wmtx/"
                title="Where to Buy WMTx"
              >
                Where to Buy
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Box - Customers Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Customers</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/broadband-reviews"
                title="Home Broadband Reviews"
              >
                Home Broadband Reviews
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/mobile-phone-plan-reviews"
                title="Phone Plan Reviews"
              >
                Phone Plan Reviews
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/support/"
                title="Support"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Fifth Box - Support Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Support Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://coffee.worldmobile.club/"
                target="_blank"
                rel="noopener noreferrer"
                title="Stake with Coffee"
              >
                Stake with Coffee Earth Nodes.
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
