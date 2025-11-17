// src/components/common/customer-enquiry/useCustomerEnquiryForm.ts

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { CustomerEnquiryType } from "../schema/CustomerEnquirySchema ";
import { CustomerEnquirySchema } from "../schema/CustomerEnquirySchema ";
import { submitCustomerEnquiry } from "../services/customerEnquiry.service";

export function useCustomerEnquiryForm() {
  const form = useForm<CustomerEnquiryType>({
    resolver: zodResolver(CustomerEnquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: CustomerEnquiryType) => {
    const response = await submitCustomerEnquiry(data);
    console.log("Enquiry submitted:", response);
  };

  return { form, onSubmit };
}
