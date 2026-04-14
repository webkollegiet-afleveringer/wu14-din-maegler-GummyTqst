import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: (user, token) => set({ user, token }),

      logout: () => {
        // Clear favorites store too — import inline to avoid circular deps
        import("./useFavoritesStore").then(({ useFavoritesStore }) => {
          useFavoritesStore.getState().clearFavorites();
        });
        set({ user: null, token: null });
      },
    }),
    {
      name: "auth", // localStorage key
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);