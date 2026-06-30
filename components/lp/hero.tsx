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
          minHeight: 'clamp(620px, 85vh, 880px)',
          alignItems: 'stretch',
        }}>

          {/* ====== LEFT ====== */}
          <div className="hero-left" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            justifyContent: 'center',
          }}>

            {/* バナー：15%縮小 */}
            <div className="hero-banner" style={{ width: '530px', marginTop: '-30px' }}>
              <Image
                src="/images/banner-jirei.png"
                alt="無料配布中 AI業務改善事例10選"
                width={500} height={143} priority
                style={{
                  width: '100%', height: 'auto',
                  filter: 'drop-shadow(0 4px 12px rgba(180,120,0,0.28)) drop-shadow(0 1px 4px rgba(0,0,0,0.15))',
                }}
              />
            </div>

            {/* 赤帯：簡潔・小さく */}
            <div className="hero-red-band" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'linear-gradient(90deg, #6B1010 0%, #9B1F1F 40%, #8B1818 100%)',
              color: '#fff', padding: '0.35rem 3.3rem',
              borderRadius: '4px',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              letterSpacing: '0.04em',
              maxWidth: 'fit-content',
            }}>
              中小企業の売上・業務を劇的に改善したい方へ
            </div>

            {/* メインコピー */}
            <h1 id="hero-heading" style={{ margin: 0 }}>
              <span className="hero-copy-1" style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(20px, 1.8vw, 30px)',
                color: '#1a0a0a',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
                lineHeight: 1.5,
                marginBottom: '15px',
                textShadow: '0 0 20px rgba(255,255,255,0.9)',
              }}>
                学ぶだけで、終わらせない。
              </span>
              <span className="hero-copy-2" style={{
                display: 'block',
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900,
                fontSize: 'clamp(50px, 4.2vw, 69px)',
                color: '#8E1B1B',
                letterSpacing: '0.02em',
                lineHeight: 1.08,
                whiteSpace: 'nowrap',
                textShadow: '0 0 24px rgba(255,255,255,0.85)',
                marginTop: '0.1em',
              }}>
                売上・業務に即効！
              </span>
            </h1>

            {/* 専門性見出し：月桂樹 */}
            <div className="hero-gold-band" style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '1rem',
              padding: '0.5rem 0',
              maxWidth: '600px',
            }}>
              {/* 左月桂樹 */}
              <Image
                src="/images/laurel-left.png"
                alt=""
                aria-hidden="true"
                width={60} height={120}
                style={{ width: 'clamp(36px, 4vw, 56px)', height: 'auto', flexShrink: 0, marginBottom: '-8px', opacity: 0.92 }}
              />
              {/* テキスト */}
              <div style={{ textAlign: 'center', fontFamily: '"Noto Sans JP", sans-serif' }}>
                <p style={{
                  margin: 0,
                  fontSize: 'clamp(20px, 1.8vw, 30px)',
                  fontWeight: 700,
                  color: '#3a1e00',
                  letterSpacing: '0.06em',
                  lineHeight: 1.6,
                }}>
                  中小企業診断士 × 認定心理士
                </p>
                <p style={{
                  margin: 0,
                  fontSize: 'clamp(20px, 1.8vw, 30px)',
                  fontWeight: 700,
                  color: '#3a1e00',
                  letterSpacing: '0.06em',
                  lineHeight: 1.5,
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'center',
                  gap: '0.2em',
                }}>
                  <span style={{ fontSize: '60%', color: '#9a8060', fontWeight: 500, letterSpacing: '0.08em' }}>が教える</span>
                  <span style={{ fontSize: '125%', color: '#C9A14A', fontWeight: 900, letterSpacing: '0.04em' }}>AI研修</span>
                </p>
              </div>
              {/* 右月桂樹 */}
              <Image
                src="/images/laurel-right.png"
                alt=""
                aria-hidden="true"
                width={60} height={120}
                style={{ width: 'clamp(36px, 4vw, 56px)', height: 'auto', flexShrink: 0, marginBottom: '-8px', opacity: 0.92 }}
              />
            </div>

            {/* CTAボタン */}
            <div className="cta-wrap" style={{ maxWidth: '500px' }}>
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
                <MonitorPlay className="cta-icon" style={{ width: '2rem', height: '2rem', flexShrink: 0 }} />
                <div className="cta-text-wrap" style={{ flex: 1, padding: '0.9rem 0', fontFamily: '"Noto Sans JP", sans-serif' }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.3, whiteSpace: 'nowrap' }}>
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
                <span className="cta-arrow" style={{
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
          <div className="hero-right" style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>

            {/* 吹き出しアイコン */}
            <div className="hero-bubble" style={{ position: 'absolute', bottom: '460px', left: '-10px', zIndex: 20, width: '160px', height: '160px' }}>
              <Image
                src="/images/icon_only3.png"
                alt="先着3社限定募集"
                width={160} height={160}
                style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 4px 12px rgba(201,161,74,0.4))' }}
              />
            </div>

            {/* 女性写真：絶対配置でカードの上から積み上げ */}
            <div className="hero-photo-wrap" style={{
              position: 'absolute',
              bottom: '140px',
              left: '3%',
              width: '100%', maxWidth: '477px',
              zIndex: 5,
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

            {/* プロフィールカード：1カラム・リデザイン */}
            <div className="hero-card" style={{
              position: 'absolute',
              bottom: '10%',
              left: '0', right: '-1.5rem',
              width: '500px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(255,251,242,0.97) 100%)',
              borderTop: '2px solid #C9A14A',
              padding: '0.75rem 0 0.75rem 1.2rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 -6px 30px rgba(0,0,0,0.1)',
              zIndex: 10,
            }}>
              {/* 監修・提供ラベル */}
              <p style={{
                margin: '0 0 0.4rem',
                fontSize: '0.6rem', fontWeight: 700,
                color: '#C9A14A', letterSpacing: '0.15em',
                fontFamily: '"Noto Sans JP", sans-serif',
                textTransform: 'uppercase',
              }}>監修・提供</p>

              {/* 名前 */}
              <p style={{
                margin: 0,
                fontFamily: '"Noto Serif JP", serif',
                fontWeight: 900, fontSize: '1.4rem',
                color: '#0D1B45', lineHeight: 1.1,
                letterSpacing: '0.05em',
              }}>栢原 陽子</p>
              <p style={{
                margin: '0.2rem 0 0',
                fontSize: '0.62rem', color: '#999',
                fontFamily: '"Noto Sans JP", sans-serif',
              }}>（かやはら ようこ）</p>

              {/* 役職 */}
              <p style={{
                margin: '0.3rem 0 0.8rem',
                fontSize: '0.68rem', fontWeight: 700, color: '#444',
                fontFamily: '"Noto Sans JP", sans-serif',
                borderBottom: '1px solid rgba(201,161,74,0.25)',
                paddingBottom: '0.8rem',
              }}>株式会社UNIBRAND 代表取締役</p>

              {/* 資格タグ：横並び折り返し */}
              <div className="hero-card-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['中小企業診断士', '認定心理士', '認定支援機関'].map((label) => (
                  <span key={label} style={{
                    display: 'inline-flex', alignItems: 'center',
                    height: '26px',
                    padding: '0 10px',
                    border: '1px solid rgba(201,161,74,0.5)',
                    borderRadius: '999px',
                    background: 'rgba(255,250,240,0.9)',
                    color: '#7a6020',
                    fontWeight: 600,
                    fontSize: '0.6rem',
                    fontFamily: '"Noto Sans JP", sans-serif',
                    letterSpacing: '0.03em',
                    whiteSpace: 'nowrap',
                  }}>
                    {label}
                  </span>
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
          /* グリッド */
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          /* 左カラム */
          .hero-left {
            padding-top: 1.2rem !important;
            padding-bottom: 0.5rem !important;
            gap: 0.9rem !important;
            align-items: stretch !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          /* ① バナー：横幅いっぱい */
          .hero-banner {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          /* ② 赤帯：横幅いっぱい・中央揃え */
          .hero-red-band {
            width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 0.4rem 0.8rem !important;
            border-radius: 4px !important;
            box-sizing: border-box !important;
            font-size: 15px !important;
            white-space: normal !important;
            word-break: break-all !important;
          }
          /* スマホのみbrを表示 */
          .sp-br { display: inline !important; }
          /* ③ コピー1行目：脇役 */
          .hero-copy-1 {
            font-size: 18px !important;
            white-space: normal !important;
            letter-spacing: 0em !important;
            line-height: 1.5 !important;
            opacity: 0.75 !important;
            text-align: center !important;
            margin-bottom: 0 !important;
          }
          /* ④ コピー2行目：主役 */
          .hero-copy-2 {
            font-size: clamp(37px, 9.7vw, 44px) !important;
            line-height: 1.15 !important;
            white-space: normal !important;
            letter-spacing: -0.02em !important;
            text-align: center !important;
          }
          /* PC では sp-br を非表示 */
          .sp-br { display: none; }
          /* 専門性見出し：モバイル */
          .hero-gold-band {
            width: 100% !important;
            padding: 0.5rem 0 !important;
            gap: 0.5rem !important;
          }
          .hero-gold-band p {
            font-size: 18px !important;
          }
          /* CTA外枠：横幅いっぱい */
          .cta-wrap { width: 100% !important; max-width: 100% !important; }
          /* CTAアイコン・矢印非表示 */
          .cta-icon { display: none !important; }
          .cta-arrow { display: none !important; }
          /* CTA外枠：中央揃え */
          .cta-wrap {
            width: 100% !important;
            max-width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
          /* CTAボタン：中央配置 */
          .cta-main {
            width: 100% !important;
            max-width: 340px !important;
            justify-content: center !important;
          }
          /* CTA内テキスト中央揃え */
          .cta-text-wrap { text-align: center !important; flex: unset !important; }
          /* 右カラム */
          .hero-right {
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            padding-top: 2rem !important;
          }
          .hero-photo-wrap {
            position: static !important;
            width: 80% !important;
            max-width: 280px !important;
            margin: 0 auto !important;
            bottom: auto !important;
          }
          .hero-bubble {
            position: absolute !important;
            bottom: auto !important;
            top: 0px !important;
            left: 10px !important;
            width: 110px !important;
            height: 110px !important;
            z-index: 20 !important;
          }
          .hero-card {
            position: static !important;
            transform: none !important;
            right: auto !important;
            left: auto !important;
            width: 330px !important;
            margin: 0 auto 1.5rem !important;
            border-radius: 12px !important;
            padding: 1rem 1.2rem !important;
            box-sizing: border-box !important;
          }
          .hero-card-badges {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 0.4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
