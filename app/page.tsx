import { Header } from '@/components/lp/header'
import { Hero } from '@/components/lp/hero'
import { SubsidyHook } from '@/components/lp/subsidy-hook'
import { DataBar } from '@/components/lp/data-bar'
import { Problem } from '@/components/lp/problem'
import { Solution } from '@/components/lp/solution'
import { Comparison } from '@/components/lp/comparison'
import { Reasons } from '@/components/lp/reasons'
import { Curriculum } from '@/components/lp/curriculum'
import { Benefits } from '@/components/lp/benefits'
import { Steps } from '@/components/lp/steps'
import { Pricing } from '@/components/lp/pricing'
import { Testimonials } from '@/components/lp/testimonials'
import { Consultation } from '@/components/lp/consultation'
import { Faq } from '@/components/lp/faq'
import { Closing } from '@/components/lp/closing'
import { Footer } from '@/components/lp/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SubsidyHook />
      <DataBar />
      <Problem />
      <Solution />
      <Comparison />
      <Reasons />
      <Curriculum />
      <Benefits />
      <Steps />
      <Pricing />
      <Testimonials />
      <Consultation />
      <Faq />
      <Closing />
      <Footer />
    </main>
  )
}
