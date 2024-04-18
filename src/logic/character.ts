import type { Character } from '@/types/Character'

export const Characters: Character[] = [
  {
    id: 'Character-Yahir',
    name: 'Yahir',
    imagePresentation: '/img/Yahir/Yahir-image-presentation.webp',
    imageSmall: '/img/Yahir/Yahir-small.webp',
    imagesGalery: [
      { image: '/img/Yahir/Yahir-image-1.webp', isVertical: false, class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2'},
      { image: '/img/Yahir/Yahir-image-2.webp', isVertical: true, class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 col-start-1 col-end-2 row-start-1 row-end-3' },
      { image: '/img/Yahir/Yahir-image-3.avif', isVertical: false, class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2' },
      { image: '/img/Yahir/Yahir-image-1.webp', isVertical: true, class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3' },
      { image: '/img/Yahir/Yahir-image-1.webp', isVertical: false, class: 'sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3' },
    ],
    funnyText: [
      'Que Chinguen a su madre las mujeres!',
      'No confies en las mujeres papu',
      'Jueves de Racismo',
      'Los viejitos solo nos quitan oxígeno',
    ]
  },
  {
    id: 'Character-Elvin',
    name: 'Elvin',
    imagePresentation: '/img/Elvin/Elvin-image-presentation.webp',
    imageSmall: '/img/Elvin/Elvin-small.webp',
    imagesGalery: [
      { image: '/img/Elvin/Elvin-image-1.webp', isVertical: false },
      { image: '/img/Elvin/Elvin-image-1.webp', isVertical: false },
      { image: '/img/Elvin/Elvin-image-1.webp', isVertical: false }
    ],
    funnyText: [
      'Lo hago en 30 segundos!',
      'El Yahir está cabezón'
    ]
  },
  {
    id: 'Character-Emmanuel',
    name: 'Emmanuel',
    imagePresentation: '/img/Emmanuel/Emmanuel-image-presentation.webp',
    imageSmall: '/img/Emmanuel/Emmanuel-small.webp',
    imagesGalery: [
      { image: '/img/Emmanuel/Emmanuel-image-1.webp', isVertical: false, class: 'sm:col-start-2 sm:col-end-3 sm:h-[300px] col-start-2 col-end-3' },
      { image: '/img/Emmanuel/Emmanuel-image-2.webp', isVertical: false, class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-auto h-[200px]' },
      { image: '/img/Emmanuel/Emmanuel-image-3.webp', isVertical: false, class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-auto h-[200px]' },
      { image: '/img/Emmanuel/Emmanuel-image-4.webp', isVertical: false, class: 'sm:h-[300px] sm:col-start-3 sm:col-end-4 col-start-1 col-end-2 row-start-1 row-end-2' },
      { image: '/img/Emmanuel/Emmanuel-image-5.webp', isVertical: false, class: 'sm:h-[350px] sm:col-start-3 sm:col-end-4 col-start-2 col-end-3 row-start-2 row-end-3 h-[200px]' },
    ],
    funnyText: [
      'Mí chaparrita hermoshita',
      'Ante la duda la más tetuda'
    ]
  },
  {
    id: 'Character-Geovas',
    name: 'Geovas',
    imagePresentation: '/img/Geovas/Geovas-image-presentation.webp',
    imageSmall: '/img/Geovas/Geovas-small.png',
    imagesGalery: [
      { image: '/img/Geovas/Geovas-image-1.avif', isVertical: false },
      { image: '/img/Geovas/Geovas-image-2.webp', isVertical: false },
      { image: '/img/Geovas/Geovas-image-3.avif', isVertical: false }
    ],
    funnyText: [
      'Te extraño Karlita :(',
      'Goku eta vaina e seria'
    ]
  }
]