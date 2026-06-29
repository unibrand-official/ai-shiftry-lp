import { Check } from 'lucide-react'
import { SectionHeading } from './section-heading'

const problems = [
  'ツールの使い方は分かったが、自社の業務に活かせない',
  '研修を入れたが、売上や効率の成果に繋がらない',
  '本やセミナーで学んでも、現場で使われず終わる',
  '“何を・どの順で”学べば成果が出るのか分からない',
  '助成金があるらしいが、難しそうで諦めてしまった',
  'AIに詳しい専任を置く余裕がない',
]

export function Problem() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="PROBLEM"
          title={
            <span id="problem-heading">
              AI研修、<span className="text-alert">“入れたのに変わらない”</span>
              <br className="hidden sm:block" />が起きていませんか？
            </span>
          }
          description="多くの会社が“ツールの使い方”は学べても、ここで止まっています。"
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {problems.map((p) => (
            <li
              key={p}
              className="card-premium flex items-start gap-3 bg-white p-5"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-bordeaux/10 text-bordeaux">
                <Check className="size-4" />
              </span>
              <span className="text-pretty text-sm leading-relaxed text-card-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
