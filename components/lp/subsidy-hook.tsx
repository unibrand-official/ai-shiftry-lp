import { AlertTriangle } from 'lucide-react'

export function SubsidyHook() {
  return (
    <section className="relative overflow-hidden bg-beige py-12 sm:py-16" aria-labelledby="subsidy-heading">
      <div className="bg-dot-grid-light pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-alert px-4 py-1.5 text-xs font-bold text-white">
          <AlertTriangle className="size-4" />
          令和8年度末まで・動くなら、早めに
        </span>

        <h2 id="subsidy-heading" className="text-balance font-heading text-2xl font-extrabold leading-snug text-navy sm:text-3xl">
          全10時間のAI研修が、こんなに変わる。
        </h2>

        <div className="flex w-full flex-col items-center gap-4 rounded-3xl border border-border bg-secondary/60 p-6 shadow-soft sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex flex-col items-center">
            <span className="text-xs text-muted-foreground">研修費</span>
            <span className="font-heading text-5xl font-black leading-none text-navy sm:text-6xl">
              40<span className="text-2xl sm:text-3xl">万円</span>
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-muted-foreground">助成率</span>
            <span className="font-heading text-5xl font-black leading-none text-bordeaux sm:text-6xl">
              最大75<span className="text-2xl sm:text-3xl">%</span>
            </span>
          </div>

          <span className="font-heading text-3xl font-black text-navy sm:text-4xl">→</span>

          <div className="flex flex-col items-center rounded-2xl border border-gold/40 bg-gold/10 px-6 py-3">
            <span className="text-xs font-semibold text-gold">実質</span>
            <span className="font-heading text-5xl font-black leading-none text-gold sm:text-6xl">
              9<span className="text-2xl sm:text-3xl">万円</span>
              <span className="text-lg font-bold text-navy sm:text-xl">/名</span>
            </span>
          </div>
        </div>

        <p className="text-pretty text-sm leading-relaxed text-foreground/70">
          この助成金は <span className="font-bold text-navy">令和8年度（〜2027年3月）末まで</span>。申請には準備期間が必要です。今年度の枠も限りあり——動くなら、早めに。
        </p>

        <p className="max-w-3xl text-pretty text-[11px] leading-relaxed text-muted-foreground">
          ※人材開発支援助成金（事業展開等リスキリング支援コース・中小企業）の活用イメージ。経費助成75%＝30万円＋賃金助成1,000円/時×10時間＝1万円で、40万円→実質9万円。助成率・額は企業規模や要件・コースにより異なり、審査があり採択を保証しません。最新は公式情報をご確認ください（認定支援機関として申請をサポート）。
        </p>
      </div>
    </section>
  )
}
