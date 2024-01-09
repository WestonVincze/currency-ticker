import { useEffect, useState } from "react";
import { Asset, baseURL } from "./types";

const fetchAssets = async (): Promise<Asset[]> => {
  const response = await fetch(new Request(`${baseURL}/assets`));
  if (!response.ok) throw new Error("fetchAssets request failed")

  const jsonData = await response.json();
  if (!Array.isArray(jsonData.data)) throw new Error("unexpected response format");

  console.log(jsonData.data);

  const assets: Asset[] = jsonData.data.map((item: any) => ({
    id: item.id,
    rank: item.rank,
    symbol: item.symbol,
    name: item.name,
    priceUsd: item.priceUsd,
  }));

  return assets;
}

// should be able to filter as well
export const useAssets = () => {
  const [assets, setAssets] = useState<Asset[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assets = await fetchAssets();
        setAssets(assets);
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchData();
  }, []);

  return { assets, error };
}
