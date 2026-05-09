import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'
import { FaPinterest, FaWhatsapp } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'

const socialLinks = [
  { name: 'Instagram', icon: FiInstagram, url: 'https://instagram.com/sashafiorella' },
  { name: 'Pinterest', icon: FaPinterest, url: 'https://pinterest.com/sashafiorella' },
  { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/51999999999' },
]

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.2)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" ref={ref} className="bg-cream px-6 py-24 dark:bg-charcoal">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
            Conectemos
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-charcoal dark:text-cream">
            Contáctame
          </h2>
          <p className="mt-6 font-sans text-charcoal/70 dark:text-cream/70">
            ¿Interesada en collaborate? Escríbeme y conversemos sobre cómo puedo vestir tu visión.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl space-y-8"
        >
          <div className="space-y-1">
            <label htmlFor="name" className="font-sans text-xs tracking-widest uppercase text-charcoal/60 dark:text-cream/60">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full border-b-2 border-charcoal/20 bg-transparent py-3 font-sans text-charcoal outline-none transition-colors focus:border-gold dark:text-cream dark:border-cream/20"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="font-sans text-xs tracking-widest uppercase text-charcoal/60 dark:text-cream/60">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full border-b-2 border-charcoal/20 bg-transparent py-3 font-sans text-charcoal outline-none transition-colors focus:border-gold dark:text-cream dark:border-cream/20"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="font-sans text-xs tracking-widest uppercase text-charcoal/60 dark:text-cream/60">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={5}
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full border-b-2 border-charcoal/20 bg-transparent py-3 font-sans text-charcoal outline-none transition-colors focus:border-gold dark:text-cream dark:border-cream/20 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full overflow-hidden border border-charcoal bg-transparent py-4 font-sans text-sm tracking-widest text-charcoal transition-colors hover:border-gold hover:text-gold dark:border-cream dark:text-cream dark:hover:border-gold"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                />
                Enviando...
              </span>
            ) : submitted ? (
              '¡Mensaje enviado!'
            ) : (
              'Enviar mensaje'
            )}
            <motion.span
              className="absolute inset-0 -z-10 bg-gradient-to-r from-gold/20 to-terracotta/20 opacity-0 transition-opacity group-hover:opacity-100"
              initial={{ scale: 0, opacity: 1 }}
              whileHover={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center gap-8"
        >
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 360, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-charcoal/40 transition-colors hover:text-gold dark:text-cream/40 dark:hover:text-gold"
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
