export interface Images {
  image: string
  class?: string
}

interface Socials {
  name: string
  link: string
  type: 'github' | 'instagram' | 'twitter' | 'facebook' | 'portfolio'
}

export interface Character {
  id: string
  name: string
  birthDay?: string
  genre?: string
  numberPhone?: number
  imagePresentation: string
  imageSmall: string
  imagesGalery: Images[]
  funnyText?: string[]
  socials?: Socials[]
}
