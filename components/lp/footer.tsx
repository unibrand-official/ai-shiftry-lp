export function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #fff8f2 0%, #fff5f0 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 上部ゴールド区切り線 */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, #C9A14A 30%, #F0D080 50%, #C9A14A 70%, transparent 100%)',
      }} />

      {/* 光のアクセント */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '200px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(201,161,74,0.08) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }} />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-3 pb-6" style={{ borderBottom: '1px solid rgba(201,161,74,0.2)' }}>
          <div>
            <p style={{
              fontFamily: '"Noto Serif JP", serif',
              fontSize: '1.25rem', fontWeight: 900,
              color: '#0D1B45', letterSpacing: '0.05em',
            }}>AI SHIFTRY</p>
            <p style={{ fontSize: '0.7rem', color: '#C9A14A', letterSpacing: '0.2em', fontFamily: '"Noto Sans JP", sans-serif' }}>
              エーアイ・シフトリー
            </p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#888', fontFamily: '"Noto Sans JP", sans-serif', lineHeight: 1.6 }}>
              提供：株式会社UNIBRAND（中小企業診断士・認定支援機関・認定心理士）
            </p>
          </div>
        </div>

        <p style={{
          marginTop: '1.25rem',
          fontSize: '0.68rem', lineHeight: 1.8, color: '#aaa',
          fontFamily: '"Noto Sans JP", sans-serif',
        }}>
          ※数値・事例・料金はモデルケースを含みます。お客様の声はサンプル（差し替え前提）。助成金は要件・審査あり採択保証なし、最新は公式確認。料金は確定前のものを含みます。
        </p>
        <p style={{ marginTop: '0.75rem', fontSize: '0.68rem', color: '#bbb', fontFamily: '"Noto Sans JP", sans-serif' }}>
          © {new Date().getFullYear()} UNIBRAND Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
