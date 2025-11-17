import { ProductPage } from "@/components";
import {
  powerBankFaqs,
  powerBankSpecifications,
  powerBankImage,
  powerBankDetails,
} from "./powerBankDetails/powerBankDetail";

export default function PowerBankPage() {
  return (
    <>
      <ProductPage
        title={powerBankDetails.title}
        description={powerBankDetails.desc1}
        desc2={powerBankDetails.desc2}
        specs={powerBankSpecifications}
        faqs={powerBankFaqs}
        image={powerBankImage}
        applicationsSectionDescription={powerBankDetails.applicationsSectionDescription}
      />

    </>
  );
}
