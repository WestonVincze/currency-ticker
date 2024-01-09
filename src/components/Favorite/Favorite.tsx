import styles from "./Favorite.module.css";
import { useFavorites } from "@/hooks/useFavorites";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface FavoriteProps {
  id: string,
}

export const Favorite = ({ id }: FavoriteProps) => {
  const { isInFavorites, addToFavorites, removeFromFavorites } = useFavorites();

  const handleClick = () => {
    if (isInFavorites(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  }

  return (
    <button className={styles.favorite} onClick={handleClick}>
      {isInFavorites(id) ? <FaHeart /> : <FaRegHeart />}
    </button>
  )
};
