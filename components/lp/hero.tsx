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

            {/* メインコピー */}
            <h1 id="hero-heading" style={{ margin: 0, lineHeight: 1.05 }}>
              <span style={{ display: 'block', fontFamily: '"Noto Serif JP", serif', fontWeight: 900, fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', letterSpacing: '-0.01em' }}>
                <span style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif', color: '#8E1B1B', fontStyle: 'italic' }}>ChatGPT</span>
                <span style={{ color: '#1a0a0a' }}>に</span>
              </span>
              <span style={{ display: 'block', fontFamily: '"Noto Serif JP", serif', fontWeight: 900, fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', color: '#1a0a0a', letterSpacing: '-0.01em' }}>
                相談で終わってない？
              </span>
            </h1>

            {/* サブコピー */}
            <p style={{ margin: 0, fontFamily: '"Noto Serif JP", serif', fontWeight: 700, fontSize: 'clamp(1.3rem, 3vw, 2rem)', color: '#1a0a0a', lineHeight: 1.2 }}>
              <span style={{ color: '#8E1B1B' }}>業務効率化</span>{' × '}<span style={{ color: '#8E1B1B' }}>AI</span>セミナー
            </p>

            {/* 説明文 */}
            <p style={{ margin: 0, fontFamily: '"Noto Sans JP", sans-serif', fontSize: 'clamp(0.75rem, 1.4vw, 0.9rem)', color: '#3a2a2a' }}>
              AIを「使える」に変える実践研修
            </p>

            {/* 月桂樹 */}
            <Image src="/images/laurel-stats.png" alt="導入実績12万人以上・最大75%補助・実質9万円〜" width={460} height={150}
              style={{ width: '100%', maxWidth: '440px', height: 'auto' }} />

            {/* CTA① メイン */}
            <Link href="#contact" className="cta-main" style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              height: '96px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #8E1B1B, #B71C1C)',
              color: '#fff', textDecoration: 'none', padding: '0 1.5rem 0 1.75rem',
              boxShadow: '0 6px 24px rgba(142,27,27,0.45)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              maxWidth: '480px',
            }}>
              <MonitorPlay style={{ width: '1.8rem', height: '1.8rem', flexShrink: 0 }} />
              <span style={{ flex: 1, fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 700, fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)', lineHeight: 1.3 }}>
                まずは無料の個別相談<br />
                <span style={{ fontSize: '0.75em', fontWeight: 400, opacity: 0.85 }}>（オンライン30分）</span>
              </span>
              <span style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.25)', flexShrink: 0,
              }}>
                <ChevronRight style={{ width: '1.1rem', height: '1.1rem' }} />
              </span>
            </Link>

            {/* CTA② サブ */}
            <Link href="#contact" className="cta-sub" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              minHeight: '64px', borderRadius: '999px',
              background: '#fff', color: '#3a1a00',
              border: '2px solid #C9A14A',
              textDecoration: 'none', padding: '0 1.5rem 0 1.75rem',
              boxShadow: '0 2px 12px rgba(201,161,74,0.2)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              maxWidth: '480px',
            }}>
              <Gift style={{ width: '1.4rem', height: '1.4rem', flexShrink: 0, color: '#C9A14A' }} />
              <span style={{ flex: 1, fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 700, fontSize: 'clamp(0.75rem, 1.3vw, 0.9rem)', lineHeight: 1.4 }}>
                今なら無料相談者全員に<br />
                <span style={{ color: '#8E1B1B' }}>「AI活用事例集10選（PDF）」</span>をプレゼント！
              </span>
              <span style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '32px', height: '32px', borderRadius: '50%',
                background: '#C9A14A', flexShrink: 0,
              }}>
                <ChevronRight style={{ width: '0.9rem', height: '0.9rem', color: '#fff' }} />
              </span>
            </Link>
          </div>

          {/* ====== RIGHT ====== */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>

            {/* 吹き出し — 指先付近 */}
            <div style={{
              position: 'absolute', top: '90px', left: '-40px', zIndex: 20,
              background: '#fff', borderRadius: '50%',
              width: '120px', height: '120px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
            }}>
              <p style={{ margin: 0, textAlign: 'center', fontFamily: '"Noto Sans JP", sans-serif', fontWeight: 900, fontSize: '0.7rem', lineHeight: 1.4, color: '#8E1B1B' }}>
                先着<br /><span style={{ fontSize: '1.4rem' }}>3社</span><br />限定 募集！
              </p>
              <div aria-hidden="true" style={{
                position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)',
                width: 0, height: 0,
                borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '10px solid #fff',
              }} />
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

            {/* プロフィールカード */}
            <div style={{
              width: '100%', background: 'rgba(255,255,255,0.93)',
              borderTop: '3px solid #C9A14A',
              padding: '32px', minHeight: '220px',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              {/* 上段：左名前 / 右バッジ */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'start' }}>
                {/* 左：名前・役職 */}
                <div>
                  <span style={{
                    display: 'inline-block', background: '#0D1B45', color: '#C9A14A',
                    fontSize: '0.65rem', fontWeight: 700, padding: '2px 10px', borderRadius: '4px',
                    fontFamily: '"Noto Sans JP", sans-serif', marginBottom: '0.4rem',
                  }}>監修・提供</span>
                  <p style={{ margin: 0, fontFamily: '"Noto Serif JP", serif', fontWeight: 700, fontSize: '1.3rem', color: '#0D1B45', lineHeight: 1.2 }}>
                    栢原 陽子
                  </p>
                  <p style={{ margin: '0.1rem 0 0', fontSize: '0.65rem', fontWeight: 400, color: '#666', fontFamily: '"Noto Sans JP", sans-serif' }}>
                    （かやはら ようこ）
                  </p>
                  <p style={{ margin: '0.35rem 0 0', fontSize: '0.72rem', fontWeight: 700, color: '#333', fontFamily: '"Noto Sans JP", sans-serif' }}>
                    株式会社UNIBRAND 代表取締役
                  </p>
                </div>
                {/* 右：資格バッジ */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {['中小企業診断士', '認定心理士', '認定支援機関'].map((label) => (
                    <span key={label} style={{
                      display: 'inline-block', padding: '6px 14px',
                      border: '1px solid #D4A94B', borderRadius: '999px',
                      background: '#fffaf4', color: '#7A1010',
                      fontWeight: 700, fontSize: '0.7rem',
                      fontFamily: '"Noto Sans JP", sans-serif',
                      textAlign: 'center',
                    }}>
                      🏅 {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* 下段：説明文 */}
              <p style={{
                margin: 0, fontSize: '0.7rem', color: '#444', lineHeight: 1.7,
                fontFamily: '"Noto Sans JP", sans-serif',
                borderTop: '1px solid #E8C97A', paddingTop: '0.65rem',
              }}>
                中小企業診断士が、業務効率・売上UPの観点から、AI導入を伴走します。「ツールの使い方」ではなく"成果から逆算"。<br />
                累計500社超の経営支援と、補助金採択率80%超・累計5,000万円超の知見で伴走します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-main:hover { transform: translateY(-3px) !important; box-shadow: 0 15px 40px rgba(0,0,0,0.25) !important; }
        .cta-sub:hover { transform: translateY(-3px) !important; box-shadow: 0 15px 40px rgba(0,0,0,0.15) !important; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  )
}
