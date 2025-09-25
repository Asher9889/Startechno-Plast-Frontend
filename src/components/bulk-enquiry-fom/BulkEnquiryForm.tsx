import { category } from "@/config"
import { useState } from "react"

export default function BulkEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    city: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", form)
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
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Phone */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your Phone No.
        </label>
        <div className="flex items-center mb-4 rounded-md border border-gray-300 px-3 py-2 bg-white">
          <span className="mr-2">🇮🇳 +91</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="81234 56789"
            className="flex-1 outline-none"
          />
        </div>

        {/* Categories */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Select Categories
        </label>
        
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {category.map((cat, _) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* City */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Your City
        </label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Enter your city"
          className="w-full mb-6 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-md bg-(--color-blue) text-white py-3 font-semibold hover:opacity-90 transition cursor-pointer hover:scale-[0.99]"
        >
          INQUIRE NOW
        </button>
      </form>
    </div>
  )
}
