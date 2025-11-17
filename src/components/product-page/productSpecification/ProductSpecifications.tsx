import { motion } from "framer-motion";
interface ProductSpecificationsProps {
  specs: { label: string; value: string }[];
}

export default function ProductSpecifications({
  specs,
}: ProductSpecificationsProps) {
  return (
    <section className="w-full bg-[#f8f9fc] text-black py-12 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 tracking-tight"
        >
          Product Specifications
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full rounded-xl overflow-hidden shadow-sm bg-white"
        >
          {specs.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 p-3 md:p-4 border-b border-gray-100 last:border-none hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-600 text-base md:text-[15px]">
                {item.label}
              </span>
              <span className="text-gray-900 text-base md:text-[15px] mt-1 md:mt-0 leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
