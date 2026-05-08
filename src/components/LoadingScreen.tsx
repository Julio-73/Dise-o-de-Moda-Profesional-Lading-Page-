import { motion } from 'framer-motion'

interface LoadingScreenProps {
  onComplete?: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream dark:bg-charcoal"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="font-serif text-8xl font-medium text-gold"
        >
          VR
        </motion.div>
      </div>
      
      <div className="mt-12 h-[2px] w-32 overflow-hidden bg-charcoal/10 dark:bg-cream/10">
        <motion.div
          className="h-full bg-gradient-to-r from-gold to-terracotta"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
