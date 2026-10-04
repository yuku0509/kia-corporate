'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useLenis } from './LenisProvider'

const NAV_ITEMS = [
  { label: 'Service',  id: 'service'  },
  { label: 'Works',    id: 'works'    },
  { label: 'Members',  id: 'members'  },
  { label: 'Recruit',  id: 'recruit'  },
  { label: 'Company',  id: 'company'  },
  { label: 'Contact',  id: 'contact'  },
] as const

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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5"
      style={{ opacity: 0 }}
    >
      {/* Logo */}
      <Link
        href="/"
        data-cursor
        className="text-white text-base tracking-[0.35em] uppercase font-light hover:text-white/60 transition-colors duration-300 py-2"
      >
        KIA
      </Link>

      {/* Nav */}
      <nav className="flex items-center gap-1">
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            data-cursor
            className="text-white/50 text-xs tracking-[0.3em] uppercase font-light hover:text-white transition-colors duration-300 px-4 py-3"
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}
