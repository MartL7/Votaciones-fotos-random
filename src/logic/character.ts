import type { Character } from '@/types/Character'

export const Characters: Character[] = [
    {
        id: 'Ulises',
        name: 'El Prota',
        birthDay: '10/11/2006',
        imagePresentation: '/img/Ulises/Ulises-image-presentation.webp',
        imageSmall: '/img/Ulises/Ulises-small.webp',
        imagesGalery: [
            {
                image: '/img/Ulises/Ulises-image-1.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-[400px]',
            },
            {
                image: '/img/Ulises/Ulises-image-2.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[300px]',
            },
            {
                image: '/img/Ulises/Ulises-image-3.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[400px]',
            },
            {
                image: '/img/Ulises/Ulises-image-4.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4 sm:h-[400px]',
            },
            {
                image: '/img/Ulises/Ulises-image-5.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 sm:h-[300px]',
            },
            {
                image: '/img/Ulises/Ulises-image-1.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4 sm:h-[300px]',
            },
        ],
        funnyText: ['El guión de mi lado'],
    },
    {
        id: 'Janet',
        name: 'Jann',
        birthDay: '20/03/2006',
        imagePresentation: '/img/Janet/Janet-image-presentation.webp',
        imageSmall: '/img/Janet/Janet-small.webp',
        imagesGalery: [
            {
                image: '/img/Janet/Janet-image-1.webp',
                class: 'sm:row-start-1 sm:row-end-3 sm:h-[600px] sm:col-start-1 sm:col-end-2 row-start-1 row-end-3 col-start-1 col-end-2 h-[400px]',
            },
            {
                image: '/img/Janet/Janet-image-2.webp',
                class: 'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3 sm:h-[300px] col-start-2 col-end-3 h-[200px] row-start-1 row-end-2',
            },
            {
                image: '/img/Janet/Janet-image-3.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-2 col-end-3 row-start-2 row-end-3 h-[180px]',
            },
            {
                image: '/img/Janet/Janet-image-4.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3 sm:h-[260px] col-start-2 col-end-3 row-start-3 row-end-4 h-[200px]',
            },
            {
                image: '/img/Janet/Janet-image-5.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-[260px] col-start-1 col-end-2 row-start-3 row-end-4 h-[200px]',
            },
            {
                image: '/img/Janet/Janet-image-6.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-1 col-end-2 h-[200px]',
            },
        ],
        funnyText: ['Este Compañero', 'no tiene', 'frases aún'],
    },
    {
        id: 'Marlen',
        name: 'Mar',
        birthDay: '21/12/2006',
        imagePresentation: '/img/Marlen/Marlen-image-presentation.webp',
        imageSmall: '/img/Marlen/Marlen-small.webp',
        imagesGalery: [
            {
                image: '/img/Marlen/Marlen-image-1.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-[600px] col-start-1 col-end-2 row-start-1 row-end-3 h-[400px]',
            },
            {
                image: '/img/Marlen/Marlen-image-2.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-2 col-end-3 h-[200px] row-start-1 row-end-2',
            },
            {
                image: '/img/Marlen/Marlen-image-3.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-2 col-end-3 row-start-2 row-end-4 h-[400px]',
            },
            {
                image: '/img/Marlen/Marlen-image-4.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4 sm:h-[600px] col-start-1 col-end-2 row-start-3 row-end-5 h-[400px]',
            },
            {
                image: '/img/Marlen/Marlen-image-5.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3 sm:h-[260px] col-start-2 col-end-3 row-start-4 row-end-5 h-[180px]',
            },
            {
                image: '/img/Marlen/Marlen-image-6.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-1 col-end-2 h-[200px]',
            },
        ],
        funnyText: ['Este Compañero', 'no tiene', 'frases aún'],
        socials: [
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/ma_rlen7348/',
                type: 'instagram',
            },
            {
                name: 'Facebook',
                link: 'https://www.facebook.com/marleni.rs.3',
                type: 'facebook',
            },
        ],
    },
    {
        id: 'Yanet',
        name: 'Yane',
        birthDay: '25/01/2006',
        imagePresentation: '/img/Yanet/Yanet-image-presentation.webp',
        imageSmall: '/img/Yanet/Yanet-small.webp',
        imagesGalery: [
            {
                image: '/img/Yanet/Yanet-image-1.webp',
                class: 'sm:row-start-1 sm:row-end-3 sm:h-[600px] sm:col-start-1 sm:col-end-2 row-start-1 row-end-3 col-start-1 col-end-2 h-[400px]',
            },
            {
                image: '/img/Yanet/Yanet-image-7.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[260px] col-start-2 col-end-3 row-start-1 row-end-2 h-[200px]',
            },
            {
                image: '/img/Yanet/Yanet-image-3.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:h-[260px] col-start-2 col-end-3 row-start-2 row-end-4 h-[400px]',
            },
            {
                image: '/img/Yanet/Yanet-image-4.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-[300px] col-start-1 col-end-2 row-start-3 row-end-4 h-[200px]',
            },
            {
                image: '/img/Yanet/Yanet-image-5.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3 sm:h-[300px] col-start-1 col-end-2 row-start-4 row-end-6 h-[400px]',
            },
            {
                image: '/img/Yanet/Yanet-image-6.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-2 col-end-3 row-start-4 row-end-5 h-[200px]',
            },
            {
                image: '/img/Yanet/Yanet-image-2.webp',
                class: 'sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-1 col-end-3 h-[300px] row-start-6 row-end-7',
            },
            {
                image: '/img/Yanet/Yanet-image-8.webp',
                class: 'sm:col-start-1 sm:col-end-4 sm:hidden row-start-5 row-end-6 col-start-2 col-end-3 h-[200px]',
            },
        ],
        funnyText: ['Holiiii', 'vete al cuerno'],
    },
    {
        id: 'Geovas',
        name: 'Geovas',
        birthDay: '21/08/2006',
        imagePresentation: '/img/Geovas/Geovas-image-presentation-1.webp',
        imageSmall: '/img/Geovas/Geovas-small.webp',
        imagesGalery: [
            {
                image: '/img/Geovas/Geovas-image-1.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:h-[400px]',
            },
            {
                image: '/img/Geovas/Geovas-image-9.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[400px]',
            },
            {
                image: '/img/Geovas/Geovas-image-6.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:h-[400px]',
            },
            {
                image: '/img/Geovas/Geovas-image-4.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-4 sm:h-[440px]',
            },
            {
                image: '/img/Geovas/Geovas-image-5.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-[200px]',
            },
            {
                image: '/img/Geovas/Geovas-image-7.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 sm:h-[200px]',
            },
            {
                image: '/img/Geovas/Geovas-image-8.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-4 sm:h-[440px]',
            },
        ],
        funnyText: [
            'Te extraño Karlita :(',
            'Ya es noche',
            'X, somos chavos',
            'Te quise ver florecer',
            'Y me diste la espalda',
            'Los voy a extrañar mucho, papus :c',
        ],

        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/geovx_lg/', type: 'instagram' },
            { name: 'GitHub', link: 'https://github.com/MartL7', type: 'github' },
            { name: 'Twitter', link: 'https://twitter.com/GeovasYoSoy', type: 'twitter' },
            { name: 'PortFolio', link: 'https://geovas.vercel.app', type: 'portfolio' },
        ],
    },
    {
        id: 'Mike',
        name: 'Mike',
        birthDay: '27/10/2006',
        imagePresentation: '/img/Mike/Mike-image-presentation.webp',
        imageSmall: '/img/Mike/Mike-small.webp',
        imagesGalery: [
            { image: '/img/Mike/Mike-image-4.webp', class: 'max-h-[300px]' },
            { image: '/img/Mike/Mike-image-1.webp', class: 'max-h-[300px]' },
            {
                image: '/img/Mike/Mike-image-2.avif',
                class: 'sm:col-start-3 sm:col-end-4 col-start-1 col-end-2 sm:max-h[300px] h-[300px]',
            },
            {
                image: '/img/Mike/Mike-image-3.avif',
                class: 'sm:col-start-1 sm:col-end-3 sm:h-[300px] h-[300px]',
            },
            {
                image: '/img/Mike/Mike-image-5.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:h-[300px]',
            },
        ],
        funnyText: ['A poco si tilin'],
    },

    {
        id: 'Karen',
        name: 'Karen',
        birthDay: '04/03/2004',
        imagePresentation: '/img/Karen/Karen-image-presentation.webp',
        imageSmall: '/img/Karen/Karen-small.webp',
        imagesGalery: [
            {
                image: '/img/Karen/Karen-image-1.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-[500px]',
            },
            {
                image: '/img/Karen/Karen-image-9.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[250px]',
            },
            {
                image: '/img/Karen/Karen-image-4.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[500px]',
            },
            {
                image: '/img/Karen/Karen-image-5.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-[210px]',
            },
            {
                image: '/img/Karen/Karen-image-15.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 sm:h-[400px]',
            },
            {
                image: '/img/Karen/Karen-image-7.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 sm:h-[400px]',
            },
            {
                image: '/img/Karen/Karen-image-6.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4 sm:h-[400px]',
            },
            {
                image: '/img/Karen/Karen-image-8.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-4 sm:row-end-5 sm:h-[250px]',
            },
            {
                image: '/img/Karen/Karen-image-10.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5 sm:h-[250px]',
            },
            {
                image: '/img/Karen/Karen-image-11.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-4 sm:row-end-5 sm:h-[250px]',
            },
            {
                image: '/img/Karen/Karen-image-2.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-5 sm:row-end-6 sm:h-[400px]',
            },
            {
                image: '/img/Karen/Karen-image-13.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-5 sm:row-end-6 sm:h-[400px]',
            },
            {
                image: '/img/Karen/Karen-image-14.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-5 sm:row-end-6 sm:h-[400px]',
            },
        ],
        funnyText: [
            'MangoLOVER🥭',
            'Me equivoque de carrera',
            'El que no arriesga, no gana',
            'Mucha escuela, poco Voli',
        ],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/ehiltzcirce', type: 'instagram' },
            { name: 'GitHub', link: 'https://github.com/EhiltzCirce', type: 'github' },
            { name: 'Facebook', link: 'https://www.facebook.com/EhiltzCirce', type: 'facebook' },
        ],
    },

    {
        id: 'CruCru',
        name: 'Andy',
        birthDay: '30/11/2006',
        imagePresentation: '/img/CruCru/CruCru-image-presentation.webp',
        imageSmall: '/img/CruCru/CruCru-small.webp',
        imagesGalery: [
            {
                image: '/img/CruCru/CruCru-image-1.avif',
                class: 'sm:h-[400px]',
            },
            {
                image: '/img/CruCru/CruCru-image-2.avif',
                class: 'sm:h-[400px]',
            },
            {
                image: '/img/CruCru/CruCru-image-3.avif',
                class: 'sm:h-[400px]',
            },
            {
                image: '/img/CruCru/CruCru-image-4.avif',
                class: 'sm:h-[400px]',
            },
        ],
        funnyText: [
            'Clon del Mini Galáctico',
            'No es fácil Martin',
            'Y el Cru Cru',
            'Cru Cru Einstein',
            'La lógica te llevará de A a B, la imaginación te llevará a todas partes',
            'La imaginación es más importante que el conocimiento',
            'El conocimiento es limitado, la imaginación no tiene limites',
        ],
    },

    {
        id: 'Sebastian',
        name: 'Sebas',
        birthDay: '23/01/2005',
        imagePresentation: '/img/Sebastian/Sebastian-image-presentation.webp',
        imageSmall: '/img/Sebastian/Sebastian-small.webp',
        imagesGalery: [
            {
                image: '/img/Sebastian/Sebastian-image-1.webp',
            },
            {
                image: '/img/Sebastian/Sebastian-image-2.webp',
            },
            {
                image: '/img/Sebastian/Sebastian-image-3.webp',
            },
            {
                image: '/img/Sebastian/Sebastian-image-4.webp',
            },
            {
                image: '/img/Sebastian/Sebastian-image-5.webp',
            },
            {
                image: '/img/Sebastian/Sebastian-image-6.webp',
            },
        ],
        funnyText: ['No se trata de ser el mejor', 'Sino dar lo mejor de uno mismo'],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/sebastianmanillagayosso/', type: 'instagram' },
            { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61554718477351', type: 'facebook' },
        ],
    },
    {
        id: 'Ale',
        name: 'Alita',
        birthDay: '09/11/2006',
        imagePresentation: '/img/Ale/Ale-image-presentation.webp',
        imageSmall: '/img/Ale/Ale-small.webp',
        imagesGalery: [
            {
                image: '/img/Ale/Ale-image-1.webp',
                class: 'sm:row-start-1 sm:row-end-3 sm:h-[600px] sm:col-start-1 sm:col-end-2 row-start-1 row-end-3 col-start-1 col-end-2 h-[400px]',
            },
            {
                image: '/img/Ale/Ale-image-2.webp',
                class: 'sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3 sm:h-[250px] col-start-2 col-end-3 h-[200px]',
            },
            {
                image: '/img/Ale/Ale-image-3.webp',
                class: 'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-4 sm:h-[300px] row-start-3 row-end-4 h-[200px] col-start-1 col-end-2',
            },
            {
                image: '/img/Ale/Ale-image-4.webp',
                class: 'sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-2 sm:h-[250px] col-start-2 col-end-3 h-[180px] row-start-2 row-end-3',
            },
            {
                image: '/img/Ale/Ale-image-5.webp',
                class: 'sm:row-start-2 sm:row-end-3 sm:col-start-3 sm:col-end-4 sm:h-[250px] col-start-2 col-end-3 h-[200px] row-start-3 row-end-4',
            },
            {
                image: '/img/Ale/Ale-image-6.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:h-[500px] sm:row-start-3 sm:row-end-5 h-[250px] col-start-1 col-end-2 row-start-4 row-end-5',
            },
            {
                image: '/img/Ale/Ale-image-7.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:h-[250px] sm:row-start-3 sm:row-end-4 row-start-4 row-end-6 h-[400px]',
            },
            {
                image: '/img/Ale/Ale-image-8.webp',
                class: 'sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-2 sm:h-[210px] ',
            },
            {
                image: '/img/Ale/Ale-image-9.webp',
                class: 'sm:row-start-4 sm:row-end-6 sm:col-start-3 sm:col-end-4 sm:h-[400px] h-[200px] col-start-1 col-end-2 row-start-6 row-end-7',
            },
            {
                image: '/img/Ale/Ale-image-10.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-5 sm:row-end-7 sm:h-[400px] h-[200px] col-start-2 col-end-3 row-start-6 row-end-7',
            },
            {
                image: '/img/Ale/Ale-image-11.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-5 sm:row-end-7 sm:h-[400px] col-start-1 col-end-2 row-start-7 row-end-9 h-[300px]',
            },
            {
                image: '/img/Ale/Ale-image-12.webp',
                class: 'sm:row-start-6 sm:row-end-8 sm:col-start-3 sm:col-end-4 sm:h-[400px] col-start-2 col-end-3 row-start-7 row-end-9 h-[300px]',
            },
            {
                image: '/img/Ale/Ale-image-14.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-7 sm:row-end-8 sm:h-[180px] col-start-1 col-end-2 row-start-10 row-end-11',
            },
            {
                image: '/img/Ale/Ale-image-15.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-7 sm:row-end-8 sm:h-[180px] col-start-2 col-end-3 row-start-10 row-end-11',
            },
            {
                image: '/img/Ale/Ale-image-13.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-8 sm:row-end-9 sm:h-[300px] col-start-1 col-end-2 row-start-11 row-end-12 h-[200px]',
            },
            {
                image: '/img/Ale/Ale-image-16.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-8 sm:row-end-9 sm:h-[300px] col-start-2 col-end-3 row-start-11 row-end-12 h-[200px]',
            },
            {
                image: '/img/Ale/Ale-image-17.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-8 sm:row-end-9 sm:h-[300px] col-start-1 col-end-2 row-start-12 row-end-13 h-[200px]',
            },
        ],
        funnyText: [
            'Es que es hombre, por eso miente',
            'Chanfles! ya nimodo',
            'Ya sabía; quería saber si tu sabías',
            'Me siento como pollo rostizado porque nomás doy vueltas.',
        ],
        socials: [{ name: 'Instagram', link: 'https://www.instagram.com/alex_145e', type: 'instagram' }],
    },
    {
        id: 'Elvin',
        name: 'Elvin',
        birthDay: '21/08/2006',
        imagePresentation: '/img/Elvin/Elvin-image-presentation.webp',
        imageSmall: '/img/Elvin/Elvin-small.webp',
        imagesGalery: [
            {
                image: '/img/Elvin/Elvin-image-1.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-[500px] row-start-1 row-end-3 h-[350px]',
            },
            {
                image: '/img/Elvin/Elvin-image-2.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[250px] row-start-1 row-end-2 h-[200px]',
            },
            {
                image: '/img/Elvin/Elvin-image-3.webp',
                class: 'sm:block sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4 sm:h-[500px] hidden',
            },
            {
                image: '/img/Elvin/Elvin-image-4.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[500px] col-start-2 col-end-3 row-start-2 row-end-4 h-[350px]',
            },
            {
                image: '/img/Elvin/Elvin-image-5.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 sm:h-[250px] col-start-1 col-end-2 row-start-3 row-end-4 h-[200px]',
            },
            {
                image: '/img/Elvin/Elvin-image-7.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-5 sm:h-[550px] col-start-1 col-end-2 row-start-4 row-end-6 h-[350px]',
            },
            {
                image: '/img/Elvin/Elvin-image-8.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-5 sm:row-end-6 sm:h-[200px] col-start-2 col-end-3 row-start-4 row-end-6 h-[350px]',
            },
            {
                image: '/img/Elvin/Elvin-image-9.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-4 sm:row-end-6 sm:h-[500px] col-start-1 col-end-2 row-start-6 row-end-8 ',
            },
            {
                image: '/img/Elvin/Elvin-image-10.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-6 sm:h-[500px] row-start-6 row-end-7 h-[200px]',
            },
            {
                image: '/img/Elvin/Elvin-image-6.avif',
                class: 'sm:hidden col-start-2 col-end-3 row-start-7 row-end-8 h-[200px]',
            },
        ],
        funnyText: [
            'Lo hago en 30 segundos!',
            'Miau',
            'El Yahir está cabezón',
            '100 por línea',
            'Antes me decias "mi amor"',
            'Ahora ni me hablas',
            'Tengo una idea',
            'Involucra una silla y una cuerda',
        ],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/mrcat_86/', type: 'instagram' },
            { name: 'GitHub', link: 'https://github.com/Mr-Cat86', type: 'github' },
            { name: 'Twitter', link: 'https://twitter.com/MrCat_86', type: 'twitter' },
        ]
    },
    {
        id: 'Emmanuel',
        name: 'El Morro',
        birthDay: '19/07/2005',
        imagePresentation: '/img/Emmanuel/Emmanuel-image-presentation.webp',
        imageSmall: '/img/Emmanuel/Emmanuel-small.webp',
        imagesGalery: [
            {
                image: '/img/Emmanuel/Emmanuel-image-1.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-2 col-end-3 row-start-1 row-end-3 h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-2.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-[600px] h-[200px] col-start-1 col-end-2 row-start-3 row-end-4',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-3.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-[260px] h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-4.webp',
                class: 'sm:h-[300px] sm:col-start-3 sm:col-end-4 col-start-1 col-end-2 row-start-1 row-end-3 h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-5.webp',
                class: 'sm:h-[260px] sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3 col-start-2 col-end-3 row-start-3 row-end-4 h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-6.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-5 sm:h-[600px] col-start-2 col-end-3 row-start-4 row-end-6 h-[400px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-7.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-1 col-end-2 row-start-5 row-end-7 h-[400px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-8.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5 sm:h-[260px] col-start-2 col-end-3 row-start-6 row-end-8 h-[400px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-10.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-5 sm:h-[600px] col-start-1 col-end-2 row-start-7 row-end-8 h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-12.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-5 sm:row-end-7 sm:h-[600px] col-start-1 col-end-2 h-[350px] row-start-8 row-end-10',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-9.webp',
                class: 'sm:col-start-2 sm:col-end-4 sm:row-start-5 sm:row-end-6 sm:h-[300px] col-start-2 col-end-3 row-start-8 row-end-9',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-11.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-6 sm:row-end-7 sm:h-[260px] col-start-2 col-end-3 row-start-9 row-end-10',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-13.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-6 sm:row-end-7 sm:h-[260px] col-start-1 col-end-2 row-start-10 row-end-11 h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-14.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-7 sm:row-end-8 sm:h-[300px] h-[200px]',
            },
            {
                image: '/img/Emmanuel/Emmanuel-image-15.webp',
                class: 'sm:col-start-1 sm:col-end-3 sm:row-start-7 sm:row-end-8 sm:h-[300px] col-start-1 col-end-3 h-[250px]',
            },
        ],
        funnyText: [
            'Mí chaparrita hermoshita',
            'Si se puede soñar, también se puede lograr',
            'Ahora entiendo cual es mi papel',
            'Nadie muere al intentar olvidar',
            'Ahorita o mañana.',
        ],
        socials: [
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/emmanuelhernandezaranda/',
                type: 'instagram',
            },
            {
                name: 'Facebook',
                link: 'https://www.facebook.com/emmanuel.hernandezaranda',
                type: 'facebook',
            },
        ],
    },

    {
        id: 'Are',
        name: 'Luzcesita',
        birthDay: '05/12/2006',
        imagePresentation: '/img/Are/Are-image-presentation.webp',
        imageSmall: '/img/Are/Are-small.webp',
        imagesGalery: [
            {
                image: '/img/Are/Are-image-1.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:h-[300px] h-[200px] col-start-1 col-end-2',
            },
            {
                image: '/img/Are/Are-image-2.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[500px] col-start-2 col-end-3 row-start-1 row-end-3 h-[320px]',
            },
            {
                image: '/img/Are/Are-image-3.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-1 col-end-2 row-start-2 row-end-4 h-[250px]',
            },
            {
                image: '/img/Are/Are-image-4.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-5 sm:h-[500px] col-start-2 col-end-3 row-start-3 row-end-5 h-[270px]',
            },
            {
                image: '/img/Are/Are-image-5.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4 sm:h-[380px] col-start-1 col-end-2 row-start-4 row-end-6 h-[300px]',
            },
            {
                image: '/img/Are/Are-image-6.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-6 sm:h-[610px] col-start-2 col-end-3 row-start-5 row-end-7 h-[300px]',
            },
            {
                image: '/img/Are/Are-image-7.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-6 sm:h-[400px] col-start-1 col-end-2 row-start-6 row-end-8 h-[300px]',
            },
            {
                image: '/img/Are/Are-image-8.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-5 sm:row-end-6 sm:h-[290px] col-start-2 col-end-3 row-start-7 row-end-9 h-[300px]',
            },
            {
                image: '/img/Are/Are-image-9.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-6 sm:row-end-8 sm:h-[540px] col-start-1 col-end-2 row-start-8 row-end-10 h-[300px]',
            },
            {
                image: '/img/Are/Are-image-10.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-6 sm:row-end-8 sm:h-[540px] col-start-2 col-end-3 row-start-9 row-end-11 h-[300px]',
            },
            {
                image: '/img/Are/Are-image-11.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-6 sm:row-end-7 sm:h-[250px] col-start-1 col-end-2 row-start-12 row-end-13 h-[150px]',
            },
            {
                image: '/img/Are/Are-image-12.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-7 sm:row-end-8 sm:h-[250px] col-start-1 col-end-2 row-start-10 row-end-12 h-[300px]',
            },
            {
                image: '/img/Are/Are-image-13.webp',
                class: 'sm:block sm:col-start-1 sm:col-end-2 sm:row-start-8 sm:row-end-9 sm:h-[300px] h-[320px] hidden'
            },
            {
                image: '/img/Are/Are-image-1.webp',
                class: 'sm:hidden col-start-2 col-end-3 row-start-11 row-end-13 h-[320px]',
            },
        ],
        funnyText: ['Este Compañero', 'no tiene', 'frases aún'],
        socials: [
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/_arelyyyy__/',
                type: 'instagram',
            },
        ],
    },
    {
        id: 'Leslie',
        name: 'Less',
        birthDay: '07/04/2006',
        imagePresentation: '/img/Leslie/Leslie-image-presentation.webp',
        imageSmall: '/img/Leslie/Leslie-small.webp',
        imagesGalery: [
            {
                image: '/img/Leslie/Leslie-image-8.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:h-[200px]',
            },
            {
                image: '/img/Leslie/Leslie-image-6.webp',
                class: 'sm:hidden',
            },
            {
                image: '/img/Leslie/Leslie-image-3.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[200px] col-start-2 col-end-3 row-start-4 row-end-5 h-[150px]',
            },
            {
                image: '/img/Leslie/Leslie-image-1.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[500px] sm:block hidden',
            },
            {
                image: '/img/Leslie/Leslie-image-4.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-4 sm:h-[500px] col-start-1 col-end-2 row-start-1 row-end-3 h-[300px]',
            },
            {
                image: '/img/Leslie/Leslie-image-5.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-[260px] col-start-2 col-end-3 row-start-5 row-end-7 h-[300px]',
            },
            {
                image: '/img/Leslie/Leslie-image-7.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-5 sm:h-[400px] col-start-2 col-end-3 row-start-2 row-end-4 h-[300px]',
            },
            {
                image: '/img/Leslie/Leslie-image-2.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4 sm:h-[200px] col-start-1 col-end-2 row-start-6 row-end-8 h-[280px]',
            },
            {
                image: '/img/Leslie/Leslie-image-12.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-4 sm:row-end-6 sm:h-[400px] h-[200px]',
            },
            {
                image: '/img/Leslie/Leslie-image-10.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-4 sm:row-end-6 sm:h-[400px] col-start-1 col-end-2 row-start-4 row-end-6 h-[300px]'
            },
            {
                image: '/img/Leslie/Leslie-image-9.webp',
                class: 'sm:hidden col-start-2 col-end-3 row-start-7 row-end-9 h-[350px]'
            },
            {
                image: '/img/Leslie/Leslie-image-11.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-5 sm:row-end-6 sm:h-[200px] sm:block hidden'
            },
            {
                image: '/img/Leslie/Leslie-image-14.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:h-[400px] sm:row-start-6 sm:row-end-7 col-start-1 col-end-2 row-start-9 row-end-10 h-[200px]'
            }, 
            {
                image: '/img/Leslie/Leslie-image-15.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:h-[400px] sm:row-start-6 sm:row-end-7 col-start-1 col-end-2 row-start-10 row-end-12 h-[320px]'
            },
            {
                image: '/img/Leslie/Leslie-image-13.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:h-[400px] sm:row-start-6 sm:row-end-7 col-start-2 col-end-3 row-start-9 row-end-11 h-[320px]'
            },
            {
                image: '/img/Leslie/Leslie-image-16.webp',
                class: 'sm:hidden col-start-2 col-end-3 row-start-11 row-end-12 h-[200px]'
            }
        ],
        funnyText: ['JA, lol, que mal'],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/ds.mayy3/', type: 'instagram' },
            { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100087885220850', type: 'facebook' },
        ],
    },
    {
        id: 'Lupita',
        name: 'China',
        birthDay: '19/12/2006',
        imagePresentation: '/img/Lupita/Lupita-image-presentation.webp',
        imageSmall: '/img/Lupita/Lupita-small.webp',
        imagesGalery: [
            {
                image: '/img/Lupita/Lupita-image-1.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-1 col-end-2 h-[200px] row-start-1 row-end-2',
            },
            {
                image: '/img/Lupita/Lupita-image-2.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-2 col-end-3 h-[200px] row-start-1 row-end-2',
            },
            {
                image: '/img/Lupita/Lupita-image-3.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[600px] col-start-1 col-end-2 h-[400px] row-start-2 row-end-4',
            },
            {
                image: '/img/Lupita/Lupita-image-4.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:h-[260px] col-start-2 col-end-3 h-[200px] row-start-2 row-end-3',
            },
            {
                image: '/img/Lupita/Lupita-image-5.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-4 sm:h-[600px] col-start-2 col-end-3 row-start-3 row-end-5 h-[400px]',
            },
            {
                image: '/img/Lupita/Lupita-image-6.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-1 col-end-2 row-start-4 row-end-5 h-[200px]',
            },
            {
                image: '/img/Lupita/Lupita-image-7.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-3 sm:h-[300px] col-start-1 col-end-2 row-start-5 row-end-6 h-[200px]',
            },
            {
                image: '/img/Lupita/Lupita-image-8.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-4 sm:row-end-5 sm:h-[300px] col-start-2 col-end-3 row-start-5 row-end-6 h-[200px]',
            },
            {
                image: '/img/Lupita/Lupita-image-9.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5 sm:h-[300px] col-start-1 col-end-2 row-start-6 row-end-7 h-[200px]',
            },
        ],
        funnyText: ['Quieren Brocoli, Babys?'],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/arias_marofc', type: 'instagram' },
            { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100039046277789', type: 'facebook' },
        ],
    },

    {
        id: 'Damian',
        name: 'Damian',
        birthDay: '09/03/2005',
        imagePresentation: '/img/Damian/Damian-image-presentation.webp',
        imageSmall: '/img/Damian/Damian-small.webp',
        imagesGalery: [
            {
                image: '/img/Damian/Damian-image-1.webp',
                class: 'sm:row-start-1 sm:row-end-3 sm:h-[600px] row-start-1 row-end-3 h-[400px] ',
            },
            {
                image: '/img/Damian/Damian-image-9.webp',
                class: 'sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-4 sm:h-[260px] col-start-2 col-end-3 row-start-1 row-end-2 h-auto',
            },
            {
                image: '/img/Damian/Damian-image-4.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:h-[300px] sm:row-start-2 sm:row-end-3 col-start-2 col-end-3 row-start-2 row-end-3 h-[230px]',
            },
            {
                image: '/img/Damian/Damian-image-3.webp',
                class: 'sm:col-start-3 sm:col-end-4 sm:h-[300px] sm:row-start-2 sm:row-end-3 col-start-1 col-end-2 row-start-3 row-end-4 h-[300px]',
            },
            {
                image: '/img/Damian/Damian-image-5.webp',
                class: 'sm:col-start-3 sm:col-end-3 sm:row-start-3 sm:row-end-5 sm:h-[600px] col-start-2 col-end-3 row-start-3 row-end-5 h-[400px]',
            },
            {
                image: '/img/Damian/Damian-image-6.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-1 col-end-2 row-start-4 row-end-6 h-[300px]',
            },
            {
                image: '/img/Damian/Damian-image-7.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-1 col-end-2 row-start-6 row-end-7 h-[300px]',
            },
            {
                image: '/img/Damian/Damian-image-8.webp',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-4 sm:row-end-5 sm:h-[250px] col-start-2 col-end-3 row-start-6 row-end-7 h-[300px]',
            },
            {
                image: '/img/Damian/Damian-image-10.webp',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5 sm:h-[250px] col-start-2 col-end-3 row-start-5 row-end-6 h-full',
            },
        ],
        funnyText: [
            'Crecer como los Bisteces',
            'A Putazos',
            'BOMBARDEN HUAUCHINANGO',
            'Farmeando Firmas',
            'La mente es un laberinto donde cualquiera puede perderse',
        ],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/c0d3hdz_/', type: 'instagram' },
            { name: 'GitHub', link: 'https://github.com/c0d3hdz', type: 'github' },
            { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100076644204256', type: 'facebook' },
        ],
    },

    {
        id: 'Yahir',
        name: 'Yahir',
        birthDay: '11/11/2006',
        imagePresentation: '/img/Yahir/Yahir-image-presentation.webp',
        imageSmall: '/img/Yahir/Yahir-small.webp',
        imagesGalery: [
            {
                image: '/img/Yahir/Yahir-image-5.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-2 col-end-3 row-start-1 row-end-2 h-[200px]',
            },
            {
                image: '/img/Yahir/Yahir-image-8.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 col-start-1 col-end-2 row-start-1 row-end-3 h-[400px] sm:h-[600px]',
            },
            {
                image: '/img/Yahir/Yahir-image-3.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:h-[300px] h-[180px] col-start-2 col-end-3 row-start-2 row-end-3',
            },
            {
                image: '/img/Yahir/Yahir-image-4.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 sm:h-[260px] col-start-1 col-end-2 row-start-3 row-end-4 h-[200px]',
            },
            {
                image: '/img/Yahir/Yahir-image-7.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3 sm:h-[260px] col-start-2 col-end-3 row-start-3 row-end-4 h-[200px]',
            },
            {
                image: '/img/Yahir/Yahir-image-10.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-5 sm:h-[600px] row-start-4 row-end-5 col-start-1 col-end-2 h-[200px]',
            },
            {
                image: '/img/Yahir/Yahir-image-9.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5 sm:h-[260px] col-start-2 col-end-3 row-start-4 row-end-5 h-[200px]',
            },
            {
                image: '/img/Yahir/Yahir-image-11.avif',
                class: 'sm:col-start-2 sm:col-end-4 sm:row-start-3 sm:row-end-4 sm:h-[300px] col-start-1 col-end-3 row-start-5 row-end-6 h-[250px]',
            },
            {
                image: '/img/Yahir/Yahir-image-3.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-4 sm:row-end-5 sm:h-[260px] sm:block hidden',
            },
        ],
        funnyText: [
            'Que Chinguen a su madre las mujeres!',
            'No confies en las mujeres papu',
            'Jueves de Racismo',
            'Los viejitos solo nos quitan oxígeno',
        ],
        socials: [
            { name: 'Instagram', link: 'https://www.instagram.com/altahir.9083/', type: 'instagram' },
        ]
    },
    {
        id: 'Antonio',
        name: 'Toño',
        birthDay: '23/01/2006',
        imagePresentation: '/img/Antonio/Antonio-image-presentation.webp',
        imageSmall: '/img/Antonio/Antonio-small.webp',
        imagesGalery: [
            {
                image: '/img/Antonio/Antonio-image-1.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3 sm:h-[500px] col-start-1 col-end-2 h-[250px] row-start-1 row-end-2',
            },
            {
                image: '/img/Antonio/Antonio-image-2.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[300px] col-start-2 col-end-2 row-start-1 row-end-2 h-[250px]',
            },
            {
                image: '/img/Antonio/Antonio-image-3.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-3 sm:h-[500px] col-start-1 col-end-2 h-[300px] row-start-2 row-end-3',
            },
            {
                image: '/img/Antonio/Antonio-image-4.avif',
                class: 'sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-5 sm:h-[500px] col-start-2 col-end-3 h-[300px] row-start-2 row-end-3',
            },
            {
                image: '/img/Antonio/Antonio-image-7.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-4 sm:h-[360px] col-span-2 h-[350px] row-start-3 row-end-4',
            },
            {
                image: '/img/Antonio/Antonio-image-6.avif',
                class: 'sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-5 sm:h-[500px] col-start-1 col-end-2 h-[250px] row-start-4 row-end-5',
            },
            {
                image: '/img/Antonio/Antonio-image-5.avif',
                class: 'sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5 sm:h-[300px] col-start-2 col-end-3 h-[250px] row-start-4 row-end-5',
            },
        ],
        funnyText: ['Qué hace la trans?', 'Viva el Diablo', 'Una vez si, dos ya no'],
    },
]
