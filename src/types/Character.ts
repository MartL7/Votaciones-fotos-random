interface Socials {
  name: string
  link: string
  type: 'github' | 'instagram' | 'twitter' | 'facebook'

}

export interface Character {
  id: string
  name: string
  imagePresentation: string
  imageSmall: string
  imagesGalery: { image: string, class?: string }[]
  funnyText?: string[]
  socials?: Socials[]
}
