import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harbour",
  description: "Enhanced Call of Duty clients by Eikemo Developments",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-gray-900 text-white">
          <Header />
          <div className="flex flex-1">
            <main className="flex-1 px-4 md:px-6 py-8">{children}</main>
            <Navbar />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

