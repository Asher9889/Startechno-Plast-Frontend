import type { BulkEnquiryType } from "../schema/bulkEnquiryForm.schema";

export async function submitBulkEnquiry(data: BulkEnquiryType) {
  try {
    console.log("API Calling with data:", data);

    // Example API call
    // const res = await fetch("/api/bulk-enquiry", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    // return await res.json();

    return { success: true }; // mock
  } catch (error) {
    console.error("Bulk Enquiry Error:", error);
    return { success: false };
  }
}
