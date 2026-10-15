import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const TRAIL_LENGTH = 18
const INTERACTIVE = 'a, button, input, textarea, select, [data-cursor]'

/** R3F trail: a chain of discs, each easing toward the one before it. */
function Trail({ mouse, hovered }) {
  const size = useThree((s) => s.size)
  const meshes = useRef([])
  const points = useMemo(
    () => Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })),
    [],
  )
  const boost = useRef(1)
  const ready = useRef(false)

  useFrame(() => {
    const m = mouse.current
    if (!m.active) return

    // Screen px -> orthographic world (1 unit = 1px, origin at center, y up)
    const tx = m.x - size.width / 2
    const ty = -(m.y - size.height / 2)

    if (!ready.current) {
      points.forEach((p) => {
        p.x = tx
        p.y = ty
      })
      ready.current = true
    }

    boost.current += ((hovered.current ? 1.8 : 1) - boost.current) * 0.1

    let px = tx
    let py = ty
    points.forEach((p, i) => {
      const ease = i === 0 ? 0.3 : 0.45
      p.x += (px - p.x) * ease
      p.y += (py - p.y) * ease
      px = p.x
      py = p.y

      const mesh = meshes.current[i]
      if (!mesh) return
      const t = 1 - i / TRAIL_LENGTH
      mesh.position.set(p.x, p.y, 0)
      mesh.scale.setScalar(Math.max(0.5, 9 * t * boost.current))
      mesh.material.opacity = t * 0.55
    })
  })

  return (
    <>
      {points.map((_, i) => (
        <mesh key={i} ref={(el) => (meshes.current[i] = el)}>
          <circleGeometry args={[1, 32]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0} depthTest={false} />
        </mesh>
      ))}
    </>
  )
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const mouse = useRef({ x: 0, y: 0, active: false })
  const hoveredRef = useRef(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 700, damping: 45, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 700, damping: 45, mass: 0.4 })

  // Only on devices with a fine pointer (mouse / trackpad)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY, active: true }
      x.set(e.clientX)
      y.set(e.clientY)
      const isHover = !!e.target.closest?.(INTERACTIVE)
      if (isHover !== hoveredRef.current) {
        hoveredRef.current = isHover
        setHovered(isHover)
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference">
      <Canvas
        orthographic
        camera={{ zoom: 1, position: [0, 0, 100] }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        events={undefined}
      >
        <Trail mouse={mouse} hovered={hoveredRef} />
      </Canvas>

      <motion.div className="fixed top-0 left-0" style={{ x: sx, y: sy }}>
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{
            width: hovered ? 72 : 10,
            height: hovered ? 72 : 10,
            opacity: hovered ? 0.9 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        />
      </motion.div>
    </div>
  )
}
