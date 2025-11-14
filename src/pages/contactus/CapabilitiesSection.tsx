import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench } from "lucide-react";

export default function CapabilitiesSection() {
  const tags = [
    "End-to-end services",
    "CAD • Prototyping • Tooling",
    "Rigorous QA • Quick TAT",
  ];

  return (
    <section className="w-full py-16 px-4 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      >
        Engineering Precision. Delivering Solutions.
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-600 max-w-3xl mb-6 text-sm md:text-base"
      >
        At Star Technoplast, we specialise in high-quality, precision-moulded
        plastic components for industry-leading applications. From concept to
        delivery, we partner with you to turn innovative ideas into durable,
        manufacturable products.
      </motion.p>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-3 mb-6"
      >
        {tags.map((tag, i) => (
          <Badge
            key={i}
            variant="outline"
            className="px-4 py-2 text-gray-700 rounded-full border-gray-300 bg-white"
          >
            {tag}
          </Badge>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button className="bg-[#0A3D62] hover:bg-[#082F4D] text-white rounded-full px-6 py-5 flex items-center gap-2 text-sm">
          <Wrench size={16} /> Explore Capabilities
        </Button>
      </motion.div>
    </section>
  );
}
