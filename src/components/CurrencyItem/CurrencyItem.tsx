import Link from "next/link";
import style from "./CurrencyItem.module.css";
import { formatCurrency } from "@/utils/numberFormats";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface CurrencyItemProps {
  id: string,
  name: string,
  rank: string,
  symbol: string,
  price: string,
  isFavorite: boolean,
}

export const CurrencyItem = ({
  id,
  name,
  rank,
  symbol,
  price,
  isFavorite
}: CurrencyItemProps) => {
  return(<Link className={style.item} href={`/details/${id}`}>
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
  </Link>)
}