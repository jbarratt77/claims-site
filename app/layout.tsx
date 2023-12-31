import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WalletContextProvider from './_components/WalletContextProvider'
import { ButtonAppBar } from './_components/AppBar'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WalletContextProvider>
      <html lang="en">
        <body>
          <ButtonAppBar />
          {children}
        </body>
      </html>
    </WalletContextProvider>
  )
}
