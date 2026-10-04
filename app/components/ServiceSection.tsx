'use client'

const SERVICES = [
  {
    index: '01',
    en: 'Retail',
    ja: '小売事業',
    tagline: '消費者の「欲しい」を、ビジネスに変える。',
    desc: '国内外の市場動向を深く読み解き、小売・EC領域での事業立案から実行まで一気通貫で支援。大手アパレル・食品・生活雑貨など多業種のクライアントと共に、売れる仕組みを構築します。',
    items: ['ECサイト戦略・構築', 'リアル店舗のブランディング', '商品開発・仕入れ最適化', '販促施策の立案と実行'],
  },
  {
    index: '02',
    en: 'Human Resources',
    ja: '人材事業',
    tagline: '人の可能性を、最大限に引き出す。',
    desc: '「仕事ができる人」ではなく「本気で生きられる人」を増やすことが私たちのミッション。キャリア支援・採用コンサル・研修設計を通じて、個人と組織の双方が成長できる環境を創ります。',
    items: ['採用戦略立案・実行支援', 'キャリアコーチング', '次世代リーダー育成プログラム', '組織開発コンサルティング'],
  },
  {
    index: '03',
    en: 'Regional Revitalization',
    ja: '地方創生',
    tagline: '地域の誇りを、全国のブランドへ。',
    desc: '人口減少・産業衰退に直面する地方に、都市部のビジネスノウハウと人的ネットワークを持ち込む。地域固有の資源を磨き上げ、持続可能な経済循環モデルを共に設計します。',
    items: ['地域ブランド戦略', '特産品のEC・流通支援', '移住・定住促進プロジェクト', '地域事業者の経営支援'],
  },
] as const

export function ServiceSection() {
  return (
    <section
      id="service"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Label */}
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
        <p className="text-white/35 text-base font-light mb-20 max-w-lg leading-relaxed">
          3つの事業領域で、個人・企業・地域の課題に向き合う。
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.index}
              className="rounded flex flex-col gap-5 p-7"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div>
                <span className="text-white/20 text-xs tracking-[0.4em] uppercase">{s.index}</span>
                <p className="text-white/35 text-[11px] tracking-[0.3em] uppercase mt-3 mb-1">{s.en}</p>
                <h3 className="text-white text-2xl font-light" style={{ letterSpacing: '0.05em' }}>
                  {s.ja}
                </h3>
              </div>

              <p className="text-white/60 text-sm font-light italic">{s.tagline}</p>

              <p className="text-white/40 text-sm leading-[1.9] font-light border-t border-white/10 pt-5">
                {s.desc}
              </p>

              <ul className="flex flex-col gap-2 mt-1">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-white/25 mt-1.5 shrink-0">—</span>
                    <span className="text-white/45 text-xs font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
