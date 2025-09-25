import { category } from "@/config";
import { useForm, ValidationError } from "@formspree/react";

export default function BulkEnquiryForm() {
  const [state, handleSubmit] = useForm("mvgwgbjk");

  if (state.succeeded) {
    return (
      <p className="text-center font-semibold text-green-600">
        Thanks for your enquiry! We will contact you soon.
      </p>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl p-6 shadow-xl bg-(--color-white-bg) text-(--color-black-text)"
      >
        {/* Header */}
        <div className="bg-(--color-blue) text-white text-center py-3 rounded-lg mb-6">
          <h2 className="font-bold text-lg">BULK ENQUIRY NOW</h2>
        </div>

        {/* Name */}
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full mb-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mb-4" />

        {/* Phone */}
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
          Your Phone No.
        </label>
        <div className="flex items-center mb-1 rounded-md border border-gray-300 px-3 py-2 bg-white">
          <span className="mr-2">🇮🇳 +91</span>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="81234 56789"
            className="flex-1 outline-none"
            required
            pattern="[0-9]{10}"   // allows only 10 digits
            title="Phone number must be 10 digits"
          />
        </div>
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mb-4" />

        {/* Category */}
        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
          Select Categories
        </label>
        <select
          id="category"
          name="category"
          defaultValue=""
          className="w-full mb-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="" disabled>
            Choose a category
          </option>
          {category.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <ValidationError prefix="Category" field="category" errors={state.errors} className="text-red-500 text-sm mb-4" />

        {/* City */}
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-700">
          Your City
        </label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Enter your city"
          className="w-full mb-6 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <ValidationError prefix="City" field="city" errors={state.errors} className="text-red-500 text-sm mb-4" />

        {/* Submit */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full rounded-md bg-(--color-blue) text-white py-3 font-semibold hover:opacity-90 transition cursor-pointer hover:scale-[0.99]"
        >
          {state.submitting ? "Sending..." : "INQUIRE NOW"}
        </button>
      </form>
    </div>
  );
}
