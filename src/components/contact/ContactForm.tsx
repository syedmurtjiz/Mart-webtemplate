import React, { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/Input";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent. Our team will get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/5 blur-[100px] -mr-48 -mt-48" />
      
      <div className="relative mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
          Send us a <span className="text-brand-primary">Message</span>
        </h2>
        <p className="text-gray-500 font-medium">
          Have a specific inquiry? Fill out the form below and we&apos;ll get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
              Full Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
            Inquiry Category
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:border-brand-light transition-all appearance-none cursor-pointer font-medium text-gray-900"
          >
            <option value="">Select a category</option>
            <option value="order">Order Tracking</option>
            <option value="delivery">Delivery Issues</option>
            <option value="product">Product Quality</option>
            <option value="partnership">Vendor Partnership</option>
            <option value="other">General Inquiry</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-light/20 focus:border-brand-light transition-all resize-none font-medium text-gray-900"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-5 bg-brand-primary text-white rounded-2xl hover:bg-[#1B5E20] transition-all duration-300 shadow-xl shadow-green-900/20 flex items-center justify-center gap-3 group font-bold uppercase tracking-widest text-xs"
        >
          <span>Send Message</span>
          <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};
