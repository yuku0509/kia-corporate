'use client'

const WORKS = [
  {
    index: '01',
    category: 'Retail',
    title: '大手アパレル企業 EC戦略立案・実行支援',
    overview: '年商50億円規模のアパレルブランドに対し、ECチャネルの抜本的改革を実施。UX改善と広告戦略の再設計により、EC売上を前年比180%に向上させた。',
    year: '2024',
    tags: ['EC戦略', 'コンサルティング', 'マーケティング'],
  },
  {
    index: '02',
    category: 'Human Resources',
    title: '若手人材100名 キャリア支援プログラム設計・運営',
    overview: '大手企業の若手社員100名を対象に、半年間の集中キャリア育成プログラムを設計・実施。参加者の90%が「仕事への向き合い方が変わった」と回答。',
    year: '2024',
    tags: ['キャリア支援', '研修設計', 'リーダー育成'],
  },
  {
    index: '03',
    category: 'Regional Revitalization',
    title: '地方農業法人 ブランドリニューアルとEC展開',
    overview: '後継者不足で廃業寸前だった農業法人と組み、ブランド再構築とECチャネル開発を実施。1年で月商300万円を達成し、若い就農者の採用にも成功した。',
    year: '2023',
    tags: ['地方創生', 'ブランディング', 'EC構築'],
  },
  {
    index: '04',
    category: 'Human Resources',
    title: 'スタートアップ 採用体制構築と組織開発支援',
    overview: 'シリーズAスタートアップの採用戦略を0から設計。求人票の改善から面接フローの構築まで伴走し、6ヶ月で採用コストを60%削減しながら採用人数2倍を実現。',
    year: '2023',
    tags: ['採用支援', '組織開発', '人事戦略'],
  },
  {
    index: '05',
    category: 'Retail × Regional',
    title: '地域特産品 全国流通モデルの構築',
    overview: '九州3県の特産品生産者と連携し、都市部バイヤーとのマッチングプラットフォームを構築。参加生産者の平均売上が2.3倍に拡大した。',
    year: '2023',
    tags: ['地方創生', '小売', '流通戦略'],
  },
  {
    index: '06',
    category: 'Human Resources',
    title: '次世代リーダー育成プログラム 年間設計',
    overview: '中堅企業の管理職候補者向けリーダーシップ開発プログラムを年間カリキュラムとして設計。受講者の昇進率が前年比150%を記録した。',
    year: '2022',
    tags: ['リーダー育成', '人材開発', '研修'],
  },
] as const

export function WorksSection() {
  return (
    <section
      id="works"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">02</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">Works</span>
        </div>

        <h2
          className="text-white font-thin mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
        >
          実績・事例
        </h2>
        <p className="text-white/35 text-base font-light mb-20 max-w-lg leading-relaxed">
          言葉より、結果で示す。KIAが共に歩んできたプロジェクトの一部を公開します。
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WORKS.map((w) => (
            <div
              key={w.index}
              className="rounded p-7 flex flex-col gap-4 group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <div className="flex items-start justify-between">
                <span className="text-white/20 text-xs tracking-[0.4em] uppercase">{w.index}</span>
                <span className="text-white/25 text-xs font-light tracking-widest">{w.year}</span>
              </div>

              <div>
                <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                  {w.category}
                </p>
                <h3 className="text-white text-base font-light leading-relaxed" style={{ letterSpacing: '0.03em' }}>
                  {w.title}
                </h3>
              </div>

              <p className="text-white/40 text-sm leading-[1.9] font-light border-t border-white/8 pt-4">
                {w.overview}
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                {w.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white/30 text-[10px] tracking-[0.2em] font-light px-3 py-1 rounded-full"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
