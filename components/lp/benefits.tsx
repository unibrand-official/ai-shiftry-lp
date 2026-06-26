import {
  TrendingUp,
  Wallet,
  Repeat,
  Settings2,
  UserCheck,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const benefits = [
  { icon: TrendingUp, title: '成果から逆算', body: 'ツール教育でなく、業務効率・売上UPに効くところからAIを設計。' },
  { icon: Wallet, title: '補助金で実質9万', body: '経費75%＋賃金1,000円/時。認定支援機関が申請まで伴走し“難しくて諦める”がない。' },
  { icon: Repeat, title: '続く・自走する', body: '心理士の知見で、現場が自分ごとでAIを使い続けるまで支える。' },
  { icon: Settings2, title: '課題に合わせて設計', body: '御社の課題をヒアリングし、10時間を成果に効く内容に組み立て。' },
  { icon: UserCheck, title: '専任スタッフ不要', body: 'つまずいたら聞ける伴走付き。AI専任を雇わず始められる。' },
  { icon: ShieldCheck, title: '守りも込み', body: 'セキュリティ・ガバナンス・著作権まで。情報漏洩・リスクの低減。' },
  { icon: Workflow, title: '一気通貫', body: 'AI研修だけで終わらず、Web集客・売上の仕組みづくりまで支援。' },
]

export function Benefits() {
  return (
    <section className="bg-surface py-16 sm:py-20" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="BENEFITS"
          title={<span id="benefits-heading">導入企業が得られる、7つの価値</span>}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-heading text-base font-extrabold text-navy">{b.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
