import React from 'react';

const MetaFields = () => {
  return (
    <>
      <title>Host an AirNode | World Mobile Club</title>
      <meta 
        name="description" 
        content="Host an AirNode with World Mobile to expand connectivity and earn rewards. No equipment needed—just your location and support." 
      />
      <meta 
        name="keywords" 
        content="Host AirNode, Decentralized Connectivity, World Mobile, Earn Rewards, WMTx" 
      />
      <meta name="author" content="World Mobile Club" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="World Mobile Club" />
      <meta 
        property="og:title" 
        content="Host an AirNode | World Mobile Club" 
      />
      <meta 
        property="og:description" 
        content="Host an AirNode with World Mobile to expand connectivity and earn rewards. No equipment needed—just your location and support." 
      />
      <meta 
        property="og:url" 
        content="https://wmtx.worldmobile.club/airnode-host/" 
      />
      <meta 
        property="og:image" 
        content="/images/host_an_airnode.png" 
      />
      <meta property="og:logo" content="/images/club_logo.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta 
        name="twitter:title" 
        content="Host an AirNode | World Mobile Club" 
      />
      <meta 
        name="twitter:description" 
        content="Host an AirNode with World Mobile to expand connectivity and earn rewards. No equipment needed—just your location and support." 
      />
      <meta 
        name="twitter:image" 
        content="/images/host_an_airnode.png" 
      />
    </>
  );
};

export default MetaFields;
