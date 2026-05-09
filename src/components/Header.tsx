import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#colecciones', label: 'Colecciones' },
  { href: '#lookbook', label: 'Lookbook' },
  { href: '#prensa', label: 'Prensa' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 dark:bg-charcoal/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="font-serif text-2xl font-medium text-charcoal dark:text-cream">
          SF
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-sans text-sm tracking-wider text-charcoal/70 transition-colors hover:text-gold dark:text-cream/70 dark:hover:text-gold"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="text-charcoal dark:text-cream"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FiSun className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FiMoon className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-charcoal dark:text-cream md:hidden"
          >
            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-full bg-cream dark:bg-charcoal px-6 py-8 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-sans text-left text-lg tracking-wider text-charcoal transition-colors hover:text-gold dark:text-cream dark:hover:text-gold"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
