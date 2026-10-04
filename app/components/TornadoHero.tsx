'use client'

import { useRef, useMemo, useEffect, useState, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, Billboard } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { useLenis } from './LenisProvider'

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: 'SERVICE',  target: '#service',   t: 0.15 },
  { label: 'WORKS',    target: '#works',     t: 0.35 },
  { label: 'MEMBERS',  target: '#members',   t: 0.55 },
  { label: 'COMPANY',  target: '#company',   t: 0.75 },
  { label: 'CONTACT',  target: '#contact',   t: 0.95 },
] as const

// height of helix, how tight the spiral winds
const HELIX_HEIGHT = 6
const HELIX_RADIUS = 2.2
const HELIX_TURNS  = 2.5

function helixPos(t: number): [number, number, number] {
  const angle = t * Math.PI * 2 * HELIX_TURNS
  const y = t * HELIX_HEIGHT - HELIX_HEIGHT * 0.3
  return [
    Math.cos(angle) * HELIX_RADIUS * (0.4 + t * 0.6),
    y,
    Math.sin(angle) * HELIX_RADIUS * (0.4 + t * 0.6),
  ]
}

// ─── Tornado particles ────────────────────────────────────────────────────────

function TornadoParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 3600

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const t = i / count
      const angle = t * Math.PI * 2 * HELIX_TURNS * 3 + Math.random() * 0.8
      const radiusVariance = (Math.random() - 0.5) * 0.5
      const r = (0.1 + t * 1.0) * HELIX_RADIUS + radiusVariance
      const y = t * HELIX_HEIGHT - HELIX_HEIGHT * 0.3 + (Math.random() - 0.5) * 0.4
      pos[i * 3]     = Math.cos(angle) * r
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = Math.sin(angle) * r

      // Blue-white gradient: lower = cooler blue, upper = near-white
      const brightness = 0.5 + t * 0.5
      col[i * 3]     = 0.55 + t * 0.45          // R
      col[i * 3 + 1] = 0.72 + t * 0.28          // G
      col[i * 3 + 2] = brightness                // B
    }

    // core particles (eye of tornado)
    const coreCount = 400
    const corePosData = new Float32Array(coreCount * 3)
    const coreColData = new Float32Array(coreCount * 3)
    for (let i = 0; i < coreCount; i++) {
      const t = i / coreCount
      const y = t * HELIX_HEIGHT - HELIX_HEIGHT * 0.3
      const r = Math.random() * 0.15
      const a = Math.random() * Math.PI * 2
      corePosData[i * 3]     = Math.cos(a) * r
      corePosData[i * 3 + 1] = y
      corePosData[i * 3 + 2] = Math.sin(a) * r
      coreColData[i * 3]     = 0.85
      coreColData[i * 3 + 1] = 0.92
      coreColData[i * 3 + 2] = 1.0
    }

    const allPos = new Float32Array(pos.length + corePosData.length)
    const allCol = new Float32Array(col.length + coreColData.length)
    allPos.set(pos)
    allPos.set(corePosData, pos.length)
    allCol.set(col)
    allCol.set(coreColData, col.length)

    return { positions: allPos, colors: allCol }
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.35
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  )
}

// ─── Spiral label ─────────────────────────────────────────────────────────────

interface LabelProps {
  label: string
  target: string
  helixT: number
  delay: number
}

function SpiralLabel({ label, target, helixT, delay }: LabelProps) {
  const textRef = useRef<THREE.Mesh>(null)
  const lenis = useLenis()
  const [hovered, setHovered] = useState(false)
  const proxy = useRef({ opacity: 0, scale: 0.04, glow: 0 })
  const [finalPos] = useState<[number, number, number]>(() => helixPos(helixT))

  useEffect(() => {
    const p = proxy.current
    if (!textRef.current) return

    // start at origin (slightly below camera focal point)
    textRef.current.position.set(0, -1, 0)
    textRef.current.scale.setScalar(0.04)

    const tl = gsap.timeline({ delay })
    tl.to(textRef.current.position, {
      x: finalPos[0],
      y: finalPos[1],
      z: finalPos[2],
      duration: 1.8,
      ease: 'power3.out',
    })
    tl.to(textRef.current.scale, {
      x: 1, y: 1, z: 1,
      duration: 1.8,
      ease: 'power3.out',
    }, '<')
    tl.to(p, {
      opacity: 1,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => {
        const t = textRef.current as any
        if (t) t.fillOpacity = p.opacity
      },
    }, '<0.3')
    // arrival glow pulse
    tl.to(p, {
      glow: 1,
      duration: 0.4,
      ease: 'power2.in',
      onUpdate: () => {
        const t = textRef.current as any
        if (t) t.outlineOpacity = p.glow * 0.6
      },
    })
    tl.to(p, {
      glow: 0,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        const t = textRef.current as any
        if (t) t.outlineOpacity = p.glow * 0.6
      },
    })
  }, [delay, finalPos])

  useEffect(() => {
    const t = textRef.current as any
    if (!t) return
    gsap.to(textRef.current!.scale, {
      x: hovered ? 1.18 : 1,
      y: hovered ? 1.18 : 1,
      z: hovered ? 1.18 : 1,
      duration: 0.35,
      ease: 'power2.out',
    })
    if (t.fillOpacity !== undefined) {
      gsap.to(proxy.current, {
        opacity: hovered ? 1 : proxy.current.opacity,
        duration: 0.25,
        onUpdate: () => { t.fillOpacity = hovered ? 1 : proxy.current.opacity },
      })
    }
  }, [hovered])

  const handleClick = useCallback(() => {
    if (!lenis) return
    const el = document.querySelector(target) as HTMLElement | null
    if (el) lenis.scrollTo(el, { offset: -80, duration: 2 })
  }, [lenis, target])

  return (
    <Billboard follow>
      <Text
        ref={textRef as any}
        fontSize={0.22}
        letterSpacing={0.18}
        color="#c8dff5"
        outlineColor="#8ab8e0"
        outlineWidth={0.005}
        outlineOpacity={0}
        fillOpacity={0}
        anchorX="center"
        anchorY="middle"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={handleClick}
        userData={{ cursor: true }}
      >
        {label}
      </Text>
    </Billboard>
  )
}

// ─── Camera controller ────────────────────────────────────────────────────────

function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, -1.5, 8)
    camera.lookAt(0, 2, 0)
  }, [camera])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    camera.position.x = Math.sin(t * 0.18) * 0.3
    camera.position.y = -1.5 + Math.cos(t * 0.12) * 0.15
    camera.lookAt(0, 2, 0)
  })

  return null
}

// ─── Scene ────────────────────────────────────────────────────────────────────

function TornadoScene() {
  return (
    <>
      <CameraController />
      <TornadoParticles />
      {NAV_ITEMS.map((item, i) => (
        <SpiralLabel
          key={item.label}
          label={item.label}
          target={item.target}
          helixT={item.t}
          delay={0.8 + i * 0.28}
        />
      ))}
    </>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function TornadoHero() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, -1.5, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <TornadoScene />
      </Canvas>
    </div>
  )
}
