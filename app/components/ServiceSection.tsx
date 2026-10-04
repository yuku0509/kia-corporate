'use client'

const SERVICES = [
  {
    index: '01',
    en: 'Retail',
    ja: '小売事業',
    desc: '国内外の消費者ニーズを捉えた小売ビジネスを展開。マーケットの変化にフレキシブルに対応し、顧客体験の最大化を追求します。',
  },
  {
    index: '02',
    en: 'Human Resources',
    ja: '人材事業',
    desc: '個人の可能性を最大限に引き出す人材マッチング・育成支援。大手企業での経験を活かした独自のアプローチで、本質的なキャリア形成をサポートします。',
  },
  {
    index: '03',
    en: 'Regional Revitalization',
    ja: '地方創生',
    desc: '地域固有のリソースと都市部のネットワークを結び付け、持続可能な地方活性化モデルを構築。人と地域が共に成長する仕組みを創出します。',
  },
] as const

export function ServiceSection() {
  return (
    <section
      id="service"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      {/* Section label */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">01</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">Service</span>
        </div>

        <h2
          className="text-white font-thin mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
        >
          事業内容
        </h2>
        <p className="text-white/30 text-sm font-light mb-20 max-w-md leading-relaxed">
          多岐にわたる事業領域を通じて、新たな価値と機会を創出し続けます。
        </p>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/10">
          {SERVICES.map((s) => (
            <div key={s.index} className="py-10 md:px-10 first:pl-0 last:pr-0 border-t border-white/10 md:border-t-0">
              <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-6">{s.index}</p>
              <p className="text-white/40 text-[11px] tracking-[0.3em] uppercase mb-3">{s.en}</p>
              <h3 className="text-white text-2xl font-light mb-6" style={{ letterSpacing: '0.05em' }}>
                {s.ja}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
