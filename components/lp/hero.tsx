import Image from 'next/image'
import Link from 'next/link'
import { Gift, Sparkles, ChevronsRight, MonitorPlay, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="bg-lp-light relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ===== decorative backdrop ===== */}
      <div
        className="bg-dot-grid-blue pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />
      {/* large circular glow behind the instructor */}
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-electric/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 top-24 hidden h-[34rem] w-[34rem] rounded-full border-[3px] border-electric/15 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-10 h-[26rem] w-[26rem] rounded-full bg-cyan/10 blur-3xl"
        aria-hidden="true"
      />
      {/* diagonal light streaks */}
      <div
        className="pointer-events-none absolute -top-20 right-1/3 h-[36rem] w-40 rotate-[18deg] bg-gradient-to-b from-white/70 to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.4fr_0.85fr] lg:gap-6">
          {/* ============ LEFT ============ */}
          <div className="flex flex-col gap-4 pb-4 text-left">
            {/* ribbon banner */}
            <span className="ribbon-banner inline-flex w-fit items-center bg-electric px-9 py-2.5 text-base font-bold text-white shadow-soft sm:text-lg">
              中小企業の
              <span className="whitespace-nowrap text-cyan">「売上・業務」</span>
              を劇的に改善したい皆様へ
            </span>

            {/* headline */}
            <h1 id="hero-heading" className="font-heading font-black leading-[1.08] text-navy">
              <span className="block whitespace-nowrap text-3xl sm:text-4xl md:text-5xl">
                学ぶだけで、終わらせない。
              </span>
              <span className="mt-1 flex flex-nowrap items-center whitespace-nowrap text-4xl sm:text-5xl md:text-6xl">
                <span className="whitespace-nowrap text-electric">「売上・業務」</span>
                <span className="text-navy">に</span>
                <span className="relative inline-block whitespace-nowrap text-alert">
                  <Sparkles
                    className="absolute -right-5 -top-4 size-7 text-alert/70 sm:-right-7 sm:size-9"
                    aria-hidden="true"
                  />
                  即効！
                </span>
              </span>
            </h1>

            {/* sub badge */}
            <span className="inline-flex w-fit items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-base font-bold text-white sm:px-6 sm:text-xl">
              <Sparkles className="size-5 shrink-0 text-cyan" aria-hidden="true" />
              <span>
                中小企業診断士 × 認定心理士 が教える
                <span className="whitespace-nowrap text-cyan">AI研修</span>
              </span>
            </span>

            {/* brand wordmark — treated as the MAIN headline */}
            <div className="flex flex-col">
              <span className="flex items-center font-heading text-6xl font-black leading-[0.95] tracking-tight text-navy sm:text-8xl md:text-[7rem]">
                <span className="relative mr-2 text-electric">
                  AI
                  <Sparkles
                    className="absolute -right-6 -top-4 size-7 text-cyan sm:-right-8 sm:size-10"
                    aria-hidden="true"
                  />
                </span>
                SHIFTRY
              </span>
              <span className="mt-1 flex items-center gap-3 text-base font-bold tracking-[0.3em] text-foreground/60">
                <span className="h-px w-10 bg-navy/30" aria-hidden="true" />
                エーアイ・シフトリー
                <span className="h-px w-10 bg-navy/30" aria-hidden="true" />
              </span>
            </div>

            {/* price emphasis block — numbers maximized, horizontal flow */}
            <div className="flex flex-col gap-3 rounded-2xl border-2 border-electric/15 bg-white p-4 shadow-soft sm:p-5">
              <span className="mx-auto inline-flex items-center rounded-full bg-navy px-7 py-1.5 text-base font-bold text-white sm:text-lg">
                全10時間の実践研修
              </span>

              <div className="flex flex-wrap items-end justify-center gap-x-1 gap-y-2 sm:flex-nowrap">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-muted-foreground sm:text-sm">研修費</span>
                  <span className="whitespace-nowrap font-heading text-4xl font-black leading-none text-navy sm:text-5xl">
                    40<span className="text-xl sm:text-2xl">万円</span>
                  </span>
                </div>

                <ChevronsRight className="mb-2 size-6 shrink-0 text-electric/40" aria-hidden="true" />

                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-muted-foreground sm:text-sm">助成金</span>
                  <span className="whitespace-nowrap font-heading text-4xl font-black leading-none text-alert sm:text-5xl">
                    最大75<span className="text-xl sm:text-2xl">%！</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">（最大30万円）</span>
                </div>

                <ChevronsRight className="mb-2 size-6 shrink-0 text-electric/40" aria-hidden="true" />

                <div className="relative flex flex-col items-center rounded-xl bg-gold-light/20 px-3 py-2 sm:px-4">
                  <Sparkles
                    className="absolute -right-2 -top-2 size-5 text-gold sm:size-6"
                    aria-hidden="true"
                  />
                  <span className="rounded-full bg-alert px-2.5 py-0.5 text-[10px] font-bold text-white sm:text-xs">
                    実質負担
                  </span>
                  <span className="mt-0.5 whitespace-nowrap font-heading text-5xl font-black leading-none text-alert sm:text-6xl">
                    9<span className="text-xl sm:text-2xl">万円</span>
                    <span className="text-base font-bold text-foreground/60 sm:text-lg">/名</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">（税込）</span>
                </div>
              </div>

              <p className="text-sm font-medium text-muted-foreground">
                ※令和8年度末まで、要件審査あり。
              </p>
            </div>
          </div>

          {/* ============ RIGHT — bubble → photo → name card, stacked vertically ============ */}
          <div className="flex flex-col items-center gap-4">
            {/* speech bubble */}
            <div className="relative z-20 w-fit max-w-[18rem] rounded-3xl border-2 border-electric bg-white px-5 py-4 text-center shadow-soft sm:max-w-[20rem] sm:px-6 sm:py-5">
              <p className="text-base font-bold leading-relaxed text-navy sm:text-lg">
                ツール活用に留まらない！
                <br />
                <span className="text-alert">成果から逆算して利益を出す方法</span>
                を教えます！
              </p>
              <span
                className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-electric bg-white"
                aria-hidden="true"
              />
            </div>

            {/* cut-out photo */}
            <div className="w-full max-w-[30rem] sm:w-[120%] sm:max-w-none lg:-mx-[10%]">
              <Image
                src="/images/kayahara_cutout.png"
                alt="栢原 陽子（株式会社UNIBRAND 代表取締役）"
                width={1100}
                height={1100}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* profile card */}
            <div className="w-full max-w-[20rem] rounded-2xl border border-border bg-white/95 p-4 shadow-soft-lg backdrop-blur-sm">
              <span className="inline-flex items-center rounded-md bg-navy px-3 py-1 text-xs font-bold text-white">
                監修・提供
              </span>
              <p className="mt-2 font-heading text-2xl font-black leading-none text-navy">
                栢原 陽子
                <span className="ml-1 text-xs font-medium text-muted-foreground">
                  （かやはら ようこ）
                </span>
              </p>
              <p className="mt-2 text-xs font-bold text-foreground/80">
                株式会社UNIBRAND 代表取締役
              </p>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                中小企業診断士／認定心理士／認定支援機関
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ full-width CTA + gift — most prominent element ============ */}
      <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-2 sm:px-6">
        <Link
          href="#contact"
          className="bg-cta-gradient shadow-soft-lg group flex w-full items-center justify-center gap-4 rounded-full px-6 py-5 text-white transition-transform duration-200 hover:-translate-y-0.5 sm:py-7"
        >
          <MonitorPlay className="size-10 shrink-0 text-cyan" aria-hidden="true" />
          <span className="text-balance text-center text-xl font-black sm:text-3xl">
            まずは無料の個別相談（オンライン30分）
          </span>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white sm:size-12">
            <ChevronRight className="size-5 text-electric transition-transform duration-200 group-hover:translate-x-0.5 sm:size-6" />
          </span>
        </Link>

        {/* gift bonus overlapping */}
        <div className="mx-auto -mt-3 flex w-[92%] max-w-2xl items-center justify-center gap-3 rounded-2xl border-2 border-gold/40 bg-white px-5 py-3 shadow-soft sm:gap-4 sm:px-7 sm:py-4">
          <Gift className="size-9 shrink-0 text-gold sm:size-10" aria-hidden="true" />
          <p className="text-sm font-bold leading-relaxed text-navy sm:text-lg">
            今なら無料相談者全員に
            <br className="sm:hidden" />
            <span className="text-alert">「AI活用事例集10選（PDF）」</span>
            をプレゼント！
          </p>
        </div>

        <p className="mt-5 text-pretty text-center text-xs leading-relaxed text-muted-foreground">
          中小企業診断士が、業務効率・売上UPの観点から、AI導入を伴走します。「ツールの使い方」ではなく“成果から逆算”。累計500社超の経営支援と、補助金採択率80%超・累計5,000万円超の知見で伴走します。
        </p>
      </div>
    </section>
  )
}
