'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useLenis } from './LenisProvider'

const NAV_ITEMS = ['Service', 'Company', 'Contact'] as const

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 1.2, delay: 1.8, ease: 'power2.out' }
    )
  }, [])

  const handleNav = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 2 })
    } else {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6"
      style={{ opacity: 0 }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-white text-sm tracking-[0.35em] uppercase font-light hover:text-white/70 transition-colors duration-300"
        data-cursor
      >
        KIA
      </Link>

      {/* Nav */}
      <nav className="flex items-center gap-10">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => handleNav(item.toLowerCase())}
            data-cursor
            className="text-white/50 text-[11px] tracking-[0.35em] uppercase font-light hover:text-white transition-colors duration-300"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  )
}
