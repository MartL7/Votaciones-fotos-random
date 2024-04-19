export interface Character {
  id: string
  name: string
  imagePresentation: string
  imageSmall: string
  imagesGalery: { image: string, isVertical: boolean, class?: string }[]
  funnyText?: string[]
  socials?: {name: string, link: string, type: 'github' | 'instagram' | 'twitter' | 'youtube'}[]
}
