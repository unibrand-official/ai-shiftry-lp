import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
})

export type Faq = {
  id: string
  question: string
  answer: string
}

export type Testimonial = {
  id: string
  body: string
  who: string
}
