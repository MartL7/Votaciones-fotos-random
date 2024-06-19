interface Sticker {
  id: string
  code: string
  imageUrl: string
  isGif ?: boolean
}

export const stickers: Sticker[] = [
  {
    id: 'Sticker-1',
    code: '#ss1',
    imageUrl: '/img/Stickers/ss1.webp'
  },

  {
    id: 'Sticker-2',
    code: '#ss2',
    imageUrl: '/img/Stickers/ss2.webp'
  },

  {
    id: 'Sticker-3',
    code: '#ss3',
    imageUrl: '/img/Stickers/ss3.webp'
  },

  {
    id: 'Sticker-4',
    code: '#ss4',
    imageUrl: '/img/Stickers/ss4.webp'
  },

  {
    id: 'Sticker-5',
    code: '#ss5',
    imageUrl: '/img/Stickers/ss5.webp'
  },

  {
    id: 'Sticker-6',
    code: '#ss6',
    imageUrl: '/img/Stickers/ss6.gif',
    isGif: true
  }
]