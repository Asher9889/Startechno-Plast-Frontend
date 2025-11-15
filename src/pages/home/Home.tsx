import { FAQ, HeroSection } from "../../components";
import WhyChoose from "./WhyChoose/Whychoose";
import TopProducts from "./TopProducts/TopProducts";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
// import CustomerEnquiryForm from "./CustomerEnquiryForm/CustomerEnquiryForm";
import { CustomerEnquiryForm } from "@/components";

const faqs = [
  {
    id: "one",
    question: "What does Startechnoplast manufacture?",
    answer:
      "We specialize in manufacturing a wide range of mobile accessories, including power banks, chargers, Bluetooth speakers, neckbands, earbuds, and electronic lighters.",
  },
  {
    id: "two",
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our MOQ varies depending on the product category. Generally, bulk orders start from 500 units, but we can discuss flexible quantities for OEM and custom projects.",
  },
  {
    id: "three",
    question: "What types of clients do you work with?",
    answer:
      "We work with distributors, wholesalers, retail chains, startups, and established brands who want high-quality mobile accessories or want to launch their own private label/OEM brand.",
  },
  {
    id: "four",
    question: "Do you provide samples before placing a bulk order?",
    answer:
      "Yes, we provide product samples so you can check the quality before placing a large order.",
  },
  {
    id: "five",
    question: "Are your products certified and quality tested?",
    answer:
      "Absolutely. All our products undergo strict quality testing and come with relevant certifications to ensure safety, durability, and compliance with international standards.",
  },
  {
    id: "six",
    question: "Can I visit your factory before placing an order?",
    answer:
      "Yes, we welcome factory visits. Clients can personally inspect our facilities, production lines, and quality processes before confirming their orders.",
  },
  {
    id: "seven",
    question: "Do you deliver products outside India?",
    answer:
      "Yes, we ship globally. We have an export network to deliver products across different countries with proper packaging and logistics support.",
  },
  {
    id: "eight",
    question: "Can I start my own brand with your OEM services?",
    answer:
      "Definitely. We provide OEM & ODM services, allowing you to launch your own brand with customized products, packaging, and branding solutions.",
  },
  {
    id: "nine",
    question: "Can I get my logo printed on the products and packaging?",
    answer:
      "Yes, we offer custom logo printing and branding on both products and packaging as part of our OEM services.",
  },
  {
    id: "ten",
    question: "How long does it take to fulfill an OEM order?",
    answer:
      "The lead time depends on the order size and customization level, but on average, it takes 30–45 days from confirmation to delivery.",
  },
  {
    id: "eleven",
    question: "What makes Innotech different from other manufacturers?",
    answer:
      "Our focus on innovation, strict quality standards, OEM support, and end-to-end customer solutions make us stand out from competitors. We don’t just supply products — we help you build and scale your brand.",
  },
  {
    id: "twelve",
    question: "Do you also supply mobile accessory manufacturing machines?",
    answer:
      "Yes, apart from finished products, we also supply mobile accessory manufacturing machines, enabling businesses to set up their own production units.",
  },
];

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      {/* <BulkEnquiryForm /> */}
      <TopProducts />
      <WhyChoose />
      {/* <AboutStartechnoPlast /> */}
      <CustomerReviews />
      <section className="bg-gradient-br py-20 px-3">
        <FAQ faqs={faqs} />
      </section>
      <CustomerEnquiryForm />
    </div>
  );
};

export default Home;
