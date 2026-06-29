import Image from 'next/image'
import Link from 'next/link'
import { Gift, ChevronRight, MonitorPlay } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy"
      aria-labelledby="hero-heading"
      style={{ backgroundColor: '#0D1B45' }}
    >
      {/* Decorative gold dot grid */}
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      {/* Gold glow */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(142,27,27,0.15) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:gap-4">

          {/* ====== LEFT ====== */}
          <div className="flex flex-col gap-5 pb-4 text-left">

            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2">
              <Gift className="size-4 text-gold" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wide text-gold sm:text-sm">
                無料配布中｜AI業務改善事例10選
              </span>
            </div>

            {/* Main copy */}
            <div className="flex flex-col gap-2">
              <p className="font-display text-base font-semibold tracking-[0.15em] text-gold sm:text-lg">
                業務効率化 × AIセミナー
              </p>
              <h1
                id="hero-heading"
                className="font-heading font-bold leading-[1.1] text-white"
              >
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem]">
                  ChatGPTに相談で
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem]">
                  終わってない？
                </span>
              </h1>
              <p className="mt-1 text-base font-medium text-ink-foreground/80 sm:text-lg">
                AIを「使える」に変える実践研修
              </p>
            </div>

            {/* Gold divider */}
            <span className="gold-line gold-line-left" aria-hidden="true" />

            {/* Stats */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { num: '12万人', label: '利用実績' },
                { num: '最大75%', label: '補助対象' },
                { num: '実質9万円～', label: '研修費' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-heading text-2xl font-bold text-gold sm:text-3xl">{s.num}</span>
                  <span className="text-xs text-ink-foreground/60">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#contact"
                className="bg-gold-gradient group inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-navy shadow-soft-lg transition-all duration-200 hover:-translate-y-0.5 sm:text-base"
              >
                無料で事例10選を受け取る
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:border-gold/50 hover:text-gold sm:text-base"
              >
                <MonitorPlay className="size-4" />
                オンライン説明会に参加する
              </Link>
            </div>
          </div>

          {/* ====== RIGHT — instructor photo ====== */}
          <div className="flex flex-col items-center gap-3">
            {/* Speech bubble */}
            <div className="relative z-20 w-fit max-w-[18rem] rounded-2xl border border-gold/40 bg-white/10 px-5 py-4 text-center backdrop-blur-sm sm:max-w-[20rem]">
              <p className="text-sm font-bold leading-relaxed text-white sm:text-base">
                ツール活用に留まらない！
                <br />
                <span className="text-gold">成果から逆算して利益を出す方法</span>
                を教えます！
              </p>
              <span
                className="absolute -bottom-3 left-1/2 size-5 -translate-x-1/2 rotate-45 border-b border-r border-gold/40 bg-navy"
                style={{ backgroundColor: '#0D1B45' }}
                aria-hidden="true"
              />
            </div>

            {/* Photo */}
            <div className="w-full max-w-[28rem] sm:w-[115%] sm:max-w-none lg:-mx-[5%]">
              <Image
                src="/images/kayahara_cutout.png"
                alt="栢原 陽子（株式会社UNIBRAND 代表取締役）"
                width={1100}
                height={1100}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Profile card */}
            <div className="card-premium w-full max-w-[20rem] bg-white/10 p-4 backdrop-blur-sm">
              <span className="inline-flex items-center rounded-md bg-gold/20 px-3 py-1 text-xs font-bold text-gold">
                監修・提供
              </span>
              <p className="mt-2 font-heading text-xl font-bold leading-none text-white">
                栢原 陽子
                <span className="ml-1 text-xs font-normal text-ink-foreground/60">（かやはら ようこ）</span>
              </p>
              <p className="mt-1.5 text-xs font-bold text-ink-foreground/80">株式会社UNIBRAND 代表取締役</p>
              <p className="text-[11px] leading-relaxed text-ink-foreground/60">
                中小企業診断士／認定心理士／認定支援機関
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gift strip */}
      <div className="relative mt-4 border-t border-gold/20 bg-white/5 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 px-4 sm:gap-4">
          <Gift className="size-8 shrink-0 text-gold sm:size-9" aria-hidden="true" />
          <p className="text-sm font-bold leading-relaxed text-white sm:text-base">
            今なら無料相談者全員に
            <span className="text-gold">「AI活用事例集10選（PDF）」</span>
            をプレゼント！
          </p>
        </div>
      </div>
    </section>
  )
}
