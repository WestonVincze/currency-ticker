import style from "./CurrencyList.module.css";
import { useState } from "react";
import { useAssets } from "@/hooks/useAssets";
import { CurrencyItem } from "../CurrencyItem";

// renders a list of CurrencyItem's
export const CurrencyList = () => {
  const { assets, error } = useAssets();
  // const [items, setItems] = useState(assets);

  return assets !== null && assets.map((asset, i) => <CurrencyItem key={i} name={asset.name} price={asset.priceUsd} />)
}