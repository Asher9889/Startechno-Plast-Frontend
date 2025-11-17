import ProductHero from "./productHero/ProductHero";
import ProductSpecifications from "./productSpecification/ProductSpecifications";
import FAQ from "../faqs/FAQ";

interface ProductData {
  faqs: { id: string; question: string; answer: string }[];
  title: string;
  description: string;
  image?: string;
  specs: { label: string; value: string }[];
}
export default function ProductPage({
  title,
  description,
  image,
  specs,
  faqs,
}: ProductData) {
  return (
    <>
      <main className="w-full flex flex-col">
        {/* Hero Section */}
        <ProductHero title={title} description={description} image={image} />

        {/* Specifications Section */}
        <ProductSpecifications specs={specs} />
      </main>
      <section className="bg-gradient-br py-20 px-3">
        <FAQ faqs={faqs} />
      </section>
    </>
  );
}
