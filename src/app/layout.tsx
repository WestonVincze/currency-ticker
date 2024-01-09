import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ["400", "600"],
  variable: "--main-font"
})

export const metadata: Metadata = {
  title: 'Currency Ticker App',
  description: 'Built by Weston Vincze for Netcoins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inconsolata.variable}>
      <body className={inter.className}>{children}</body>
        <main>{children}</main>
      </body>
    </html>
  )
}
