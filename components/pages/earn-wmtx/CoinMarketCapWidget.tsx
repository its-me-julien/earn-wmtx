"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const CoinMarketCapWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
    script.async = true;
    document.body.appendChild(script);

    // Apply custom styles after the widget is loaded
    const applyCustomStyles = () => {
      const style = document.createElement("style");
      style.textContent = `
      .coinmarketcap-currency-widget {
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        .coinmarketcap-currency-widget div {
          margin: 0 !important;
          padding: 0 !important;
        }  
      
      .coinmarketcap-currency-widget {
          border: none !important; /* Remove border */
          background: transparent !important; /* Remove background */
          box-shadow: none !important; /* Remove shadow */
        }
        .coinmarketcap-currency-widget > div {
          border: none !important; /* Remove inner border */
        }
        .coinmarketcap-currency-widget > div > div {
          border-top: none !important; /* Remove top border inside the widget */
        }
        .coinmarketcap-currency-widget a {
          color: #F6642D !important; /* Adjust link color */
          text-decoration: none !important;
        }
        .coinmarketcap-currency-widget span {
          color: white !important; /* Adjust text color */
        }
        .coinmarketcap-currency-widget {
          font-family: 'Aeonik', sans-serif !important; /* Apply consistent font */
        }
        .coinmarketcap-currency-widget > div > div:last-child {
          display: none !important; /* Hide "Powered by CoinMarketCap" */
        }
        .coinmarketcap-currency-widget a[href*="world-mobile-token"] {
          display: none !important; /* Hide "World Mobile Token" link */
        }
      `;
      document.head.appendChild(style);
    };

    script.onload = applyCustomStyles;

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-16 max-w-3xl mx-auto px-4 text-white">
      <h2 className="mb-6 text-4xl font-bold text-center text-white">
  <span className="bg-gradient-to-r from-[#F6642D] via-[#D42E58] to-[#5A2FBA] bg-clip-text text-transparent">
    WMTx
  </span>{' '}
  Market Stats
</h2>
      <div className="rounded-lg">
        <div
          className="coinmarketcap-currency-widget"
          data-currencyid="13769"
          data-base="USD"
          data-secondary=""
          data-ticker="false"
          data-rank="true"
          data-marketcap="true"
          data-volume="true"
          data-statsticker="true"
          data-stats="USD"
        ></div>
      </div>
      <Script
        src="https://files.coinmarketcap.com/static/widget/currency.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default CoinMarketCapWidget;
