import { motion } from "framer-motion";
import { ContactInfoPanel } from "./ContactInfoPanel";
import { InquiryFormPanel } from "@/components/contact-section/InquiryFormPanel";

export default function ContactSection() {
  return (
    <section className="w-full max-w-7xl, py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactInfoPanel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InquiryFormPanel />
        </motion.div>
      </div>
    </section>
  );
}
