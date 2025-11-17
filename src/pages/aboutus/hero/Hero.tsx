import { motion } from "framer-motion";
import { SmartButton } from "@/components";
import { useScroll } from "@/components";
import { ownerDetails } from "@/config";

export default function Hero() {
  const { scrollToForm } = useScroll();

   const openWhatsaap = () => {
    window.open(`https://wa.me/${ownerDetails.whatsaapNo}`, "_blank");
  };

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
        {/* <SmartButton icon={"📩"} >Get a Quote</SmartButton> */}
        <SmartButton onClick={scrollToForm} className="hover:bg-(--color-primary) bg-(--color-blue-button)">
          <span>📩</span> Get a Quote
        </SmartButton>

        <SmartButton
          variant="outline"
          className="border-none hover:bg-[#075e54] bg-(--whatsaap-color) hover:text-white"
          onClick={openWhatsaap}
        >
          <span>💬</span> Connect via WhatsApp
        </SmartButton>
      </motion.div>
    </section>
  );
}
