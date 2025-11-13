import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#AFC7D8] to-[#3A6D8C] py-24 text-center text-white flex flex-col items-center justify-center px-4">
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
        <Button className="bg-[#0A3D62] hover:bg-[#082F4D] text-white px-6 py-5 rounded-xl text-sm flex items-center gap-2 cursor-pointer">
          <span>📩</span> Get a Quote
        </Button>

        <Button
          variant="outline"
          className="text-[#0A3D62] border-[#0A3D62] px-6 py-5 rounded-xl text-sm flex items-center gap-2 bg-white cursor-pointer"
        >
          <span>💬</span> Connect via WhatsApp
        </Button>
      </motion.div>
    </section>
  );
}
