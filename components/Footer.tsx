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
          <h3 className="text-xl font-bold mb-4">Official Links:</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://worldmobile.io/"
                target="_blank"
                rel="noopener noreferrer"
                title="World Mobile"
              >
                World Mobile
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://airnode.worldmobile.net/"
                target="_blank"
                rel="noopener noreferrer"
                title="Buy an AirNode"
              >
                Buy an AirNode
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://worldmobiletoken.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="The WMTx Token"
              >
                The WMTx Token
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://esim.worldmobile.io/"
                target="_blank"
                rel="noopener noreferrer"
                title="Order an eSIM"
              >
                Order an eSIM
              </a>
            </li>
            <li>
              <a
                className="link no-underline hover:text-[#F6642D]"
                href="https://worldmobile.io/en/contact"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact World Mobile"
              >
                Contact World Mobile
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
