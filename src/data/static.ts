import { 
  Search,
  ShoppingCart,
  Truck,
  CheckCircle,
  Leaf,
  Shield,
  Clock,
  Award,
  Heart
} from "lucide-react";
import { 
  Collection, 
  InstagramImage, 
  Step, 
  Feature, 
  Testimonial
} from "@/types";

export const COLLECTIONS: Collection[] = [
  { 
    name: "Grocery", 
    subtitle: "Kitchen Staples", 
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600", 
    count: "500+ items" 
  },
  { 
    name: "Dairy & Fresh", 
    subtitle: "Farm to Table", 
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600", 
    count: "120+ items" 
  },
  { 
    name: "Snacks & Bakery", 
    subtitle: "Sweet & Savory", 
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600", 
    count: "250+ items" 
  },
  { 
    name: "Beverages", 
    subtitle: "Refreshments", 
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600", 
    count: "180+ items" 
  },
  { 
    name: "Vegetables", 
    subtitle: "Organic Produce", 
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600", 
    count: "300+ items" 
  },
];

export const INSTAGRAM_IMAGES: InstagramImage[] = [
  { url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=600", caption: "Farm-fresh carrots 🥕" },
  { url: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=600", caption: "Berry season is here 🍓" },
  { url: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=600", caption: "Weekly farm basket 🧺" },
  { url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=600", caption: "Crisp organic apples 🍎" },
  { url: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=600", caption: "Build your salad 🥗" },
  { url: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=600", caption: "Garden-fresh herbs 🌿" },
];

export const STEPS: Step[] = [
  { number: "01", icon: Search, title: "Browse & Discover", desc: "Explore hundreds of fresh produce items, pantry staples, and organic goods curated by our farm experts.", accent: "#2E7D32", light: "#E8F5E9" },
  { number: "02", icon: ShoppingCart, title: "Add to Cart", desc: "Select your items, choose quantities, and customise your order — all in a seamless experience.", accent: "#FF8F00", light: "#FFF8E1" },
  { number: "03", icon: Truck, title: "Fast Delivery", desc: "We pick, pack, and dispatch your order with temperature-controlled logistics for guaranteed freshness.", accent: "#2E7D32", light: "#E8F5E9" },
  { number: "04", icon: CheckCircle, title: "Enjoy Freshness", desc: "Unbox farm-fresh ingredients the same day and cook healthy, delicious meals for your family.", accent: "#FF8F00", light: "#FFF8E1" },
];

export const FEATURES: Feature[] = [
  { icon: Leaf, number: "01", title: "100% Organic", desc: "All produce is certified organic, sourced exclusively from trusted partner farms.", accent: "#2E7D32", bg: "#E8F5E9" },
  { icon: Shield, number: "02", title: "Quality Assured", desc: "Every item passes strict freshness and safety checks by our in-house quality team.", accent: "#FF8F00", bg: "#FFF8E1" },
  { icon: Truck, number: "03", title: "Express Delivery", desc: "Same-day and next-day delivery with real-time tracking, direct from the farm.", accent: "#2E7D32", bg: "#E8F5E9" },
  { icon: Clock, number: "04", title: "Always Fresh", desc: "Our cold-chain logistics keep every item at peak freshness from harvest to you.", accent: "#FF8F00", bg: "#FFF8E1" },
  { icon: Award, number: "05", title: "Top Rated", desc: "Trusted by 50,000+ families with a 4.9 ★ rating across 12,500+ reviews.", accent: "#2E7D32", bg: "#E8F5E9" },
  { icon: Heart, number: "06", title: "Community First", desc: "We partner directly with local farmers, supporting fair wages and sustainability.", accent: "#FF8F00", bg: "#FFF8E1" },
];

export const TESTIMONIALS: Testimonial[] = [
  { text: "FreshCart has completely transformed how I shop for groceries. Everything is always so fresh and delivery is fast!", author: "Arsalan Malik", location: "Karachi", initials: "AM", color: "#2E7D32", bg: "#E8F5E9" },
  { text: "The organic vegetables were fresher than anything I've found at local markets. Top-notch quality every time.", author: "Zoya Ahmed", location: "Lahore", initials: "ZA", color: "#FF8F00", bg: "#FFF8E1" },
  { text: "Amazing quality and fair prices. The farm-fresh dairy products taste completely different — so natural.", author: "Rohan Siddiqui", location: "Islamabad", initials: "RS", color: "#2E7D32", bg: "#E8F5E9" },
  { text: "Same-day delivery is a game changer. I ordered in the morning and had fresh fruits on my table by noon!", author: "Dania Aziz", location: "Multan", initials: "DA", color: "#FF8F00", bg: "#FFF8E1" },
];
