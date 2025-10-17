"use client";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

type AccordionProps = {
  questions: {
    question: string;
    answer: string;
  }[];
};

export default function Accordion({ questions }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto space-y-2">
      {questions.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full flex font-outfit font-light uppercase tracking-widest justify-between items-center py-4 text-left border-b-3 border-[var(--foreground2)]  bg-[var(--background2)] "
          >
            {item.question}
            <span className="ml-5">
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-600 ${
              openIndex === index ? "max-h-150 " : "max-h-0 "
            }  text-gray-700`}
          >
            <p className="py-4   text-gray-700  ">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
