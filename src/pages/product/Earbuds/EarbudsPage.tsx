import { ProductPage } from "@/components";
import {
  EarbudsTitle,
  EarbudsDescription,
  EarbudsSpecifications,
  EarbudsFaqs,
  earbudsImage,
} from "./EarbudsDetails/EarbudsDetail";

export default function EarbudsPage() {
  return (
    <>
      <ProductPage
        title={EarbudsTitle}
        description={EarbudsDescription}
        specs={EarbudsSpecifications}
        faqs={EarbudsFaqs}
        image={earbudsImage}
      />
    </>
  );
}
