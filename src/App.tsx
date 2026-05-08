import {
  Header,
  HeroSection,
  AboutSection,
  CollectionsSection,
  GallerySection,
  PressSection,
  ContactSection,
  Footer,
  CustomCursor,
} from './components'

function App() {
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
