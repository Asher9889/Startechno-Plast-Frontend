import { motion } from "framer-motion";

export default function AboutFeatureBlocks() {
  return (
    <section className="w-full max-w-7xl mx-auto p-6 bg-[#EAF4F1] rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-gray-900">Who We Are</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Founded with a vision of excellence, Star Technoplast is a
            full-service manufacturing partner based in Sonipat (Rai), Haryana.
            Our facility is equipped with state-of-the-art injection-moulding
            machines, dedicated tooling resources, and an experienced
            engineering team that ensures consistent quality across every batch.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 pt-4">
            What We Offer
          </h3>
          <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-1">
            <li>
              Custom plastic moulding for automotive, electrical,
              home-appliance, FMCG and industrial sectors.
            </li>
            <li>
              End-to-end services: CAD design support, prototyping, tool-making,
              mass production.
            </li>
            <li>
              Flexible order volumes: from pilot runs to high-volume production.
            </li>
            <li>
              Quick turnaround times, rigorous QA practices, and pan-India
              distribution.
            </li>
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-gray-900">Why Choose Us</h3>
          <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
            <li>
              Precision at every step: Our in-house tooling and process control
              ensure tight tolerances and repeatability.
            </li>
            <li>
              Quality you can trust: Using certified materials and multi-stage
              inspection processes, we uphold the highest standards.
            </li>
            <li>
              Partner-centric approach: We treat every client project as a
              collaboration — your success is our mission.
            </li>
            <li>
              Scalable capacity: From small runs to large volume campaigns, we
              adapt to your timelines and requirements.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
