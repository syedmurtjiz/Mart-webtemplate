"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Users, Sparkles } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { ContactInfoCard } from "./ContactInfoCard";
import { ContactForm } from "./ContactForm";

export default function ContactClient() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@martfresh.com",
      sub: "For order inquiries & support",
      href: "mailto:support@martfresh.com"
    },
    {
      icon: Phone,
      title: "Call Center",
      value: "+92 (555) 000-MART",
      sub: "Mon-Sat, 8am - 10pm",
      href: "tel:+925550001234"
    },
    {
      icon: MapPin,
      title: "Main Warehouse",
      value: "123 Fresh Lane, Green Valley",
      sub: "Islamabad, Pakistan",
      href: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        badge={{
          icon: Mail,
          text: "Contact Our Support",
          endIcon: Sparkles
        }}
        title={
          <>
            How can we
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-[#A5D6A7] ml-3">help you?</span>
          </>
        }
        description="Whether you have a question about your order, our fresh produce, or partnership opportunities, our dedicated team is here to assist you."
        stats={[
          {
            icon: Clock,
            label: "Average Response",
            value: "2 Hours"
          },
          {
            icon: Users,
            label: "Expert Support",
            value: "24/7 Available"
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Get in <span className="text-brand-primary">Touch</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We&apos;re committed to providing the best grocery shopping experience. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((item, idx) => (
                <ContactInfoCard key={idx} {...item} />
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 p-8 bg-[#0F2710] rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/10 blur-3xl rounded-full -mr-16 -mt-16" />
              <h3 className="text-white font-bold text-lg mb-6 relative">Connect with us</h3>
              <div className="flex gap-4 relative">
                {['Facebook', 'Instagram', 'Twitter', 'WhatsApp'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-12 h-12 bg-white/10 hover:bg-brand-light text-white rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/10"
                  >
                    <span className="text-[10px] font-bold uppercase">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Frequently Asked <span className="text-brand-primary">Questions</span>
            </h2>
            <p className="text-gray-500 font-medium">Quick answers to common questions about our service and products.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How fast is your grocery delivery?",
                a: "We offer express delivery within 60-90 minutes in major city areas. Standard delivery is usually completed same-day if ordered before 4 PM."
              },
              {
                q: "Where do you source your fresh produce?",
                a: "We partner directly with local organic farms and certified distributors to ensure that you receive the freshest seasonal fruits and vegetables daily."
              },
              {
                q: "What is your return policy for fresh items?",
                a: "If any fresh product doesn't meet your quality expectations, we offer a 'No Questions Asked' replacement or refund if reported within 24 hours of delivery."
              },
              {
                q: "Do you offer subscription for weekly groceries?",
                a: "Yes! You can set up 'MartFresh Subscriptions' for your essentials like milk, bread, and eggs to be delivered automatically on your chosen days."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                <summary className="px-8 py-6 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors flex justify-between items-center font-bold text-lg">
                  {faq.q}
                  <span className="text-brand-light group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                </summary>
                <div className="px-8 pb-6 text-gray-600 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Visit Our <span className="text-brand-primary">Physical Stores</span>
              </h2>
              <p className="text-gray-500 font-medium">Experience the freshness in person. Find the nearest MartFresh store to your location.</p>
            </div>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-black transition-all font-bold text-sm uppercase tracking-widest">
              View All Locations
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "Islamabad",
                address: "Blue Area, Sector F-6",
                phone: "+92 51 111 222 333",
                type: "Flagship Store"
              },
              {
                city: "Lahore",
                address: "Gulberg III, Main Boulevard",
                phone: "+92 42 111 222 333",
                type: "Experience Center"
              },
              {
                city: "Karachi",
                address: "DHA Phase 6, Khayaban-e-Ittehad",
                phone: "+92 21 111 222 333",
                type: "Mega Mart"
              }
            ].map((store, i) => (
              <div key={i} className="group p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-[#0F2710] transition-all duration-500">
                <div className="w-12 h-12 bg-brand-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-light transition-colors">
                  <MapPin className="h-6 w-6 text-brand-primary group-hover:text-white" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-2 group-hover:text-brand-light">
                  {store.type}
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-white transition-colors">
                  {store.city}
                </h3>
                <div className="space-y-2 text-gray-500 group-hover:text-gray-400 transition-colors font-medium">
                  <p>{store.address}</p>
                  <p>{store.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
