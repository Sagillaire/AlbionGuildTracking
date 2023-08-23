import './globals.css';
import type { Metadata } from 'next';
import { SafeHydrate } from '@/core';
import { Navbar } from '@/components';
import { Inter } from 'next/font/google';
import { ClientProvider } from '@/core/ApiService/QueryClientConfig';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Albion Guild Tracking',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SafeHydrate>
          <ClientProvider>
            <Navbar />
            {children}
          </ClientProvider>
        </SafeHydrate>
      </body>
    </html>
  )
}
