import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Calendar,
  Grid2X2,
  Truck,
  LifeBuoy,
  ArrowUp,
  Star,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    text: "ISO-Certified Manufacturing",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Calendar,
    text: "20+ Years of Experience",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    icon: Grid2X2,
    text: "In-house Tooling & Molding",
    gradient: "from-purple-500 to-blue-600",
  },
  {
    icon: Truck,
    text: "Pan-India Delivery",
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    icon: LifeBuoy,
    text: "Reliable Support",
    gradient: "from-blue-400 to-purple-500",
  },
];

export default function WhyPartner() {
  return (
    <section className="w-full  mx-auto px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#6022ea]/10 to-[#6022ea]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#6022ea]/10 to-[#6022ea]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#6022ea] rounded-full" />
            <span className="text-sm font-medium text-[#6022ea] uppercase tracking-wider">
              Why Choose Us
            </span>
            <div className="w-2 h-2 bg-[#6022ea] rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#000000] via-[#6022ea] to-[#000000] bg-clip-text text-transparent">
            Why Partner with Star Technoplast
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience excellence in manufacturing with our proven track record
            and comprehensive solutions
          </p>
        </motion.div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="group w-full min-h-[180px] relative p-4 rounded-xl border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden gap-1">
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon with Gradient Background */}
                <div className="relative mb-1">
                  <div
                    className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Star size={12} className="text-[#6022ea] fill-current" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#6022ea] transition-colors duration-300">
                  {item.text}
                </h3>

                {/* Read More Link */}
                <div className="flex items-center text-sm text-gray-500 group-hover:text-[#6022ea] transition-colors duration-300">
                  <span>Learn more</span>
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>

                {/* Bottom Border Animation */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500 rounded-full`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-200/60"
        >
          {/* Back to Top - Enhanced */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:text-[#6022ea] border border-gray-200/60 hover:border-[#6022ea]/30 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
          >
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-0.5 transition-transform duration-300"
            />
            <span className="font-medium">Back to Top</span>
          </motion.button>

          {/* Stats */}

          {/* WhatsApp Chat - Enhanced */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full px-8 py-3 flex items-center gap-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <LifeBuoy size={18} className="relative z-10" />
              <span className="relative z-10">WhatsApp Chat</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
