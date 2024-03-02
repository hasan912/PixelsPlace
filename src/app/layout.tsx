import type { Metadata } from 'next'

import { Righteous } from "next/font/google";
import './globals.css'
import ThemeProvider from '@/components/theme-provider'
import Footer from '@/components/Footer';
import Authprovider from '@/components/Authprovider/Authprovider';

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export const metadata: Metadata = {
  title: 'Your Personal Image Haven',
  description: 'Generated by Muhammad Hasan Baig',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex'>
            <div className='w-full'>
              <Authprovider>
              {children}
              </Authprovider>
              <Footer /></div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
