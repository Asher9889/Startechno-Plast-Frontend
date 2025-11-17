import { api, apiEndPoints } from "@/api";
import type { BulkEnquiryType } from "../schema/bulkEnquiryForm.schema";

export async function submitBulkEnquiry(data: BulkEnquiryType) {
  const res = await api.post(apiEndPoints.bulkEnquiry.url, data);
  if (!res.data.success) throw new Error(res.data.message || res.data.errors || "Something went wrong");
  return res.data;
}
