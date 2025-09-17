import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "What is PureCheckup.com?",
    answer: (
      <>
        PureCheckup is a next-generation healthtech startup dedicated to
        transforming surgical care in India. As a patient-first platform, we
        connect individuals with top-rated hospitals and expert surgeons to
        deliver safe, minimally invasive, and insurance-covered surgeries.
      </>
    ),
  },
  {
    question: "What types of conditions and surgeries does PureCheckup offer?",
    answer: (
      <ul className="list-disc list-inside space-y-1 pl-4">
        <li>
          <strong>Proctology:</strong> Laser treatment for piles, fissures,
          fistula, and pilonidal sinus
        </li>
        <li>
          <strong>Laparoscopy:</strong> Gallbladder removal, hernia repair,
          appendix surgery
        </li>
        <li>
          <strong>Urology:</strong> Kidney stone removal, prostate surgery,
          circumcision
        </li>
        <li>
          <strong>Gynecology:</strong> PCOS, ovarian cysts, fibroids,
          hysterectomy
        </li>
        <li>
          <strong>Aesthetics:</strong> Scar revision, skin tightening, body
          contouring
        </li>
        <li>
          <strong>Plastic Surgery:</strong> Cosmetic and reconstructive
          procedures like rhinoplasty and liposuction
        </li>
      </ul>
    ),
  },
  {
    question: "Where is PureCheckup available?",
    answer:
      "We currently serve Jaipur, Ahmedabad, Indore, Vadodara, Bhopal, and other cities — with more launching soon.",
  },
  {
    question: "Are the surgeries covered under insurance?",
    answer: (
      <>
        Yes. Most surgeries are insurance-covered. We handle:
        <ul className="list-disc list-inside pl-4 mt-1">
          <li>Pre-authorization</li>
          <li>Documentation</li>
          <li>Cashless approvals</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I book a free consultation with PureCheckup?",
    answer:
      "Simply fill out the form on our website or call our helpline. A Care Coordinator will assist you immediately.",
  },
  {
    question: "How fast is the recovery after surgery?",
    answer:
      "Most patients recover in 2–5 days depending on the procedure — thanks to minimally invasive techniques.",
  },
  {
    question: "What post-surgery care will I receive?",
    answer: (
      <ul className="list-disc list-inside pl-4">
        <li>Free follow-ups</li>
        <li>Personalized diet & recovery plans</li>
        <li>Regular healing check-ins</li>
      </ul>
    ),
  },
  {
    question: "Who will support me throughout the process?",
    answer:
      "Your dedicated Care Coordinator helps from the first call to final recovery, managing doctors, insurance, transport, and follow-ups.",
  },
  {
    question: "Is my health data secure with PureCheckup?",
    answer:
      "Yes, we follow strict healthcare privacy protocols. Your information is 100% safe and confidential.",
  },
  {
    question: "What makes PureCheckup different from other healthcare providers?",
    answer: (
      <ul className="list-disc list-inside pl-4">
        <li>
          <strong>Startup Innovation:</strong> Modern, tech-first patient
          experience
        </li>
        <li>
          <strong>Top Hospital Partners:</strong> NABH-accredited institutions
        </li>
        <li>
          <strong>Advanced Surgery:</strong> Laser/laparoscopic procedures for
          quicker recovery
        </li>
        <li>
          <strong>Insurance Assistance:</strong> We handle everything,
          end-to-end
        </li>
        <li>
          <strong>Dedicated Coordinators:</strong> Personal support at every step
        </li>
        <li>
          <strong>Transparency:</strong> No hidden costs, full clarity
        </li>
        <li>
          <strong>Multi-City Reach:</strong> Serving 10+ cities and growing
        </li>
      </ul>
    ),
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Most Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-xl"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 font-semibold text-gray-800 text-left"
              >
                <span>{faq.question}</span>
                <span className="text-[#3E85D9] text-sm">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* Answer with animation */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-600 border-t bg-gray-50"
                  >
                    <div className="pt-4">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
