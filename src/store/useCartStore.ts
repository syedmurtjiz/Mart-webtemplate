import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from '@/types'

interface CartState {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const existing = get().items.find(i => i.id === product.id)
        if (existing) {
          set({
            items: get().items.map(i =>
              i.id === product.id
                ? { ...i, quantity: i.quantity + quantity }
                : i
            )
          })
        } else {
          set({ items: [...get().items, { ...product, quantity }] })
        }
      },
      removeItem: (productId) =>
        set({ items: get().items.filter(i => i.id !== productId) }),
      updateQuantity: (productId, quantity) =>
        set({
          items: get().items.map(i =>
            i.id === productId ? { ...i, quantity } : i
          )
        }),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'freshcart-cart' }
  )
)

export const useCartTotal = () => {
  const items = useCartStore(state => state.items);
  return React.useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );
};

export const useCartCount = () => {
  const items = useCartStore(state => state.items);
  return React.useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items]
  );
};
