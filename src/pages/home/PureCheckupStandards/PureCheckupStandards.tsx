import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Expertise from experienced surgeons",
  "Trusted healthcare infrastructure",
  "Affordable, modern medical treatments",
];

export default function PureCheckupStandards() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            <span className="text-[#3E85D9]">PureCheckup</span>{" "}
            <span className="text-orange-500">– Setting New Standards in Healthcare</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            With a sharp focus on clinical excellence, innovation, and patient satisfaction, 
            PureCheckup is establishing new benchmarks in India’s surgical care ecosystem. 
            We combine:
          </p>

          <ul className="space-y-3">
            {highlights.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="text-[#3E85D9] w-6 h-6" />
                <span className="text-gray-800 font-medium">{point}</span>
              </motion.li>
            ))}
          </ul>

          <p className="text-gray-700 text-base leading-relaxed">
            Whether you're in a metro or a Tier-2 and Tier-3 city,{" "}
            <span className="font-semibold text-[#3E85D9]">PureCheckup</span>{" "}
            ensures that safe, effective, and expert surgical care is just a click away.
          </p>
        </motion.div>

        {/* Right: Visual Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3E85D9]/20 to-orange-400/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 max-w-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Excellence. Innovation. Care.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At PureCheckup, healthcare isn’t just about treatment — it’s about 
              building a seamless surgical journey powered by technology, expertise, 
              and compassion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
