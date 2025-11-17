import ProductHero from "./productHero/ProductHero";
import ProductSpecifications from "./productSpecification/ProductSpecifications";
import FAQ from "../faqs/FAQ";
import WhyChooseSection from "@/pages/product/powerBank/why-choose-section/WhyChooseSection";
import {  CtaBanner } from "@/components"
import { ctaData } from "@/pages/product/powerBank/powerBankDetails/powerBankDetail";

interface ProductData {
  faqs: { id: string; question: string; answer: string }[];
  title: string;
  description: string;
  desc2?: string,
  applicationsSectionDescription?: string,
  image?: string;
  specs: { label: string; value: string }[];
}
export default function ProductPage({
  title,
  description,
  desc2 = "",
  image,
  specs,
  faqs,
  // _applicationsSectionDescription
}: ProductData) {
  return (
    <>
      <section className="w-full">
        {/* Hero Section */}
        <ProductHero title={title} desc2= {desc2} description={description} image={image} />
        <WhyChooseSection />

        {/* Specifications Section */}
        <ProductSpecifications specs={specs} />
        {/* <ApplicationsSection description={applicationsSectionDescription} /> */}
        <CtaBanner description={ctaData.description} primaryAction={ctaData.primaryAction} secondaryAction={ctaData.secondaryAction}/>
        <section className="bg-gradient-br py-20 px-3">
          <FAQ faqs={faqs} />
        </section>
      </section>
    </>
  );
}
