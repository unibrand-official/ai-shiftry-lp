import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'AI SHIFTRY（エーアイ・シフトリー）| 成果から逆算する中小企業のためのAI研修',
  description:
    '中小企業診断士×認定心理士が伴走する、成果から逆算するAI研修（全10時間）。ツールの使い方ではなく「何を自動化すべきか」を経営視点で見極め、自社の実務で動かすところまで。助成率最大75%活用で、研修40万円→実質9万円/名。',
  generator: 'v0.app',
  keywords: [
    'AI研修',
    '中小企業',
    '生成AI',
    '人材開発支援助成金',
    'リスキリング',
    '中小企業診断士',
  ],
  openGraph: {
    title: 'AI SHIFTRY | 成果から逆算する中小企業のためのAI研修',
    description:
      '中小企業診断士×認定心理士が伴走。助成率最大75%で研修40万円→実質9万円/名。',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1326',
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
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
