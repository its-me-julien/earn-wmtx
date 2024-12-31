"use client";

import { useEffect } from 'react';

const DiscourseEmbed = () => {
  useEffect(() => {
    // Set the global DiscourseEmbed object
    window.DiscourseEmbed = {
      discourseUrl: 'https://worldmobile.club/',
      discourseEmbedUrl: 'https://wmtx.worldmobile.club/broadband-reviews',
      // className: 'CLASS_NAME', // Uncomment and set if you have custom styling
    };

    // Create the script element to load the Discourse embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `${window.DiscourseEmbed.discourseUrl}javascripts/embed.js`;

    // Append the script to the document
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="discourse-comments"></div>
      <meta name="discourse-username" content="auto_post" />
    </div>
  );
};

export default DiscourseEmbed;
