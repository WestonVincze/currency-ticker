import style from "./CurrencyList.module.css";
import { useAssets } from "@/hooks/useAssets";
import { CurrencyItem } from "../CurrencyItem";
import { useState } from "react";
import { Button } from "../Button";

const ITEM_COUNT = 8;

/**
 * Renders a list of `CurrencyItem`'s with a default of 8
 */
export const CurrencyList = () => {
  const [shownItems, setShownItems] = useState(ITEM_COUNT);
  const { assets, error } = useAssets(shownItems);

  if (assets === null) return <div>No currencies available to show</div>

  const handleShowLess = () => {
    let count = shownItems;
    if (count - ITEM_COUNT <= ITEM_COUNT) {
      setShownItems(ITEM_COUNT);
    } else {
      setShownItems(count - ITEM_COUNT);
    }
  }

  const handleShowMore = () => {
    const count = shownItems;
    setShownItems(count + ITEM_COUNT);
  }

  return (
    <section className={style.list}>
      <h2>All Coins</h2>
      <nav>
        {assets.slice(0, shownItems).map((asset, i) =>
          <CurrencyItem
            key={i}
            id={asset.id}
            name={asset.name}
            rank={asset.rank}
            symbol={asset.symbol}
            price={asset.priceUsd}
            isFavorite={true}
          />)}
      </nav>
      <footer>
        {shownItems > ITEM_COUNT && <Button label="Show Less" onClick={handleShowLess} />}
        <Button label="Show More" onClick={handleShowMore} />
      </footer>
    </section>
  )
};
