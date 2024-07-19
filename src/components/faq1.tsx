"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the second question...",
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the third question...",
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the fourth question...",
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the fifth question...",
  },
  {
    question: "What differentiates Kalculate from other attendance calculators",
    answer: "Answer for the sixth question...",
  },
];

const FAQComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" p-6 py-4 px-20 rounded-lg">
      <div>
        <h1 className="text-6xl font-bold text-center mb-2">
          Frequently asked
        </h1>
        <h2 className="text-6xl font-semibold text-center mb-20">
          <span className="gradient-text">Questions</span>
        </h2>
      </div>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
              openIndex === index ? "text-gray-600" : "text-violet-600"
            }`}
            onClick={() => toggleAnswer(index)}
          >
            <span
              className={`${
                openIndex === index ? "text-[#9e7fdf]" : "text-gray-500"
              }`}
            >
              {faq.question}
            </span>
            <span
              className={`text-white text-2xl transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            >
              {openIndex === index ? (
                <svg
                  width="56"
                  height="32"
                  viewBox="0 0 56 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0H40C48.8366 0 56 7.16344 56 16C56 24.8366 48.8366 32 40 32H16C7.16344 32 0 24.8366 0 16Z"
                    fill="#A47DE5"
                  />
                  <path
                    d="M37 16C37 16.1989 36.921 16.3897 36.7803 16.5303C36.6397 16.671 36.4489 16.75 36.25 16.75H19.75C19.5511 16.75 19.3603 16.671 19.2197 16.5303C19.079 16.3897 19 16.1989 19 16C19 15.8011 19.079 15.6103 19.2197 15.4697C19.3603 15.329 19.5511 15.25 19.75 15.25H36.25C36.4489 15.25 36.6397 15.329 36.7803 15.4697C36.921 15.6103 37 15.8011 37 16Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="56"
                  height="32"
                  viewBox="0 0 56 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0H40C48.8366 0 56 7.16344 56 16C56 24.8366 48.8366 32 40 32H16C7.16344 32 0 24.8366 0 16Z"
                    fill="#EDEFF0"
                  />
                  <path
                    d="M37 16C37 16.1989 36.921 16.3897 36.7803 16.5303C36.6397 16.671 36.4489 16.75 36.25 16.75H28.75V24.25C28.75 24.4489 28.671 24.6397 28.5303 24.7803C28.3897 24.921 28.1989 25 28 25C27.8011 25 27.6103 24.921 27.4697 24.7803C27.329 24.6397 27.25 24.4489 27.25 24.25V16.75H19.75C19.5511 16.75 19.3603 16.671 19.2197 16.5303C19.079 16.3897 19 16.1989 19 16C19 15.8011 19.079 15.6103 19.2197 15.4697C19.3603 15.329 19.5511 15.25 19.75 15.25H27.25V7.75C27.25 7.55109 27.329 7.36032 27.4697 7.21967C27.6103 7.07902 27.8011 7 28 7C28.1989 7 28.3897 7.07902 28.5303 7.21967C28.671 7.36032 28.75 7.55109 28.75 7.75V15.25H36.25C36.4489 15.25 36.6397 15.329 36.7803 15.4697C36.921 15.6103 37 15.8011 37 16Z"
                    fill="#7E7E7E"
                  />
                </svg>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-2 p-4 rounded-lg text-white">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
