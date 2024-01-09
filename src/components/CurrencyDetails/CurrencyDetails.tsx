import { useAssetDetails } from "@/hooks/useAssetDetails";
import styles from "./CurrencyDetails.module.css";
import { Button } from "../Button";
import { Line } from "./Line";
import { Favorite } from "../Favorite";

interface CurrencyDetailsProps {
  id: string;
}

/**
 * Detailed view for Currency based on `id` 
 */
export const CurrencyDetails = ({ id }: CurrencyDetailsProps) => {
  const { asset, error } = useAssetDetails(id);

  if (asset === null) return <div />

  return (
    <article className={styles.details}>
      <header>
        <h2>#{asset.rank}</h2>
        <h2>{`${asset.name} (${asset.symbol})`}</h2>
        <h2><Favorite id={id} /></h2>
      </header>

      <section>
        <h2>Price (USD)</h2>
        <Line label="Price Per Unit:" value={asset.priceUsd} />
        <Line label="Market Cap:" value={asset.marketCapUsd} />
      </section>

      <section>
        <h2>Supply</h2>
        <Line label="Available to Trade:" value={asset.supply} format="number" />
        <Line label="Total QTY Issued:" value={asset.maxSupply} format="number" />
      </section>

      <section>
        <h2>Last 24 Hours</h2>
        <Line label="Direction and Value Change:" value={asset.changePercent24Hr} format="percentage" />
        <Line label="Volume Weighted Average:" value={asset.volumeUsd24Hr} />
        <Line label="Trading Volume:" value={asset.vwap24Hr} />
      </section>

      <footer>
        <Button label="back" href="/" type="link" />
      </footer>
    </article>
  )
};
