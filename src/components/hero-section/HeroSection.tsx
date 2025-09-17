import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroImage } from "@/assets";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-(--color-bg)">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight 
                       bg-gradient-to-r from-(--color-primary) to-(--color-secondary) 
                       bg-clip-text text-transparent"
          >
            India’s Most Trusted Partner in Mobile Accessories Manufacturing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg lg:text-xl text-(--color-text-muted) max-w-lg leading-relaxed"
          >
            Startechno Plast is redefining quality with premium USB cables, adapters, and a
            complete range of modern mobile accessories. Designed for durability, engineered for
            trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4"
          >
            <Button
              className="bg-(--color-primary) text-white px-6 py-3 text-lg rounded-2xl 
                         shadow-lg hover:bg-(--color-primary-light) hover:scale-105 
                         transition-transform"
            >
              Explore Products
            </Button>

            <Button
              variant="outline"
              className="px-6 py-3 text-lg rounded-2xl border-(--color-primary) 
                         text-(--color-primary) hover:bg-(--color-primary) 
                         hover:text-white transition-colors"
            >
              Call Us Now
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-(--color-text-muted) font-medium"
          >
            📞 +91-9034484988
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <img
            src={heroImage}
            alt="Premium Mobile Accessories"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl border border-(--color-border)"
          />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md 
                       border border-(--color-border) px-5 py-2 rounded-full 
                       shadow-md text-sm font-semibold text-(--color-primary)"
          >
            ⚡ Fast Charging. Premium Quality.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
