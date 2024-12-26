import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How Do I Qualify as an AirNode Operator?",
      answer: (
        <>
          <strong>Financial Requirements:</strong> You must have the ability to make upfront payments for your chosen AirNode packages. The investment varies by model, ranging from $62.99 for a Spark AirNode to $100,000 for a Titan AirNode.<br />
          <strong>Technical Experience:</strong> No prior technical experience is required to participate in World Mobile&apos;s sharing economy. The network provides support and guidance for setup and maintenance.
        </>
      )
    },
    {
      question: "How Many AirNodes Can I Purchase?",
      answer: "You can buy up to 10 AirNodes in a single transaction on the World Mobile network. However, there is no total limit on AirNode ownership - individuals and organizations can own as many AirNodes as they wish through multiple transactions."
    },
    {
      question: "What's Included in AirNode Packages?",
      answer: "Each AirNode package comes complete with all necessary equipment for setup. The first year's hex and AirNode fees are included, along with required licenses and operating software."
    },
    {
      question: "What Payment Methods Are Accepted?",
      answer: "World Mobile accepts card payments, Crypto.com, and bank transfers for AirNode purchases. Bank transfers require a non-refundable reservation fee and typically process in 5-7 business days."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-16 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-[hsl(277.79deg_78.75%_17.79%_/_19%)] rounded-lg shadow-lg">
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
  );
};

export default FAQSection;
