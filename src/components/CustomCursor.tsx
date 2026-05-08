import { motion } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

export function CustomCursor() {
  const { x, y } = useMousePosition()

  return (
    <>
      <motion.div
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/60 mix-blend-difference lg:block"
      />
      <motion.div
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30 mix-blend-difference lg:block"
      />
    </>
  )
}
