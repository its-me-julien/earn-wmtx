import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-black to-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Box */}
        <div>
          <h2 className="text-2xl font-bold mb-4">The Club.</h2>
          <p className="text-gray-400">
            World Mobile Club Community-Powered Hub.
          </p>
        </div>

        {/* Second Box */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/official-world-mobile-links"
                title="Official World Mobile Links"
              >
                Official Links
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
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/earn-wmtx/"
                title="Earn WMTx"
              >
                Earn WMTx
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://wmtx.worldmobile.club/getting-started-with-world-mobile"
                title="Getting Started with World Mobile"
              >
                Getting Started
              </a>
            </li>
          </ul>
        </div>

        {/* Third Box */}
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
