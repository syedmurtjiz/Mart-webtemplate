import React from "react";
import CheckoutClient from "@/components/checkout/CheckoutClient";

export const metadata = {
  title: "Secure Checkout | MartFresh",
  description: "Complete your order securely at MartFresh. Select your payment method and shipping address for organic grocery delivery.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
