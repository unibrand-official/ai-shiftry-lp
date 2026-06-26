import { SectionHeading } from './section-heading'

export function Pricing() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20" aria-labelledby="pricing-heading">
      <div className="bg-dot-grid-light pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="PRICING"
          title={<span id="pricing-heading">料金</span>}
          description="研修は助成金で実質9万円。卒業後はAI顧問 月3万円〜で継続。"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* ① 研修 */}
          <div className="shadow-soft-lg flex flex-col gap-5 rounded-2xl border border-electric/30 bg-white p-7">
            <span className="text-sm font-bold text-electric">① AI研修（全10時間）</span>
            <div className="flex items-end gap-3">
              <span className="font-heading text-xl font-bold text-muted-foreground line-through">
                通常 40万円/名
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-foreground/70">助成率最大75%活用で</span>
              <span className="font-heading text-4xl font-black text-gold sm:text-5xl">
                実質 9万円
                <span className="text-xl">/名</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              ※申請は令和8年度（〜2027年3月）末まで。準備期間が必要なため、お早めにご相談ください。助成率・実質額は企業規模や要件・コースにより異なり、審査があり採択を保証しません。最新は公式情報をご確認ください（認定支援機関として申請をサポート）。研修は全10時間。
            </p>
          </div>

          {/* ② AI顧問 */}
          <div className="shadow-soft flex flex-col gap-5 rounded-2xl border border-border bg-secondary/60 p-7">
            <span className="text-sm font-bold text-electric">② 卒業後｜AI顧問（任意・継続サポート）</span>
            <p className="text-sm leading-relaxed text-foreground/70">
              研修後も、となりで。新しいAI活用の相談・最新情報のアップデート・業務改善の壁打ちを、月1回の伴走で継続。「学んで終わり」にしない仕組みです。
            </p>
            <div className="flex flex-col">
              <span className="text-xs text-foreground/70">月額</span>
              <span className="font-heading text-4xl font-black text-navy sm:text-5xl">
                3万円<span className="text-xl">〜</span>
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              ※AI顧問は任意の継続サポートです。金額はモデルケース（税抜想定・要確定）。内容・頻度は御社に合わせて設計します。成果には個人差があり、効果を保証するものではありません。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
