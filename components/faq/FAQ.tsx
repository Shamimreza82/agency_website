"use client";
import { useState } from "react";
import AnimatedTitle from "../sheared/AnimatedTitle";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web design, web development, mobile app development, and digital marketing.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website depends on the complexity of the project. A simple website can take 2-4 weeks, while a more complex site can take 2-3 months.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we offer website maintenance packages to ensure your site remains up-to-date, secure, and functions smoothly.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "Absolutely! We have a team of SEO experts who can help improve your website's ranking on search engines like Google.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lg:w-5xl mx-auto lg:my-20">
      <div className="container px-6 py-12 mx-auto">
        <AnimatedTitle className="">
           <span className="lg:text-5xl text-2xl  font-semibold text-center text-primary ">
          Frequently Asked Questions
        </span>
        </AnimatedTitle>


        <div className="mt-8 space-y-4 lg:mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg dark:bg-gray-900"
            >
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleFAQ(index)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  {faq.question}
                </h1>

                <span className="text-gray-400 bg-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 transition-transform duration-300 transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
