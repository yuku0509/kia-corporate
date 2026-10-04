'use client'

const PILLARS = [
  {
    index: '01',
    title: '挑戦する勇気',
    body:
      '「現状維持」は緩やかな後退だ。安定という名の檻から飛び出し、未知の領域へ踏み込む勇気こそがKIAの原点。',
  },
  {
    index: '02',
    title: '行動で証明する',
    body:
      '思考は地図に過ぎない。答えは行動した者だけが手にできる。頭の中の完璧な計画より、一歩の不完全な実行を選ぶ。',
  },
  {
    index: '03',
    title: '共に熱狂する',
    body:
      '一人の熱量には限界がある。仲間と共鳴し、互いの情熱を増幅させる。KIAは「大人の青春」を共に生きる場所だ。',
  },
] as const

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-4 mb-14">
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">Philosophy</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">企業理念</span>
        </div>

        {/* Hero text */}
        <div className="mb-6">
          <h2
            className="text-white font-thin leading-none"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', letterSpacing: '0.04em' }}
          >
            Kick In
          </h2>
          <h2
            className="text-white font-thin leading-none mb-8"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', letterSpacing: '0.04em' }}
          >
            Answer.
          </h2>
          <p
            className="text-white/40 font-light"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', letterSpacing: '0.1em' }}
          >
            答えは、蹴り込んだ先にある。
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/10">
          {PILLARS.map((p) => (
            <div
              key={p.index}
              className="py-10 md:px-10 first:pl-0 last:pr-0 border-t border-white/10 md:border-t-0"
            >
              <span className="text-white/20 text-xs tracking-[0.4em] uppercase block mb-5">
                {p.index}
              </span>
              <h3 className="text-white text-xl font-light mb-4" style={{ letterSpacing: '0.06em' }}>
                {p.title}
              </h3>
              {/* Glass panel */}
              <div className="rounded bg-white/[0.04] backdrop-blur-sm p-5">
                <p className="text-white/50 text-sm leading-[1.9] font-light">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
