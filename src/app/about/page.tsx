import { Leaf, Award, Sparkles, Users, Globe, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { PageHero } from "@/components/common/PageHero";

export const metadata = {
  title: "About Us | MartFresh",
  description: "Learn more about MartFresh, our mission to deliver organic farm-fresh produce, and our commitment to supporting local farming communities.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <PageHero
        badge={{
          icon: Sparkles,
          text: "Our Story"
        }}
        title={
          <>
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-[#A5D6A7] ml-3">MartFresh</span>
          </>
        }
        description="Delivering the freshest organic produce and quality groceries to your doorstep with care and convenience."
        stats={[
          {
            icon: Globe,
            label: "Presence",
            value: "Across Pakistan"
          },
          {
            icon: Users,
            label: "Community",
            value: "50k+ Families"
          }
        ]}
      />

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#E8F5E9] border border-brand-primary/10 rounded-lg mb-6">
              <span className="text-xs text-brand-primary font-black uppercase tracking-widest">The Origin</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter">
              Grown for <span className="text-brand-primary">Freshness.</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-base md:text-lg font-medium leading-relaxed">
              <p>
                MartFresh was born from a simple mission: to bring the freshest organic produce and quality groceries directly to your doorstep. We don&apos;t just sell food; we deliver health and convenience to families everywhere.
              </p>
              <p>
                Inspired by nature&apos;s bounty and modern convenience, our sourcing partners ensure that every item meets the highest standards of quality and freshness. From farm to table, we carefully select products that nourish your body and delight your taste buds.
              </p>
              <p>
                We serve everyone. From busy families to health-conscious individuals and culinary enthusiasts. Whether you&apos;re planning daily meals or special occasions, MartFresh provides the quality ingredients you need for a healthy lifestyle.
              </p>
              <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-px bg-gray-200"></div>
                <p className="text-gray-400 font-black uppercase tracking-widest text-xs italic">
                  Fresh. Organic. Healthy.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group mt-12 md:mt-0">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] bg-white relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1080"
                alt="MartFresh Fresh Produce"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-[#1F2937] text-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl max-w-[160px] md:max-w-xs border border-white/10 z-10">
              <p className="text-3xl md:text-5xl font-black italic mb-2 tracking-tighter text-brand-light">50K+</p>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-widest opacity-60">Happy Families Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#E8F5E9]/50 py-20 md:py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 md:mb-8 tracking-tighter">
              Our Core <span className="text-brand-primary">Values</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Every MartFresh product is governed by a dedication to freshness and quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Leaf className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">Freshness</h3>
              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                We source only the freshest organic produce and quality ingredients daily from trusted local farms.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Award className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">Quality</h3>
              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                Rigorous quality checks on every product. Only the best items make it to your doorstep.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <ShoppingBag className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">Convenience</h3>
              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                Fast delivery and easy ordering. Grocery shopping made simple for your busy lifestyle.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">Community</h3>
              <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                Supporting local farmers and building a healthier community, one meal at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gray-900 rounded-[2rem] md:rounded-[4rem] p-10 md:p-24 text-white text-center shadow-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-10 tracking-tighter italic">Our Mission</h2>
          <p className="text-lg md:text-3xl max-w-5xl mx-auto opacity-80 leading-[1.4] font-medium tracking-tight">
            &quot;To provide every family with the freshest organic produce and quality groceries. We aim to improve your daily life through better food choices and convenient delivery.&quot;
          </p>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-brand-bg py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="group">
              <div className="text-4xl md:text-7xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter italic group-hover:text-brand-primary transition-all">
                50K+
              </div>
              <div className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Happy Families</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-7xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter italic group-hover:text-brand-primary transition-all">
                500+
              </div>
              <div className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Organic Products</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-7xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter italic group-hover:text-brand-primary transition-all">
                4.9★
              </div>
              <div className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Customer Rating</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-7xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter italic group-hover:text-brand-primary transition-all">
                24/7
              </div>
              <div className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Fast Delivery</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
