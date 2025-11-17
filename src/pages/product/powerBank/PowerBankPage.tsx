import { ProductPage } from "@/components";
import {
  powerBankTitle,
  powerBankDescription,
  powerBankFaqs,
  powerBankSpecifications,
  powerBankImage,
} from "./powerBankDetails/powerBankDetail";

export default function PowerBankPage() {
  return (
    <>
      <ProductPage
        title={powerBankTitle}
        description={powerBankDescription}
        specs={powerBankSpecifications}
        faqs={powerBankFaqs}
        image={powerBankImage}
      />
    </>
  );
}
