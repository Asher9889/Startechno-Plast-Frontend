import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";

export default function BulkEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    city: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // 👉 API integration goes here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center px-4 bg-white"
    >
      <div className="w-full max-w-md rounded-2xl shadow-xl border border-(--color-border)">
        {/* Header */}
        <CardHeader className="bg-(--color-primary) text-white text-center rounded-t-2xl py-6">
          <CardTitle className="text-xl font-semibold tracking-wide">
            Bulk Enquiry Now
          </CardTitle>
          <p className="text-sm text-white/80 mt-1">
            Get in touch for wholesale pricing
          </p>
        </CardHeader>

        {/* Body */}
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-(--color-text)">
                Your Name <span className="text-(--color-error)">*</span>
              </label>
              <Input
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="mt-2 border border-(--color-border) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary-light)"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-(--color-text)">
                Phone Number <span className="text-(--color-error)">*</span>
              </label>
              <Input
                placeholder="081234 56789"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="mt-2 border border-(--color-border) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary-light)"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-(--color-text)">
                Category
              </label>
              <Select onValueChange={(val) => handleChange("category", val)}>
                <SelectTrigger className="mt-2 border border-(--color-border) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary-light)">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cables">USB Cables</SelectItem>
                  <SelectItem value="chargers">Chargers</SelectItem>
                  <SelectItem value="adapters">Adapters</SelectItem>
                  <SelectItem value="accessories">Mobile Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-(--color-text)">
                City
              </label>
              <Input
                placeholder="Enter your city"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="mt-2 border border-(--color-border) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary-light)"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-(--color-primary) text-white py-3 rounded-xl font-medium tracking-wide shadow-md hover:bg-(--color-primary-light) transition-colors"
            >
              Inquire Now
            </Button>
          </form>
        </CardContent>
      </div>
    </motion.div>
  );
}
