import styles from "./CurrencyList.module.css";
import { Asset } from "@/hooks/types";
import { CurrencyItem, CurrencyItemSkeleton } from "../CurrencyItem";

interface CurrencyListProps {
  assets: Asset[] | null,
  skeletons: number,
}

/**
 * Renders a list of `CurrencyItem`s, or skeleton placeholders if `assets` is null
 */
export const CurrencyList = ({ assets, skeletons }: CurrencyListProps) => {
  return (
    <nav className={styles.list}>
      {assets === null
        ? <>
            {[...Array(skeletons)].map((s, i) =>
              <CurrencyItemSkeleton key={i} />)
            }
          </>
        : <>
            {assets.map((asset, i) =>
              <CurrencyItem
                key={i}
                id={asset.id}
                name={asset.name}
                rank={asset.rank}
                symbol={asset.symbol}
                price={asset.priceUsd}
              />)
            }
          </>
      }
    </nav>
  )
};
