import { FiArrowRight } from 'react-icons/fi';
import gyno from "../../../assets/Gynecology.png";
import lapro from "../../../assets/Laparoscopy.png";
import procto from "../../../assets/Proctology.jpg";
import uro from "../../../assets/Urology.jpg";
import aes from "../../../assets/aesthetic.webp";

interface Speciality {
  title: string;
  desc: string;
  image: string;
}
const specialities: Speciality[] = [
  {
    title: 'Proctology',
    desc: 'Specialised & advanced treatment for Anorectal Diseases ...',
    image: procto,
  },
  {
    title: "Urology",
    desc: 'Surgical treatment for urogenital issues in men and women ...',
    image: uro,
  },
  {
    title: 'Laparoscopy',
    desc: 'Keyhole surgery for abdominal and pelvic disorders ...',
    image: lapro,
  },
  {
    title: 'Gynaecology',
    desc: 'Comprehensive care for women’s reproductive health and related disorders ...',
    image: gyno,
  },
  {
    title: 'Aesthetics',
    desc: 'Advanced cosmetic treatments to enhance appearance and confidence ...',
    image: aes,
  },
];


const SpecialityCard = ({ title, desc, image }:Speciality) => (
  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 w-full">
    <img src={image} alt={title} className="w-16 h-16 object-cover rounded-md" />
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-[#002b45]">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
    <FiArrowRight className="text-blue-600 text-xl self-center" />
  </div>
);

const Specialities = () => {
  return (
    <section className="bg-[#f1f1f1] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#002b45] mb-10">Our Specialities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialities.map((spec, idx) => (
            <SpecialityCard key={idx} {...spec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
