import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/** Fade-up on scroll. */
export function FadeUp({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}

/**
 * Text revealed from behind a mask.
 * The *outer* (unclipped) span is observed: observing the translated inner span
 * would never intersect, because the mask's overflow clips it out of view.
 */
export function MaskText({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })

  return (
    <span
      ref={ref}
      className={`-my-[0.12em] block overflow-hidden py-[0.12em] ${className}`}
    >
      <motion.span
        className="block"
        initial={{ y: '130%' }}
        animate={{ y: inView ? 0 : '130%' }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/**
 * Image/block revealed with an inset clip-path mask + subtle scale.
 * `className` (size/aspect/grid placement) goes on the unclipped outer wrapper,
 * which is the element observed for visibility.
 */
export function MaskReveal({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="h-full w-full overflow-hidden"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{ clipPath: inView ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.25 }}
          animate={{ scale: inView ? 1 : 1.25 }}
          transition={{ duration: 1.6, ease: EASE }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
