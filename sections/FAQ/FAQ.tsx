import { AnimatePresence, motion } from "framer-motion";
import { JSX, useState } from "react";

export const FAQ = (): JSX.Element => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in building SaaS platforms, custom websites, and optimizing web applications for performance and scalability.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Timelines vary depending on the project scope, but I aim to deliver most projects within 4-8 weeks.",
    },
    {
      question: "Do you work with startups or established businesses?",
      answer:
        "I work with both! Whether you're a startup looking to launch your MVP or an established business needing a custom solution, I can help.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply use the contact form above to reach out with your project details, and I'll get back to you within 24-48 hours.",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-24 text-[#f8fafc]">
      <motion.div
        className="max-w-4xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-12 text-[#f8fafc]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="border bg-[#2d3748] border-[#4B5563] rounded-lg p-4 hover:shadow-lg hover:cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-lg font-medium text-[#38bdf8]">
                {faq.question}
              </h3>
              <AnimatePresence>
                {expanded === index && (
                  <motion.p
                    className="text-[#cbd5e1] mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
