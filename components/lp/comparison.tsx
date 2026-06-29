import { Check, X } from 'lucide-react'
import { SectionHeading } from './section-heading'

const rows = [
  {
    axis: '視点',
    common: 'ツールの使い方を教えて終わり',
    shiftry: '診断士が業務効率・売上UPから逆算',
  },
  {
    axis: '成果',
    common: '学んでも自社の成果に繋がりにくい',
    shiftry: '“自社の仕事での使い方”まで落とす',
  },
  {
    axis: '補助金',
    common: '「サポート有」止まり・外注頼み',
    shiftry: '認定支援機関＝本職。申請まで伴走',
  },
  {
    axis: '定着',
    common: '配って終わり・続かない',
    shiftry: '心理士の知見＋見える化で自走まで',
  },
  {
    axis: '卒業後',
    common: '研修が終われば、そこで終わり',
    shiftry: 'AI顧問でずっととなりに／Web集客まで',
  },
]

export function Comparison() {
  return (
    <section className="bg-beige py-16 sm:py-20" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="DIFFERENCE"
          title={<span id="comparison-heading">“ツールを教える研修”とは、ここが違う。</span>}
          description="AI研修はたくさんある。でも“使い方を覚えて終わり／自社の成果に繋がらない”——それが多くのAI研修の限界です。"
        />

        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-sm">
          <div className="grid grid-cols-[80px_1fr_1fr] sm:grid-cols-[120px_1fr_1fr]">
            {/* header */}
            <div className="bg-navy p-4" aria-hidden="true" />
            <div className="bg-slate-500/90 p-4 text-center">
              <span className="text-xs font-bold text-white sm:text-sm">よくあるAI研修</span>
            </div>
            <div className="bg-navy p-4 text-center">
              <span className="text-xs font-black text-cyan sm:text-sm">AI SHIFTRY</span>
            </div>

            {/* rows */}
            {rows.map((r, i) => (
              <div key={r.axis} className="contents">
                <div
                  className={`flex items-center justify-center p-4 text-xs font-bold text-navy sm:text-sm ${
                    i % 2 === 0 ? 'bg-card' : 'bg-secondary'
                  }`}
                >
                  {r.axis}
                </div>
                <div
                  className={`flex items-start gap-2 p-4 text-xs leading-relaxed text-muted-foreground sm:text-sm ${
                    i % 2 === 0 ? 'bg-card' : 'bg-secondary'
                  }`}
                >
                  <X className="mt-0.5 size-4 shrink-0 text-slate-400" />
                  <span className="text-pretty">{r.common}</span>
                </div>
                <div
                  className={`flex items-start gap-2 p-4 text-xs font-medium leading-relaxed text-card-foreground sm:text-sm ${
                    i % 2 === 0 ? 'bg-success/5' : 'bg-success/10'
                  }`}
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  <span className="text-pretty">{r.shiftry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-pretty text-center text-sm leading-relaxed text-muted-foreground">
          だから、“学んで終わり”でなく、<span className="font-bold text-navy">“成果が出る”</span>
          。しかも補助金で実質負担を抑えて始められます。
        </p>
      </div>
    </section>
  )
}
