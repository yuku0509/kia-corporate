'use client'

import Link from 'next/link'

const MEMBERS = [
  {
    name: '谷口純也',
    nameEn: 'Junya Taniguchi',
    role: '代表取締役 CEO',
    bio: '29歳で大手企業を退職し株式会社KIAを設立。小売・人材・地方創生の3領域で事業を展開。「本気でやれば、人生は必ず面白くなる」を信条に、日本中で熱狂できる大人を増やすべく奔走中。',
    link: '/about-ceo',
    linkLabel: 'プロフィール詳細',
    isReal: true,
  },
  {
    name: '——',
    nameEn: 'COO / Business Director',
    role: '事業統括責任者',
    bio: '小売・人材両事業の統括を担当。各プロジェクトの品質管理と顧客対応をリードし、KIAの事業成長を牽引する。',
    link: null,
    linkLabel: null,
    isReal: false,
  },
  {
    name: '——',
    nameEn: 'Regional Lead',
    role: '地方創生事業責任者',
    bio: '地方創生プロジェクトの最前線で活動。地域の生産者・行政・企業をつなぎ、持続可能な地域経済モデルの構築を推進する。',
    link: null,
    linkLabel: null,
    isReal: false,
  },
] as const

export function MembersSection() {
  return (
    <section
      id="members"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">03</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">Members</span>
        </div>

        <h2
          className="text-white font-thin mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
        >
          メンバー紹介
        </h2>
        <p className="text-white/35 text-base font-light mb-20 max-w-lg leading-relaxed">
          KIAには、自らの意志で「大人の青春」を生きることを選んだメンバーが集まっています。
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBERS.map((m, i) => (
            <div
              key={i}
              className="rounded flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Photo placeholder */}
              <div
                className="aspect-[4/3] rounded-t flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                {m.isReal ? (
                  <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase">Photo</span>
                ) : (
                  <span className="text-white/10 text-[10px] tracking-[0.4em] uppercase">TBD</span>
                )}
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <p className="text-white/30 text-[11px] tracking-[0.3em] uppercase mb-2">
                    {m.role}
                  </p>
                  <p className="text-white text-xl font-light">{m.name}</p>
                  <p className="text-white/25 text-xs font-light tracking-wider mt-0.5">
                    {m.nameEn}
                  </p>
                </div>

                <p className="text-white/40 text-sm leading-[1.9] font-light flex-1">{m.bio}</p>

                {m.link && (
                  <Link
                    href={m.link}
                    data-cursor
                    className="inline-flex items-center gap-4 group mt-2"
                  >
                    <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-light group-hover:text-white transition-colors duration-300">
                      {m.linkLabel}
                    </span>
                    <span className="w-6 h-px bg-white/25 group-hover:w-10 group-hover:bg-white transition-all duration-500" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
