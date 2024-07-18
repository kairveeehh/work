"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the second question..."
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the third question..."
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the fourth question..."
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the fifth question..."
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the sixth question..."
  },
];

const FAQComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 p-6 py-4 px-20 rounded-lg">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
              openIndex === index ? 'bg-purple-600' : 'bg-gray-800'
            }`}
            onClick={() => toggleAnswer(index)}
          >
            <span className="text-white">{faq.question}</span>
            <span className={`text-white text-2xl transition-transform ${
              openIndex === index ? 'transform rotate-180' : ''
            }`}>
              &#9662;
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-2 p-4 bg-gray-800 rounded-lg text-white">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
