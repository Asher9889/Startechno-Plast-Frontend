// src/components/common/customer-enquiry/CustomerEnquirySchema.ts
import { z } from "zod";

export const CustomerEnquirySchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  phone: z
    .string()
    .min(1, "Phone Number is required")
    .regex(/^[6-9][0-9]{9}$/, "Enter a valid 10-digit Indian phone number"),

  message: z
    .string()
    .min(1, "Message is required")
    .min(5, "Message must be at least 5 characters"),
});

export type CustomerEnquiryType = z.infer<typeof CustomerEnquirySchema>;
