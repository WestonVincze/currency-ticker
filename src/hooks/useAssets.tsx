import { useEffect, useState } from "react";
import { Asset, baseURL, REFRESH_RATE } from "./types";

const fetchAssets = async (limit?: number, ids?: string[]): Promise<Asset[]> => {
  const params: string[] = [];

  if (limit) params.push(`limit=${limit}`);
  if (ids) params.push(`ids=${ids.join(",")}`);

  const urlParams = `?${params.join("&")}`;
  console.log(urlParams);

  const response = await fetch(new Request(`${baseURL}/assets${urlParams}`)) ;
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
export const useAssets = (limit?: number, ids?: string[]) => {
  const [assets, setAssets] = useState<Asset[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assets = await fetchAssets(limit, ids);
        setAssets(assets);
      } catch (err) {
        setError(err as Error);
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
