import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (property) => {
        const { favorites } = get();
        if (!favorites.some(f => f.id === property.id)) {
          set({ favorites: [...favorites, property] });
        }
      },

      removeFavorite: (propertyId) => {
        const { favorites } = get();
        set({ favorites: favorites.filter(f => f.id !== propertyId) });
      },

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorites",
    }
  )
);