import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Scan for Points?",
      answer:
        "Scan for Points is a gamified feature that incentivizes World Mobile users to contribute to the network's development. By scanning with your phone, you help identify areas with weak coverage and potential AirNode locations.",
    },
    {
      question: "How does Scan for Points work?",
      answer:
        "Using the World Mobile Android app, your phone connects to the nearest network to collect data such as ping, download, and upload speeds. This data ensures the network expands where connectivity is most needed.",
    },
    {
      question: "Who can participate in Scan for Points?",
      answer:
        "Anyone with an Android device can participate in Scan for Points. Scanning helps improve the network while earning rewards.",
    },
    {
      question: "What rewards can I earn?",
      answer:
        "Participants earn loyalty points that can be redeemed for network benefits, discounts or value-added services like VPN features and DID services.",
    },
    {
      question: "Where can I scan?",
      answer:
        "You can scan anywhere in the world. Your contributions help map the network globally and improve connectivity in underserved regions.",
    },
    {
      question: "How do I read the map?",
      answer:
        "Fully scanned hexes are shaded yellow and display a check mark. Grey hexes mean all points have been claimed, while green hexes indicate available points to earn.",
    },
    {
      question: "How often should I scan?",
      answer:
        "Frequent scanning provides more valuable data. Walking is the most effective method for thorough scans, as it ensures you capture all hexes in your area.",
    },
    {
      question: "Can I scan while driving or using public transportation?",
      answer:
        "Yes, but walking ensures more accurate scans as you’re less likely to miss hexes due to speed. Driving and other fast travel methods may result in gaps in your scans.",
    },
    {
      question: "How long does it take to receive rewards?",
      answer:
        "Points are typically awarded within 48 hours of scanning.",
    },
    {
      question: "Is the Scan for Points app available on iOS?",
      answer:
        "Currently, the app is only available for Android devices. Stay tuned for updates on iOS compatibility.",
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
