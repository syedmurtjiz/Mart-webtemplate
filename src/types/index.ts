import { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  stock?: number;
  maxStock?: number;
  isNew: boolean;
  isFeatured: boolean;
  description: string;
  unit: string;
  badge?: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  productCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Collection {
  name: string;
  subtitle: string;
  image: string;
  count: string;
}

export interface InstagramImage {
  url: string;
  caption: string;
}

export interface Testimonial {
  text: string;
  author: string;
  location: string;
  initials: string;
  color: string;
  bg: string;
}

export interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
  light: string;
}

export interface Feature {
  icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
  accent: string;
  bg: string;
}
