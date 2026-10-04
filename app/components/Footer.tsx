'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-8 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          data-cursor
          className="text-white/40 text-xs tracking-[0.4em] uppercase font-light hover:text-white/70 transition-colors duration-300"
        >
          株式会社KIA
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-8">
          <Link
            href="/privacy-policy"
            data-cursor
            className="text-white/25 text-[11px] tracking-[0.3em] uppercase font-light hover:text-white/50 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/about-ceo"
            data-cursor
            className="text-white/25 text-[11px] tracking-[0.3em] uppercase font-light hover:text-white/50 transition-colors duration-300"
          >
            About CEO
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-white/20 text-[11px] tracking-[0.2em] font-light">
          © {new Date().getFullYear()} KIA Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
