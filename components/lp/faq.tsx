import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: '他社のAI研修と何が違うのですか？',
    a: '中小企業診断士が“業務効率・売上UP”の観点で設計し、自社の仕事での使い方まで落とし込みます。ツールの使い方を教えて終わりにせず、成果から逆算するのが最大の違いです。',
  },
  {
    q: '本当に40万円（全10時間）の研修が実質9万円になりますか？',
    a: '人材開発支援助成金（助成率 最大75%）の活用イメージです。助成率・実質額は企業規模や賃上げ等の要件・コースで異なり、審査があり採択は保証されませんが、認定支援機関として申請をサポートします。申請は令和8年度末までで準備期間も要るため、お早めにご相談ください。',
  },
  {
    q: 'AIに詳しい社員がいなくても大丈夫ですか？',
    a: 'はい。診断士が自社の業務に沿って直接レクチャーし、つまずいたら相談できる伴走付き。AI専任を雇う必要はありません。',
  },
  {
    q: '情報漏洩や著作権など“守り”は学べますか？',
    a: 'セキュリティ・ガバナンス・著作権の講座を完備。経営者向けにリスク低減の観点もカバーします。',
  },
]

export function Faq() {
  return (
    <section className="bg-surface py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title={<span id="faq-heading">よくあるご質問</span>} />

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm [&_summary]:list-none"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4">
                <span className="text-pretty font-heading text-sm font-bold text-navy sm:text-base">
                  <span className="text-electric">Q. </span>
                  {f.q}
                </span>
                <Plus className="mt-0.5 size-5 shrink-0 text-electric transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                <span className="font-bold text-success">A. </span>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
