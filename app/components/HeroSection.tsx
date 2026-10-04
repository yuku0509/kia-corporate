'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 })
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, letterSpacing: '0.9em' },
      { opacity: 1, y: 0, letterSpacing: '0.28em', duration: 2.2, ease: 'power3.out' }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.4, ease: 'power2.inOut' },
        '-=1.2'
      )
      .fromTo(
        taglineRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power2.out' },
        '-=0.7'
      )
      .fromTo(
        scrollHintRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.3'
      )

    gsap.to(scrollHintRef.current, {
      y: 6,
      repeat: -1,
      yoyo: true,
      duration: 1.4,
      ease: 'power1.inOut',
      delay: 3,
    })
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center select-none pointer-events-none">
      <h1
        ref={titleRef}
        className="font-thin text-white uppercase"
        style={{
          fontSize: 'clamp(5rem, 20vw, 18rem)',
          letterSpacing: '0.28em',
          lineHeight: 1,
          opacity: 0,
          textShadow: '0 0 120px rgba(180,210,255,0.2)',
        }}
      >
        KIA
      </h1>

      <div
        ref={lineRef}
        style={{
          width: '7rem',
          height: '1px',
          marginTop: '2rem',
          background: 'rgba(255,255,255,0.25)',
          transform: 'scaleX(0)',
        }}
      />

      <p
        ref={taglineRef}
        className="text-white/35 text-xs uppercase font-light mt-5"
        style={{ letterSpacing: '0.55em', opacity: 0 }}
      >
        Movement that inspires
      </p>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-12 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <svg width="1" height="40" viewBox="0 0 1 40" fill="none">
          <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}
