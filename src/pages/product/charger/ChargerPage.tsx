import { ProductPage } from "@/components";
import {
  chargerTitle,
  chargerDescription,
  chargerFaqs,
  chargerSpecifications,
} from "./chargerDetails/chargerDetail";

export default function ChargerPage() {
  return (
    <>
      <ProductPage
        title={chargerTitle}
        description={chargerDescription}
        specs={chargerSpecifications}
        faqs={chargerFaqs}
      />
    </>
  );
}
