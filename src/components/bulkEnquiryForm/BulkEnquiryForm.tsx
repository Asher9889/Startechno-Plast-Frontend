import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useBulkEnquiryForm } from "../../components/bulkEnquiryForm/hooks/useBulkEnquiryForm";
import { Controller } from "react-hook-form";
import FormLabel from "../form-label/FormLabel";
import { BulkEnquirySchema } from "./schema/bulkEnquiryForm.schema";
import { useMemo } from "react";

const BulkEnquiryForm = () => {
  const { form, onSubmit } = useBulkEnquiryForm();
  const schema = useMemo(() => BulkEnquirySchema.shape, []);

  return (
    <section className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border">
      {/* Header */}
      <div className="bg-(--color-blue) text-white text-center py-4 font-semibold text-lg">
        BULK ENQUIRY NOW
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-6 space-y-4">
          {/* Name */}
          <Controller
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <div>
                <FormLabel schema={schema} name="name" htmlFor="name">
                  Your Name
                </FormLabel>

                <Input
                  id="name"
                  {...field}
                  placeholder="Enter your name"
                  className="mt-1 text-black placeholder:text-gray-500"
                />

                {fieldState.error && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* Phone Number */}
          <Controller
            control={form.control}
            name="phone"
            render={({ field, fieldState }) => (
              <div>
                <FormLabel schema={schema} name="phone" htmlFor="phone">
                  Your Phone No.
                </FormLabel>

                <div className="flex gap-2 mt-1">
                  <div className="min-w-[80px] bg-gray-100 flex items-center justify-center font-medium text-gray-700 rounded-md border px-2">
                    IN +91
                  </div>

                  <Input
                    id="phone"
                    {...field}
                    placeholder="81234 56789"
                    className="text-black placeholder:text-gray-500"
                    onChange={(e) => {
                      const input = e.target.value;
                      const onlyDigit = input.replace(/\D/g, "");
                      if (onlyDigit.length <= 10) {
                        field.onChange(onlyDigit);
                      }
                    }}
                    inputMode="numeric"
                  />
                </div>

                {fieldState.error && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* Category */}
          <Controller
            control={form.control}
            name="category"
            render={({ field, fieldState }) => (
              <div>
                <FormLabel schema={schema} name="category" htmlFor="category">
                  Select Category
                </FormLabel>

                <Select  value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="category" className="mt-1 text-black placeholder:text-gray-500">
                    <SelectValue placeholder="Choose a category" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="plastic">Plastic Components</SelectItem>
                    <SelectItem value="molding">Injection Molding</SelectItem>
                    <SelectItem value="tooling">Tooling Design</SelectItem>
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

          <Controller
            control={form.control}
            name="city"
            render={({ field, fieldState }) => (
              <div>
                <FormLabel schema={schema} name="city" htmlFor="city">
                  Your City
                </FormLabel>

                <Input
                  id="city"
                  {...field}
                  placeholder="Enter your city"
                  className="mt-1 text-black placeholder:text-gray-500"
                />

                {fieldState.error && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* CTA */}
          <Button
            className="w-full bg-(--color-blue) hover:bg-[#041f40] text-white font-semibold py-6 rounded-lg"
            type="submit"
          >
            INQUIRE NOW
          </Button>

          {/* Footer Text */}
          <p className="text-xs text-center text-gray-500 mt-2">
            We typically respond within 24 working hours.
          </p>
        </div>
      </form>
    </section>
  );
};

export default BulkEnquiryForm;
