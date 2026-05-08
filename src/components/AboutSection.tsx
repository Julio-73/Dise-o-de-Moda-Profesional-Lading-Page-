import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <section id="sobre-mi" ref={ref} className="min-h-screen bg-cream px-6 py-24 dark:bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          <motion.div
            variants={itemVariants}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1551232864-3f522363a86b?q=80&w=800&auto=format&fit=crop"
              alt="Valentina Ríos trabajando en su taller de diseño"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
          </motion.div>

          <motion.div variants={textVariants} className="space-y-8">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
              Sobre Mí
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-charcoal dark:text-cream">
              Creando belleza atemporal a través del arte textil
            </h2>
            
            <div className="space-y-6 font-sans text-lg leading-relaxed text-charcoal/80 dark:text-cream/80">
              <p>
                Desde Lima, Perú, cada prenda que diseño lleva consigo la esencia de una tradición 
                artesanal que se transmite de generación en generación. Mi filosofía se basa en la 
                idea de que la moda debe ser sostenible, tanto en su proceso de creación como en 
                su impacto ambiental.
              </p>
              <p>
                Trabajo exclusivamente con materiales naturales de origen local: algódon orgánico, 
                alpaca baby y fibras de ichu, transformándolos en piezas que celebra la forma 
                femenina sin renunciar a la comodidad ni a la elegancia contemporánea.
              </p>
            </div>

            <div className="pt-4">
              <svg
                className="h-12 w-48 text-gold"
                viewBox="0 0 200 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 35 Q 30 10, 50 30 T 90 25 T 130 30 T 170 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <text x="100" y="45" textAnchor="middle" className="font-serif text-xs italic" fill="currentColor">
                  Valentina Ríos
                </text>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
