"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const CoinMarketCapWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
    script.async = true;
    document.body.appendChild(script);

    const applyCustomStyles = () => {
      const style = document.createElement("style");
      style.textContent = `
        .coinmarketcap-currency-widget {
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
          font-family: 'Aeonik', sans-serif !important;
        }
        .coinmarketcap-currency-widget div,
        .coinmarketcap-currency-widget div > div {
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
        }
        .coinmarketcap-currency-widget span {
          color: white !important;
        }
        .coinmarketcap-currency-widget a {
          color: #F6642D !important;
          text-decoration: none !important;
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
    <div className="mt-8 max-w-3xl mx-auto px-4 text-white">
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
