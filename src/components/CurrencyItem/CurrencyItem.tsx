import Link from "next/link";
import style from "./CurrencyItem.module.css";
import { formatCurrency } from "@/utils/numberFormats";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { memo } from "react";

interface CurrencyItemProps {
  id: string,
  name: string,
  rank: string,
  symbol: string,
  price: string,
  isFavorite: boolean,
}

/**
 * Displays minimal data for currency. Clicking on currency will open a detailed view.
 * Wrapped with `memo` to ensure re-renders only occur when API data changes.
 */
export const CurrencyItem = memo(function CurrencyItem({
  id,
  name,
  rank,
  symbol,
  price,
  isFavorite
}: CurrencyItemProps) {
  return (
    <Link className={style.item} href={`/details/${id}`}>
      <article>
        <header>
          <h2>{name}</h2>
        </header>

        <section>
          <p>1 {symbol} =</p>
          <h2>{formatCurrency(Number(price))}</h2>
        </section>

        <footer>
          <span>#{rank}</span>
          <button>{isFavorite ? <FaHeart /> : <FaRegHeart />}</button>
        </footer>
      </article>
    </Link>
  )
});
