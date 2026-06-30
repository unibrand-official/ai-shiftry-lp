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
        background: 'linear-gradient(90deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.90) 38%, rgba(255,255,255,.50) 62%, rgba(255,255,255,0) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          minHeight: '100vh',
          alignItems: 'stretch',
        }}>

          {/* ====== LEFT ====== */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            paddingTop: '1.25rem',
            paddingBottom: '1.25rem',
            justifyContent: 'center',
          }}>

            {/* バナー */}
            <div style={{ width: 'clamp(260px, 48vw, 500px)', marginTop: '-4px' }}>
              <Image
                src="/images/banner-jirei.png"
                alt="無料配布中 AI業務改善事例10選"
                width={500} height={143} priority
                style={{
                  width: '100%', height: 'auto',
                  filter: 'drop-shadow(0 6px 18px rgba(180,120,0,0.35)) drop-shadow(0 2px 6px rgba(0,0,0,0.2))',
                }}
              />
            </div>

            {/* 赤帯 */}
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'linear-gradient(90deg, #6B1010 0%, #9B1F1F 40%, #8B1818 100%)',
              color: '#fff', padding: '0.48rem 1.3rem',
              borderRadius: '8px',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(0.7rem, 1.3vw, 0.92rem)',
              letterSpacing: '0.04em',
              boxShadow: '0 4px 16px rgba(100,10,10,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
              maxWidth: 'fit-content',
            }}>
              中小企業の「売上・業務」を劇的に改善したい皆様へ
            </div>

            {/* メインコピー */}
            <h1 id="hero-heading" style={{ margin: 0, lineHeight: 1.3 }}>
              <span style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(2.0rem, 4.4vw, 3.4rem)',
                color: '#1a0a0a',
                letterSpacing: '-0.01em',
                textShadow: '0 0 20px rgba(255,255,255,0.9)',
              }}>
                学ぶだけで、終わらせない。
              </span>
              <span style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(2.4rem, 5.6vw, 4.2rem)',
                color: '#8E1B1B',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
                textShadow: '0 0 24px rgba(255,255,255,0.85)',
              }}>
                「売上・業務」に<span style={{ fontSize: '108%' }}>即効！</span>
              </span>
            </h1>

            {/* ゴールド帯 */}
            <div style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'linear-gradient(90deg, #A07828 0%, #D4AA50 25%, #F0D080 50%, #D4AA50 75%, #A07828 100%)',
              color: '#2a1500',
              padding: '0.6rem 1.8rem',
              borderRadius: '6px',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(0.78rem, 1.5vw, 0.95rem)',
              letterSpacing: '0.08em',
              boxShadow: '0 4px 16px rgba(160,120,40,0.4), inset 0 1px 0 rgba(255,255,255,0.5)',
              maxWidth: 'fit-content',
            }}>
              中小企業診断士 × 認定心理士が教えるAI研修
            </div>

            {/* CTAボタン */}
            <div style={{ maxWidth: '500px' }}>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd6acXFEEhPETbuBP7BP9cjNSWMMg-tMRUqDuEKXMVGQ80xlA/viewform"
                target="_blank" rel="noopener noreferrer"
                className="cta-main"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #7A1010 0%, #A82020 50%, #C83030 100%)',
                  color: '#fff', textDecoration: 'none', padding: '0 1.25rem 0 1.5rem',
                  boxShadow: '0 0 0 2px #C9A14A, 0 8px 28px rgba(120,16,16,0.5)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <MonitorPlay style={{ width: '2rem', height: '2rem', flexShrink: 0 }} />
                <div style={{ flex: 1, padding: '0.9rem 0', fontFamily: '"Noto Sans JP", sans-serif' }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', lineHeight: 1.3 }}>
                    無料個別相談を予約する
                  </p>
                  <p style={{ margin: '0.1rem 0 0', fontSize: '0.73rem', opacity: 0.85, fontWeight: 400 }}>
                    （オンライン30分）
                  </p>
                  <div style={{ marginTop: '0.4rem', paddingTop: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Gift style={{ width: '0.85rem', height: '0.85rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.73rem', fontWeight: 600 }}>AI活用事例10選（PDF）プレゼント</span>
                  </div>
                </div>
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.28)', flexShrink: 0,
                }}>
                  <ChevronRight style={{ width: '1.2rem', height: '1.2rem' }} />
                </span>
              </Link>
            </div>
          </div>

          {/* ====== RIGHT ====== */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>

            {/* 吹き出しアイコン */}
            <div style={{ position: 'absolute', top: '60px', left: '-10px', zIndex: 20, width: '160px', height: '160px' }}>
              <Image
                src="/images/icon_only3.png"
                alt="先着3社限定募集"
                width={160} height={160}
                style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 4px 12px rgba(201,161,74,0.4))' }}
              />
            </div>

            {/* 女性写真 */}
            <div style={{
              width: '120%', maxWidth: '530px',
              marginBottom: '-4px', marginLeft: '3%',
              transform: 'translateY(-30px)',
            }}>
              <Image
                src="/images/kayahara_cutout.png"
                alt="栢原 陽子（株式会社UNIBRAND 代表取締役）"
                width={600} height={800} priority
                style={{
                  width: '100%', height: 'auto',
                  objectFit: 'contain', objectPosition: 'bottom',
                  display: 'block',
                  filter: 'drop-shadow(0 0 32px rgba(255,255,255,0.35))',
                }}
              />
            </div>

            {/* プロフィールカード：上へ引き上げ */}
            <div style={{
              width: '100%',
              background: 'rgba(255,255,255,0.94)',
              borderTop: '3px solid #C9A14A',
              padding: '1rem 1.4rem',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
              transform: 'translateY(-135px)',
              marginBottom: '-135px',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', alignItems: 'start' }}>
                <div>
                  <span style={{
                    display: 'inline-block', background: '#0D1B45', color: '#C9A14A',
                    fontSize: '0.58rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px',
                    fontFamily: '"Noto Sans JP", sans-serif', marginBottom: '0.25rem',
                  }}>監修・提供</span>
                  <p style={{ margin: 0, fontFamily: '"Noto Serif JP", serif', fontWeight: 700, fontSize: '1.15rem', color: '#0D1B45', lineHeight: 1.2 }}>
                    栢原 陽子
                  </p>
                  <p style={{ margin: '0.1rem 0 0', fontSize: '0.58rem', color: '#666', fontFamily: '"Noto Sans JP", sans-serif' }}>
                    （かやはら ようこ）
                  </p>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.62rem', fontWeight: 700, color: '#333', fontFamily: '"Noto Sans JP", sans-serif' }}>
                    株式会社UNIBRAND 代表取締役
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {['中小企業診断士', '認定心理士', '認定支援機関'].map((label) => (
                    <span key={label} style={{
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                      padding: '4px 10px', border: '1px solid #D4A94B',
                      borderRadius: '999px', background: '#fffaf4',
                      color: '#7A1010', fontWeight: 700, fontSize: '0.62rem',
                      fontFamily: '"Noto Sans JP", sans-serif',
                    }}>
                      ✓ {label}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{
                marginTop: '0.6rem', paddingTop: '0.55rem',
                borderTop: '1px solid #E8C97A',
                display: 'flex', gap: '1rem',
              }}>
                {['累計500社超の経営支援実績', '補助金採択率80%超'].map((text) => (
                  <p key={text} style={{
                    margin: 0, fontSize: '0.65rem', fontWeight: 700, color: '#8E1B1B',
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
        .cta-main:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 0 0 2px #C9A14A, 0 16px 40px rgba(120,16,16,0.45) !important;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  )
}
