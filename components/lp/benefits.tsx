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
  { icon: Wallet, title: '助成金で実質負担を抑えて始められる', body: '経費75%＋賃金1,000円/時の助成金を活用。助成金活用で実質9万円から始められます。' },
  { icon: Repeat, title: '続く・自走する', body: '受講者ごとの業務に合わせたカリキュラム設計で、現場に定着するAI活用を目指します。' },
  { icon: Settings2, title: '課題に合わせて設計', body: '御社の課題をヒアリングし、10時間を成果に効く内容に組み立て。' },
  { icon: UserCheck, title: '専任スタッフ不要', body: 'つまずいたら聞ける伴走付き。AI専任を雇わず始められる。' },
  { icon: ShieldCheck, title: '守りも込み', body: 'セキュリティ・ガバナンス・著作権まで。情報漏洩・リスクの低減。' },
  { icon: Workflow, title: '一気通貫', body: '事前ヒアリングを行い、課題に合わせたカリキュラムを設計します。' },
]

export function Benefits() {
  return (
    <section className="bg-gray-lp py-16 sm:py-20" aria-labelledby="benefits-heading">
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
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-bordeaux/10 text-bordeaux">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-base font-extrabold text-navy">{b.title}</h3>
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
