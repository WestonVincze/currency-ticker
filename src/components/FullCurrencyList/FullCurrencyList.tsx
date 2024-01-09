import styles from "./FullCurrencyList.module.css";
import { useAssets } from "@/hooks/useAssets";
import { useState } from "react";
import { Button } from "../Button";
import { CurrencyList } from "../CurrencyList";

const ITEM_COUNT = 8;

/**
 * Renders a list of `CurrencyItem`'s with a default of 8
 */
export const FullCurrencyList = () => {
  const [shownItems, setShownItems] = useState(ITEM_COUNT);
  const { assets } = useAssets({limit: shownItems });

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
    <section className={styles.list}>
      <h2>All Coins</h2>
      <CurrencyList assets={assets} skeletons={shownItems} />
      <footer>
        {shownItems > ITEM_COUNT && <Button label="Show Less" onClick={handleShowLess} />}
        <Button label="Show More" onClick={handleShowMore} />
      </footer>
    </section>
  )
};
