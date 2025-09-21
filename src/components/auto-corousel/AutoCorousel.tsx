import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Laptop, Smartphone } from "lucide-react";

const items = [
  {
    icon: Headphones,
    title: "Earbuds",
    desc: "Sleek and stylish with noise reduction features, ensuring crystal-clear sound anytime, anywhere.",
  },
  {
    icon: Laptop,
    title: "Laptop",
    desc: "High-performance laptops for work, gaming, and everyday use.",
  },
  {
    icon: Smartphone,
    title: "Smartphones",
    desc: "Cutting-edge smartphones with powerful cameras and all-day battery life.",
  },
];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // get current card data
  const currentItem = items[index];
  const Icon = currentItem.icon; // ✅ Fix: store component in a variable

  return (
    <div className="flex flex-1 justify-end">
      <div className="relative w-80 h-60 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <Card className="bg-[#0d1220] border-none shadow-lg rounded-2xl w-full h-full">
              <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                <Icon className="mx-auto mb-3 text-red-400" size={32} /> {/* ✅ render icon */}
                <h3 className="text-lg font-semibold">{currentItem.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{currentItem.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
