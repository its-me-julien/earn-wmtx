import React from 'react';
import Head from 'next/head';

export default function HomepageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "World Mobile Club | Earn More WMTx Tokens",
    "description": "Discover how to earn WMTx tokens by contributing to World Mobile's decentralized connectivity ecosystem. Participate as an EarthNode operator, AirNode host, or through staking.",
    "url": "https://wmtx-token.worldmobile.club",
    "publisher": {
      "@type": "Organization",
      "name": "World Mobile Club",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wmtx-token.worldmobile.club/assets/earn-wmtx-min.png",
        "width": 1200,
        "height": 630
      }
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is WMTx?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WMTx is the native token of the World Mobile ecosystem, enabling decentralized connectivity and rewarding participants who contribute to the network."
          }
        },
        {
          "@type": "Question",
          "name": "How can I earn WMTx?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can earn WMTx by operating an EarthNode, hosting an AirNode, or staking your WMTx tokens within the World Mobile network."
          }
        }
      ]
    }
  };

  return (
    <Head>
      {/* Enhanced Meta Tags */}
      <meta name="keywords" content="WMTx, World Mobile Token, Earn WMTx, Decentralized Connectivity, EarthNode, AirNode, Staking" />
      <meta name="author" content="World Mobile Club" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="World Mobile Club" />
      <meta property="og:title" content="World Mobile Club | Earn More WMTx Tokens" />
      <meta property="og:description" content="Discover how to earn WMTx tokens by contributing to World Mobile's decentralized connectivity ecosystem." />
      <meta property="og:url" content="https://wmtx-token.worldmobile.club" />
      <meta property="og:image" content="/assets/earn-wmtx/earn-wmtx-min.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="World Mobile Club | Earn More WMTx Tokens" />
      <meta name="twitter:description" content="Discover how to earn WMTx tokens by contributing to World Mobile's decentralized connectivity ecosystem." />
      <meta name="twitter:image" content="/assets/earn-wmtx/earn-wmtx-min.png" />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png" />
      <link rel="manifest" href="/assets/site.webmanifest" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
