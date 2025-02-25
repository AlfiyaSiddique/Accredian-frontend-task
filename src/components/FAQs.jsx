import { useState } from "react";

const faqs = [
  {
    question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer:
      "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "What is the minimum system configuration required?",
    answer: "The minimum system requirements are 8GB RAM, Intel i5 processor, and a stable internet connection.",
  },
];

const tabs = ["Eligibility", "How To Use?", "Terms & Conditions"];

function FAQs() {
  const [activeTab, setActiveTab] = useState("Eligibility");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>

      <div className=" w-[65vw] mx-auto flex sm:flex-row gap-2 justify-center mb-6">

      <div className="flex flex-col">
      {tabs.map((tab) => (
          <button
            key={tab}
            className={`m-2 cursor-pointer px-6 py-4 text-sm rounded-md transition w-[200px] ${
              activeTab === tab
                ? "text-[#1A73E8] font-medium  shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                : "bg-white border-gray-400 shadow-lg border-4 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
       

      <div className="p-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className="flex justify-between w-full text-left py-4 text-blue-600 font-medium hover:underline"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="text-gray-700 p-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
      </div>


   
    </div>
  );
}

export default  FAQs
