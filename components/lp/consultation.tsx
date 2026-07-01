import { Check } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { CtaButton } from './cta-button'

const items = [
  '御社の課題に合わせた、全10時間の研修プラン例',
  '”40万→実質9万”の助成金が、御社で使えるかの可否',
  '業務効率・売上UPの観点で、どこからAIを入れると効くか',
  '研修後の継続サポートプランについて',
  '導入の進め方・スケジュール',
]

export function Consultation() {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="consult-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FREE CONSULTATION"
          title={<span id="consult-heading">無料の個別相談で、確認できること</span>}
          description="オンライン30分・ご相談だけでもOK"
        />

        <ul className="mt-10 flex flex-col gap-3">
          {items.map((it) => (
            <li
              key={it}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                <Check className="size-4" />
              </span>
              <span className="text-pretty text-sm leading-relaxed text-card-foreground">{it}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          丁寧に設計するため、個別相談は月数社までとさせていただいています。
        </p>

        <div className="mt-6 rounded-2xl border border-border bg-secondary/60 p-5 text-center text-sm leading-relaxed text-foreground/80">
          御社の課題に合わせた研修プラン＆<br className="sm:hidden" />
          助成金活用（40万円→実質9万円）の使い方をその場でご提案。<br />
          ご相談だけでもOK。
        </div>

        <div className="mt-6">
          <CtaButton />
        </div>
      </div>
    </section>
  )
}
