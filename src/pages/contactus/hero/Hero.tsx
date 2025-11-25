import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle } from "lucide-react";
import { BulkEnquiryForm } from "@/components";
import { ownerDetails } from "@/config";
import { phnGif } from "@/assets";

export default function HeroSectionForContact() {
  const tags = [
    "End-to-end services",
    "CAD • Prototyping • Tooling",
    "Rigorous QA • Quick TAT",
  ];

  const handleCall = () => {
    window.location.href = `tel:${ownerDetails.phoneNo}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${ownerDetails.email}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(
      ownerDetails.whatsaapWelcomeMessage
    );
    window.open(
      `https://wa.me/${ownerDetails.whatsaapNo}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const buttonClasses = `px-4 py-2 hover:scale-[1.03] cursor-pointer hover:bg-[#6022ea] rounded-full hover:text-white border-gray-400 bg-white/10 backdrop-blur-sm`;

  return (
    <section className="py-10 bg-gradient-br relative w-full text-(--color-white-text)">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-10 md:gap-4">
        {/* LEFT CONTENT (UPDATED with Capabilities content) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 flex flex-col justify-center gap-2 flex-1"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-5xl font-semibold"
          >
            Engineering Precision. <br />
            Delivering Solutions.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-(--color-text-muted) max-w-lg leading-7 text-base"
          >
            At Star Technoplast, we specialise in high-quality,
            precision-moulded plastic components for industry-leading
            applications. From concept to delivery, we partner with you to turn
            innovative ideas into durable, manufacturable products.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {tags.map((tag, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="px-4 py-2 text-gray-200 rounded-full border-gray-400 bg-white/10 backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* <Button className="bg-(--color-primary) text-white px-6 py-3 text-lg rounded-2xl shadow-lg hover:bg-(--color-primary-light) hover:scale-105 transition-transform flex items-center gap-2">
              <Wrench size={18} /> Explore Capabilities
            </Button> */}

            <div className="flex flex-row justify-start items-center gap-3 bg-transparent">


              <Button
                onClick={handleCall}
                variant="ghost"
                size="sm"
                className={`${buttonClasses} bg-white text-black`}
              >
                <img className="w-4 h-4" src={phnGif} alt="" />
                Call us
              </Button>
              <Button
                onClick={handleEmail}
                variant="ghost"
                size="sm"
                className={buttonClasses}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="ghost"
                size="sm"
                className={buttonClasses}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT (KEEP SAME) */}
        <div className="flex flex-1 justify-end">
          <div className="w-full mx-auto">
            <BulkEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
