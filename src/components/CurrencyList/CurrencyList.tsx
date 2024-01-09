import style from "./CurrencyList.module.css";
import { useAssets } from "@/hooks/useAssets";
import { CurrencyItem } from "../CurrencyItem";

// renders a list of CurrencyItem's
export const CurrencyList = () => {
  const { assets, error } = useAssets();

  if (assets === null) return <div>No currencies available to show</div>

  return (
    <section className={style.list}>
      {assets.map((asset, i) =>
        <CurrencyItem
          key={i}
          id={asset.id}
          name={asset.name}
          rank={asset.rank}
          symbol={asset.symbol}
          price={asset.priceUsd}
          isFavorite={true}
        />)}
    </section>)
}