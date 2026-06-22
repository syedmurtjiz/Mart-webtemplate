import React from "react";
import FavoritesClient from "@/components/favorites/FavoritesClient";

export const metadata = {
  title: "Your Favorites | MartFresh",
  description: "View and manage your saved organic grocery items and favorite products at MartFresh wishlist.",
};

export default function FavoritesPage() {
  return <FavoritesClient />;
}
