import type { TEnquiry } from "../schema/enquiry.schema"
import { api, apiEndPoints } from "@/api"

export async function submitEnquiry(data: TEnquiry) {

  const res = await api.post(apiEndPoints.enquiry.url, data)
  if (!res.data.success) {
    throw new Error(res.data.message || res.data.errors || "Something went wrong")
  }
  return res.data
}