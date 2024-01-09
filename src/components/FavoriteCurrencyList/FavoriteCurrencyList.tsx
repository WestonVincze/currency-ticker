import styles from "./FavoriteCurrencyList.module.css";
import { useAssets } from "@/hooks/useAssets";
import { useFavorites } from "@/hooks/useFavorites";
import { CurrencyList } from "../CurrencyList";

export const FavoriteCurrencyList = () => {
  const { favorites } = useFavorites();
  const { assets } = useAssets({ ids: favorites });

  if (favorites.length === 0) return null;

  return (
    <section className={styles.list}>
      <h2>Your Favorites</h2>
      <CurrencyList assets={assets} skeletons={favorites.length} />
    </section>
  )
};
