"use client"

import { CurrencyDetails } from "@/components/CurrencyDetails"

export default function Page({ params }: { params: { id: string } }){
  return (<main><CurrencyDetails id={params.id} /></main>)
}