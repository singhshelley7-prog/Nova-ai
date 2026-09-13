import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "What is NOVA?",
      answer:
        "NOVA is a productivity platform that helps teams manage projects, tasks and everyday work from one place.",
    },
    {
      question: "Can I try NOVA for free?",
      answer:
        "Yes. You can start with the free plan and upgrade later if you need more features.",
    },
    {
      question: "Can I invite my team?",
      answer:
        "Yes, you can invite your team members and work together on projects and tasks.",
    },
    {
      question: "Does NOVA support task automation?",
      answer:
        "Yes. NOVA can automate repetitive tasks and workflows so your team can save time.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes. You can upgrade or change your plan whenever your team's requirements change.",
    },
  ];

  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="bg-[#0D3975] px-6 py-20">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">

          {questions.map((item, index) => (
            <div
              key={item.question}
              className="bg-[#102A4A] border border-white/10 rounded-lg"
            >

              <button
                onClick={() => handleClick(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium">
                  {item.question}
                </span>

                <span className="text-cyan-400 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-gray-400 leading-6">
                  {item.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;