import Link from 'next/link'
import { Gift, MonitorPlay, ChevronRight } from 'lucide-react'

export function Closing() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: 'linear-gradient(160deg, #fff5f5 0%, #fff8f2 30%, #fff 60%, #f9f4ff 100%)',
      }}
      aria-labelledby="closing-heading"
    >
      {/* 光の粒・ゴールドアクセント */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,161,74,0.12) 0%, transparent 70%)',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(255,200,180,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '10%', right: '8%', width: '250px', height: '250px',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(201,161,74,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span style={{
          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em',
          color: '#C9A14A', fontFamily: '"Noto Sans JP", sans-serif',
          textTransform: 'uppercase',
        }}>
          CONTACT
        </span>

        <h2
          id="closing-heading"
          className="text-balance font-heading text-2xl font-bold leading-snug sm:text-4xl"
          style={{ color: '#0D1B45' }}
        >
          「入れて終わり」ではなく、
          <br />
          <span style={{ color: '#8E1B1B' }}>"成果が出るまで"</span>をとなりで。
        </h2>

        {/* ゴールド区切り線 */}
        <div style={{
          width: '60px', height: '2px',
          background: 'linear-gradient(90deg, transparent, #C9A14A, transparent)',
          borderRadius: '2px',
        }} />

        <p className="text-pretty text-sm leading-relaxed sm:text-base" style={{ color: '#555' }}>
          まずは、御社に合う始め方をご提案します。無料の個別相談（オンライン30分）／助成金の使い方・研修プラン例もその場で。
        </p>

        {/* CTAボタン：FVと統一 */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd6acXFEEhPETbuBP7BP9cjNSWMMg-tMRUqDuEKXMVGQ80xlA/viewform"
          target="_blank" rel="noopener noreferrer"
          className="cta-closing mt-2"
          style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            borderRadius: '14px', width: '100%', maxWidth: '480px',
            background: 'linear-gradient(135deg, #7A1010 0%, #A82020 50%, #C83030 100%)',
            color: '#fff', textDecoration: 'none', padding: '0 1.25rem 0 1.5rem',
            boxShadow: '0 0 0 2px #C9A14A, 0 8px 28px rgba(120,16,16,0.35)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div style={{ flex: 1, padding: '0.9rem 0', fontFamily: '"Noto Sans JP", sans-serif' }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.3 }}>
              無料個別相談を予約する
            </p>
            <p style={{ margin: '0.1rem 0 0', fontSize: '0.73rem', opacity: 0.85 }}>
              （オンライン30分）
            </p>
            <div style={{ marginTop: '0.4rem', paddingTop: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Gift style={{ width: '0.85rem', height: '0.85rem', flexShrink: 0 }} />
              <span style={{ fontSize: '0.73rem', fontWeight: 600 }}>AI活用事例10選（PDF）プレゼント</span>
            </div>
          </div>
          <span className="cta-arrow-closing" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '42px', height: '42px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.28)', flexShrink: 0,
          }}>
            <ChevronRight style={{ width: '1.2rem', height: '1.2rem' }} />
          </span>
        </Link>

        <style>{`
          .cta-closing:hover {
            transform: translateY(-4px);
            box-shadow: 0 0 0 2px #C9A14A, 0 16px 40px rgba(120,16,16,0.35) !important;
          }
          @media (max-width: 768px) {
            .cta-arrow-closing { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
