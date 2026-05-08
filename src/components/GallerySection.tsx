import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'

const galleryImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    alt: 'Modelo con vestido artesanal en estudio minimalista',
    span: 'row-span-2'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    alt: 'Editorial de moda con prendas contemporáneas',
    span: ''
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop',
    alt: 'Detalle de bordado artesanal en tela natural',
    span: ''
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    alt: 'Lookbook con tonos tierra',
    span: 'col-span-2'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
    alt: 'Prenda de alpaca en atelier',
    span: ''
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    alt: 'Fashion editorial en exteriores',
    span: ''
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1551232864-3f522363a86b?q=80&w=800&auto=format&fit=crop',
    alt: 'Sesión de trabajo en taller de diseño',
    span: 'col-span-2'
  },
]

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal(0.1)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  
  
  const goNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }
  
  const goPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="lookbook" ref={ref} className="bg-cream px-6 py-24 dark:bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
            Primavera 2026
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-charcoal dark:text-cream">
            Lookbook
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden bg-charcoal/5 ${image.span} cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gold/0 transition-colors duration-300 hover:bg-gold/10" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/98"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 transition-colors hover:text-white"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <FaChevronLeft className="h-12 w-12" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 transition-colors hover:text-white"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <FaChevronRight className="h-12 w-12" />
            </button>

            <button
              className="absolute right-6 top-6 text-white/50 transition-colors hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes className="h-8 w-8" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-sm text-white/50">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
