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
                image: '/img/Yahir/Yahir-image-8.webp',
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
            {
                image: '/img/Elvin/Elvin-image-1.avif',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-4 sm:h-[300px] col-start-2 col-end-3 h-[200px]',
            },
            {
                image: '/img/Elvin/Elvin-image-2.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:h-[300px] sm:row-start-1',
            },
            {
                image: '/img/Elvin/Elvin-image-3.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 col-start-1 col-end-2 row-start-1 row-end-3',
            },
            {
                image: '/img/Elvin/Elvin-image-1.avif',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-4 sm:h-[300px] sm:row-start-2 col-start-1 col-end-3 h-[250px]',
            },
        ],
        funnyText: [
            'Lo hago en 30 segundos!',
            'Miau',
            'El Yahir está cabezón',
            '100 por línea',
            'Antes me decias "mi amor"',
            'Ahora ni me hablas',
        ],
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
        funnyText: [
            'Mí chaparrita hermoshita', 
            'Ante la duda la más tetuda'
        ],
    },
    {
        id: 'Geovas',
        name: 'Geovas',
        imagePresentation: '/img/Geovas/Geovas-image-presentation.webp',
        imageSmall: '/img/Geovas/Geovas-small.png',
        imagesGalery: [
            { 
                image: '/img/Geovas/Geovas-image-1.avif', 
                isVertical: false 
            },
            { 
                image: '/img/Geovas/Geovas-image-2.webp', 
                isVertical: false 
            },
            { 
                image: '/img/Geovas/Geovas-image-3.avif', 
                isVertical: false 
            },
        ],
        funnyText: [
            'Te extraño Karlita :(', 
            'Goku eta vaina e seria', 
            'Siuuuuuu'
        ],

        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/geovx_lg/', type: 'instagram' },
            { name: 'GitHub', link: 'https://github.com/MartL7', type: 'github' },
            { name: 'Twitter', link: 'https://twitter.com/GeovasYoSoy', type: 'twitter' }
        ],
    },

    {
        id: 'Are',
        name: 'Luzcesita',
        imagePresentation: '/img/Are/Are-image-presentation.webp',
        imageSmall: '/img/Are/Are-small.webp',
        imagesGalery: [
            {
                image: '/img/Are/Are-image-1.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-[620px]',
            },
            { 
                image: '/img/Are/Are-image-2.webp', 
                isVertical: false, 
                class: 'sm:col-start-2 sm:col-end-3 h-[300px]' 
            },
            { 
                image: '/img/Are/Are-image-3.webp', 
                isVertical: false, 
                class: 'sm:h-[300px]' 
            },
            { 
                image: '/img/Are/Are-image-4.webp', 
                isVertical: false, 
                class: 'sm:h-[300px]' 
            },
            { 
                image: '/img/Are/Are-image-2.webp', 
                isVertical: false, 
                class: 'sm:h-[300px]' 
            },
        ],
        funnyText: [
            'Hii'
        ],
        socials: [
            { 
                name: 'Instagram', link: 'https://www.instagram.com/_arelyyyy__/', type: 'instagram'
            }
        ],
    },

    {
        id: 'Mike',
        name: 'Mike',
        imagePresentation: '/img/Mike/Mike-image-presentation.webp',
        imageSmall: '/img/Mike/Mike-small.webp',
        imagesGalery: [
            { image: '/img/Mike/Mike-image-4.webp', isVertical: false, class: 'max-h-[300px]' },
            { image: '/img/Mike/Mike-image-1.webp', isVertical: false, class: 'max-h-[300px]' },
            {
                image: '/img/Mike/Mike-image-2.avif',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-4 col-start-1 col-end-2 sm:max-h[300px] h-[300px]',
            },
            {
                image: '/img/Mike/Mike-image-3.avif',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-3 sm:h-[300px] h-[300px]',
            },
            {
                image: '/img/Mike/Mike-image-5.webp',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-4 sm:h-[300px]',
            },
        ],
        funnyText: [
            'A poco si tilin'
        ],
    },

    {
        id: 'Leslie',
        name: 'Less',
        imagePresentation: '/img/Leslie/Leslie-image-presentation.webp',
        imageSmall: '/img/Leslie/Leslie-small.webp',
        imagesGalery: [
            {
                image: '/img/Leslie/Leslie-image-1.webp',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[600px] hidden sm:block',
            },
            {
                image: '/img/Leslie/Leslie-image-6.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:h-[300px] sm:hidden',
            },
            {
                image: '/img/Leslie/Leslie-image-2.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:h-[300px] row-start-2 h-[250px]',
            },
            {
                image: '/img/Leslie/Leslie-image-3.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:h-[300px]',
            },
            {
                image: '/img/Leslie/Leslie-image-4.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 sm:h-[260px] row-start-2 row-end-4 h-[500px] ',
            },
            {
                image: '/img/Leslie/Leslie-image-5.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:h-[260px] h-[220px]',
            },
            {
                image: '/img/Leslie/Leslie-image-7.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-5 sm:h-[600px] col-start-1 col-end-2 row-start-4 row-end-6 h-[400px]',
            },
            {
                image: '/img/Leslie/Leslie-image-8.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-4 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-2 col-end-3 row-start-4 row-end-5 h-[180px]',
            },
            {
                image: '/img/Leslie/Leslie-image-9.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5 sm:h-[260px] col-start-2 col-end-3 row-start-5 row-end-6 h-[200px]',
            },
        ],
        funnyText: [
            'Hiii'
        ],
    },

    {
        id: 'Damian',
        name: 'Damian',
        imagePresentation: '/img/Damian/Damian-image-presentation.webp',
        imageSmall: '/img/Damian/Damian-image-presentation.webp',
        imagesGalery: [
            {
                image: '/img/Damian/Damian-image-1.webp',
                isVertical: false,
            },
            {
                image: '/img/Damian/Damian-image-5.webp',
                isVertical: false,
            },
            {
                image: '/img/Damian/Damian-image-3.webp',
                isVertical: false,
            },
            {
                image: '/img/Damian/Damian-image-4.webp',
                isVertical: false,
            },
            {
                image: '/img/Damian/Damian-image-6.webp',
                isVertical: false,
            },
            {
                image: '/img/Damian/Damian-image-7.webp',
                isVertical: false,
            },
        ],
        funnyText: [
            'Crecer como los Bisteces', 
            'A Putazos', 
            'BOMBARDEN HUAUCHINANGO'
        ],
    },
    {
        id: 'Ale',
        name: 'Alita',
        imagePresentation: '/img/Ale/Ale-image-presentation.webp',
        imageSmall: '/img/Ale/Ale-small.webp',
        imagesGalery: [
            {
                image: '/img/Ale/Ale-image-1.webp',
                isVertical: false,
                class: 'sm:row-start-1 sm:row-end-3 sm:h-[600px] sm:col-start-1 sm:col-end-2 row-start-1 row-end-3 col-start-1 col-end-2 h-[400px]',
            },
            {
                image: '/img/Ale/Ale-image-2.webp',
                isVertical: false,
                class: 'sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3 sm:h-[250px] col-start-2 col-end-3 h-[200px]',
            },
            {
                image: '/img/Ale/Ale-image-3.webp',
                isVertical: false,
                class: 'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-4 sm:h-[300px] row-start-3 row-end-4 h-[200px] col-start-1 col-end-2',
            },
            {
                image: '/img/Ale/Ale-image-4.webp',
                isVertical: false,
                class: 'sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-2 sm:h-[250px] col-start-2 col-end-3 h-[180px] row-start-2 row-end-3',
            },
            {
                image: '/img/Ale/Ale-image-5.webp',
                isVertical: false,
                class: 'sm:row-start-2 sm:row-end-3 sm:col-start-3 sm:col-end-4 sm:h-[250px] col-start-2 col-end-3 h-[200px] row-start-3 row-end-4',
            },
            {
                image: '/img/Ale/Ale-image-6.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:h-[500px] sm:row-start-3 sm:row-end-5 h-[250px] col-start-1 col-end-2 row-start-4 row-end-5',
            },
            {
                image: '/img/Ale/Ale-image-7.webp',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-4 sm:h-[250px] sm:row-start-3 sm:row-end-4 row-start-4 row-end-6 h-[400px]',
            },
            {
                image: '/img/Ale/Ale-image-8.webp',
                isVertical: false,
                class: 'sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-2 sm:h-[210px] ',
            },
            {
                image: '/img/Ale/Ale-image-9.webp',
                isVertical: false,
                class: 'sm:row-start-4 sm:row-end-6 sm:col-start-3 sm:col-end-4 sm:h-[400px] h-[200px] col-start-1 col-end-2 row-start-6 row-end-7'
            },
            {
                image: '/img/Ale/Ale-image-10.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-5 sm:row-end-7 sm:h-[400px] h-[200px] col-start-2 col-end-3 row-start-6 row-end-7'
            },
            {
                image: '/img/Ale/Ale-image-11.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-5 sm:row-end-7 sm:h-[400px] col-start-1 col-end-2 row-start-7 row-end-9 h-[300px]'
            },
            {
                image: '/img/Ale/Ale-image-12.webp',
                isVertical: false,
                class: 'sm:row-start-6 sm:row-end-8 sm:col-start-3 sm:col-end-4 sm:h-[400px] col-start-2 col-end-3 row-start-7 row-end-9 h-[300px]'
            },
            {
                image: '/img/Ale/Ale-image-14.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-7 sm:row-end-8 sm:h-[180px] col-start-1 col-end-2 row-start-10 row-end-11'
            },
            {
                image: '/img/Ale/Ale-image-15.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-7 sm:row-end-8 sm:h-[180px] col-start-2 col-end-3 row-start-10 row-end-11'
            },
            {
                image: '/img/Ale/Ale-image-13.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-8 sm:row-end-9 sm:h-[300px] col-start-1 col-end-2 row-start-11 row-end-12 h-[200px]'
            },
            {
                image: '/img/Ale/Ale-image-16.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-8 sm:row-end-9 sm:h-[300px] col-start-2 col-end-3 row-start-11 row-end-12 h-[200px]'
            },
            {
                image: '/img/Ale/Ale-image-17.webp',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-8 sm:row-end-9 sm:h-[300px] col-start-1 col-end-2 row-start-12 row-end-13 h-[200px]'
            }
        ],
        funnyText: [
            'Es que es hombre, por eso miente',
            'Chanfles! ya nimodo',
            'Ya sabía; quería saber si tu sabías',
            'Me siento como pollo rostizado porque nomás doy vueltas.',
        ],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/alex_145e', type: 'instagram'}
        ]
    },
    {
        id: 'Karen',
        name: 'Karen',
        imagePresentation: '/img/Karen/Karen-image-presentation.webp',
        imageSmall: '/img/Karen/Karen-small.webp',
        imagesGalery: [
            {
                image: '/img/Karen/Karen-image-1.webp',
                isVertical: false,
                class: 'sm:row-start-1 sm:row-end-3 sm:h-[600px] sm:col-start-1 sm:col-end-2 row-start-1 row-end-3 col-start-1 col-end-2 h-[400px]',
            },
            {
                image: '/img/Karen/Karen-image-2.webp',
                isVertical: false,
                class: 'sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3 sm:h-[250px] col-start-2 col-end-3 h-[200px]',
            },
            {
                image: '/img/Karen/Karen-image-8.webp',
                isVertical: false,
                class: 'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-4 sm:h-[300px] row-start-3 row-end-4 h-[200px] col-start-1 col-end-2',
            },
            {
                image: '/img/Karen/Karen-image-4.webp',
                isVertical: false,
                class: 'sm:row-start-2 sm:row-end-3 sm:col-start-3 sm:col-end-4 sm:h-[250px] col-start-2 col-end-3 h-[200px] row-start-3 row-end-4',
            },
            {
                image: '/img/Karen/Karen-image-5.webp',
                isVertical: false,
                class: 'sm:row-start-2 sm:row-end-3 sm:col-start-3 sm:col-end-4 sm:h-[250px] col-start-2 col-end-3 h-[200px] row-start-3 row-end-4',
            },
            {
                image: '/img/Karen/Karen-image-3.webp',
                isVertical: false,
                class: 'sm:col-start-3 sm:col-end-3 sm:row-start-4 sm:h-[300px]',
            },
            {
                image: '/img/Karen/Karen-image-7.webp',
                isVertical: false,
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-4 sm:h-[300px]',
            },
            {
                image: '/img/Karen/Karen-image-6.webp',
                isVertical: false,
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:h-[300px]',
            },
        ],
        funnyText: [
            'MangoLOVER🥭', 
            'Me equivoque de carrera'
        ],
    },
    /*{
        id: 'Janet',
        name: 'Janet',
        imagePresentation: '/img/Janet/Janet-image-presentation.webp',
        imageSmall: '/img/Janet/Janet-small.png',
        imagesGalery: [
            { image: '/img/Janet/Janet-image-1.web', isVertical: false },
            { image: '/img/Janet/Janet-image-2.webp', isVertical: false },
            { image: '/img/Janet/Janet-image-3.web', isVertical: false },
        ],
        funnyText: [''],
    },*/

    /*{
        id: 'Yanet',
        name: 'Yanet',
        imagePresentation: '/img/Yanet/Yanet-image-presentation.webp',
        imageSmall: '/img/Yanet/Yanet-small.png',
        imagesGalery: [
            { image: '/img/Yanet/Yanet-image-1.web', isVertical: false },
            { image: '/img/Yanet/Yanet-image-2.webp', isVertical: false },
            { image: '/img/Yanet/Yanet-image-3.web', isVertical: false },
        ],
        funnyText: [''],
    },*/
]
