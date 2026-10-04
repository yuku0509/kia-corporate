'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const count = 6000
  const mouse = useRef({ x: 0, y: 0 })

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
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
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

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)

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
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      {/* WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#050508']} />
        <ParticleField />
      </Canvas>

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at center, transparent 30%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* KIA text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
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
      </div>
    </main>
  )
}
