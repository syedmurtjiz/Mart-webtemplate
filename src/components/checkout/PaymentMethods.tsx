import React from "react";
import { CreditCard, Truck } from "lucide-react";
import { Input } from "@/components/ui/Input";

interface PaymentMethodsProps {
  paymentMethod: "card" | "cod";
  setPaymentMethod: (method: "card" | "cod") => void;
}

export const PaymentMethods = ({ paymentMethod, setPaymentMethod }: PaymentMethodsProps) => {
  return (
    <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 p-8 md:p-12">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] flex items-center justify-center">
          <CreditCard className="h-6 w-6 text-brand-primary" />
        </div>
        <h2 className="text-2xl font-black text-gray-900 tracking-tighter italic uppercase">Payment Method</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button 
          type="button"
          onClick={() => setPaymentMethod("card")}
          className={`p-6 rounded-[2rem] border-2 transition-all text-left flex flex-col gap-4 ${
            paymentMethod === "card" 
              ? "border-brand-primary bg-[#E8F5E9]/20" 
              : "border-gray-100 bg-brand-bg hover:border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              paymentMethod === "card" ? "border-brand-primary" : "border-gray-300"
            }`}>
              {paymentMethod === "card" && <div className="w-3 h-3 rounded-full bg-brand-primary" />}
            </div>
            <CreditCard className={`h-6 w-6 ${paymentMethod === "card" ? "text-brand-primary" : "text-gray-400"}`} />
          </div>
          <div>
            <h3 className="font-black text-gray-900 uppercase italic tracking-tight">Credit / Debit Card</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1 text-balance leading-relaxed">
              Pay securely with your Visa or Mastercard
            </p>
          </div>
        </button>

        <button 
          type="button"
          onClick={() => setPaymentMethod("cod")}
          className={`p-6 rounded-[2rem] border-2 transition-all text-left flex flex-col gap-4 ${
            paymentMethod === "cod" 
              ? "border-brand-primary bg-[#E8F5E9]/20" 
              : "border-gray-100 bg-brand-bg hover:border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              paymentMethod === "cod" ? "border-brand-primary" : "border-gray-300"
            }`}>
              {paymentMethod === "cod" && <div className="w-3 h-3 rounded-full bg-brand-primary" />}
            </div>
            <Truck className={`h-6 w-6 ${paymentMethod === "cod" ? "text-brand-primary" : "text-gray-400"}`} />
          </div>
          <div>
            <h3 className="font-black text-gray-900 uppercase italic tracking-tight">Cash on Delivery</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1 text-balance leading-relaxed">
              Pay when your groceries arrive at your door
            </p>
          </div>
        </button>
      </div>

      {paymentMethod === "card" && (
        <div className="mt-8 p-8 bg-brand-bg rounded-[2rem] border border-gray-200 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Card Number</label>
            <Input 
              type="text" 
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Expiry Date</label>
              <Input 
                type="text" 
                placeholder="MM / YY"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">CVV</label>
              <Input 
                type="text" 
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
