import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Pagination from '@/components/Pagination'
import Filter from '@/components/Filter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Volvo Cars',
  description: 'Volvo front end challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-between max-h-full max-w-full w-100">
          <Filter />
          {children}
          <Pagination />
        </div>
      </body>
    </html>
  )
}
