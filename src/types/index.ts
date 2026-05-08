export interface Collection {
  id: string
  name: string
  year: number
  image: string
  images: string[]
  description: string
}

export interface PressItem {
  name: string
  quote: string
  logo?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
}
