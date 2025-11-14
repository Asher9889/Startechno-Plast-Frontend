import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
const faqData = [
  {
    q: "What is Star Technoplast known for?",
    a: "Star Technoplast specializes in precision-engineered plastic products and customized manufacturing solutions for diverse industrial applications.",
  },
  {
    q: "Where is Star Technoplast located?",
    a: "Our corporate office and manufacturing facility are located at RR-207, Sector 38, Sonipat (Rai) – 131029, Haryana, India.",
  },
  {
    q: "Which industries does Star Technoplast serve?",
    a: "We serve multiple industries including automotive, electrical, home appliances, FMCG, healthcare, and industrial equipment sectors.",
  },
  {
    q: "What manufacturing capabilities do you offer?",
    a: "We provide end-to-end plastic manufacturing solutions — from design and prototyping to moulding, assembly, and quality assurance.",
  },
  {
    q: "Does Star Technoplast provide custom plastic moulding solutions?",
    a: "Yes, we specialize in custom moulding services tailored to meet specific client requirements and product design needs.",
  },
  {
    q: "What quality standards does your manufacturing follow?",
    a: "Our processes align with international quality standards, ensuring precision, durability, and consistency across every production batch.",
  },
  {
    q: "Can Star Technoplast handle bulk and large-scale orders?",
    a: "Absolutely. Our advanced facility and scalable infrastructure allow us to manage both small and high-volume production efficiently.",
  },
  {
    q: "What makes Star Technoplast different from other manufacturers?",
    a: "Our customer-first approach, cutting-edge machinery, skilled workforce, and strict quality control distinguish us from competitors.",
  },
  {
    q: "How long has Star Technoplast been in the industry?",
    a: "Star Technoplast has been delivering trusted plastic manufacturing solutions for several years, combining innovation with reliability.",
  },
  {
    q: "How can I collaborate with Star Technoplast?",
    a: "You can connect with us through our contact page or call us directly at +91 85273 74077 to discuss your project requirements and request a quotation.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-16 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold mb-6 text-center"
      >
        FAQs
      </motion.h2>

      <div className="space-y-4">
        {faqData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="border rounded-xl p-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggle(i)}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-800 text-sm md:text-base">
                {item.q}
              </h3>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {openIndex === i && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 mt-3 text-sm md:text-base"
              >
                {item.a}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
