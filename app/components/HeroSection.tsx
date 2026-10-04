'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { TornadoHero } from './TornadoHero'

export function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 })
    tl.fromTo(
      overlayRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.6, ease: 'power3.out' }
    ).fromTo(
      scrollHintRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.4'
    )

    gsap.to(scrollHintRef.current, {
      y: 6,
      repeat: -1,
      yoyo: true,
      duration: 1.4,
      ease: 'power1.inOut',
      delay: 3.5,
    })
  }, [])

  return (
    <section className="h-screen relative overflow-hidden select-none">
      {/* Tornado WebGL */}
      <TornadoHero />

      {/* Bottom overlay: KIA wordmark */}
      <div
        ref={overlayRef}
        className="absolute bottom-20 left-0 right-0 flex flex-col items-center gap-3 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <h1
          className="font-thin text-white uppercase"
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 12rem)',
            letterSpacing: '0.32em',
            lineHeight: 1,
            textShadow: '0 0 80px rgba(170,200,255,0.25)',
          }}
        >
          KIA
        </h1>
        <p
          className="text-white/30 text-[10px] uppercase font-light"
          style={{ letterSpacing: '0.55em' }}
        >
          Kick In Answer
        </p>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <svg width="1" height="32" viewBox="0 0 1 32" fill="none">
          <line x1="0.5" y1="0" x2="0.5" y2="32" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}
