"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { CurrencyList } from '@/components/CurrencyList'

export default function Home() {

  return (
    <main className={styles.main}>
      <CurrencyList />
    </main>
  )
}
