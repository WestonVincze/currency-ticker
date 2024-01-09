import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import { Header } from '@/components/Header'
import { FavoritesProvider } from '@/hooks/useFavorites'
import './globals.css'

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
        <Header />
        <FavoritesProvider>
          <main>
            {children}
          </main>
        </FavoritesProvider>
      </body>
    </html>
  )
}
