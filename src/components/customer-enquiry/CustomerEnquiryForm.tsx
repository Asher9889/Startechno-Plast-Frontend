import { Controller } from "react-hook-form";
import { useCustomerEnquiryForm } from "./hooks/useCustomerEnquiryForm";
import { useScroll } from "@/components";
import { Spinner } from "../ui";

export default function CustomerEnquiryForm() {
  const { formRef } = useScroll();
  const { form, onSubmit, mutation } = useCustomerEnquiryForm();

  return (
    <section className="w-full bg-[var(--color-bg)] py-16 px-6">
      <div
        ref={formRef}
        className="max-w-3xl mx-auto bg-[var(--color-surface)] p-10 rounded-2xl"
      >
        <h2 className="text-3xl font-bold text-(--color-blue) mb-6 text-center">
          Customer Enquiry
        </h2>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="Your Name"
                  className="p-4 rounded-lg border border-[var(--color-border)] focus:ring-2"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="Your Email"
                  className="p-4 rounded-lg border border-[var(--color-border)] focus:ring-2"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Phone */}
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  placeholder="Your Phone Number"
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "");
                    if (digits.length <= 10) field.onChange(digits);
                  }}
                  className="p-4 rounded-lg border border-[var(--color-border)] focus:ring-2"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Message */}
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <textarea
                  {...field}
                  rows={5}
                  placeholder="Your Message"
                  className="p-4 rounded-lg border border-[var(--color-border)] focus:ring-2 resize-none"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />

          {/* Submit */}
          <button
          disabled={mutation.isPending}
            type="submit"
            className="bg-(--color-blue) text-white font-semibold py-4 rounded-lg hover:scale-[0.99] transition"
          >
            {mutation.isPending ? <Spinner /> : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
