import { Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { client, type Testimonial as TestimonialType } from '@/lib/microcms'

async function getTestimonials(): Promise<TestimonialType[]> {
  const data = await client.getList<TestimonialType>({
    endpoint: 'testimonials',
    queries: { limit: 20 },
  })
  return data.contents
}

export async function Testimonials() {
  const voices = await getTestimonials()

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
              key={v.id}
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
