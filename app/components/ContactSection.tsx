'use client'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">06</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[11px] tracking-[0.5em] uppercase">Contact</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left: heading */}
          <div>
            <h2
              className="text-white font-thin mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}
            >
              お問い合わせ
            </h2>
            <p className="text-white/35 text-sm leading-[2] font-light mb-12 max-w-sm">
              事業に関するご相談、取材・メディアのご依頼、
              採用に関するお問い合わせはこちらからお気軽にご連絡ください。
            </p>
          </div>

          {/* Right: form placeholder */}
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label className="text-white/30 text-[11px] tracking-[0.3em] uppercase">
                お名前
              </label>
              <input
                type="text"
                placeholder="山田 太郎"
                className="bg-transparent border-b border-white/15 py-3 text-white/70 text-sm font-light placeholder:text-white/20 outline-none focus:border-white/40 transition-colors duration-300"
                data-cursor
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/30 text-[11px] tracking-[0.3em] uppercase">
                メールアドレス
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="bg-transparent border-b border-white/15 py-3 text-white/70 text-sm font-light placeholder:text-white/20 outline-none focus:border-white/40 transition-colors duration-300"
                data-cursor
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/30 text-[11px] tracking-[0.3em] uppercase">
                メッセージ
              </label>
              <textarea
                rows={4}
                placeholder="お問い合わせ内容をご記入ください"
                className="bg-transparent border-b border-white/15 py-3 text-white/70 text-sm font-light placeholder:text-white/20 outline-none focus:border-white/40 transition-colors duration-300 resize-none"
                data-cursor
              />
            </div>

            <button
              type="submit"
              data-cursor
              className="self-start mt-4 flex items-center gap-5 group"
            >
              <span className="text-white/60 text-xs tracking-[0.45em] uppercase font-light group-hover:text-white transition-colors duration-300">
                送信する
              </span>
              <span className="w-8 h-px bg-white/30 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
