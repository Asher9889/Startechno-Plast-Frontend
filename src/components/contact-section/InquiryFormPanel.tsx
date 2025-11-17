import { Send } from "lucide-react";
import { motion } from "framer-motion";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "../ui";
import { useEnquiryForm } from "./hooks/useEnquiryForm";
import { Controller } from "react-hook-form";
import { foundHowOptions } from "./schema/enquiry.schema";
import { useScroll } from "@/components";

export function InquiryFormPanel() {
  const { formRef } = useScroll();
  const { form, onSubmit } = useEnquiryForm();


  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <form
        ref={formRef}
        className="space-y-4 h-full flex flex-col rounded-xl p-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-semibold">Send an Enquiry</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <div>

                <Input
                  placeholder="Enter your full name"
                  {...field}
                />

                {form.formState.errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="company"
            control={form.control}
            render={({ field }) => (
              <div>

                <Input
                  placeholder="Your company"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (e.target.value.trim() === "") {
                      field.onChange(undefined);
                    }
                  }}
                />

                {form.formState.errors.company && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.company.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <div>

                <Input
                  placeholder="name@company.com"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (e.target.value.trim() === "") {
                      field.onChange(undefined);
                    }
                  }}
                />

                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="phone"
            control={form.control}
            render={({ field }) => (
              <div>

                <Input
                  placeholder="+91—"
                  {...field}
                />

                {form.formState.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <Controller
          name="message"
          control={form.control}
          render={({ field }) => (
            <div>
              <Textarea
                placeholder="Briefly describe your requirements, materials, quantities, tolerances."
                className="h-28"
                {...field}
              />

              {form.formState.errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="foundHow"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger >
                  <SelectValue placeholder="How did you hear about us?" />
                </SelectTrigger>
                <SelectContent>

                  {foundHowOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.error && (
                <p className="text-red-500 text-xs mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* <Select>
          <SelectTrigger>
            <SelectValue placeholder="How did you hear about us?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google</SelectItem>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
            <SelectItem value="reference">Reference</SelectItem>
          </SelectContent>
        </Select> */}

        <Button className="bg-[#0A3D62] hover:bg-[#082F4D] text-white px-6 py-6 rounded-xl text-sm flex items-center gap-2">
          <Send size={16} /> Send Inquiry
        </Button>

        <div className="flex-1"></div>
      </form>
    </motion.section>
  );
}
