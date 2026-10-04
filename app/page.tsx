'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServiceSection } from './components/ServiceSection'
import { CompanySection } from './components/CompanySection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

// ─── WebGL ────────────────────────────────────────────────────────────────────

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const count = 6000

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 8 + 1
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((_state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.04 + mouse.current.y * 0.0008
    ref.current.rotation.y += delta * 0.06 + mouse.current.x * 0.0008
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#aac4e0"
        size={0.014}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Fixed WebGL background ── */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#050508']} />
          <ParticleField />
        </Canvas>

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at center, transparent 30%, rgba(0,0,0,0.65) 100%)',
          }}
        />
      </div>

      {/* ── Fixed Header ── */}
      <Header />

      {/* ── Scrollable content ── */}
      <main className="relative z-10">
        <HeroSection />

        {/* Section divider */}
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="h-px bg-white/8" />
        </div>

        <ServiceSection />

        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="h-px bg-white/8" />
        </div>

        <CompanySection />

        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="h-px bg-white/8" />
        </div>

        <ContactSection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  )
}
