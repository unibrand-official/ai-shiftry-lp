import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { client, type Faq as FaqType } from '@/lib/microcms'

async function getFaqs(): Promise<FaqType[]> {
  const data = await client.getList<FaqType>({
    endpoint: 'faq',
    queries: { limit: 20 },
  })
  return data.contents
}

export async function Faq() {
  const faqs = await getFaqs()

  return (
    <section className="bg-surface py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title={<span id="faq-heading">よくあるご質問</span>} />

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.id}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm [&_summary]:list-none"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4">
                <span className="text-pretty font-heading text-sm font-bold text-navy sm:text-base">
                  <span className="text-electric">Q. </span>
                  {f.question}
                </span>
                <Plus className="mt-0.5 size-5 shrink-0 text-electric transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                <span className="font-bold text-success">A. </span>
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
