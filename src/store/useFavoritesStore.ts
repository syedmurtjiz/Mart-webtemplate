import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types'

interface FavoritesState {
  items: Product[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  isFavorite: (productId: string) => boolean
  clearFavorites: () => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const existing = get().items.find(i => i.id === product.id)
        if (!existing) {
          set({ items: [...get().items, product] })
        }
      },
      removeItem: (productId) =>
        set({ items: get().items.filter(i => i.id !== productId) }),
      isFavorite: (productId) => get().items.some(i => i.id === productId),
      clearFavorites: () => set({ items: [] }),
    }),
    { name: 'freshcart-favorites' }
  )
)
