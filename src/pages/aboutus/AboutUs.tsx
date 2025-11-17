import { motion } from "framer-motion";
// import Hero from "./Hero";
import Hero from "./hero/Hero";
import ContactSection from "./ContactSection/ContactSection";
import ConnectWithUs from "./ConnectWithUs/ConnectWithUs";
import WhyPartner from "./WhyPartner/WhyPartner";
import { FAQ } from "@/components";

export const faqData = [
  {
    id: "one",
    question:
      "What types of plastic products does Star Technoplast manufacture?",
    answer:
      "Star Technoplast specializes in precision-engineered plastic components, injection-molded parts, and customized plastic solutions for various industries, including automotive, electrical, FMCG, and healthcare.",
  },
  {
    id: "two",
    question:
      "How can I get a quotation for my custom plastic product requirement?",
    answer:
      "You can request a quotation by filling out our contact form on this page or by emailing your detailed requirements to mukesh@startechnoplast.com. Our team will respond with a quote within 24 working hours.",
  },
  {
    id: "three",
    question: "Does Star Technoplast offer bulk or OEM manufacturing?",
    answer:
      "Yes, we provide OEM and bulk manufacturing services with customized design, tooling, and precision molding solutions tailored to your project needs.",
  },
  {
    id: "four",
    question: "Where is Star Technoplast located?",
    answer:
      "Our corporate office and manufacturing facility are located at RR-207, Sector 38, Sonipat (Rai) – 131029, Haryana, India. You can visit us by appointment or find us easily on Google Maps.",
  },
  {
    id: "five",
    question: "How can I contact Star Technoplast for urgent queries?",
    answer:
      "For urgent support or order-related queries, you can directly call or WhatsApp us at +91 85273 74077 for instant assistance from our support team.",
  },
  {
    id: "six",
    question: "Does Star Technoplast handle product design and prototyping?",
    answer:
      "Absolutely. We offer end-to-end solutions, including CAD design, mold development, prototyping, and final production, ensuring complete precision and quality.",
  },
  {
    id: "seven",
    question: "What industries does Star Technoplast serve?",
    answer:
      "We proudly serve multiple industries such as automotive, electronics, electrical, home appliances, medical devices, and packaging, delivering tailor-made plastic solutions for each sector.",
  },
  {
    id: "eight",
    question: "How long does it take to deliver an order after confirmation?",
    answer:
      "Delivery timelines depend on the product type, complexity, and quantity, but most orders are completed and dispatched within 2–4 weeks after design approval and payment confirmation.",
  },
  {
    id: "nine",
    question: "Can I visit the manufacturing unit for a project discussion?",
    answer:
      "Yes, clients are welcome to visit our manufacturing facility in Sonipat for project discussions or factory audits. Please schedule your visit in advance through our contact form or by phone.",
  },
  {
    id: "ten",
    question: "How does Star Technoplast ensure product quality and precision?",
    answer:
      "Our facility follows strict ISO-certified quality standards, using high-precision molds, modern injection molding machines, and multi-stage inspections to guarantee product accuracy and consistency.",
  },
];



export default function AboutUs() {

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>

      {/* Connect With Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ConnectWithUs />
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gray-50"
      >
        <section className="bg-gradient-br py-20 px-3">
          <FAQ faqs={faqData} />
        </section>
      </motion.div>

      {/* Why Partner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <WhyPartner />
      </motion.div>
    </div>
  );
}
