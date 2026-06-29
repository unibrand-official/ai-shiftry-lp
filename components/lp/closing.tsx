import Link from 'next/link'
import { CtaButton } from './cta-button'

export function Closing() {
  return (
    <section
      id="contact"
      className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28"
      aria-labelledby="closing-heading"
    >
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          CONTACT
        </span>
        <h2
          id="closing-heading"
          className="text-balance font-heading text-2xl font-bold leading-snug text-white sm:text-4xl"
        >
          「入れて終わり」ではなく、
          <br />
          <span className="text-gold-gradient text-glow-gold">"成果が出るまで"</span>をとなりで。
        </h2>
        <span className="gold-line" aria-hidden="true" />
        <p className="text-pretty text-sm leading-relaxed text-ink-foreground/80 sm:text-base">
          まずは、御社に合う始め方をご提案します。無料の個別相談（オンライン30分）／助成金の使い方・研修プラン例もその場で。
        </p>
        <CtaButton className="mt-2" variant="gold" />
        <Link
          href="/contact"
          className="mt-1 text-sm text-gold/80 underline underline-offset-4 hover:text-gold transition-colors"
        >
          お問い合わせフォームはこちら →
        </Link>
      </div>
    </section>
  )
}
