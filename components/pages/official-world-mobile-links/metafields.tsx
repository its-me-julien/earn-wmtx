import React from 'react';

const MetaFields = () => {
  return (
    <>
      <title>Official World Mobile Links | Connect and Stay Updated</title>
      <meta
        name="description"
        content="Explore all official World Mobile links, including eSIM, blog, Discord, Telegram, YouTube, and more. Stay connected with World Mobile through our verified resources and never miss an update."
      />
      <meta
        name="keywords"
        content="World Mobile, eSIM, World Mobile Links, Telegram, Discord, World Mobile App, YouTube, Blog, Verified Resources"
      />
      <meta name="author" content="World Mobile Club" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="World Mobile Club" />
      <meta property="og:title" content="Official World Mobile Links | Connect and Stay Updated" />
      <meta
        property="og:description"
        content="Explore all official World Mobile links, including eSIM, blog, Discord, Telegram, YouTube, and more. Stay connected with World Mobile through our verified resources and never miss an update."
      />
      <meta 
        property="og:url" 
        content="https://wmtx.worldmobile.club/official-world-mobile-links" 
      />
      <meta 
        property="og:image" 
        content="/images/world-mobile-links.png" 
      />
      <meta property="og:logo" content="/images/club_logo.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta 
        name="twitter:title" 
        content="Official World Mobile Links | Connect and Stay Updated" 
      />
      <meta
        name="twitter:description"
        content="Explore all official World Mobile links, including eSIM, blog, Discord, Telegram, YouTube, and more. Stay connected with World Mobile through our verified resources and never miss an update."
      />
      <meta 
        name="twitter:image" 
        content="/images/world-mobile-links.png" 
      />
    </>
  );
};

export default MetaFields;
