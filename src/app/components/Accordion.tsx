"use client";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title:
        "DO YOU ONLY PERFORM COSMETIC DENTISTRY, OR DO YOU PERFORM GENERAL DENTISTRY AS WELL??",
      content:
        "An accordion is a vertically stacked list of items where each item can be expanded to reveal hidden content.",
    },
    {
      title:
        "HOW MANY OFFICE VISITS DOES IT TAKE TO TRANSFORM MY SMILE WITH VENEERS?",
      content:
        "Accordions help organize content and save space, letting users expand only what they need.",
    },
    {
      title: "WHAT DETERMINES THE COLOR AND SHAPE OF THE VENEERS WE CHOOSE?",
      content:
        "Yes! With Tailwind CSS and React state, it works well on all screen sizes.",
    },
    {
      title:
        "DO YOU ONLY PERFORM COSMETIC DENTISTRY, OR DO YOU PERFORM GENERAL DENTISTRY AS WELL??",
      content:
        "An accordion is a vertically stacked list of items where each item can be expanded to reveal hidden content.",
    },
    {
      title:
        "HOW MANY OFFICE VISITS DOES IT TAKE TO TRANSFORM MY SMILE WITH VENEERS?",
      content:
        "Accordions help organize content and save space, letting users expand only what they need.",
    },
    {
      title: "WHAT DETERMINES THE COLOR AND SHAPE OF THE VENEERS WE CHOOSE?",
      content:
        "Yes! With Tailwind CSS and React state, it works well on all screen sizes.",
    },
  ];

  return (
    <div className="mx-auto space-y-2">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full flex font-outfit font-light tracking-widest justify-between items-center py-4 text-left border-b-3 border-[var(--foreground2)]  bg-[var(--background2)] "
          >
            {item.title}
            <span className="ml-5">
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-600 ${
              openIndex === index ? "max-h-40 " : "max-h-0 "
            }  text-gray-700`}
          >
            <p className="py-4   text-gray-700  ">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
