import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * AmbientGlow: creates an ethereal, diffuse ambient spotlight that
 * gracefully trails the user's cursor behind the page content.
 * Pure atmospheric lighting without lines, grid, or noise.
 */
export default function AmbientGlow() {
  const [active, setActive] = useState(false)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)

  // Fluid, lazy spring: gentle atmospheric easing
  const springX = useSpring(x, { stiffness: 90, damping: 28, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 90, damping: 28, mass: 0.4 })

  useEffect(() => {
    // Only activate on devices with mouse/pointer
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    const onMove = (e) => {
      if (!active) setActive(true)
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const onLeave = () => setActive(false)
    const onEnter = () => setActive(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [active, x, y])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-700"
      style={{ opacity: active ? 1 : 0 }}
      aria-hidden="true"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Soft, deep ambient light halo (zero lines, zero noise, pure diffusion) */}
        <div className="size-[550px] sm:size-[720px] rounded-full bg-gradient-to-tr from-sky-500/10 via-indigo-500/8 to-transparent blur-[140px] dark:from-sky-400/12 dark:via-purple-500/8 dark:to-transparent" />
      </motion.div>
    </div>
  )
}
