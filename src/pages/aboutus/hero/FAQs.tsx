import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "What types of plastic products does Star Technoplast manufacture?",
    a: "Star Technoplast specializes in precision-engineered plastic components, injection-molded parts, and customized plastic solutions for various industries, including automotive, electrical, FMCG, and healthcare.",
  },
  {
    q: "How can I get a quotation for my custom plastic product requirement?",
    a: "You can request a quotation by filling out our contact form on this page or by emailing your detailed requirements to mukesh@startechnoplast.com. Our team will respond with a quote within 24 working hours.",
  },
  {
    q: "Does Star Technoplast offer bulk or OEM manufacturing?",
    a: "Yes, we provide OEM and bulk manufacturing services with customized design, tooling, and precision molding solutions tailored to your project needs.",
  },
  {
    q: "Where is Star Technoplast located?",
    a: "Our corporate office and manufacturing facility are located at RR-207, Sector 38, Sonipat (Rai) – 131029, Haryana, India. You can visit us by appointment or find us easily on Google Maps.",
  },
  {
    q: "How can I contact Star Technoplast for urgent queries?",
    a: "For urgent support or order-related queries, you can directly call or WhatsApp us at +91 85273 74077 for instant assistance from our support team.",
  },
  {
    q: "Does Star Technoplast handle product design and prototyping?",
    a: "Absolutely. We offer end-to-end solutions, including CAD design, mold development, prototyping, and final production, ensuring complete precision and quality.",
  },
  {
    q: "What industries does Star Technoplast serve?",
    a: "We proudly serve multiple industries such as automotive, electronics, electrical, home appliances, medical devices, and packaging, delivering tailor-made plastic solutions for each sector.",
  },
  {
    q: "How long does it take to deliver an order after confirmation?",
    a: "Delivery timelines depend on the product type, complexity, and quantity, but most orders are completed and dispatched within 2–4 weeks after design approval and payment confirmation.",
  },
  {
    q: "Can I visit the manufacturing unit for a project discussion?",
    a: "Yes, clients are welcome to visit our manufacturing facility in Sonipat for project discussions or factory audits. Please schedule your visit in advance through our contact form or by phone.",
  },
  {
    q: "How does Star Technoplast ensure product quality and precision?",
    a: "Our facility follows strict ISO-certified quality standards, using high-precision molds, modern injection molding machines, and multi-stage inspections to guarantee product accuracy and consistency.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-16 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold text-white mb-6 text-center"
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
