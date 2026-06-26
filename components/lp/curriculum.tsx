import { SectionHeading } from './section-heading'

const steps = [
  {
    tag: '見える化',
    title: '業務を分解して、“ムダ”を見える化',
    body: '自社の仕事をプロセスに分解。どこに時間が溶け、どこがボトルネックかを洗い出す（システム思考の基礎）。',
  },
  {
    tag: '見極め',
    title: '“何を自動化すべきか”を経営視点で選ぶ',
    body: '頻度×工数×効果でAI化する業務に優先順位を。やらないことも決める＝診断士の経営判断。',
  },
  {
    tag: '設計',
    title: 'AIに任せられる形に、仕事を組み立て直す',
    body: '業務をAIに渡せる単位に分解し、指示（プロンプト）と手順・チェック体制を設計する。',
  },
  {
    tag: '実践',
    title: '自社の実務で、実際に作って動かす',
    body: 'メール・資料作成・データ分析・問い合わせ対応など、御社の業務でその場で構築。持ち帰ってすぐ使える。',
  },
  {
    tag: '仕組み化',
    title: '属人化させず、チームで回し続ける',
    body: '標準化・横展開・効果測定まで。守り（セキュリティ／著作権）も押さえ、続く仕組みにする。',
  },
]

export function Curriculum() {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="curriculum-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="CURRICULUM ・ 全10時間"
          title={
            <span id="curriculum-heading">
              “使い方”でなく、<br className="hidden sm:block" />
              「何を自動化するか」を見極めて、実務で動かす
            </span>
          }
          description="ツールの操作研修では、ありません。中小企業診断士のシステム思考で御社の業務を分解し、「何を・どの順でAIに任せるか」を見極め、自社の実務でその場で動かすところまで。"
        />

        <ol className="mt-12 flex flex-col gap-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-lg font-black text-cyan">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="w-fit rounded-full bg-electric/10 px-3 py-0.5 text-xs font-bold text-electric">
                  {s.tag}
                </span>
                <h3 className="text-pretty font-heading text-base font-extrabold text-navy sm:text-lg">
                  {s.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-pretty text-center text-sm leading-relaxed text-muted-foreground">
          職種別に“刺さる”テーマで実践：{' '}
          <span className="font-bold text-navy">
            営業 ／ マーケ ／ 経理・財務 ／ 人事・総務 ／ 企画 ...
          </span>
          <br className="hidden sm:block" />
          御社の課題に合わせて、扱う業務を選んで設計します。
        </p>
      </div>
    </section>
  )
}
