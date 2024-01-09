import styles from "./CurrencyItem.module.css";
import Link from "next/link";
import { formatCurrency } from "@/utils/numberFormats";
import { memo } from "react";
import { Favorite } from "../Favorite";

interface CurrencyItemProps {
  id: string,
  name: string,
  rank: string,
  symbol: string,
  price: string,
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
}: CurrencyItemProps) {
  return (
    <Link className={styles.item} href={`/details/${id}`}>
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
          <Favorite id={id} />
        </footer>
      </article>
    </Link>
  )
});
