import { SectionHeading } from './section-heading'

const reasons = [
  {
    no: '1',
    title: '”経営の専門家”が教えるから、成果に直結',
    body: '中小企業診断士が業務効率・売上UPの観点で設計。AIに詳しいだけの講師とは、出口（成果）が違う。',
  },
  {
    no: '2',
    title: '助成金が使えるプログラムだから、実質9万で始められる',
    body: '助成金の条件を満たしたプログラムとして設計。一般的なサポートは可能。必要に応じて提携社労士へのご相談も可能です。',
  },
  {
    no: '3',
    title: '実務家教員養成課程修了の講師が担当するから、続く',
    body: '文部科学省および厚生労働省認定の実務家教員養成課程を修了した講師が担当。受講者ごとの業務に合わせたカリキュラム設計で、現場に定着するAI活用を目指します。',
  },
]

export function Reasons() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 sm:py-20" aria-labelledby="reasons-heading">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHY US"
          title={<span id="reasons-heading">AI SHIFTRY が、選ばれる理由。</span>}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.no}
              className="relative flex flex-col gap-3 rounded-2xl border border-border bg-white p-7 shadow-soft"
            >
              <span className="font-heading text-5xl font-black text-gold/30">{r.no}</span>
              <h3 className="text-balance font-heading text-lg font-extrabold leading-snug text-navy">
                {r.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-foreground/70">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
