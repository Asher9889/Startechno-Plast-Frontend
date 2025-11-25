import { z } from "zod";


export const categoryOptions = ["Power banks", "Chargers", "Bluetooth Speakers", "Neckbands", "Earbuds", "Electronic Lighters"] as const;
// const Products = navItems && navItems.filter((item) => item.name === "Products");
// export const categoryOptions = Products[0].children.map((item) => item.name);

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
