import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What Are AirNodes?",
      answer:
        "AirNodes are wireless access points forming the access layer of the World Mobile network. They provide last-mile connectivity for voice, text, and data services. AirNodes connect users to the network by communicating with EarthNodes and AetherNodes through the Internode API, ensuring user authentication and privacy.",
    },
    {
      question: "Why Should I Host an AirNode?",
      answer:
        "Hosting an AirNode allows you to earn rewards while playing a vital role in expanding reliable internet connectivity to underserved areas. By hosting, you help bridge the digital divide, foster community development, and earn revenue based on network usage and quality of service.",
    },
    {
      question: "What Do I Need to Host an AirNode?",
      answer:
        "To host an AirNode, you need: a suitable location such as a rooftop or an open area to maximize coverage, reliable access to power and internet, and the ability to provide occasional maintenance support to the operator.",
    },
    {
      question: "What Are the Location Requirements for Hosting an AirNode?",
      answer:
        "To host an AirNode, your location must meet these criteria: access to a consistent power supply, a strategic position to maximize coverage (e.g., rooftops or open areas), and minimal obstructions for optimal network performance.",
    },
    {
      question: "How Are Rewards Calculated for AirNode Hosts?",
      answer:
        "Rewards for hosting an AirNode depend on three factors: usage (volume of data, texts, and calls processed), quality of service (uptime, reliability, and user ratings), and a revenue share of 15% of the net revenue generated by the AirNode. Rewards can be claimed in fiat or cryptocurrency, depending on local regulations.",
    },
    {
      question: "How Do I Start Hosting an AirNode?",
      answer:
        "Getting started involves the following steps: register your interest through the World Mobile AirNode sales platform, complete the verification process, create your Host Profile with details about you and your location, facilitate the installation of the AirNode with World Mobile's support, and ensure the AirNode operates efficiently by assisting with maintenance as needed.",
    },
    {
      question: "What Are the Responsibilities of an AirNode Host?",
      answer:
        "As an AirNode Host, your responsibilities include providing a suitable location for the AirNode, ensuring power and internet availability, and supporting operators with occasional maintenance access. You do not need to manage network usage or operations directly.",
    },
    {
      question: "Are AirNodes Difficult to Maintain?",
      answer:
        "No, AirNodes are designed for low maintenance. As a host, you only need to ensure the AirNode has a stable power supply, is securely installed, and is operational. Troubleshooting guides and support services are available for resolving common issues.",
    },
    {
      question: "Will Hosting an AirNode Affect My Internet Speed?",
      answer:
        "Hosting an AirNode has minimal impact on your internet speed if you have a reliable, high-speed connection. The AirNode's bandwidth usage is optimized to ensure smooth operation for both your internet and the AirNode.",
    },
    {
      question: "What Support Is Available for AirNode Hosts?",
      answer:
        "World Mobile provides comprehensive support for AirNode Hosts, including setup assistance, maintenance guidance, and a dedicated support team for troubleshooting issues. You'll also have access to The Club community forums for sharing insights and learning from other Hosts.",
    },
    {
      question: "What Tax Considerations Should I Be Aware Of?",
      answer:
        "World Mobile does not offer tax advice. Hosts are encouraged to consult a local tax professional to understand their obligations based on earnings from AirNode hosting.",
    },
  ];
  

  // Simplified Structured Data for FAQs
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