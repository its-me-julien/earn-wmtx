import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What Are EarthNodes?",
      answer:
        "EarthNodes are the core of the World Mobile network, connecting all other node types. They process transactions on the blockchain, provide decentralized identity (DID) services, and enable secure, transparent communication between nodes.",
    },
    {
      question: "What Is an ENNFT?",
      answer:
        "ENNFT stands for EarthNode Non-Fungible Token, which represents ownership of an EarthNode. It allows operators to participate in the decentralized World Mobile ecosystem. Only 1,000 ENNFTs exist, making them scarce and valuable assets. Ownership of an ENNFT enables you to run an EarthNode, earn rewards, and contribute to the network's growth.",
    },
    {
      question: "How Do EarthNodes Support Decentralized Identity (DID)?",
      answer:
        "EarthNodes feature a DID module that manages user identity and authentication securely. This module ensures that user data remains private and encrypted, enabling features such as credential management and decentralized identity services. Users retain full control over their data, fostering trust and data sovereignty.",
    },
    {
      question: "What Are the Hardware Requirements to Operate an EarthNode?",
      answer:
        "To operate an EarthNode efficiently, you need robust hardware with stable internet connectivity. While specific requirements vary by module, a reliable processor, sufficient RAM, and ample storage are necessary to handle blockchain processing, telecom functions, and DID services.",
    },
    {
      question: "How Are EarthNode Operators Rewarded?",
      answer:
        "EarthNode operators earn rewards in $WMTx tokens based on the services they provide, such as transaction processing, data validation, and telecom routing. Rewards are proportional to network activity, the amount of $WMTx staked, and the quality of service delivered. Earnings are distributed automatically through smart contracts.",
    },
    {
      question: "Can I Sell or Transfer My EarthNode?",
      answer:
        "Yes, ENNFTs can be sold or transferred on digital marketplaces. Ownership is recorded securely on the blockchain, ensuring transparency and security. ENNFTs maintain a minimum value equivalent to 100,000 $WMTx, providing liquidity and stability for operators.",
    },
    {
      question: "What Role Do EarthNodes Play in the World Mobile Ecosystem?",
      answer:
        "EarthNodes validate transactions, manage decentralized identities, and ensure data integrity within the network. They act as the central processing units for the World Mobile Chain, linking AirNodes, AetherNodes, and other components. EarthNodes enable services like call routing, SMS delivery, and blockchain integration.",
    },
    {
      question: "What Is the Internode API?",
      answer:
        "The Internode API is the communication bridge between all nodes and subsystems in the World Mobile network. It facilitates tasks such as user registration, financial transactions, and service requests. The API also handles telecommunications events like call setup and QoS monitoring, ensuring seamless operation across the decentralized network.",
    },
    {
      question: "How Does Proximity Impact EarthNode Performance?",
      answer:
        "While EarthNodes can operate from anywhere, their proximity to other network nodes impacts performance. The telecom module routes traffic based on proximity, improving efficiency and quality of service. Operators located closer to active network areas may process more traffic and earn higher rewards.",
    },
    {
      question: "What Support Is Available for EarthNode Operators?",
      answer:
        "World Mobile provides technical documentation and expert guidance to help EarthNode operators. Operators can also access community forums through The Club, along with training materials and troubleshooting guides to ensure smooth and efficient node management.",
    },    
    {
      question: "What Are the Modules Within an EarthNode?",
      answer:
        "EarthNodes consist of several modules: the blockchain module for transaction validation, the DID module for identity management, and the telecom module for routing and service management. Operators can choose which modules to run based on their hardware and service goals.",
    },
    {
      question: "How Does Quality of Service (QoS) Affect EarthNode Rewards?",
      answer:
        "The network employs a Node Quality Grading System to evaluate EarthNode performance. Factors like uptime, latency, packet loss, and user ratings determine a node's grade. Nodes with higher grades are prioritized for traffic routing and earn greater rewards.",
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
              className="collapse collapse-arrow bg-[hsl(277.79deg_78.75%_17.79%_/_19%)] rounded-lg shadow-lg"
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
