import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PressItem } from '../types'

const pressItems: PressItem[] = [
  {
    name: 'Vogue Latam',
    quote: 'Una voz fresca en la moda latinoamericana',
  },
  {
    name: 'Elle Magazine',
    quote: 'El futuro del diseño sostenible en América del Sur',
  },
  {
    name: 'Harper\'s Bazaar',
    quote: 'Artefactos de moda que honran la tradición artesanal',
  },
]

const logos = [
  { name: 'Vogue', color: '#E71D36' },
  { name: 'Elle', color: '#FDBEB2' },
  { name: 'Harper\'s Bazaar', color: '#1A1A1A' },
  { name: 'GQ', color: '#D4AF37' },
]

export function PressSection() {
  const { ref, isVisible } = useScrollReveal(0.2)

  return (
    <section id="prensa" ref={ref} className="bg-cream px-6 py-24 dark:bg-charcoal">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
            Prensa
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-charcoal dark:text-cream">
            Lo que dicen de nosotros
          </h2>
        </motion.div>

        <div className="mb-20 flex flex-wrap justify-center gap-12">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              whileHover={{ scale: 1.05, color: logo.color }}
              transition={{ duration: 0.3 }}
              className="font-serif text-2xl font-medium tracking-wider text-charcoal/30 dark:text-cream/30 hover:text-gold"
            >
              {logo.name}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="space-y-16"
        >
          {pressItems.map((item) => (
            <motion.blockquote
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-center"
            >
              <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-charcoal dark:text-cream">
                "{item.quote}"
              </p>
              <footer className="mt-6 font-sans text-sm tracking-widest text-gold uppercase">
                — {item.name}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
