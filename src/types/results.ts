export interface Results {
  id: string
  name: string
  imagePresentation?: string
  category: string
  videoThumbnail?: string
  images?: { image: string, class: string }[]
}