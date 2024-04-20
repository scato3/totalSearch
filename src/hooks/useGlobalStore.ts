import { createStore } from "zustand";

interface FavoriteItem {
  id: string;
  name: string;
  link: string;
  img: string;
  region: string;
  price: string;
  time: string;
  tag: string;
}

interface FavoritesStore {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (pid: string) => void;
}

export const useFavoritesStore = createStore<FavoritesStore>((set) => ({
  favorites: [],
  addToFavorites: (item) => set((state) => ({ favorites: [...state.favorites, item] })),
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
}));
