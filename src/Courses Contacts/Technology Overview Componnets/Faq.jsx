import React, { useState } from 'react';

const FaqSection = ({ faqs }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-[#1a1a1a] py-16 px-6 font-sans">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">FAQs</h2>
        <div className="space-y-4">
          {faqs && faqs.map((faq, index) => (
            <div key={index} className="bg-[#242424] rounded-lg shadow-md">
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-white focus:outline-none hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] rounded-lg"
              >
                <span>{faq.question}</span>
                <span className="text-gray-300">
                  {expandedId === index ? '-' : '+'}
                </span>
              </button>
              {expandedId === index && (
                <div className="px-6 py-4 text-gray-300 text-lg bg-[#1a1a1a]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
