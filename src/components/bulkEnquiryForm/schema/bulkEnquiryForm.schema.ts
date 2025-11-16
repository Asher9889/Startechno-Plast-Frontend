import { z } from "zod";


export const categoryOptions = ["Plastic Components", "Injection Moulding", "Tooling Design", "Other"] as const;

export const BulkEnquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z ]+$/, "Please Enter a valid Name"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9][0-9]{9}$/, "Please Enter a valid Phone Number"),
  category: z.enum(categoryOptions, "Please select a valid category"),
  city: z
    .string()
    .trim()
    .min(2, "Please Enter a valid City")
    .regex(/^[a-zA-Z ]+$/, "Please Enter a valid City"),
});

export type BulkEnquiryType = z.infer<typeof BulkEnquirySchema>;
