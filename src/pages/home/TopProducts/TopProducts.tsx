import { powerBank } from "@/assets";
import { motion } from "framer-motion";


const products = [
  { name: "Power Bank", image: powerBank },
  {
    name: "Mobile Charger",
    image:
      "https://cdn.pixabay.com/photo/2018/07/01/13/28/two-pin-3509490_1280.jpg",
  },
  {
    name: "Neckband",
    image:
      "https://cdn.pixabay.com/photo/2017/08/14/16/15/earphone-2640990_1280.jpg",
  },
  {
    name: "Speakers",
    image:
      "https://cdn.pixabay.com/photo/2015/10/04/21/58/speakers-971968_1280.png",
  },
  {
    name: "Earbuds",
    image:
      "https://cdn.pixabay.com/photo/2015/11/25/21/38/xiao-us-1062989_1280.jpg",
  },
  {
    name: "Lighters",
    image:
      "https://cdn.pixabay.com/photo/2017/08/17/13/09/lighter-2651263_1280.jpg",
  },
];

export default function TopProducts() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.name}
            whileHover="hover"
            initial="initial"
            className="relative bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="flex flex-col justify-center items-center p-6 h-56">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-40 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <p className="font-semibold mt-3">{product.name}</p>
            </div>

            {/* Overlay (black film) */}
            <motion.div
              variants={{
                initial: { scaleY: 0 },
                hover: { scaleY: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ transformOrigin: "bottom" }}
              className="absolute inset-0 bg-black/80 z-10"
            />

            {/* Overlay text */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4"
            >
              <h3 className="text-white text-xl font-bold">{product.name}</h3>
              <p className="text-white text-sm mt-2">
                High-performance {product.name.toLowerCase()} built for modern use.
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

