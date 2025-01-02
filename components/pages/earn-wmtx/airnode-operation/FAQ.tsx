import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What Are AirNodes?",
      answer: "AirNodes are wireless access points forming the access layer of the World Mobile network. They provide last-mile connectivity for voice, text, and data services, connecting users to the network. AirNodes communicate with EarthNodes and AetherNodes using the Internode API to manage user authentication, ensure privacy, and facilitate service delivery."
    },
    {
      question: "Why Should I Become an AirNode Operator?",
      answer: "Becoming an AirNode Operator allows you to earn rewards while contributing to a decentralized network that brings connectivity to underserved areas. Operators play a vital role in bridging the digital divide and fostering community development."
    },
    {
      question: "How Do I Qualify as an AirNode Operator?",
      answer: "To qualify as an AirNode Operator, you need the financial capability to purchase an AirNode, the willingness to monitor and maintain the device operational, and basic technical skills to manage remote operations. No prior experience is necessary as training and support are provided."
    },
    {
      question: "What Are the Available AirNode Models?",
      answer: "AirNode models include options for small, medium, and large-scale deployments. For example, Link AirNodes are ideal for small coverage areas, while Titan AirNodes provide long-range connectivity for larger areas. Each model varies in range, power consumption, and setup requirements."
    },
    {
      question: "How Many AirNodes Can I Purchase?",
      answer: "There is no total limit, allowing individuals and organizations to own multiple AirNodes."
    },
    {
      question: "What Do AirNode Packages Include?",
      answer: "AirNode packages come with all necessary hardware, software, and licenses for setup. The first year's hex and AirNode fees are included, ensuring a seamless start to your operations."
    },
    {
      question: "What Are the Steps to Becoming an AirNode Operator?",
      answer: "1. Register on the World Mobile platform.\n2. Choose your AirNode model.\n3. Find a Host, finalize terms, and complete the purchase.\n4. Activate it post-purchase.\n5. Set up your dashboard for remote management.\n6. Begin monitoring, managing, and maintaining your AirNode."
    },
    {
      question: "How Are Rewards Calculated for AirNode Operators?",
      answer: "Rewards are based on usage (data, texts, and calls processed), quality of service (uptime and user ratings), and a share of the revenue generated. Operators receive payments in fiat or cryptocurrency as per local regulations."
    },
    {
      question: "How Do I Monitor and Manage My AirNode?",
      answer: "Operators can monitor their AirNodes in real-time using the online dashboard. The dashboard provides performance metrics, alerts for issues, and tools for remote troubleshooting and configuration adjustments."
    },
    {
      question: "What Payment Methods Are Accepted for AirNode Purchases?",
      answer: "World Mobile accepts card payments, Crypto.com, and bank transfers."
    },
    {
      question: "Are AirNodes Difficult to Maintain?",
      answer: "AirNodes are designed for minimal maintenance. Operators ensure stable power, secure installation, and reliable connectivity. Troubleshooting guides and support are available for resolving issues."
    },
    {
      question: "What Support Is Available for AirNode Operators?",
      answer: "World Mobile offers comprehensive support, including technical documentation, training modules, and a dedicated support team. Operators can also access The Club community forums for insights and peer-to-peer assistance."
    }
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
        text: faq.answer
      }
    }))
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
