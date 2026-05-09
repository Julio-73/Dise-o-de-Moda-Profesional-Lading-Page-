import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Collection } from '../types'

const collections: Collection[] = [
  {
    id: '1',
    name: 'Eternal Bloom',
    year: 2026,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Una celebración de la flora andina a través de bordados artesanales.'
  },
  {
    id: '2',
    name: 'Desert Whispers',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Tonos tierra y texturas del desierto peruano.'
  },
  {
    id: '3',
    name: 'Urban Zen',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Siluetas minimalistas para la mujer contemporánea.'
  },
  {
    id: '4',
    name: 'Andean Heritage',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    ],
    description: 'Un tributo a los textiles ancestrales del Cusco.'
  },
]

export function CollectionsSection() {
  const { ref, isVisible } = useScrollReveal(0.1)
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <section id="colecciones" ref={ref} className="bg-cream px-6 py-24 dark:bg-charcoal">
      <div className="mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
            Portfolio
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-medium text-charcoal dark:text-cream">
            Colecciones Destacadas
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              onClick={() => setSelectedCollection(collection)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCollection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4"
            onClick={() => setSelectedCollection(null)}
          >
            <button
              className="absolute right-6 top-6 text-white/70 transition-colors hover:text-white"
              onClick={() => setSelectedCollection(null)}
            >
              <FaTimes className="h-8 w-8" />
            </button>

            <div className="flex max-w-6xl gap-8" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[3/4] w-1/2 overflow-hidden"
              >
                <img
                  src={selectedCollection.images[selectedImageIndex]}
                  alt={`${selectedCollection.name} - Imagen ${selectedImageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <div className="flex w-1/2 flex-col justify-between">
                <div>
                  <h3 className="font-serif text-3xl text-white">{selectedCollection.name}</h3>
                  <p className="mt-2 font-sans text-sm tracking-widest text-gold">
                    {selectedCollection.year}
                  </p>
                  <p className="mt-6 font-sans text-white/70">{selectedCollection.description}</p>
                </div>

                <div className="mt-8 flex gap-3">
                  {selectedCollection.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`h-16 w-16 overflow-hidden border-2 transition-all ${
                        idx === selectedImageIndex ? 'border-gold' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function CollectionCard({ collection, onClick }: { collection: Collection; onClick: () => void }) {
  return (
    <motion.button
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover="hover"
      onClick={onClick}
      className="group relative aspect-[3/4] w-full overflow-hidden bg-charcoal/5"
    >
      <motion.img
        src={collection.image}
        alt={collection.name}
        className="h-full w-full object-cover transition-transform duration-700"
        loading="lazy"
        variants={{ hover: { scale: 1.03 } }}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.parentElement?.classList.add('bg-gold/20')
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-4">
        <p className="font-sans text-xs tracking-widest text-gold">{collection.year}</p>
        <h3 className="mt-2 font-serif text-xl text-white">{collection.name}</h3>
        <span className="mt-4 inline-block border-b border-gold pb-1 font-sans text-sm text-white">
          Explorar
        </span>
      </div>
    </motion.button>
  )
}
