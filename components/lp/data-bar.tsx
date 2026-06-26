const stats = [
  {
    value: '12.4万人',
    label: '2030年 AI人材不足',
    sub: '経済産業省「IT人材需給に関する調査」',
  },
  {
    value: '42%',
    label: '「10年後 仕事がなくなるかも」と実感',
    sub: 'BCG「AI at Work」(2024)',
  },
  {
    value: '約20倍',
    label: '生成AI市場は7年で',
    sub: 'JEITA 生成AI市場見通し',
  },
]

export function DataBar() {
  return (
    <section className="bg-secondary py-10 sm:py-12" aria-label="市場データ">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-white p-6 text-center shadow-soft"
          >
            <span className="font-heading text-3xl font-black text-electric sm:text-4xl">
              {s.value}
            </span>
            <span className="text-pretty text-sm font-semibold text-navy">{s.label}</span>
            <span className="mt-1 text-[10px] text-muted-foreground">{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
