import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const BulkEnquirySchema = z.object({
  name: z.string().min(2, "Name is Required"),
  phone: z.string().min(10, "Phone Number is Required"),
  category: z.string().min(1, "Please Select a Cotegory"),
  city: z.string().min(2, "City is Required"),
});

export type BulkEnquiryType = z.infer<typeof BulkEnquirySchema>;

export async function submitBulkEnquiry(data: BulkEnquiryType) {
  console.log("APi is calling  with this data", data);
  return { success: true };
}

export function useBulkEnquiryForm() {
  const form = useForm<BulkEnquiryType>({
    resolver: zodResolver(BulkEnquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      category: "",
      city: "",
    },
  });

  const onSubmit = async (data: BulkEnquiryType) => {
    const result = await submitBulkEnquiry(data);
    console.log("Form Submitted Successfully", result);
  };

  return { form, onSubmit };
}
