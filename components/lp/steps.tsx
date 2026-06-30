import { SectionHeading } from './section-heading'

const steps = [
  {
    no: 'STEP 1',
    title: '現状とゴールの整理',
    body: '業務を棚卸しし、どこにAIを効かせれば成果（業務効率・売上）が出るかを一緒に設計。',
  },
  {
    no: 'STEP 2',
    title: '全10時間のAI研修',
    body: '課題に合わせた内容で、診断士が直接レクチャー。自社の仕事に沿って学ぶ。',
  },
  {
    no: 'STEP 3',
    title: '実務へ落とす伴走',
    body: '“自社の仕事”でAIを使えるよう、診断士が壁打ち・伴走。つまずきはすぐ相談。',
  },
  {
    no: 'STEP 4',
    title: '卒業 → AI顧問（月3万〜）',
    body: '定着後はAI顧問として、新しい使い方や改善をとなりで継続支援。',
  },
]

export function Steps() {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="steps-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FLOW"
          title={<span id="steps-heading">診断士が、となりで伴走する全10時間。</span>}
          description="そして卒業後は“AI顧問（月3万〜）”でずっととなりに。"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.no}
              className="flex flex-col gap-2 rounded-2xl border-l-4 border-bordeaux bg-card p-6 shadow-sm"
            >
              <span className="font-heading text-sm font-black tracking-wide text-bordeaux">{s.no}</span>
              <h3 className="font-heading text-lg font-extrabold text-navy">{s.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
