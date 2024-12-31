import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is World Mobile?",
      answer:
        "World Mobile is a blockchain-powered telecom network that aims to bridge the digital divide. It provides affordable connectivity while empowering communities through a decentralized and shared ownership model."
    },
    {
      question: "How does World Mobile work?",
      answer:
        "World Mobile operates on three key components: EarthNodes process transactions and secure the network; AirNodes provide last-mile connectivity for voice, text, and data services; and AetherNodes connect traditional telecom infrastructure with decentralized systems, ensuring seamless integration."
    },
    {
      question: "What are WMTx tokens?",
      answer:
        "WMTx is the native utility token of the World Mobile Chain. It powers on-chain transactions, incentivizes network participants, and allows users to earn staking rewards, ensuring a sustainable and community-driven ecosystem."
    },
    {
      question: "How can I join World Mobile?",
      answer:
        "You can join World Mobile by becoming an AirNode operator, hosting an AirNode, staking WMTx, operating an EarthNode, or participating as a Hex Guardian. You can also join the World Mobile Club to collaborate with the community."
    },
    {
      question: "What is the Vault?",
      answer:
        "The Vault is a secure, non-custodial tool where users can manage nodes, track rewards, and stake WMTx. It ensures complete control over your assets and provides a centralized dashboard for all operations."
    },
    {
      question: "How can I earn rewards?",
      answer:
        "Earn rewards by operating nodes (EarthNodes or AirNodes), hosting AirNodes, staking WMTx, or contributing to network growth. Rewards are distributed based on performance, usage, and participation."
    },
    {
      question: "What makes World Mobile unique?",
      answer:
        "World Mobile is unique because it combines blockchain, decentralized ownership, and cost-effective infrastructure to deliver scalable and affordable connectivity, unlike traditional telecom providers."
    },
    {
      question: "What is the World Mobile App?",
      answer:
        "The World Mobile App lets users manage data bundles, interact with web3 assets, and scan their surroundings for points to earn rewards. It's designed to empower users with a seamless and connected digital experience."
    },
    {
      question: "What is the World Mobile Club?",
      answer:
        "The World Mobile Club is the community hub for sharing updates, collaborating, and celebrating milestones. It's a space for members to engage with the ecosystem and drive the network's mission forward."
    }
  ];

  // Structured Data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto mt-16 text-white">
        <h2 className="text-4xl font-extrabold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-[hsl(277.79deg_78.75%_17.79%_/_19%)] rounded-lg shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-bold">{faq.question}</div>
              <div className="collapse-content text-gray-300">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQSection;
