import AboutFeatureBlocks from "./AboutFeatures/AboutFeatureBlocks";
import MissionVisionCommitment from "./MissionVisionCommitment/MissionVisionCommitment";
import HeroSectionForContact from "./hero/Hero";
import { FAQ } from "@/components";

const faqs = [
  {
    id: "one",
    question: "What is Star Technoplast known for?",
    answer:
      "Star Technoplast specializes in precision-engineered plastic products and customized manufacturing solutions for diverse industrial applications.",
  },
  {
    id: "two",
    question: "Where is Star Technoplast located?",
    answer:
      "Our corporate office and manufacturing facility are located at RR-207, Sector 38, Sonipat (Rai) – 131029, Haryana, India.",
  },
  {
    id: "three",
    question: "Which industries does Star Technoplast serve?",
    answer:
      "We serve multiple industries including automotive, electrical, home appliances, FMCG, healthcare, and industrial equipment sectors.",
  },
  {
    id: "four",
    question: "What manufacturing capabilities do you offer?",
    answer:
      "We provide end-to-end plastic manufacturing solutions — from design and prototyping to moulding, assembly, and quality assurance.",
  },
  {
    id: "five",
    question:
      "Does Star Technoplast provide custom plastic moulding solutions?",
    answer:
      "Yes, we specialize in custom moulding services tailored to meet specific client requirements and product design needs.",
  },
  {
    id: "six",
    question: "What quality standards does your manufacturing follow?",
    answer:
      "Our processes align with international quality standards, ensuring precision, durability, and consistency across every production batch.",
  },
  {
    id: "seven",
    question: "Can Star Technoplast handle bulk and large-scale orders?",
    answer:
      "Absolutely. Our advanced facility and scalable infrastructure allow us to manage both small and high-volume production efficiently.",
  },
  {
    id: "eight",
    question: "What makes Star Technoplast different from other manufacturers?",
    answer:
      "Our customer-first approach, cutting-edge machinery, skilled workforce, and strict quality control distinguish us from competitors.",
  },
  {
    id: "nine",
    question: "How long has Star Technoplast been in the industry?",
    answer:
      "Star Technoplast has been delivering trusted plastic manufacturing solutions for several years, combining innovation with reliability.",
  },
  {
    id: "ten",
    question: "How can I collaborate with Star Technoplast?",
    answer:
      "You can connect with us through our contact page or call us directly at +91 85273 74077 to discuss your project requirements and request a quotation.",
  },
];

export default function ContactUsPage() {
  return (
    <div className="w-full mx-auto">
      <HeroSectionForContact />

      <div className="mt-10">
        <MissionVisionCommitment />
      </div>

      {/* Middle: Who We Are + Why Choose Us */}
      <div className="mt-10">
        <AboutFeatureBlocks />
      </div>

      {/* <section className="bg-gradient-to-br from-black via-[#0a0a1a] to-purple-900 py-20 px-3">
        <FAQs />
      </section> */}
      <section className="bg-gradient-br py-20 px-3">
        <FAQ faqs={faqs} />
      </section>
    </div>
  );
}
