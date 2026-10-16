import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useIsPresent } from 'framer-motion'
import { useLenis } from 'lenis/react'
import AmbientGlow from './AmbientGlow'
import { getTransitionOrigin, resetTransitionOrigin } from '../hooks/useTransitionOrigin'

const EASE = [0.65, 0, 0.35, 1]
const DURATION = 0.85

/**
 * "Modal expansion": the incoming page is revealed through a circle that grows
 * from the click point until it fills the whole screen. The outgoing page is
 * frozen in place (fixed, offset by its scroll position) underneath.
 */
export default function PageTransition({ children }) {
  const isPresent = useIsPresent()
  const lenis = useLenis()
  const ref = useRef(null)
  const lastScroll = useRef(0)
  const presentRef = useRef(true)
  presentRef.current = isPresent

  const [{ x, y, radius }] = useState(() => {
    const o = getTransitionOrigin()
    const dx = Math.max(o.x, window.innerWidth - o.x)
    const dy = Math.max(o.y, window.innerHeight - o.y)
    return { ...o, radius: Math.ceil(Math.hypot(dx, dy)) + 8 }
  })

  // Track scroll of the visible page so we can freeze it when it exits
  useEffect(() => {
    const onScroll = () => {
      if (presentRef.current) lastScroll.current = window.scrollY
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // New page always starts at the top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    lenis?.scrollTo(0, { immediate: true, force: true })
    resetTransitionOrigin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen bg-paper dark:bg-ink"
      style={
        isPresent
          ? { position: 'relative', zIndex: 10 }
          : { position: 'fixed', top: -lastScroll.current, left: 0, right: 0, zIndex: 0 }
      }
      initial={{ clipPath: `circle(0px at ${x}px ${y}px)` }}
      animate={{
        clipPath: `circle(${radius}px at ${x}px ${y}px)`,
        // Remove the clip once fully expanded so tall pages aren't cut off
        // (and IntersectionObserver can see content below the first viewport)
        transitionEnd: { clipPath: 'none' },
      }}
      exit={{ filter: 'brightness(0.55)' }}
      transition={{ duration: DURATION, ease: EASE }}
    >
      <AmbientGlow />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
