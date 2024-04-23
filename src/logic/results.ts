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
    id: 'result-ever',
    name: 'Ever',
    category: 'Clip-del-ciclo',
    videoThumbnail: ''
  }
]