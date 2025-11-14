import { motion } from "framer-motion";

export default function MissionVisionCommitment() {
  return (
    <section className="w-full max-w-6xl mx-auto p-6 bg-[#F4F8FC] rounded-xl">
      <div className="space-y-6">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            To deliver best-in-class plastic solutions that empower our clients'
            innovations, while maintaining operational excellence, sustainable
            practices and a relentless focus on customer satisfaction.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-1"
        >
          <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            To emerge as the preferred manufacturing partner across India for
            precision-engineered plastic components — known for quality, speed,
            and innovation.
          </p>
        </motion.div>

        {/* Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Our Commitment
          </h3>
          <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-1">
            <li>Complete transparency and open communication.</li>
            <li>On-time delivery and flexible servicing.</li>
            <li>Continuous investment in technology and talent.</li>
            <li>
              Environmentally conscious operations and responsible
              manufacturing.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
