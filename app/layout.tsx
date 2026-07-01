import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

const notoSerifJP = Noto_Serif_JP({
  variable: '--font-shippori-mincho',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const siteUrl = 'https://ai-shiftry-lp.vercel.app'

export const metadata: Metadata = {
  title: 'AI SHIFTRY｜売上・業務改善につながる実践型AI研修',
  description:
    '中小企業診断士×認定心理士が教える、売上・業務改善につながる実践型AI研修。無料個別相談・AI業務改善事例10選を配布中。',
  keywords: ['AI研修', '中小企業', '生成AI', '人材開発支援助成金', 'リスキリング', '中小企業診断士'],
  openGraph: {
    title: 'AI SHIFTRY｜売上・業務改善につながる実践型AI研修',
    description:
      '中小企業診断士×認定心理士が教える、売上・業務改善につながる実践型AI研修。無料個別相談・AI業務改善事例10選を配布中。',
    url: siteUrl,
    siteName: 'AI SHIFTRY',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/org.png`,
        width: 1200,
        height: 630,
        alt: 'AI SHIFTRY｜売上・業務改善につながる実践型AI研修',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SHIFTRY｜売上・業務改善につながる実践型AI研修',
    description: '中小企業診断士×認定心理士が教える、売上・業務改善につながる実践型AI研修。',
    images: [`${siteUrl}/org.png`],
  },
}

export const viewport: Viewport = {
  themeColor: '#0D1B45',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M23MEYZF2F"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M23MEYZF2F');
        `}</Script>
      </body>
    </html>
  )
}
