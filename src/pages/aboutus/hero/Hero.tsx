import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-br py-24 text-center text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Let’s Build Precision Together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-sm md:text-base text-white/90 mb-8"
      >
        Contact Star Technoplast for customized plastic molding solutions and
        precision-engineered products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Button className="hover:bg-(--color-primary) transition-all duration-300 bg-(--color-blue-button)  hover:scale-[1.002] px-6 py-5 rounded-xl text-sm flex items-center gap-2 cursor-pointer">
          <span>📩</span> Get a Quote
        </Button>

        <Button
          variant="outline"
          className="border-none hover:bg-(--whatsaap-color) hover:text-black transition-all duration-300 px-6 py-5 rounded-xl text-sm flex items-center gap-2 bg-(--whatsaap-color) cursor-pointer"
        >
          <span>💬</span> Connect via WhatsApp
        </Button>
      </motion.div>
    </section>
  );
}
