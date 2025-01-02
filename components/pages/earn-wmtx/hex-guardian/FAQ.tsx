import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the Hex Guardian Program?",
      answer:
        "The Hex Guardian Program allows individuals to own and manage Hex territories, optimize AirNode infrastructure, and contribute to the expansion of decentralized telecom services.",
    },
    {
      question: "What is a Hex?",
      answer:
        "A Hex is a coverage area represented as a hexagon on the World Mobile network map. It defines territories for network planning, ensuring precise connectivity management.",
    },
    {
      question: "Who can become a Hex Guardian?",
      answer:
        "Anyone can become a Hex Guardian by acquiring a Hex NFT (HNFT). Ownership of an HNFT empowers you to manage AirNode operations and earn rewards while expanding the network.",
    },
    {
      question: "What are the responsibilities of a Hex Guardian?",
      answer:
        "Hex Guardians oversee AirNode operations, promote World Mobile subscriptions, and ensure optimal network coverage and reliability within their designated Hex.",
    },
    {
      question: "What is an HNFT?",
      answer:
        "An HNFT, or Hex NFT, represents ownership of a Hex on the World Mobile network. It grants the holder the right to manage AirNode infrastructure within their Hex and earn rewards.",
    },
    {
      question: "How does the Hex Guardian Program benefit the community?",
      answer:
        "The program enables community-driven telecom infrastructure ownership - aka your own telco franchise. It improves connectivity, creates local economic opportunities, and fosters collaboration among Hex Guardians, operators, and hosts.",
    },
    {
      question: "How can I prepare for the Hex Guardian Program?",
      answer:
        "Stay informed through World Mobile's updates and community forums. Ensure you understand the responsibilities of Hex ownership and consider the investment required for HNFT acquisition and AirNode operations.",
    },
    {
      question: "What support will Hex Guardians receive?",
      answer:
        "World Mobile will provide resources such as technical guides, site planning assistance, and access to a community of Hex Guardians on The Club for collaborative learning and support.",
    },
    {
      question: "Can I partner with others to manage a Hex?",
      answer:
        "Yes, Hex Guardians are encouraged to collaborate with operators, hosts, and community members to optimize their Hex and ensure its success.",
    },
  ];

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
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-[rgba(55,10,81,0.19)] rounded-lg shadow-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-bold">
                {faq.question}
              </div>
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
