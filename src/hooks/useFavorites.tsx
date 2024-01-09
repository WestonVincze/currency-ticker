"use client"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

const KEY = "favorites";

interface FavoritesContextProps {
  favorites: string[];
  isInFavorites: (id: string) => boolean;
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(KEY);

    if (storedFavorites) {
      setFavorites(storedFavorites.split(","));
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

    const newFavorites = favorites.filter((f) => f !== id);
    setFavorites(newFavorites);
    localStorage.setItem(KEY, newFavorites.join(","));
  }

  const contextValue: FavoritesContextProps = {
    favorites,
    isInFavorites,
    addToFavorites,
    removeFromFavorites,
  }

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  )
};

const useFavorites = (): FavoritesContextProps => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavorites must be used within a FavoritesProvider"
    )
  }

  return context;
};

export { FavoritesProvider, useFavorites };
