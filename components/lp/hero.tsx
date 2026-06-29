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
        minHeight: '100vh',
      }}
    >
      {/* 左側ホワイトオーバーレイ — 文字視認性確保 */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,.95) 0%, rgba(255,255,255,.85) 35%, rgba(255,255,255,.45) 60%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '55% 45%',
            alignItems: 'flex-end',
            minHeight: '100vh',
          }}
        >
          {/* ====== LEFT ====== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', paddingTop: '2rem', paddingBottom: '2rem' }}>

            {/* バナー画像 */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <Image
                src="/images/banner-jirei.png"
                alt="無料配布中 AI業務改善事例10選"
                width={420}
                height={120}
                priority
                style={{ width: 'clamp(220px, 45vw, 420px)', height: 'auto' }}
              />
            </div>

            {/* メインコピー */}
            <h1 id="hero-heading" style={{ margin: 0, lineHeight: 1.05 }}>
              <span style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                letterSpacing: '-0.01em',
              }}>
                <span style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif', color: '#8E1B1B', fontStyle: 'italic' }}>ChatGPT</span>
                <span style={{ color: '#1a0a0a' }}>に</span>
              </span>
              <span style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
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
              fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              color: '#1a0a0a',
              lineHeight: 1.2,
            }}>
              <span style={{ color: '#8E1B1B' }}>業務効率化</span>
              {' × '}
              <span style={{ color: '#8E1B1B' }}>AI</span>セミナー
            </p>

            {/* 説明文 */}
            <p style={{
              margin: 0,
              fontFamily: '"Noto Sans JP", sans-serif',
              fontSize: 'clamp(0.75rem, 1.4vw, 0.95rem)',
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
                width={460}
                height={150}
                style={{ width: '100%', maxWidth: '460px', height: 'auto' }}
              />
            </div>

            {/* CTAボタン */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
              <Link
                href="#contact"
                className="cta-btn-gold"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  minHeight: '88px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #C9A14A 0%, #E8C97A 50%, #C9A14A 100%)',
                  color: '#3a1a00',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(0.75rem, 1.4vw, 0.95rem)',
                  textDecoration: 'none',
                  padding: '0 1rem',
                  boxShadow: '0 4px 20px rgba(201,161,74,0.4)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <Gift style={{ width: '1.3rem', height: '1.3rem', flexShrink: 0 }} />
                <span>無料で<br />事例10選を受け取る</span>
                <ChevronRight style={{ width: '0.9rem', height: '0.9rem', flexShrink: 0 }} />
              </Link>

              <Link
                href="#contact"
                className="cta-btn-bordeaux"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  minHeight: '88px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #8E1B1B 0%, #6B0F0F 100%)',
                  color: '#ffffff',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(0.75rem, 1.4vw, 0.95rem)',
                  textDecoration: 'none',
                  padding: '0 1rem',
                  boxShadow: '0 4px 20px rgba(142,27,27,0.4)',
                  border: '1px solid rgba(201,161,74,0.4)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <MonitorPlay style={{ width: '1.3rem', height: '1.3rem', flexShrink: 0 }} />
                <span>オンライン説明会に<br />参加する</span>
                <ChevronRight style={{ width: '0.9rem', height: '0.9rem', flexShrink: 0 }} />
              </Link>
            </div>
          </div>

          {/* ====== RIGHT: 写真＋吹き出し＋プロフィール ====== */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', paddingBottom: '0' }}>

            {/* 吹き出し */}
            <div style={{
              position: 'relative',
              background: '#fff',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              zIndex: 10,
              marginBottom: '-10px',
              flexShrink: 0,
            }}>
              <p style={{
                margin: 0,
                textAlign: 'center',
                fontFamily: '"Noto Sans JP", sans-serif',
                fontWeight: 900,
                fontSize: '0.7rem',
                lineHeight: 1.4,
                color: '#8E1B1B',
              }}>
                先着<br />
                <span style={{ fontSize: '1.3rem' }}>3社</span><br />
                限定 募集！
              </p>
              {/* 吹き出しの三角 */}
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #fff',
              }} aria-hidden="true" />
            </div>

            {/* 女性写真 */}
            <div style={{ width: '85%', maxWidth: '420px' }}>
              <Image
                src="/images/kayahara_cutout.png"
                alt="栢原 陽子（株式会社UNIBRAND 代表取締役）"
                width={600}
                height={800}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                  filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.4))',
                  display: 'block',
                }}
              />
            </div>

            {/* プロフィールカード */}
            <div style={{
              width: '100%',
              background: 'rgba(255,255,255,0.92)',
              borderTop: '3px solid #C9A14A',
              padding: '0.75rem 1rem',
              backdropFilter: 'blur(8px)',
            }}>
              <span style={{
                display: 'inline-block',
                background: '#0D1B45',
                color: '#C9A14A',
                fontSize: '0.65rem',
                fontWeight: 700,
                padding: '2px 10px',
                borderRadius: '4px',
                marginBottom: '0.4rem',
                fontFamily: '"Noto Sans JP", sans-serif',
              }}>
                監修・提供
              </span>
              <p style={{
                margin: 0,
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#0D1B45',
                lineHeight: 1.2,
              }}>
                栢原 陽子
                <span style={{ fontSize: '0.7rem', fontWeight: 400, color: '#666', marginLeft: '0.4rem', fontFamily: '"Noto Sans JP", sans-serif' }}>
                  （かやはら ようこ）
                </span>
              </p>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.7rem', fontWeight: 700, color: '#333', fontFamily: '"Noto Sans JP", sans-serif' }}>
                株式会社UNIBRAND 代表取締役
              </p>
              <p style={{ margin: '0.1rem 0 0', fontSize: '0.65rem', color: '#666', fontFamily: '"Noto Sans JP", sans-serif', lineHeight: 1.4 }}>
                中小企業診断士 ／ 認定心理士 ／ 認定支援機関
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-btn-gold:hover, .cta-btn-bordeaux:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 15px 40px rgba(0,0,0,0.25) !important;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
