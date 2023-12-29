import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import TRPCTanstackProvider from '@/lib/TRPCTanstackProvider'
import Header from '@/components/Layout/Header/Header'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Next Todo',
  description: 'Created by Md Asif',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <TRPCTanstackProvider>
          <main>
            <Header />
            {children}
          </main>
        </TRPCTanstackProvider>
      </body>
    </html>
  )
}
