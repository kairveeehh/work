import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What are we?",
    answer:
      "A startup trying to make use of blockchain networks for the freelancer and client interactions.",
    link: "https://google.com",
  },
  {
    question: "Why us?",
    answer:
      "We Make it really easy and convenient for both the client and the freelancer to start and build a trusted system for trade.",
  },
  {
    question: "Do you take commisions?",
    answer:
      "We only take commisions in the form of Gas fees and our rating based system makes it decreases the Gas fees for future clients.",
  },
  {
    question: "What blockchain are you based upon?",
    answer:
      "We are based upon the stellar blockchain with type safety of Rust.",
  },
];

const FAQ = () => {
  return (
    <section className="flex justify-center items-center min-h-screen mb-36 mt-0">
      <div className="container bg-gray-900 text-gray-200 p-6 rounded-md">
        <h3 className="!mt-0 text-3xl justify-center text-gray-100">
          Frequently Asked Questions
        </h3>
        <h3 className="text-gray-400">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h3>
        <div className="mt-4 md:mt-8 not-prose flex flex-col gap-4">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="hover:bg-gray-800 transition-all border px-4 bg-gray-700 rounded-md"
              >
                <AccordionTrigger className="text-left text-gray-100 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="text-[#00b894] opacity-60 w-full mt-2 hover:opacity-100 transition-all flex items-center"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
