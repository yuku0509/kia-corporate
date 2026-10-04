'use client'

import Link from 'next/link'

const COMPANY_INFO = [
  { label: '会社名', value: '株式会社KIA' },
  { label: '代表取締役', value: '谷口純也（Junya Taniguchi）' },
  { label: '所在地', value: '品川区, 東京都, 日本' },
  { label: '設立', value: '——' },
  { label: '事業内容', value: '小売事業 / 人材事業 / 地方創生' },
] as const

export function CompanySection() {
  return (
    <section
      id="company"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">02</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">Company</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left: headline + description */}
          <div>
            <h2
              className="text-white font-thin mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
            >
              会社概要
            </h2>
            <p className="text-white/35 text-sm leading-[2] font-light mb-12 max-w-md">
              「現状維持」の安定を捨て、29歳で起業。
              小売・人材・地方創生など多岐にわたる事業を通じ、
              本気で熱狂できる「大人の青春」を創出。
              大手企業での葛藤から、時間と場所の自由を手に入れた
              現在までの歩みを歩んでいます。
            </p>

            <Link
              href="/about-ceo"
              data-cursor
              className="inline-flex items-center gap-4 group"
            >
              <span className="text-white/60 text-xs tracking-[0.4em] uppercase font-light group-hover:text-white transition-colors duration-300">
                CEOについて
              </span>
              <span className="w-8 h-px bg-white/30 group-hover:w-14 group-hover:bg-white transition-all duration-500" />
            </Link>
          </div>

          {/* Right: company info table */}
          <div className="border-t border-white/10">
            {COMPANY_INFO.map((item) => (
              <div
                key={item.label}
                className="flex gap-8 py-5 border-b border-white/10"
              >
                <span className="text-white/30 text-xs tracking-[0.2em] font-light w-28 shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-white/65 text-sm font-light leading-relaxed">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
