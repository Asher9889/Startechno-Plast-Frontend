// src/components/common/customer-enquiry/customerEnquiry.service.ts
import type { CustomerEnquiryType } from "../schema/CustomerEnquirySchema ";

export async function submitCustomerEnquiry(data: CustomerEnquiryType) {
  try {
    console.log("Customer Enquiry API called with:", data);

    // Example real API call:
    // const res = await fetch("/api/customer-enquiry", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });

    return { success: true };
  } catch (err) {
    console.error("Error submitting enquiry:", err);
    return { success: false };
  }
}
