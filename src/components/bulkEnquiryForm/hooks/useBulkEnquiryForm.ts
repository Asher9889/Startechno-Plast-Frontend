import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BulkEnquirySchema } from "../schema/bulkEnquiryForm.schema";
import { submitBulkEnquiry } from "../services/bulkEnquiry.service";
import type { BulkEnquiryType } from "../schema/bulkEnquiryForm.schema";

export function useBulkEnquiryForm() {
  const form = useForm<BulkEnquiryType>({
    resolver: zodResolver(BulkEnquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      category: "",
      city: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: BulkEnquiryType) => {
    const response = await submitBulkEnquiry(data);
    console.log("Form Submitted Successfully", response);
  };

  return { form, onSubmit };
}
