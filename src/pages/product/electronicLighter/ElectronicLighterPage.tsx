import { ProductPage } from "@/components";
import {
  electronicLighterTitle,
  electronicLighterDescription,
  electronicLighterSpecifications,
  electronicLighterFaqs,
  lighterImage,
} from "./electronicLighterDetails/electronicLighterDetail";

export default function ElectronicLighterPage() {
  return (
    <>
      <ProductPage
        image={lighterImage}
        title={electronicLighterTitle}
        description={electronicLighterDescription}
        specs={electronicLighterSpecifications}
        faqs={electronicLighterFaqs}
      />
    </>
  );
}
