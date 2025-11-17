import { ProductPage } from "@/components";
import {
  bluetoothSpeakerTitle,
  bluetoothSpeakerDescription,
  bluetoothSpeakerFaqs,
  bluetoothSpeakerSpecifications,
  speakerImage,
} from "./bluetoothSpeakerDetails/bluetoothSpeakerDetails";

export default function BluetoothSpeaker() {
  return (
    <>
      <ProductPage
        title={bluetoothSpeakerTitle}
        description={bluetoothSpeakerDescription}
        specs={bluetoothSpeakerSpecifications}
        faqs={bluetoothSpeakerFaqs}
        image={speakerImage}
      />
    </>
  );
}
