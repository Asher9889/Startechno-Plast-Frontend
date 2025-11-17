import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ownerDetails } from "@/config";
import { useLocation } from "react-router-dom";

interface CtaBannerProps {
  // title: string;
  description: string;
  primaryAction: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
}

export default function CtaBanner({
  // title,
  description,
  primaryAction,
  secondaryAction,
}: CtaBannerProps) {
    const { pathname } = useLocation();
    const product = pathname.split("/")[2].charAt(0).toUpperCase() + pathname.split("/")[2].slice(1);
   const handleCall = () => {
    window.location.href = `tel:${ownerDetails.phoneNo}`;
  };
  return (
    <section className="w-full bg-(--color-black-bg) text-(--color-white-text) py-12 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto rounded-xl border border-[#222] bg-(--color-black-bg)/80 backdrop-blur-sm p-6 md:p-8 shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        {/* Text */}
        <div className="max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold">{`Need a Reliable ${product} Body Manufacturer?`}</h3>
          <p className="text-[15px] opacity-90 mt-1">{description}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          {primaryAction.href ? (
            <a href={primaryAction.href}>
              <Button
                className="bg-(--color-blue) hover:bg-(--color-primary-light) text-(--color-white-text) font-medium px-6 py-5 rounded-lg"
              >
                {primaryAction.label}
              </Button>
            </a>
          ) : (
            <Button
              onClick={primaryAction.onClick}
              className="bg-(--color-blue) hover:bg-(--color-primary-light) text-(--color-white-text) font-medium px-6 py-5 rounded-lg"
            >
              {primaryAction.label}
            </Button>
          )}

          {secondaryAction && (
            <>
              {secondaryAction.href ? (
               
                  <Button
                    onClick={handleCall}
                    variant="secondary"
                    className="bg-[#111] hover:bg-[#1a1a1a] text-(--color-white-text) border border-[#333] font-medium px-6 py-5 rounded-lg"
                  >
                    {secondaryAction.label}
                  </Button>
              
              ) : (
                <Button
                  onClick={secondaryAction.onClick}
                  variant="secondary"
                  className="bg-[#111] hover:bg-[#1a1a1a] text-(--color-white-text) border border-[#333] font-medium px-6 py-5 rounded-lg"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
