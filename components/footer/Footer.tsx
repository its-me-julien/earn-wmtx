import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-black to-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* The Club Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">The Club</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            World Mobile Club - A community-powered hub for sharing, connecting,
            and staying informed.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                className="flex items-center text-sm text-gray-300 hover:text-[#F6642D] transition-colors"
                href="https://wmtx.worldmobile.club/getting-started-with-world-mobile"
                title="Getting Started with World Mobile"
              >
                <i className="fas fa-chevron-right text-xs mr-2"></i> Getting
                Started
              </a>
            </li>
            <li>
              <a
                className="flex items-center text-sm text-gray-300 hover:text-[#F6642D] transition-colors"
                href="https://wmtx.worldmobile.club/official-world-mobile-links"
                title="Official World Mobile Links"
              >
                <i className="fas fa-chevron-right text-xs mr-2"></i> Official
                Links
              </a>
            </li>
          </ul>
        </div>

        {/* WMTx Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">WMTx</h3>
          <ul className="space-y-3">
            <li>
              <a
                className="flex items-center text-sm text-gray-300 hover:text-[#F6642D] transition-colors"
                href="https://wmtx.worldmobile.club/earn-wmtx/"
                title="Ways to Earn WMTx"
              >
                <i className="fas fa-coins text-xs mr-2"></i> Ways to Earn
              </a>
            </li>
            <li>
              <a
                className="flex items-center text-sm text-gray-300 hover:text-[#F6642D] transition-colors"
                href="https://wmtx.worldmobile.club/where-to-buy-wmtx/"
                title="Where to Buy WMTx"
              >
                <i className="fas fa-shopping-cart text-xs mr-2"></i> Where to
                Buy
              </a>
            </li>
          </ul>
        </div>

        {/* Customers Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customers</h3>
          <ul className="space-y-3">
            <li>
              <a
                className="flex items-center text-sm text-gray-300 hover:text-[#F6642D] transition-colors"
                href="https://internet.worldmobile.club/"
                title="Home Internet Broadband"
              >
                <i className="fas fa-home text-xs mr-2"></i> Home Internet
              </a>
            </li>
            <li>
              <a
                className="flex items-center text-sm text-gray-300 hover:text-[#F6642D] transition-colors"
                href="https://plans.worldmobile.club/"
                title="Mobile Phone Plan"
              >
                <i className="fas fa-mobile-alt text-xs mr-2"></i> Phone Plans
              </a>
            </li>
            <li>
              <a
                className="flex items-center text-sm text-gray-300 hover:text-[#F6642D] transition-colors"
                href="https://wmtx.worldmobile.club/support/"
                title="Support"
              >
                <i className="fas fa-life-ring text-xs mr-2"></i> Support
              </a>
            </li>
          </ul>
        </div>

        {/* Support Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support Us</h3>
          <ul className="space-y-3">
            <li>
              <a
                className="flex items-center text-sm text-gray-300 hover:text-[#F6642D] transition-colors"
                href="https://coffee.worldmobile.club/"
                target="_blank"
                rel="noopener noreferrer"
                title="Stake with Coffee"
              >
                <i className="fas fa-mug-hot text-xs mr-2"></i> Stake with Coffee
                Earth Nodes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
