import { motion } from "framer-motion";
// import Hero from "./Hero";
import Hero from "./hero/Hero";
import ContactSection from "./hero/ContactSection";
import ConnectWithUs from "./hero/ConnectWithUs";
import FAQs from "./hero/FAQs";
import WhyPartner from "./hero/WhyPartner";

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
        <section className="bg-gradient-to-br from-black via-[#0a0a1a] to-purple-900">
          <FAQs />
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
