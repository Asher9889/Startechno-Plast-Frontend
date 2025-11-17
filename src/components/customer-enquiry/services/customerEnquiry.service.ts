// src/components/common/customer-enquiry/customerEnquiry.service.ts
import { api, apiEndPoints } from "@/api";
import type { CustomerEnquiryType } from "../schema/CustomerEnquirySchema ";


export async function submitCustomerEnquiry(data: CustomerEnquiryType) {

  const res = await api.post(apiEndPoints.customerEnquiry.url, data)
  if (!res.data.success) {
    throw new Error(res.data.message || res.data.errors || "Something went wrong")
  }
  return res.data
}
