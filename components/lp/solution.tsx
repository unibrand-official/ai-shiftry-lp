import { Compass, BadgeCheck, HeartHandshake } from 'lucide-react'
import { SectionHeading } from './section-heading'

const pillars = [
  {
    icon: Compass,
    no: '①',
    title: '経営視点',
    headline: '診断士が成果から逆算',
    points: [
      '中小企業診断士が経営視点で設計',
      '業務効率・売上UPから逆算',
      '“自社の仕事での使い方”まで落とす',
      'ツール教育で終わらせない',
    ],
  },
  {
    icon: BadgeCheck,
    no: '②',
    title: '補助金が本職',
    headline: '40万→実質9万/名',
    points: [
      '認定支援機関＝申請まで伴走',
      '採択率80%超・累計5,000万超',
      '「サポート有」止まりではない',
      '令和8年度末まで“今だけ”',
    ],
  },
  {
    icon: HeartHandshake,
    no: '③',
    title: '続く伴走',
    headline: '認定心理士が自走まで',
    points: [
      '認定心理士の知見で離脱させない',
      '学んだことを実務に定着させる',
      'つまずいたら、すぐ聞ける',
      '卒業後はAI顧問でずっととなりに',
    ],
  },
]

export function Solution() {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="solution-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="SOLUTION"
          title={
            <span id="solution-heading">
              だから、<span className="text-bordeaux">“成果から逆算するAI研修”</span>。
            </span>
          }
          description="中小企業診断士 × 認定心理士 が、成果が出るまでとなりで伴走。UNIBRANDは、“ツールを教える会社”ではありません。"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-bordeaux">{p.no} {p.title}</span>
                    <p className="font-heading text-lg font-extrabold text-navy">{p.headline}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-card-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-bordeaux" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-gold/20 bg-accent p-6 text-center">
          <p className="text-pretty text-sm leading-relaxed text-accent-foreground sm:text-base">
            さらに ─ <span className="font-bold">補助金 × AI研修 × Webサイト制作/マーケ</span>
            まで一気通貫で支援。AI教育だけで終わらず、集客・売上の仕組みづくりまでとなりで。
          </p>
        </div>
      </div>
    </section>
  )
}
