import { motion } from "framer-motion";
import { Truck, ShoppingBag, ShieldCheck, BadgeCheck } from "lucide-react";

const features = [
  {
    title: "Fast & Reliable Delivery",
    description:
      "Orders arrive safely and on time with real-time tracking support.",
    icon: Truck,
  },
  {
    title: "Wide Variety of Choices",
    description:
      "Explore an extensive collection of mobile accessories for every need.",
    icon: ShoppingBag,
  },
  {
    title: "Customer-Centric Service",
    description:
      "Your satisfaction is our priority—quality products with dependable support.",
    icon: ShieldCheck,
  },
  {
    title: "Assured Quality Standards",
    description:
      "Every product passes strict quality checks for lasting performance.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-(--color-bg) py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-extrabold text-(--color-text)"
        >
          Why Choose Us?
        </motion.h2>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group bg-(--color-surface) border border-(--color-border) rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="bg-(--color-primary) text-white p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-(--color-text)">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-(--color-text-muted)">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
