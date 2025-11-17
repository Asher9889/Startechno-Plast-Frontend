import { motion } from "framer-motion";

interface ApplicationsSectionProps {
  title?: string;
  description: string;
}

export default function ApplicationsSection({
  title = "Applications",
  description,
}: ApplicationsSectionProps) {
  return (
    <section className="w-full bg-(--color-black-bg) text-(--color-white-text) py-12 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto rounded-xl border border-[#222] bg-(--color-black-bg)/80 backdrop-blur-sm p-6 md:p-8 shadow-lg"
      >
        <h3 className="text-2xl md:text-4xl font-semibold mb-3">
          {title}
        </h3>
        
        <p className="text-xl opacity-90 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
