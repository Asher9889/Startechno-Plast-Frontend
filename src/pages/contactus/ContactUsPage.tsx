import CapabilitiesSection from "./CapabilitiesSection";
// import BulkEnquiryForm from "./BulkEnquiry";
import BulkEnquiryForm from "./BulkEnquiryForm";
import AboutFeatureBlocks from "./AboutFeatureBlocks";
import FAQs from "./FAQ/FAQs";
import MissionVisionCommitment from "./MissionVisionCommitment";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  return (
    <div className="w-full pt-2 mx-auto">
      <div className="w-full  max-w-7xl py-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-full">
              <CapabilitiesSection />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-full max-w-sm p-4">
              <BulkEnquiryForm />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-10">
        <MissionVisionCommitment />
      </div>

      {/* Middle: Who We Are + Why Choose Us */}
      <div className="mt-10">
        <AboutFeatureBlocks />
      </div>

      <section className="bg-gradient-to-br from-black via-[#0a0a1a] to-purple-900 py-20 px-3">
        <FAQs />
      </section>
    </div>
  );
}
