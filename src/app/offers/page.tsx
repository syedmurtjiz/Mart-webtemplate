import Link from "next/link";
import { Tag, Sparkles, Percent, ShoppingBag, Clock, CheckCircle2, Zap, Gift, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";

export const metadata = {
  title: "Exclusive Deals & Offers | MartFresh",
  description: "Check out current deals, flash sales, seasonal discounts, and first-order coupon codes at MartFresh grocery store.",
};

export default function OffersPage() {
    return (
        <main className="min-h-screen bg-white">
            
            {/* Hero Section */}
            <PageHero
                badge={{
                    icon: Tag,
                    text: "Exclusive Savings · Limited Time",
                    endIcon: Sparkles
                }}
                title={
                    <>
                        Current
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-[#A5D6A7] ml-3">Offers</span>
                    </>
                }
                description="Discover our latest deals, seasonal discounts, and exclusive bundles on fresh organic produce at MartFresh."
                stats={[
                    {
                        icon: Percent,
                        label: "Max Discount",
                        value: "Up to 50% Off"
                    },
                    {
                        icon: Clock,
                        label: "Validity",
                        value: "Limited Time"
                    }
                ]}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Offers Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm group hover:border-brand-primary/30 transition-all duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                            <ShoppingBag className="h-8 w-8 text-brand-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Bundle & Save</h3>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed">Save 15% when you buy 3 or more items from our organic vegetable collection.</p>
                    </div>

                    <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm group hover:border-brand-primary/30 transition-all duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                            <Zap className="h-8 w-8 text-brand-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Flash Deals</h3>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed">Daily flash sales on seasonal fruits. Get them before they&apos;re gone!</p>
                    </div>

                    <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm group hover:border-brand-primary/30 transition-all duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500">
                            <Gift className="h-8 w-8 text-brand-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">First Order</h3>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed">New to MartFresh? Use code MART20 for 20% off your first delivery.</p>
                    </div>
                </div>

                {/* Detailed Sections */}
                <div className="space-y-12">
                    {/* SEASONAL SPECIALS */}
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden relative group">
                        <div className="p-10 md:p-16 relative z-10">
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg">
                                    <TrendingUp className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Seasonal <span className="text-brand-primary">Specials</span></h2>
                            </div>

                            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-12 max-w-4xl">
                                We celebrate every season with special pricing on the freshest harvests. Check back regularly for updated seasonal offerings.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <section className="space-y-4">
                                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                                        <Percent className="h-4 w-4 text-brand-primary" />
                                      </div>
                                        Active Promotions
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <Zap className="h-5 w-5 text-brand-primary" />
                                            <p className="text-sm font-bold text-gray-700 uppercase tracking-widest">Summer Fruits: 30% OFF</p>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <TrendingUp className="h-5 w-5 text-brand-primary" />
                                            <p className="text-sm font-bold text-gray-700 uppercase tracking-widest">Organic Greens: Buy 2 Get 1</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                                        <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                                      </div>
                                        How to Redeem
                                    </h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        Most discounts are automatically applied at checkout. For coupon codes, simply enter them in the promo box during payment.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FINAL CTA SECTION */}
                <div className="mt-20 text-center bg-brand-primary rounded-3xl p-12 md:p-20 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent)] opacity-100"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20">
                          <Gift className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight uppercase">Don&apos;t Miss <span className="text-white/60">Out!</span></h2>
                        <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto mb-10">
                            Our best offers are updated weekly. Sign up for our newsletter to receive exclusive deals directly in your inbox.
                        </p>
                        <div className="flex justify-center">
                            <Link href="/shop" className="px-10 py-5 bg-white text-brand-primary rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs">
                                <ShoppingBag className="h-4 w-4" />
                                Start Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
