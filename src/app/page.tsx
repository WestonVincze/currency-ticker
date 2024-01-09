"use client"
import { FullCurrencyList } from '@/components/FullCurrencyList'
import { FavoriteCurrencyList } from '@/components/FavoriteCurrencyList'

export default function Home() {
  return (
    <>
      <FavoriteCurrencyList />
      <FullCurrencyList />
    </>
  )
};
