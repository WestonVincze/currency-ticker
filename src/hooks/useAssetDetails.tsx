import { useEffect, useState } from "react";
import { AssetDetails, REFRESH_RATE, baseURL } from "./types";

const fetchAssetDetails = async (id: string): Promise<AssetDetails> => {
  const response = await fetch(new Request(`${baseURL}/assets/${id}`));
  if (!response.ok) throw new Error(`fetchAssetDetails for ${id} request failed`)

  const jsonData = await response.json();

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
  const [asset, setAsset] = useState<AssetDetails>({
    id: "",
    rank: "0",
    symbol: "XXX",
    name: "xxxxxxx",
    priceUsd: "0",
    supply: "0",
    maxSupply: "0",
    marketCapUsd: "0",
    volumeUsd24Hr: "0",
    changePercent24Hr: "0",
    vwap24Hr: "0"
  });
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const asset = await fetchAssetDetails(id);
        setAsset(asset);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      }
    };

    fetchData();

    const fetchInterval = setInterval(() => fetchData(), REFRESH_RATE)

    return () => {
      clearInterval(fetchInterval);
    }
  }, [id])

  return { asset, error }
};
