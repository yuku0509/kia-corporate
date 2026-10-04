'use client'

const MESSAGE_PARAGRAPHS = [
  '大手企業での安定したキャリアを歩みながら、どこか心が空洞だった。会議室で数字を積み上げる日々の中で、ある夜ふと気づいた。——「俺は何のために働いているのか」と。',
  '答えを探すのをやめた。蹴り込むことにした。',
  '29歳。全てを手放し、KIAを立ち上げた。Kick In Answer——答えは、行動の先にしかない。小売、人材、地方創生。どのフィールドでも変わらぬ信念がある。「本気でやれば、人生は必ず面白くなる」',
  'KIAが目指すのは、事業規模の拡大だけではない。ここに関わる全員が、時間と場所の自由を手に入れ、本気で熱狂できる「大人の青春」を送れる環境を創ることだ。',
] as const

const DISCIPLE_MESSAGE =
  '弟子たちへ。頭でっかちになるな。失敗を恐れるな。君たちの答えは、君たちが蹴り込んだ先にある。僕は先に行って待ってる。'

export function CeoMessageSection() {
  return (
    <section
      id="message"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">Message</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">代表メッセージ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
          {/* Left: profile card */}
          <div className="md:col-span-2">
            {/* Avatar placeholder */}
            <div
              className="w-full aspect-[3/4] max-w-xs rounded bg-white/[0.05] backdrop-blur-sm mb-8 flex items-end p-6"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div>
                <p className="text-white/25 text-xs tracking-[0.4em] uppercase mb-2">
                  Representative Director
                </p>
                <p className="text-white text-2xl font-light tracking-wide">谷口純也</p>
                <p className="text-white/40 text-sm font-light tracking-widest mt-1">
                  Junya Taniguchi
                </p>
              </div>
            </div>

            {/* KIA brand text */}
            <div className="rounded bg-white/[0.04] backdrop-blur-sm p-5">
              <p className="text-white/30 text-[11px] tracking-[0.4em] uppercase mb-2">Company</p>
              <p className="text-white/60 text-sm font-light leading-relaxed">株式会社KIA</p>
              <p className="text-white/30 text-xs font-light mt-1">Kick In Answer</p>
              <div className="w-8 h-px bg-white/20 my-3" />
              <p className="text-white/30 text-xs font-light">Shinagawa, Tokyo, Japan</p>
            </div>
          </div>

          {/* Right: message text */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {MESSAGE_PARAGRAPHS.map((para, i) => (
              <div key={i} className="rounded bg-white/[0.04] backdrop-blur-sm p-6">
                <p
                  className={`font-light leading-[2] ${
                    i === 1
                      ? 'text-white text-xl tracking-wide'
                      : 'text-white/65 text-sm'
                  }`}
                >
                  {para}
                </p>
              </div>
            ))}

            {/* Disciple message */}
            <div
              className="rounded p-6 mt-2"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-3">
                — To my disciples
              </p>
              <p className="text-white/75 text-sm font-light leading-[2.1] italic">
                {DISCIPLE_MESSAGE}
              </p>
              <p className="text-white/35 text-xs font-light mt-4 text-right tracking-widest">
                代表取締役 谷口純也
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
