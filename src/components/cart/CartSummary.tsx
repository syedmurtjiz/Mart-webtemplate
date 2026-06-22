import React from "react";
import { Tag, X, Zap, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PROMO_CODES } from "@/data/promoCodes";
import { Input } from "@/components/ui/Input";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  appliedPromo: string | null;
  promoError: string;
  onApplyPromo: () => void;
  onRemovePromo: () => void;
}

export const CartSummary = ({
  subtotal,
  discount,
  shipping,
  total,
  promoCode,
  setPromoCode,
  appliedPromo,
  promoError,
  onApplyPromo,
  onRemovePromo,
}: CartSummaryProps) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl p-10 sticky top-32 border border-gray-100 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
          <h2 className="text-xl font-black text-gray-900 tracking-tighter italic uppercase">Order Summary</h2>
        </div>
      </div>

      {/* Promo Code */}
      <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center">
            <Tag className="h-4 w-4 text-brand-primary" />
          </div>
          <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">Promo Code</h3>
        </div>
        
        {appliedPromo ? (
          <div className="flex items-center justify-between bg-[#E8F5E9]/30 border border-brand-primary/10 rounded-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-brand-primary font-black text-xs uppercase tracking-widest">
                {appliedPromo}
              </span>
              <span className="px-2 py-1 bg-brand-primary text-white text-[9px] font-black rounded-lg uppercase shadow-sm">
                -{PROMO_CODES[appliedPromo.toUpperCase()]}% OFF
              </span>
            </div>
            <button
              onClick={onRemovePromo}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white rounded-full transition-all"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="relative group">
            <Input
              type="text"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
              }}
              placeholder="ENTER CODE"
              className="pl-5 pr-24 py-4 bg-brand-bg border border-gray-200 text-xs font-black uppercase placeholder:text-gray-500/40"
            />
            <button
              onClick={onApplyPromo}
              disabled={!promoCode}
              className="absolute right-2 top-2 bottom-2 px-6 bg-brand-primary text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-brand-primary/90 transition-all disabled:opacity-20 disabled:grayscale shadow-md hover:shadow-lg active:scale-95"
            >
              Apply
            </button>
          </div>
        )}

        {promoError && (
          <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-2">{promoError}</p>
        )}
        
        <div className="flex flex-col gap-1.5 px-2">
          {Object.entries(PROMO_CODES).map(([code, pct]) => (
            <div key={code} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/30" />
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Use <span className="text-brand-primary font-black tracking-tighter cursor-pointer hover:underline" onClick={() => setPromoCode(code)}>{code}</span> for {pct}% off
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4 py-6 border-y border-gray-100">
        <div className="flex items-center justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
          <span>Subtotal</span>
          <span className="text-gray-900">Rs {subtotal.toLocaleString()}</span>
        </div>

        {appliedPromo && (
          <div className="flex items-center justify-between text-[10px] font-black text-brand-primary uppercase tracking-widest">
            <span>Discount</span>
            <span>- Rs {discount.toLocaleString()}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
          <span>Shipping Fee</span>
          {shipping === 0 ? (
            <span className="text-brand-primary">FREE</span>
          ) : (
            <span className="text-gray-900">Rs {shipping.toLocaleString()}</span>
          )}
        </div>

        {subtotal < 15000 && (
          <div className="bg-[#E8F5E9] border border-gray-200 rounded-xl p-4">
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-[0.15em] leading-relaxed">
              Add Rs {(15000 - subtotal).toLocaleString()} more to get FREE Delivery!
            </p>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between py-2">
        <span className="text-sm font-black text-gray-900 uppercase tracking-widest">Total Amount</span>
        <span className="text-3xl font-black text-brand-primary tracking-tighter italic">
          Rs {total.toLocaleString()}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <button
          onClick={() => router.push('/checkout')}
          className="w-full py-6 bg-brand-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand-primary/90 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(46,125,50,0.2)] flex items-center justify-center gap-4 group"
        >
          <Zap className="h-4 w-4 group-hover:scale-110 transition-transform" />
          Proceed to Checkout
        </button>

        <Link
          href="/shop"
          className="w-full py-5 border-2 border-gray-200 text-gray-900 rounded-2xl hover:border-brand-primary hover:text-brand-primary transition-all text-center font-black uppercase tracking-[0.2em] text-[10px] block"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Trust Tokens */}
      <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <ShieldCheck className="h-4 w-4 text-brand-primary" />
          <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Secure Payment</span>
        </div>
        <div className="flex flex-col gap-1">
          <Truck className="h-4 w-4 text-brand-primary" />
          <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Fast Delivery</span>
        </div>
      </div>
    </div>
  );
};
