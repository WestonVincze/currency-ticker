import { useEffect, useState } from "react"

const KEY = "favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(KEY);

    if (storedFavorites) {
      setFavorites(storedFavorites.split(","))
    }
  }, [])

  const isInFavorites = (id: string) => {
    return favorites.indexOf(id) !== -1;
  }

  const addToFavorites = (id: string) => {
    if (isInFavorites(id)) return;

    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    localStorage.setItem(KEY, newFavorites.join(","));
  }

  const removeFromFavorites = (id: string) => {
    if (!isInFavorites(id)) return;

    const newFavorites = favorites.filter(f => f !== id);
    setFavorites(newFavorites)
    localStorage.setItem(KEY, newFavorites.join(","));
  }


  return { favorites, isInFavorites, addToFavorites, removeFromFavorites }
}