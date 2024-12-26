import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What Are the Requirements to Become an AirNode Host with World Mobile?",
      answer: "To become an AirNode Host, you need access to a rooftop in an eligible location, a reliable power supply, and a business-grade internet connection. You may also need to provide maintenance access to the AirNode if required."
    },
    {
      question: "Can You Explain the Maintenance Requirements and Schedule?",
      answer: "AirNodes are low-maintenance devices. They require a stable power supply and internet connection. Regular maintenance is unnecessary unless there is damage caused by external factors."
    },
    {
      question: "Does the Usage Data Remain Private?",
      answer: "Yes, World Mobile prioritizes data privacy. Operators can only view traffic volume on their dashboard. Your data is encrypted and cannot be accessed or decrypted by operators."
    },
    {
      question: "Will Hosting an AirNode Slow Down My Home Internet?",
      answer: "Any slowdown will be minimal and depends on your internet speed. With a robust connection, hosting an AirNode should not noticeably impact your internet performance."
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
