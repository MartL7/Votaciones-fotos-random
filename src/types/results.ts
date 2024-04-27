import type { Images } from '@/types/Character'

export interface Results {
  id: string
  name: string
  imagePresentation?: string
  category: string
  videoThumbnail?: string
  images?: Images[]
}