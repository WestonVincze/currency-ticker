import { useEffect, useState } from "react";
import { AssetDetails, baseURL } from "./types";

const fetchAssetDetails = async (id: string): Promise<AssetDetails> => {
  const response = await fetch(new Request(`${baseURL}/assets/${id}`));
  if (!response.ok) throw new Error(`fetchAssetDetails for ${id} request failed`)

  const jsonData = await response.json();

  console.log(jsonData.data);

  const item = jsonData.data;

  return {
    id: item.id,
    rank: item.rank,
    symbol: item.symbol,
    name: item.name,
    priceUsd: item.priceUsd,
    supply: item.supply,
    maxSupply: item.maxSupply,
    marketCapUsd: item.marketCapUsd,
    volumeUsd24Hr: item.volumeUsd24Hr,
    changePercent24Hr: item.changePercent24Hr,
    vwap24Hr: item.vwap24Hr,
  } as AssetDetails
}

export const useAssetDetails = (id: string) => {
  const [asset, setAsset] = useState<AssetDetails | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const asset = await fetchAssetDetails(id);
        setAsset(asset);
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchData();
  }, [id])

  return { asset, error }
}
