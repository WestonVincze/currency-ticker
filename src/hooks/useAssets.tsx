import { useEffect, useState } from "react";

interface Asset {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  priceUsd: string,
}

const fetchAssets = async (request: Request): Promise<Asset[]> => {
  const response = await fetch(request);
  if (!response.ok) throw new Error("fetchAssets request failed")

  const jsonData = await response.json();
  if (!Array.isArray(jsonData.data)) throw new Error("unexpected response format");

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
        const assets = await fetchAssets(new Request('https://api.coincap.io/v2/assets'));
        setAssets(assets);
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchData();
  }, []);

  return {assets, error};
}