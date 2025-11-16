import { z } from "zod";

export const BulkEnquirySchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(1, "Phone Number is Required")
    .regex(/^[6-9][0-9]{9}$/, "Please Enter a valid Phone Number"),
  category: z.string().min(1, "Please Select a Cotegory"),
  city: z
    .string()
    .min(1, "City is Required")
    .min(4, "City must be at least 4 characters"),
});

export type BulkEnquiryType = z.infer<typeof BulkEnquirySchema>;
