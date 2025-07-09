import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Head from "next/head"
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Allegro Counselling - Compassionate Therapy in Edmonton",
  description:
    "Professional therapy services for individuals, couples, and families in Edmonton. Begin your healing journey with our experienced team.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTFG57L9" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleTagManager gtmId="GTM-PTFG57L9" />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
