'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 })

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' })
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' })
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' })

    let appeared = false

    const onMove = (e: MouseEvent) => {
      if (!appeared) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.4, ease: 'power2.out' })
        appeared = true
      }
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    }

    const onEnterHoverable = () => {
      gsap.to(ring, {
        scale: 2.4,
        borderColor: 'rgba(255,255,255,0.35)',
        duration: 0.4,
        ease: 'power2.out',
      })
      gsap.to(dot, { scale: 0.3, duration: 0.4, ease: 'power2.out' })
    }

    const onLeaveHoverable = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: 'rgba(255,255,255,1)',
        duration: 0.4,
        ease: 'power2.out',
      })
      gsap.to(dot, { scale: 1, duration: 0.4, ease: 'power2.out' })
    }

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.8, duration: 0.15, ease: 'power2.in' })
      gsap.to(dot, { scale: 1.5, duration: 0.15, ease: 'power2.in' })
    }

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' })
      gsap.to(dot, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    // MutationObserver でDOM変化に追従
    const addListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onEnterHoverable)
        el.addEventListener('mouseleave', onLeaveHoverable)
      })
    }

    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnterHoverable)
        el.removeEventListener('mouseleave', onLeaveHoverable)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference rounded-full bg-white"
        style={{ width: 8, height: 8, willChange: 'transform' }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference rounded-full border border-white"
        style={{ width: 32, height: 32, willChange: 'transform' }}
      />
    </>
  )
}
