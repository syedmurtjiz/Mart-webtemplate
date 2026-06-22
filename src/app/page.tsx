import { Hero } from "@/components/home/Hero";
import { FlashSale } from "@/components/home/FlashSale";
import { CategoryFilter } from "@/components/home/CategoryFilter";
import { CollectionList } from "@/components/home/CollectionList";
import { ProductSection } from "@/components/product/ProductSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { CTASection } from "@/components/home/CTASection";
import { products } from "@/data/products";

export const metadata = {
  title: "MartFresh | Fresh Organic Groceries Delivered to Your Doorstep",
  description: "Shop farm-fresh organic produce, premium dairy, and daily household essentials. Fast delivery, quality guaranteed at MartFresh.",
};

export default function Home() {
  const featuredProducts = products.filter(p => p.isFeatured);
  const flashSaleProducts = products.filter(p => (p.discount ?? 0) > 20);
  const premiumProducts = products.filter(p => p.category === 'dairy');
  const essentialProducts = products.filter(p => p.category === 'vegetables');

  return (
    <main className="min-h-screen bg-brand-bg font-sans">
      <Hero />
      
      <FlashSale products={flashSaleProducts} />
      
      <CategoryFilter />
      
      <CollectionList />
      
      {premiumProducts.length > 0 && (
        <ProductSection 
          badge="The Selection"
          title="Premium"
          highlightedTitle="Dairy & Eggs"
          description="Discover our curated collection of high-quality dairy products, fresh from the farm."
          products={premiumProducts}
        />
      )}
      
      {essentialProducts.length > 0 && (
        <ProductSection 
          badge="Best Sellers"
          title="Daily"
          highlightedTitle="Fresh Vegetables"
          description="Your everyday essentials — fresh, healthy, and organic vegetables."
          products={essentialProducts}
          bgColor="bg-[#E8F5E9]"
        />
      )}
      
      <ProcessSteps />
      
      <Features />
      
      <Testimonials />
      
      <InstagramFeed />
      
      <CTASection />
    </main>
  );
}
