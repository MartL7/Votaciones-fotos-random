import type { Results } from '@/types/results'

export const results: Results[] = [
  {
    id: 'result-enchilada',
    name: 'Enchilada',
    imagePresentation: '/img/Resultados/image-resultados-enchilada-presentation.webp',
    category: 'Perro-del-año',
    images: [
      { image: '/img/Resultados/image-resultados-enchilada-1.avif', 
        class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:h-[350px]' 
      },

      { image: '/img/Resultados/image-resultados-enchilada-2.avif', 
        class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[350px]' 
      },

      { image: '/img/Resultados/image-resultados-enchilada-3.avif', 
        class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:h-[350px]' 
      }
    ]
  },

  {
    id: 'result-teachers',
    name: 'Dianne',
    imagePresentation: '/img/Profes/Dayanne/Dayanne-image-presentation.webp',
    category: 'Category-teachers',
    images: [
      { image: '/img/Profes/Dayanne/Dianne-image-1.webp', 
        class: 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:h-[350px] col-start-2 col-end-3 row-start-1 row-end-2 h-[200px]' 
      },

      { image: '/img/Profes/Dayanne/Dianne-image-2.webp',
        class: 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:h-[350px] col-start-1 col-end-2 row-start-3 row-end-4 h-[200px]' 
      },

      { image: '/img/Profes/Dayanne/Dianne-image-3.webp',
        class: 'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:h-[350px] col-start-1 col-end-2 row-start-1 row-end-3 h-[350px]'  
      },

      {
        image: '/img/Profes/Dayanne/Dianne-image-4.webp',
        class: 'md:col-start-4 md:col-end-5 md:h-[350px] md:row-start-1 md:row-end-2 col-start-2 col-end-3 row-start-2 row-end-4 h-[350px]'
      }
    ]
  },

  {
    id: 'result-memes',
    name: 'Meme de Martín',
    imagePresentation: '/img/Memes/Meme-2-xd.webp',
    category: 'Category-memes'
  }
]