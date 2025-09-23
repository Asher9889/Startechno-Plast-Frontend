"use client";
import React, { useState } from "react";

const CustomerEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your enquiry has been submitted.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="w-full bg-[var(--color-bg)] py-16 px-6">
      <div className="max-w-3xl mx-auto bg-[var(--color-surface)] p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-(--color-blue) mb-6 text-center">
          Customer Enquiry
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-4 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-4 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] transition"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
            className="p-4 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] transition"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="p-4 rounded-lg border border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] transition resize-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-(--color-blue) hover:scale-[0.99] cursor-pointer text-white font-semibold py-4 rounded-lg transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default CustomerEnquiryForm;
