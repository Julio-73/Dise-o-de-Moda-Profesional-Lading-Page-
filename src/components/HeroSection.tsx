import { motion, useScroll, useTransform } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export function HeroSection() {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('sobre-mi')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1080&auto=format&fit=crop')`,
          y,
        }}
      />
      <div className="absolute inset-0 bg-charcoal/10" />
      
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white"
        >
          Sasha Fiorella
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 font-sans text-sm md:text-base tracking-[0.3em] uppercase text-white/90"
        >
          Diseño de Moda Contemporánea | Hecho a Mano en Lima
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToContent}
          className="mt-12 border border-white/50 bg-white/10 px-8 py-3 font-sans text-sm tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:shadow-[0_0_30px_rgba(201,164,125,0.3)]"
        >
          Ver Colección
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaChevronDown className="h-8 w-8 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
