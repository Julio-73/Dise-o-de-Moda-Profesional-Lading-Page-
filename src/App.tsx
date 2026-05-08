import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  Header,
  HeroSection,
  AboutSection,
  CollectionsSection,
  GallerySection,
  PressSection,
  ContactSection,
  Footer,
  LoadingScreen,
  CustomCursor,
} from './components'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CollectionsSection />
        <GallerySection />
        <PressSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
