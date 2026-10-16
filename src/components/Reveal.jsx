import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export function FadeUp({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}

export function MaskText({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  return (
    <span
      ref={ref}
      className={`-my-[0.12em] block overflow-hidden py-[0.12em] ${className}`}
    >
      <motion.span
        className="block"
        initial={{ y: '130%' }}
        animate={{ y: inView ? 0 : '130%' }}
        transition={{ duration: 0.95, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function MaskReveal({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="h-full w-full overflow-hidden"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{ clipPath: inView ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' }}
        transition={{ duration: 1.0, ease: EASE }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.15 }}
          animate={{ scale: inView ? 1 : 1.15 }}
          transition={{ duration: 1.3, ease: EASE }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}
