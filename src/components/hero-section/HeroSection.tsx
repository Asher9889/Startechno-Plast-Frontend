import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ownerDetails } from "@/config";
import { BulkEnquiryForm } from "@/components";

export default function HeroSection() {
  return (
    <section className="py-10 bg-gradient-br relative w-full text-(--color-white-text)">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-10 md:gap-4">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 flex flex-col justify-center gap-2 flex-1"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-(--color-blue) rounded-full overflow-hidden">
              <div className="absolute -top-4 left-0 w-full h-8 bg-(--color-blue) rounded-full"></div>
              <div className="absolute -bottom-4 left-0 w-full h-8 bg-(--color-blue) rounded-full"></div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl lg:text-5xl font-semibold pl-4"
            >
              India's Most Trusted Partner in electrical and electronic accessories manufacturing
            </motion.h1>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-(--color-text-muted) max-w-lg leading-7"
          >
            Star Technoplast is redefining quality with premium USB cables, adapters, and a comprehensive range of modern electrical and electronic accessories. Designed for durability, engineered for trust.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href={`mailto:${ownerDetails.email}`}>
              <Button
                className="bg-(--color-primary) text-white px-6  text-lg rounded-2xl 
              shadow-lg hover:bg-(--color-primary-light) hover:scale-105 
              transition-transform cursor-pointer"
              >
                Explore Products
              </Button>
            </a>

            <a href={`tel:+91${ownerDetails.phoneNo}`}>
              <Button
                className="bg-(--color-primary) text-white px-6  text-lg rounded-2xl 
                shadow-lg hover:bg-(--color-primary-light) hover:scale-105 
                transition-transform cursor-pointer"
              >
                Call Us Now
              </Button>
            </a>
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-(--color-text-muted) font-medium"
          >
            📞 +91-9034484988
          </motion.p> */}
        </motion.div>

        {/* CONTACT FORM */}
        <div className="flex flex-1 justify-end">
          <div className="w-md">
            <BulkEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
