import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Layers, Palette, Hammer, Shield, Shapes } from "lucide-react";

const features = [
  {
    title: "Custom Molding Precision",
    description: "Tight tolerance manufacturing for PCB & battery alignment.",
    icon: <Hammer className="h-6 w-6" />,
  },
  {
    title: "Premium Materials",
    description: "SAN / ABS / PC hybrid blends for durability & impact resistance.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Aesthetic Finishes",
    description: "Glossy, matte, or textured options as per brand needs.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "OEM Ready",
    description: "Ideal for electronics brands and assemblers.",
    icon: <Shapes className="h-6 w-6" />,
  },
  {
    title: "Rigorous Quality Control",
    description: "100% inspection for dimension, finish, and durability.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Brand Customization",
    description: "Color matching and logo applications to fit your identity.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-(--color-main-bg) text-white py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-(--color-blue)">Star Technoplast</span>
          </h2>
          <p className="mt-2 text-lg opacity-75">
            Precision molding, premium materials, and OEM-focused engineering.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.4 }}
            >
              <Card className="bg-(--color-black-bg) h-48 border border-[#222] rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3 text-white">
                  <div className="text-(--color-blue)">{feature.icon}</div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
