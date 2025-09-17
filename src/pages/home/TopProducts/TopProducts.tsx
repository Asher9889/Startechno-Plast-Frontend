import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { powerBank } from "@/assets";

const products = [
  {
    name: "Power Bank",
    image: powerBank,
  },
  {
    name: "Mobile Charger",
    image: "https://cdn.pixabay.com/photo/2018/07/01/13/28/two-pin-3509490_1280.jpg",
  },
  {
    name: "Neckband",
    image: "https://cdn.pixabay.com/photo/2017/08/14/16/15/earphone-2640990_1280.jpg",
  },
  {
    name: "Speakers",
    image: "https://cdn.pixabay.com/photo/2015/10/04/21/58/speakers-971968_1280.png",
  },
  {
    name: "Earbuds",
    image: "https://cdn.pixabay.com/photo/2015/11/25/21/38/xiao-us-1062989_1280.jpg",
  },
  {
    name: "Lighters",
    image: "https://cdn.pixabay.com/photo/2017/08/17/13/09/lighter-2651263_1280.jpg",
  },
];

export default function TopProducts() {
  return (
    <section className="bg-(--color-bg) py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-extrabold text-center text-(--color-text)"
        >
          Top Products
        </motion.h2>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-(--color-surface) border border-(--color-border) rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="flex justify-center items-center p-6 h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-40 rounded-xl object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-(--color-text)">
                  {product.name}
                </h3>

                <Button className="mt-4 bg-(--color-primary) text-white rounded-lg px-6 py-2 shadow-md hover:bg-(--color-primary-light) transition-colors">
                  View More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
