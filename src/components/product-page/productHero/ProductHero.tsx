import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductHeroProps {
  title: string;
  description: string;
  desc2: string,
  image?: string; // optional
}

export default function ProductHero({
  title,
  description,
  desc2,
  image = "https://www.motortrend.com/uploads/sites/21/2012/08/mopp-1211-03-1966-Dodge-Charger-Exclusive-Photos1.jpg",
}: ProductHeroProps) {

  return (
    <section className="w-full bg-[#0b0b1a] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* <p className="text-sm uppercase tracking-widest text-purple-400">
            H1
          </p> */}

            <h1 className="text-4xl font-semibold leading-tight">
              {title}
            </h1>

            <p className="text-lg text-gray-300 font-medium">{description}</p>
            <p className="text-sm text-gray-300 font-medium">{desc2}</p>

            <div className="gap-4 pt-4 flex lg:flex-row flex-col">
              <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-5 text-lg rounded-xl">
                Get a Quote
              </Button>
              <Button
                variant="outline"
                className="border-gray-500 text-white hover:bg-gray-800 px-6 py-5 text-lg rounded-xl"
              >
                Request a Sample
              </Button>
            </div>
          </motion.div>

          {/* Right Product Image with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.img
              src={image}
              alt="Mobile Charger"
              // className="w-full max-w-md rounded-xl shadow-lg"
              className="w-full max-w-md h-64 md:h-80 object-contain rounded-xl shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
