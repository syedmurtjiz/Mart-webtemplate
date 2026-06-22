import React from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/Input";

export const CheckoutForm = () => {
  return (
    <div className="space-y-8">
      {/* Billing Details */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] flex items-center justify-center">
            <User className="h-6 w-6 text-brand-primary" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tighter italic uppercase">Billing Details</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">First Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="John"
                className="pl-12"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Last Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Doe"
                className="pl-12"
                required
              />
            </div>
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="email" 
                placeholder="john@example.com"
                className="pl-12"
                required
              />
            </div>
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="tel" 
                placeholder="+92 300 1234567"
                className="pl-12"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] flex items-center justify-center">
            <MapPin className="h-6 w-6 text-brand-primary" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tighter italic uppercase">Shipping Address</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Street Address</label>
            <Input 
              type="text" 
              placeholder="House #, Street Name"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">City</label>
              <Input 
                type="text" 
                placeholder="Lahore"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Postal Code</label>
              <Input 
                type="text" 
                placeholder="54000"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
