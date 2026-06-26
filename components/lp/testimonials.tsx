import { Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'

const voices = [
  {
    who: '製造業・経営者 / 従業員80名',
    body: '“ツールの研修”は前にも受けたが続かなかった。今回は診断士さんが“自社のどの業務に効くか”から設計してくれて、はじめて成果が見えた。',
  },
  {
    who: 'サービス業・経営者 / 従業員40名',
    body: '助成金で実質負担が抑えられ、全社で踏み切れた。申請まで任せられたのが大きい。“何を自動化するか”から一緒に決められて、自分も判断軸を持てた。',
  },
  {
    who: '士業事務所・代表',
    body: '診断士の伴走で“やらされ研修”にならず、自社の業務にそのまま活かせた。卒業後もAI顧問（月3万〜）で相談できる安心感がある。',
  },
]

export function Testimonials() {
  return (
    <section className="bg-surface py-16 sm:py-20" aria-labelledby="voices-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="VOICE"
          title={<span id="voices-heading">導入企業の声</span>}
          description="※掲載は差し替え前提のサンプルです"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {voices.map((v) => (
            <figure
              key={v.who}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="size-7 text-electric/40" />
              <blockquote className="text-pretty text-sm leading-relaxed text-card-foreground">
                {v.body}
              </blockquote>
              <figcaption className="mt-auto text-xs font-semibold text-muted-foreground">
                {v.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
