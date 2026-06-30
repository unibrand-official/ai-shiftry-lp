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
      {/* 左側ホワイトオーバーレイ */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: 'linear-gradient(90deg, rgba(255,255,255,.95) 0%, rgba(255,255,255,.85) 35%, rgba(255,255,255,.45) 60%, rgba(255,255,255,0) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '55% 45%', minHeight: '100vh', alignItems: 'stretch' }}>

          {/* ====== LEFT ====== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2rem', paddingBottom: '2rem', justifyContent: 'center' }}>

            {/* バナー */}
            <Image src="/images/banner-jirei.png" alt="無料配布中 AI業務改善事例10選" width={420} height={120} priority
              style={{ width: 'clamp(200px, 42vw, 400px)', height: 'auto' }} />

            {/* 上部帯：ターゲット訴求 */}
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'linear-gradient(90deg, #8E1B1B, #B71C1C)',
              color: '#fff', padding: '0.45rem 1.25rem',
              borderRadius: '4px',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(0.7rem, 1.4vw, 0.9rem)',
              letterSpacing: '0.04em',
              boxShadow: '0 2px 8px rgba(142,27,27,0.3)',
              maxWidth: 'fit-content',
            }}>
              中小企業の「売上・業務」を劇的に改善したい皆様へ
            </div>

            {/* メインコピー */}
            <h1 id="hero-heading" style={{ margin: '0.5rem 0 0', lineHeight: 1.35 }}>
              <span style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(1.9rem, 4.2vw, 3.2rem)',
                color: '#1a0a0a',
                letterSpacing: '-0.01em',
              }}>
                学ぶだけで、終わらせない。
              </span>
              <span style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(2.1rem, 4.8vw, 3.6rem)',
                color: '#8E1B1B',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}>
                「売上・業務」に即効！
              </span>
            </h1>

            {/* サブコピー：ゴールド帯 */}
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'linear-gradient(90deg, #C9A14A, #E8C97A, #C9A14A)',
              color: '#3a2000',
              padding: '0.55rem 1.5rem',
              borderRadius: '4px',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
              letterSpacing: '0.06em',
              boxShadow: '0 2px 8px rgba(201,161,74,0.35)',
              maxWidth: 'fit-content',
            }}>
              中小企業診断士 × 認定心理士が教えるAI研修
            </div>

            {/* CTA — 1ボタンに統一 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '480px' }}>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd6acXFEEhPETbuBP7BP9cjNSWMMg-tMRUqDuEKXMVGQ80xlA/viewform" target="_blank" rel="noopener noreferrer" className="cta-main" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8E1B1B, #B71C1C)',
                color: '#fff', textDecoration: 'none', padding: '0 1.5rem 0 1.75rem',
                boxShadow: '0 6px 24px rgba(142,27,27,0.45)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}>
                <MonitorPlay style={{ width: '1.8rem', height: '1.8rem', flexShrink: 0 }} />
                <div style={{ flex: 1, padding: '1rem 0', fontFamily: '"Noto Sans JP", sans-serif' }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', lineHeight: 1.3 }}>
                    無料個別相談を予約する
                  </p>
                  <p style={{ margin: '0.15rem 0 0', fontSize: '0.75rem', opacity: 0.85, fontWeight: 400 }}>
                    （オンライン30分）
                  </p>
                  <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Gift style={{ width: '0.9rem', height: '0.9rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>AI活用事例10選（PDF）プレゼント</span>
                  </div>
                </div>
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.25)', flexShrink: 0,
                }}>
                  <ChevronRight style={{ width: '1rem', height: '1rem' }} />
                </span>
              </Link>

            </div>
          </div>

          {/* ====== RIGHT ====== */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>

            {/* 吹き出しアイコン */}
            <div style={{ position: 'absolute', top: '80px', left: '-30px', zIndex: 20, width: '181px', height: '181px' }}>
              <Image
                src="/images/icon_only3.png"
                alt="先着3社限定募集"
                width={150} height={150}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            {/* 女性写真 */}
            <div style={{ width: '115%', maxWidth: '500px', marginBottom: '-4px' }}>
              <Image
                src="/images/kayahara_cutout.png"
                alt="栢原 陽子（株式会社UNIBRAND 代表取締役）"
                width={600} height={800} priority
                style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'bottom', display: 'block',
                  filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.4))' }}
              />
            </div>

            {/* プロフィールカード — シンプル版 */}
            <div style={{
              width: '100%', background: 'rgba(255,255,255,0.93)',
              borderTop: '3px solid #C9A14A',
              padding: '1.25rem 1.5rem',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
            }}>
              {/* 上段：名前 + バッジ */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', alignItems: 'start' }}>
                {/* 左：名前 */}
                <div>
                  <span style={{
                    display: 'inline-block', background: '#0D1B45', color: '#C9A14A',
                    fontSize: '0.6rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px',
                    fontFamily: '"Noto Sans JP", sans-serif', marginBottom: '0.3rem',
                  }}>監修・提供</span>
                  <p style={{ margin: 0, fontFamily: '"Noto Serif JP", serif', fontWeight: 700, fontSize: '1.2rem', color: '#0D1B45', lineHeight: 1.2 }}>
                    栢原 陽子
                  </p>
                  <p style={{ margin: '0.1rem 0 0', fontSize: '0.6rem', color: '#666', fontFamily: '"Noto Sans JP", sans-serif' }}>
                    （かやはら ようこ）
                  </p>
                  <p style={{ margin: '0.3rem 0 0', fontSize: '0.65rem', fontWeight: 700, color: '#333', fontFamily: '"Noto Sans JP", sans-serif' }}>
                    株式会社UNIBRAND 代表取締役
                  </p>
                </div>

                {/* 右：資格バッジ */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {['中小企業診断士', '認定心理士', '認定支援機関'].map((label) => (
                    <span key={label} style={{
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                      padding: '5px 12px', border: '1px solid #D4A94B',
                      borderRadius: '999px', background: '#fffaf4',
                      color: '#7A1010', fontWeight: 700, fontSize: '0.65rem',
                      fontFamily: '"Noto Sans JP", sans-serif',
                    }}>
                      ✓ {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* 下段：実績2行 */}
              <div style={{
                marginTop: '0.75rem', paddingTop: '0.65rem',
                borderTop: '1px solid #E8C97A',
                display: 'flex', gap: '1rem',
              }}>
                {['累計500社超の経営支援実績', '補助金採択率80%超'].map((text) => (
                  <p key={text} style={{
                    margin: 0, fontSize: '0.68rem', fontWeight: 700, color: '#8E1B1B',
                    fontFamily: '"Noto Sans JP", sans-serif',
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                  }}>
                    <span style={{ color: '#C9A14A' }}>✦</span> {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-main:hover { transform: translateY(-3px) !important; box-shadow: 0 15px 40px rgba(0,0,0,0.25) !important; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  )
}
