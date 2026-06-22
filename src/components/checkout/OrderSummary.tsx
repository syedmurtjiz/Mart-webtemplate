import React from "react";
import { CheckCircle2, Truck, ChevronRight, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { Product } from "@/types";

interface CartItem extends Product {
  quantity: number;
}

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

export const OrderSummary = ({ items, subtotal, shipping, total }: OrderSummaryProps) => {
  return (
    <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 md:p-12 sticky top-32 space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center">
          <CheckCircle2 className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-xl font-black text-gray-900 tracking-tighter italic uppercase">Order Summary</h2>
      </div>

      {/* Items List */}
      <div className="max-h-[400px] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-16 h-16 bg-[#E8F5E9] rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 relative">
              <ImageWithFallback 
                src={item.image} 
                alt={item.name} 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-black text-gray-900 uppercase italic tracking-tight truncate">{item.name}</h4>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Qty: {item.quantity}</p>
                <p className="text-xs font-black text-brand-primary italic">Rs {(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4 py-8 border-y border-gray-100">
        <div className="flex items-center justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
          <span>Subtotal</span>
          <span className="text-gray-900 text-sm italic font-black">Rs {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
          <span>Shipping Fee</span>
          {shipping === 0 ? (
            <span className="text-brand-primary text-sm italic font-black uppercase tracking-widest">FREE</span>
          ) : (
            <span className="text-gray-900 text-sm italic font-black">Rs {shipping.toLocaleString()}</span>
          )}
        </div>
        {subtotal < 15000 && (
          <div className="bg-[#E8F5E9] rounded-2xl p-4 flex items-center gap-3">
            <Truck className="h-4 w-4 text-brand-primary" />
            <p className="text-[9px] font-bold text-brand-primary uppercase tracking-widest leading-relaxed">
              Add <span className="font-black italic">Rs {(15000 - subtotal).toLocaleString()}</span> more for <span className="font-black italic">FREE</span> shipping!
            </p>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">Total Amount</h3>
            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">Includes all taxes and fees</p>
          </div>
          <span className="text-4xl font-black text-brand-primary tracking-tighter italic">
            Rs {total.toLocaleString()}
          </span>
        </div>

        <Button 
          type="submit"
          variant="primary" 
          fullWidth 
          size="lg" 
          className="py-6 rounded-[2rem] text-lg"
        >
          Place Order <ChevronRight className="ml-2 h-5 w-5" />
        </Button>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-brand-primary" />
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Guaranteed Safe Checkout</span>
          </div>
          <div className="flex gap-4 grayscale opacity-30">
            <ImageWithFallback src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-3 w-auto" width={40} height={12} />
            <ImageWithFallback src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-3 w-auto" width={20} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
