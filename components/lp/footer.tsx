import { Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-ink-foreground/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6">
        <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-xl font-black text-cyan text-glow">AI SHIFTRY</p>
            <p className="text-xs text-ink-foreground/60">エーアイ・シフトリー</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-foreground/60">
              提供：株式会社UNIBRAND（中小企業診断士・認定支援機関・認定心理士）
            </p>
          </div>
          <div className="flex flex-col gap-1.5 text-sm">
            <a href="tel:090-7505-0611" className="flex items-center gap-2 hover:text-cyan">
              <Phone className="size-4" /> 090-7505-0611
            </a>
            <a href="mailto:thanks@unibrand.jp" className="flex items-center gap-2 hover:text-cyan">
              <Mail className="size-4" /> thanks@unibrand.jp
            </a>
          </div>
        </div>
        <p className="text-pretty text-[11px] leading-relaxed text-ink-foreground/45">
          ※数値・事例・料金はモデルケースを含みます。お客様の声はサンプル（差し替え前提）。助成金は要件・審査あり採択保証なし、最新は公式確認。料金は確定前のものを含みます。
        </p>
        <p className="text-[11px] text-ink-foreground/40">
          © {new Date().getFullYear()} UNIBRAND Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
