// src/components/common/customer-enquiry/CustomerEnquirySchema.ts
import { z } from "zod";


export const foundHowOptions = ["GOOGLE", "LINKEDIN", "REFERENCE", "OTHER"] as const;

export const enquirySchema = z.object({
    name: z.string()
        .min(4, "Name must be at least 4 characters")
        .max(50, "Name must be at most 50 characters")
        .regex(/^[a-zA-Z ]+$/, "Name must be alphabets only"),

    company: z.string().trim().min(4, "Company is required").max(50, "Company must be at most 50 characters")
        .regex(/^[a-zA-Z ]+$/, "Company must be alphabets only").optional(),

    email: z.email("Invalid email address").optional(),

    phone: z
        .string()
        .trim()
        .min(1, "Phone Number is required")
        .regex(/^[6-9][0-9]{9}$/, "Enter a valid 10-digit Indian phone number"),

    message: z
        .string()
        .trim()
        .min(1, "Message is required")
        .min(5, "Message must be at least 5 characters"),
    foundHow: z.enum( foundHowOptions, { error: "Please select valid how you heard about us" }),
});

export type TEnquiry = z.infer<typeof enquirySchema>;
