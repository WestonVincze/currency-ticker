import { useEffect, useState } from "react";
import { Asset, baseURL, REFRESH_RATE } from "./types";

interface AssetsProps {
  limit?: number,
  ids?: string[],
}

const fetchAssets = async ({ limit, ids }: AssetsProps): Promise<Asset[]> => {
  const params: string[] = [];

  if (limit) params.push(`limit=${limit}`);
  if (ids) params.push(`ids=${ids.join(",")}`);

  const urlParams = `?${params.join("&")}`;

  const response = await fetch(new Request(`${baseURL}/assets${urlParams}`)) ;
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

export const useAssets = ({ limit, ids }: AssetsProps) => {
  const [assets, setAssets] = useState<Asset[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (ids?.length === 0) return;
    const fetchData = async () => {
      try {
        const assets = await fetchAssets({ limit, ids });
        setAssets(assets);
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
  }, [limit, ids]);

  return { assets, error };
};
