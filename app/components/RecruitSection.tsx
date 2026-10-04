'use client'

const POSITIONS = [
  {
    title: '事業開発マネージャー',
    type: '正社員 / 業務委託',
    desc: '新規事業の立案から実行までを担うポジション。小売・人材・地方創生のいずれかの領域で、クライアントの課題解決をリードする。',
    requirements: ['事業会社・コンサル等での事業開発経験3年以上', '主体的に動き、結果を出せる方', 'KIAのフィロソフィーに共感できる方'],
  },
  {
    title: '人材コンサルタント',
    type: '正社員 / 業務委託',
    desc: '企業の採用支援から個人のキャリア支援まで幅広く担当。人と組織の可能性を最大化するための戦略立案と実行支援を行う。',
    requirements: ['人材業界・HR領域での経験2年以上', 'コーチング・カウンセリングスキルのある方', '人の成長に本気で向き合える方'],
  },
  {
    title: '地方創生プロデューサー',
    type: '正社員 / 業務委託 / 副業可',
    desc: '地方自治体・地域企業・生産者と連携し、持続可能な地域活性化プロジェクトを推進する。現地への出張・常駐も含む。',
    requirements: ['地域コミュニティとの関係構築ができる方', 'プロジェクトマネジメント経験のある方', '地方創生・まちづくりへの情熱がある方'],
  },
] as const

export function RecruitSection() {
  return (
    <section
      id="recruit"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">04</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">Recruit</span>
        </div>

        <h2
          className="text-white font-thin mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
        >
          採用情報
        </h2>

        {/* Culture statement */}
        <div
          className="rounded p-8 mb-16 max-w-3xl"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <p className="text-white/30 text-[11px] tracking-[0.4em] uppercase mb-4">
            Culture
          </p>
          <p className="text-white/75 text-base font-light leading-[2]">
            KIAは、「安定を求めるな、熱狂を求めろ」という文化が根付いています。
            失敗は歓迎、言い訳は不要。自分の頭で考え、自分の足で動き、
            自分の言葉で仲間を動かす——そんな人間が集まる場所です。
          </p>
          <p className="text-white/35 text-sm font-light leading-[2] mt-4">
            副業・複業・フルリモートなど、働き方の多様性を尊重します。
            大切なのは「結果」と「姿勢」。時間と場所の制約より、成果と情熱を重視します。
          </p>
        </div>

        {/* Positions */}
        <div className="flex flex-col gap-4">
          {POSITIONS.map((p, i) => (
            <div
              key={i}
              className="rounded p-7"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left */}
                <div>
                  <h3 className="text-white text-lg font-light mb-2" style={{ letterSpacing: '0.04em' }}>
                    {p.title}
                  </h3>
                  <span
                    className="text-white/30 text-[10px] tracking-[0.2em] font-light px-3 py-1 rounded-full inline-block"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    {p.type}
                  </span>
                </div>

                {/* Center */}
                <div>
                  <p className="text-white/40 text-sm leading-[1.9] font-light">{p.desc}</p>
                </div>

                {/* Right */}
                <div>
                  <p className="text-white/25 text-[11px] tracking-[0.3em] uppercase mb-3">
                    Requirements
                  </p>
                  <ul className="flex flex-col gap-2">
                    {p.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <span className="text-white/20 mt-1.5 shrink-0 text-xs">—</span>
                        <span className="text-white/35 text-xs font-light leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center gap-6">
          <p className="text-white/30 text-sm font-light">
            まずは話を聞きたいという方も歓迎します。
          </p>
          <a
            href="#contact"
            data-cursor
            className="inline-flex items-center gap-4 group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="text-white/60 text-xs tracking-[0.4em] uppercase font-light group-hover:text-white transition-colors duration-300">
              Contact
            </span>
            <span className="w-8 h-px bg-white/30 group-hover:w-14 group-hover:bg-white transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  )
}
