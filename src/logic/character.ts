import type { Character } from '@/types/Character'

export const Characters: Character[] = [
    {
        id: 'Yahir',
        name: 'Yahir',
        imagePresentation: '/img/Yahir/Yahir-image-presentation.webp',
        imageSmall: '/img/Yahir/Yahir-small.webp',
        imagesGalery: [
            {
                image: '/img/Yahir/Yahir-image-5.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:max-h-[300px]',
            },
            {
                image: '/img/Yahir/Yahir-image-6.webp',
                isVertical: true,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 col-start-1 col-end-2 row-start-1 row-end-3 sm:max-h-[600px]',
            },
            {
                image: '/img/Yahir/Yahir-image-3.avif',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:max-h-[300px]',
            },
            {
                image: '/img/Yahir/Yahir-image-4.webp',
                isVertical: true,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 sm:max-h-[300px]',
            },
            {
                image: '/img/Yahir/Yahir-image-7.webp',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3 sm:max-h-[300px]',
            },
        ],
        funnyText: [
            'Que Chinguen a su madre las mujeres!',
            'No confies en las mujeres papu',
            'Jueves de Racismo',
            'Los viejitos solo nos quitan oxígeno',
        ],
    },
    {
        id: 'Elvin',
        name: 'Elvin',
        imagePresentation: '/img/Elvin/Elvin-image-presentation.webp',
        imageSmall: '/img/Elvin/Elvin-small.webp',
        imagesGalery: [
            { image: '/img/Elvin/Elvin-image-1.avif', isVertical: false, class: 'sm:col-start-3 sm:col-end-4 sm:h-[300px] col-start-2 col-end-3 h-[200px]' },
            { image: '/img/Elvin/Elvin-image-2.webp', isVertical: false, class: 'sm:col-start-2 sm:col-end-3 sm:h-[300px] sm:row-start-1' },
            { image: '/img/Elvin/Elvin-image-3.webp', isVertical: false, class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 col-start-1 col-end-2 row-start-1 row-end-3' },
            { image: '/img/Elvin/Elvin-image-1.avif', isVertical: false, class: 'sm:col-start-2 sm:col-end-4 sm:h-[300px] sm:row-start-2 col-start-1 col-end-3 h-[250px]' }

        ],
        funnyText: ['Lo hago en 30 segundos!', 'El Yahir está cabezón', 'Miau'],
    },
    {
        id: 'Emmanuel',
        name: 'Emmanuel',
        imagePresentation: '/img/Emmanuel/Emmanuel-image-presentation.webp',
        imageSmall: '/img/Emmanuel/Emmanuel-small.webp',
        imagesGalery: [
            {
                image: '/img/Emmanuel/Emmanuel-image-1.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:h-[300px] col-start-2 col-end-3',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-2.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-auto h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-3.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-auto h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-4.webp',
                isVertical: false,
                class: 'sm:h-[300px] sm:col-start-3 sm:col-end-4 col-start-1 col-end-2 row-start-1 row-end-2',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-5.webp',
                isVertical: false,
                class: 'sm:h-[350px] sm:col-start-3 sm:col-end-4 col-start-2 col-end-3 row-start-2 row-end-3 h-[200px]',
            },
        ],
        funnyText: ['Mí chaparrita hermoshita', 'Ante la duda la más tetuda'],
    },
    {
        id: 'Geovas',
        name: 'Geovas',
        imagePresentation: '/img/Geovas/Geovas-image-presentation.webp',
        imageSmall: '/img/Geovas/Geovas-small.png',
        imagesGalery: [
            { image: '/img/Geovas/Geovas-image-1.avif', isVertical: false },
            { image: '/img/Geovas/Geovas-image-2.webp', isVertical: false },
            { image: '/img/Geovas/Geovas-image-3.avif', isVertical: false },
        ],
        funnyText: ['Te extraño Karlita :(', 'Goku eta vaina e seria', 'Siuuuuuu'],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/geovx_lg/', type: 'instagram' }
        ]
    },

    {
        id: 'Are',
        name: 'Luzcesita',
        imagePresentation: '/img/Are/Are-image-presentation.webp',
        imageSmall: '/img/Are/Are-small.webp',
        imagesGalery: [
            { image: '/img/Are/Are-image-1.webp', isVertical: false, class:'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-[620px]' },
            { image: '/img/Are/Are-image-2.webp', isVertical: false, class: 'sm:col-start-2 sm:col-end-3 h-[300px]' },
            { image: '/img/Are/Are-image-3.webp', isVertical: false, class: 'sm:h-[300px]' },
            { image: '/img/Are/Are-image-4.webp', isVertical: false, class: 'sm:h-[300px]' },
            { image: '/img/Are/Are-image-2.webp', isVertical: false, class: 'sm:h-[300px]' },
        ],
        funnyText: ['Hii'],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/_arelyyyy__/', type: 'instagram' }
        ]
    },

    {
        id: 'Mike',
        name: 'Mike',
        imagePresentation: '/img/Mike/Mike-image-presentation.webp',
        imageSmall: '/img/Mike/Mike-small.webp',
        imagesGalery: [
            { image: '/img/Mike/Mike-image-4.webp', isVertical: false, class: 'max-h-[300px]' },
            { image: '/img/Mike/Mike-image-1.webp', isVertical: false, class: 'max-h-[300px]' },
            { image: '/img/Mike/Mike-image-2.avif', isVertical: false, class: 'sm:col-start-3 sm:col-end-4 col-start-1 col-end-2 sm:max-h[300px] h-[300px]' },
            { image: '/img/Mike/Mike-image-3.avif', isVertical: false, class: 'sm:col-start-1 sm:col-end-3 sm:h-[300px] h-[300px]' }
        ],
        funnyText: ['A poco si tilin'],
    },

    {
        id: 'Leslie',
        name: 'Less',
        imagePresentation: '/img/Leslie/Leslie-image-presentation.webp',
        imageSmall: '/img/Leslie/Leslie-small.webp',
        imagesGalery: [
            { image: '/img/Leslie/Leslie-image-1.webp', isVertical: false, class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[600px] hidden sm:block' },
            { image: '/img/Leslie/Leslie-image-6.webp', isVertical: false, class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:h-[300px] sm:hidden'},
            { image: '/img/Leslie/Leslie-image-2.webp', isVertical: false, class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:h-[300px] row-start-2 h-[250px]' },
            { image: '/img/Leslie/Leslie-image-3.webp', isVertical: false, class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:h-[300px]'},
            { image: '/img/Leslie/Leslie-image-4.webp', isVertical: false, class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 sm:h-[300px] row-start-2 row-end-4 h-[500px] ' },
            { image: '/img/Leslie/Leslie-image-5.webp', isVertical: false, class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:h-[300px] h-[220px]' },
            
        ],
        funnyText: ['Hiii']
    }

    /* {
        id: 'Character-Damian',
        name: 'Damian',
        imagePresentation: '/img/Damian/Damian-image-presentation.webp',
        imageSmall: '/img/Damian/Damian-small.png',
        imagesGalery: [
            { image: '/img/Damian/Damian-image-1.avif', isVertical: false },
            { image: '/img/Damian/Damian-image-2.webp', isVertical: false },
            { image: '/img/Damian/Damian-image-3.avif', isVertical: false },
        ],
        funnyText: ['Crecer como los Bisteces', 'A Putazos'],
    }, */
]
