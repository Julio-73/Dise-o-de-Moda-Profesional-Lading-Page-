import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream px-6 py-12 dark:border-cream/10 dark:bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl font-medium text-charcoal dark:text-cream">
              Valentina Ríos
            </span>
          </div>

          <p className="font-sans text-sm text-charcoal/50 dark:text-cream/50">
            Hecho con amor en Lima, Perú
          </p>

          <nav className="flex gap-6">
            <a
              href="#sobre-mi"
              className="font-sans text-sm text-charcoal/50 transition-colors hover:text-gold dark:text-cream/50 dark:hover:text-gold"
            >
              Sobre mí
            </a>
            <a
              href="#colecciones"
              className="font-sans text-sm text-charcoal/50 transition-colors hover:text-gold dark:text-cream/50 dark:hover:text-gold"
            >
              Colecciones
            </a>
            <a
              href="#contacto"
              className="font-sans text-sm text-charcoal/50 transition-colors hover:text-gold dark:text-cream/50 dark:hover:text-gold"
            >
              Contacto
            </a>
          </nav>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-charcoal/10 pt-8 dark:border-cream/10 md:flex-row"
        >
          <p className="font-sans text-xs text-charcoal/30 dark:text-cream/30">
            © 2026 Valentina Ríos. Todos los derechos reservados.
          </p>
          <a
            href="#"
            className="font-sans text-xs text-charcoal/30 transition-colors hover:text-gold dark:text-cream/30 dark:hover:text-gold"
          >
            Políticas de privacidad
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
