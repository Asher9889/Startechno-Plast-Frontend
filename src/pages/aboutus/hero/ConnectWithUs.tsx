import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function ConnectWithUs() {
  return (
    <section className="w-full py-4 px-4 max-w-7xl mx-auto">
      <Card className="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-white-bg)] via-[#f7f3ff] to-[#ece6ff] text-[var(--color-black-text)] border border-[var(--color-black-text)] shadow-md">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-semibold mb-4"
        >
          Connect With Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-4 mt-2"
        >
          <button
            className="flex items-center gap-2 px-5 py-2.5 border border-[var(--color-black-text)] rounded-full text-sm text-[var(--color-black-text)] hover:bg-gray-200 hover:text-black"
            onClick={() => window.open("https://wa.me/9034484988", "_blank")}
          >
            <MessageCircle size={18} /> WhatsApp
          </button>

          <button
            className="flex items-center gap-2 px-5 py-2.5 border border-[var(--color-black-text)] rounded-full text-sm text-[var(--color-black-text)] hover:bg-gray-200 hover:text-black transition"
            onClick={() =>
              (window.location.href = "mailto:info@startechnoplast.com")
            }
          >
            <Mail size={18} /> Email
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 border border-[var(--color-black-text)] rounded-full text-sm text-[var(--color-black-text)] hover:bg-gray-200 hover:text-black transition">
            <MapPin size={18} /> Google Maps
          </button>
        </motion.div>
      </Card>
    </section>
  );
}
