import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "SIFF - Students for International Football Finance",
  description:
    "Students for International Football Finance - Connecting Passion with Finance through research, networking, and innovation. A student association dedicated to football finance research and networking",
  generator: "v0.app",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://siffofficial.org/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SIFF - Students for International Football Finance",
              "url": "https://siffofficial.org",
              "logo": "https://siffofficial.org/siff-logo.png",
              "description": "Students for International Football Finance - Connecting Passion with Finance through research, networking, and innovation.",
              "foundingDate": "2025",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IT"
              },
              "sameAs": [
                "https://www.instagram.com/siff.official/",
                "https://www.linkedin.com/company/bocconi-students-for-football-finance/"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
