import React from "react";

const MetaFields = () => {
  return (
    <>
      <title>Grant Hub | World Mobile Club</title>
      <meta 
        name="description" 
        content="Explore World Mobile's Grant Hub, the go-to platform for community-funded innovation in decentralized connectivity. Discover funding opportunities and groundbreaking projects." 
      />
      <meta 
        name="keywords" 
        content="World Mobile Grant Hub, Decentralized Innovation, Connectivity Grants, WMTx Funding, Telecom Innovation, Blockchain Connectivity, Grant Opportunities, DePIN Projects" 
      />
      <meta name="author" content="World Mobile Club" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="World Mobile Club" />
      <meta 
        property="og:title" 
        content="Grant Hub | World Mobile Club" 
      />
      <meta 
        property="og:description" 
        content="Explore World Mobile's Grant Hub, the go-to platform for community-funded innovation in decentralized connectivity. Discover funding opportunities and groundbreaking projects." 
      />
      <meta 
        property="og:url" 
        content="https://wmtx.worldmobile.club/grant-hub/" 
      />
      <meta 
        property="og:image" 
        content="/images/grant%20hub.png" 
      />
      <meta property="og:logo" content="/images/club_logo.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta 
        name="twitter:title" 
        content="Grant Hub | World Mobile Club" 
      />
      <meta 
        name="twitter:description" 
        content="Explore World Mobile's Grant Hub, the go-to platform for community-funded innovation in decentralized connectivity. Discover funding opportunities and groundbreaking projects." 
      />
      <meta 
        name="twitter:image" 
        content="/images/grant%20hub.png" 
      />
    </>
  );
};

export default MetaFields;
