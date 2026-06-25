import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'MKT Lab - Agencja Marketingowa, Strony WWW, Kampanie Reklamowe',
    template: '%s | MKT Lab'
  },
  description: 'MKT Lab - agencja marketingowa w Gdańsku. Zwiększamy sprzedaż i ROAS. Działamy zdalnie w całej Polsce. Specjalizujemy się w Performance Marketingu, SEO, Web Design i AI Automation.',
  keywords: 'agencja marketingowa Gdańsk, marketing internetowy, kampanie reklamowe, strony www, SEO, performance marketing, ROAS, MKT Lab',
  authors: [{ name: 'MKT Lab' }],
  creator: 'MKT Lab',
  publisher: 'MKT Lab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://mktlab.pl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MKT Lab - Agencja Marketingowa, Strony WWW, Kampanie Reklamowe',
    description: 'MKT Lab - agencja marketingowa w Gdańsku. Zwiększamy sprzedaż i ROAS. Działamy zdalnie w całej Polsce.',
    url: 'https://mktlab.pl',
    siteName: 'MKT Lab',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MKT Lab - Agencja Marketingowa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MKT Lab - Agencja Marketingowa, Strony WWW, Kampanie Reklamowe',
    description: 'MKT Lab - agencja marketingowa w Gdańsku. Zwiększamy sprzedaż i ROAS.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'TWOJ_KOD_WERYFIKACJI_GOOGLE', // Dodaj po weryfikacji w Google Search Console
  },
  category: 'Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}