import React from "react";
import CartClient from "@/components/cart/CartClient";

export const metadata = {
  title: "Shopping Cart | MartFresh",
  description: "Review items in your MartFresh shopping cart, apply promo codes, and proceed to checkout for fresh grocery delivery.",
};

export default function CartPage() {
  return <CartClient />;
}
