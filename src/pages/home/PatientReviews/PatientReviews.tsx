
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ananya Sharma",
    review:
      "The doctors were very caring and the facilities were excellent. I felt safe and well looked after.",
  },
  {
    name: "Ravi Kumar",
    review:
      "Excellent service! The staff was friendly and attentive, and the hospital was very clean.",
  },
  {
    name: "Priya Verma",
    review:
      "I had a great experience. Everything was well organized and the treatment was top-notch.",
  },
];

export default function PatientReviews() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Decorative Stars in Background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center opacity-10">
        <Star className="w-96 h-96 text-yellow-400 rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-16"
        >
          Patients Insights <span className="text-yellow-400">❤️</span>
        </motion.h2>

        {/* Reviews Carousel Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-8 hover:scale-105 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-100 leading-relaxed italic mb-6">
                “{r.review}”
              </p>

              {/* Name */}
              <h3 className="text-lg font-semibold text-yellow-400">
                {r.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
