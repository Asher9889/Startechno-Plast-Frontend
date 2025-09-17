"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const specialties = [
  {
    title: "Proctology – Laser Treatment for Piles, Fissures & Fistulas",
    description:
      "PureCheckup offers advanced proctology treatments using laser surgery for piles, fissures, fistulas, and pilonidal sinus. These minimally invasive procedures ensure quick recovery, minimal pain, and lower risk of recurrence. Patients benefit from expert care, modern technology, and a smooth surgical journey from consultation to recovery.",
  },
  {
    title: "Laparoscopic Surgery – Minimally Invasive Excellence",
    description:
      "We specialize in laparoscopic surgeries for hernia, gallbladder stones, and appendicitis using small incisions for faster healing and less scarring. With high-definition imaging and precision instruments, our expert surgeons ensure shorter hospital stays, reduced discomfort, and excellent clinical outcomes.",
  },
  {
    title: "Gynecology – Surgical Solutions for Women’s Health",
    description:
      "PureCheckup provides expert gynecological care for conditions like fibroids, ovarian cysts, endometriosis, and abnormal vagina bleeding. We use the latest minimally invasive techniques to ensure safe and effective results. Every treatment plan is tailored by experienced gynecologists to meet individual needs.",
  },
  {
    title: "Urology – Advanced Laser Urology Treatments",
    description:
      "Our urology specialists treat conditions like kidney stones, urinary incontinence, prostate issues, phimosis, and erectile dysfunction using advanced laser and stapler techniques. We offer personalized care with fast recovery, minimal discomfort, and modern diagnostic tools for accurate treatment.",
  },
  {
    title: "Aesthetic Surgery – Cosmetic Enhancements with Confidence",
    description:
      "We provide safe and personalized aesthetic surgeries such as liposuction, gynecomastia treatment, and cosmetic gynecology. Our procedures are designed to enhance appearance, boost confidence, and ensure long-lasting, natural-looking results with minimal downtime.",
  },
  {
    title: "Plastic Surgery – Reconstructive & Cosmetic Excellence",
    description:
      "PureCheckup offers both reconstructive and cosmetic plastic surgeries, including scar revision, rhinoplasty, facelifts, and body contouring. With a focus on safety, precision, and patient satisfaction, our expert surgeons deliver superior outcomes using the latest surgical techniques.",
  },
];

const highlights = [
  "Minimally invasive surgery",
  "Faster recovery time",
  "Patient-specific treatment plans",
  "High safety standards",
];

const innovations = [
  "Precision treatments",
  "Shorter hospital stays",
  "Lower risk of infection",
  "Reduced postoperative pain",
  "Quick return to daily life",
];

export default function SpecialtiesShowcase() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Glow Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            Our Specialties{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              – Minimally Invasive Surgical Treatments
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            At PureCheckup, we combine expert care, advanced technology, and a
            patient-first approach to redefine surgical excellence in India.
          </motion.p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {specialties.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Expert Surgeons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-10 shadow-xl mb-20"
        >
          <h3 className="text-3xl font-extrabold mb-4">
            Expert Surgeons at PureCheckup
          </h3>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Our team consists of <strong>50+ highly skilled doctors and surgeons</strong>,
            leaders in their respective specialties. With experience in general
            surgery, urology, gynecology, and more, they ensure top-tier patient
            care using the latest surgical techniques and modern equipment.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-blue-100">
            {highlights.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-300 w-5 h-5" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Technology Driven Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-extrabold text-blue-400 mb-6">
            Technology-Driven Surgical Excellence
          </h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            PureCheckup leads the way in laser and laparoscopic surgery in
            India. By utilizing{" "}
            <strong className="text-white">USFDA-approved techniques</strong>,
            we ensure world-class surgical care and innovation.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
            {innovations.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-400 w-5 h-5" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-100 font-semibold">
            We are not just adopting new technologies, we’re driving innovation
            in surgical care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
