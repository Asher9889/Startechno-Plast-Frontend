import { motion } from "framer-motion";

interface ProductSpecificationsProps {
  specs: { label: string; value: string }[];
}

export default function ProductSpecifications({ specs }: ProductSpecificationsProps) {
  return (
    <section className="w-full bg-gradient-tl text-(--color-white-text) py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
        >
          Product Specifications
        </motion.h2>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-[#222] overflow-hidden bg-(--color-black-bg)/80 backdrop-blur-sm shadow-lg"
        >
          {specs.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5 py-4 border-b border-[#222] last:border-none hover:bg-(--color-black-bg)/60 transition-colors"
            >
              <span className="text-[15px] font-medium text-(--color-blue)">
                {item.label}
              </span>
              <span className="text-[15px] text-(--color-white-text) opacity-90 leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
