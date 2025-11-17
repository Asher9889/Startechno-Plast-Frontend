import { ProductPage } from "@/components";
import {
  neckbandsTitle,
  neckbandsDescription,
  neckbandsSpecifications,
  neckbandsFaqs,
  neckbandsImage,
} from "./neckBandsDetails/neckBandsDetail";

export default function NeckBandPage() {
  return (
    <>
      <ProductPage
        title={neckbandsTitle}
        description={neckbandsDescription}
        specs={neckbandsSpecifications}
        faqs={neckbandsFaqs}
        image={neckbandsImage}
      />
    </>
  );
}
