interface FallenCharacter {
  id: string
  name: string
  folder: string
  imageSmall: string
  imagePresentation?: string
}

export const fallenCharacters: FallenCharacter[] = [
  {
    id: 'Ever',
    name: 'Ever',
    folder: 'Fallen',
    imageSmall: '/img/Fallen/Ever-small.webp',
    imagePresentation: '/img/Fallen/Ever-image-presentation.webp'
  },

  {
    id: 'Alan',
    name: 'Alan',
    folder: 'Fallen',
    imageSmall: '/img/Fallen/Alan-small.webp',
    imagePresentation: '/img/Fallen/Alan-image-presentation.webp'
  },

  {
    id: 'Rolando',
    name: 'Rolando',
    folder: 'Fallen',
    imageSmall: '/img/Fallen/Rolando-small.webp',
    imagePresentation: '/img/Fallen/Rolando-image-presentation.webp'
  }
]