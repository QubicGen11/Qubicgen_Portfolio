import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Is technical support available if I encounter issues with the online platform?',
    answer: 'Yes, our technical support team is available 24/7 to assist you with any issues.',
  },
  {
    id: 2,
    question: 'Are there discussion forums or community platforms for students?',
    answer: 'Yes, we offer dedicated discussion forums where students can connect and collaborate.',
  },
  {
    id: 3,
    question: 'Is there a pre-registration option available?',
    answer: 'Yes, you can pre-register to secure your seat for the upcoming sessions.',
  },
  {
    id: 4,
    question: 'What is the refund policy?',
    answer: 'Our refund policy allows you to request a refund within the first two weeks of the course.',
  },
  {
    id: 5,
    question: 'How much time do I need to dedicate to the course each week?',
    answer: 'We recommend dedicating at least 6-8 hours per week to complete the course successfully.',
  },
  {
    id: 6,
    question: 'What are the timings of the classes?',
    answer: 'Class timings are flexible and available as per your schedule preferences.',
  },
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-[#1a1a1a] py-16 px-6 font-sans">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">FAQ's</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#242424] rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-white hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500]  transition"
              >
                <span>{faq.question}</span>
                <span className="text-gray-300">
                  {openFaq === faq.id ? '-' : '+'}
                </span>
              </button>
              {openFaq === faq.id && (
                <div className="px-6 py-4 text-gray-300 bg-[#1a1a1a]">
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
