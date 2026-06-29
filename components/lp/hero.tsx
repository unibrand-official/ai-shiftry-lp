'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Gift, MonitorPlay, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: "url('/images/hero-bg-red.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay for text legibility */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '55% 45%',
            alignItems: 'flex-end',
            gap: '1rem',
          }}
          className="hero-grid"
        >
          {/* ====== LEFT: テキストエリア ====== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '2rem', paddingBottom: '2rem' }}>

            {/* バナー画像 */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <Image
                src="/images/banner-jirei.png"
                alt="無料配布中 AI業務改善事例10選"
                width={420}
                height={120}
                priority
                style={{ width: 'clamp(220px, 50vw, 420px)', height: 'auto' }}
              />
            </div>

            {/* メインコピー */}
            <h1 id="hero-heading" style={{ margin: 0, lineHeight: 1.05 }}>
              <span style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                color: '#1a0a0a',
                letterSpacing: '-0.01em',
              }}>
                <span style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif', color: '#8E1B1B', fontStyle: 'italic' }}>ChatGPT</span>に
              </span>
              <span style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                color: '#1a0a0a',
                letterSpacing: '-0.01em',
              }}>
                相談で終わってない？
              </span>
            </h1>

            {/* サブコピー */}
            <p style={{
              margin: 0,
              fontFamily: '"Noto Serif JP", serif',
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              color: '#1a0a0a',
              lineHeight: 1.2,
            }}>
              <span style={{ color: '#8E1B1B' }}>業務効率化</span> × <span style={{ color: '#8E1B1B' }}>AI</span>セミナー
            </p>

            {/* 説明文 */}
            <p style={{
              margin: 0,
              fontFamily: '"Noto Sans JP", sans-serif',
              fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
              color: '#3a2a2a',
              letterSpacing: '0.02em',
            }}>
              AIを「使える」に変える実践研修
            </p>

            {/* 月桂樹バッジ */}
            <div>
              <Image
                src="/images/laurel-stats.png"
                alt="導入実績12万人以上・最大75%補助・実質9万円〜"
                width={480}
                height={160}
                style={{ width: '100%', maxWidth: '480px', height: 'auto' }}
              />
            </div>

            {/* CTAボタン2つ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {/* ゴールドボタン */}
                <Link
                  href="#contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    height: '88px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #C9A14A 0%, #E8C97A 50%, #C9A14A 100%)',
                    color: '#3a1a00',
                    fontFamily: '"Noto Sans JP", sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                    textDecoration: 'none',
                    padding: '0 1.25rem',
                    boxShadow: '0 4px 20px rgba(201,161,74,0.4)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 15px 40px rgba(0,0,0,0.25)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(201,161,74,0.4)'
                  }}
                >
                  <Gift style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0 }} />
                  <span>無料で<br />事例10選を受け取る</span>
                  <ChevronRight style={{ width: '1rem', height: '1rem', flexShrink: 0 }} />
                </Link>

                {/* ボルドーボタン */}
                <Link
                  href="#contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    height: '88px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #8E1B1B 0%, #6B0F0F 100%)',
                    color: '#ffffff',
                    fontFamily: '"Noto Sans JP", sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                    textDecoration: 'none',
                    padding: '0 1.25rem',
                    boxShadow: '0 4px 20px rgba(142,27,27,0.4)',
                    border: '1px solid rgba(201,161,74,0.4)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 15px 40px rgba(0,0,0,0.25)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(142,27,27,0.4)'
                  }}
                >
                  <MonitorPlay style={{ width: '1.5rem', height: '1.5rem', flexShrink: 0 }} />
                  <span>オンライン説明会に<br />参加する</span>
                  <ChevronRight style={{ width: '1rem', height: '1rem', flexShrink: 0 }} />
                </Link>
              </div>
            </div>
          </div>

          {/* ====== RIGHT: 女性写真 ====== */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
            <Image
              src="/images/kayahara_cutout.png"
              alt="栢原 陽子（株式会社UNIBRAND 代表取締役）"
              width={600}
              height={800}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                objectPosition: 'bottom',
                filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.4))',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
