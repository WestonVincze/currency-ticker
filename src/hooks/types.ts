export const baseURL = "https://api.coincap.io/v2";

export interface Asset {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  priceUsd: string,
}

export interface AssetDetails extends Asset {
  supply: string,
  maxSupply: string,
  marketCapUsd: string,
  volumeUsd24Hr: string,
  changePercent24Hr: string,
  vwap24Hr: string,
}