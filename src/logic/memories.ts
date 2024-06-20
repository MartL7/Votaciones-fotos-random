interface Memories_1 {
    id_group: string
    members: Members[]
    imagesGalery: Images[]
}

export interface Images {
    id: string
    image: string
    className: string
}

export interface Members {
    name: string
    isPerfil: boolean
}

export const memories_1: Memories_1[] = [
    {
        id_group: 'papus',
        members: [
            { name: 'Damian', isPerfil: true },
            { name: 'Geovas', isPerfil: true },
            { name: 'Elvin', isPerfil: true },
            { name: 'Antonio', isPerfil: true },
            { name: 'Yahir', isPerfil: true },
            { name: 'Karen', isPerfil: true },
            { name: 'Ulises', isPerfil: true },
            { name: 'CruCru', isPerfil: true }
        ],
        imagesGalery: [
            {
                id: 'memorie-papus-1',
                image: '/img/Memories/Memorie-papus-1.avif',
                className: 'md:col-start-1 md:col-end-3 md:h-[300px] h-[250px]',
            },
            {
                id: 'memorie-papus-2',
                image: '/img/Memories/Memorie-papus-2.avif',
                className: 'md:col-start-3 md:col-end-4 md:h-[300px] h-[250px]',
            },
            {
                id: 'memorie-papus-3',
                image: '/img/Memories/Memorie-papus-3.avif',
                className: 'md:col-start-4 md:col-end-5 md:h-[300px] h-[250px]',
            },
            {
                id: 'memorie-papus-4',
                image: '/img/Memories/Memorie-papus-4.avif',
                className: 'md:col-start-1 md:col-end-3 md:h-[300px]',
            },
            {
                id: 'memorie-papus-5',
                image: '/img/Memories/Memorie-papus-5.avif',
                className: 'md:col-start-3 md:col-end-5 md:h-[300px]',
            },
        ],
    },
    {
        id_group: 'Marthas Temporada 6',
        members: [
            { name: 'Emmanuel', isPerfil: true },
            { name: 'Ale', isPerfil: true },
            { name: 'Janet', isPerfil: true },
            { name: 'Yanet', isPerfil: true },
            { name: 'Mike', isPerfil: true }
        ],
        imagesGalery: [
            {
                id: 'memorie-second-group-1',
                image: '/img/Memories/Memorie-second-group-1.webp',
                className : 'sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:h-[250px] row-start-1 row-end-2 col-start-2 col-end-3'
            }, 
            {
                id: 'memorie-second-group-2',
                image: '/img/Memories/Memorie-second-group-4.webp',
                className : 'sm:col-start-3 sm:col-end-5 sm:row-start-1 sm:row-end-2 sm:h-[250px]'
            },
            {
                id: 'memorie-second-group-3',
                image: '/img/Memories/Memorie-second-group-3.webp',
                className : 'sm:col-start-4 sm:col-end-5 sm:row-start-2 sm:row-end-3 sm:h-[300px] col-start-1 col-end-2 row-start-1 row-end-3 h-[350px]'
            },
            {
                id: 'memorie-second-group-4',
                image: '/img/Memories/Memorie-second-group-5.webp',
                className : 'sm:col-start-1 sm:col-end-4 sm:row-start-2 sm:row-end-3 sm:h-[300px] sm:block hidden'
            },
            {
                id: 'memorie-second-group-5',
                image: '/img/Memories/Memorie-second-group-2.webp',
                className: 'sm:hidden col-start-2 col-end-3 row-start-2 row-end-4 h-[350px]'
            }
        ]
    },
    {
        id_group: 'pusey',
        members: [
            { name : 'Leslie', isPerfil: true },
            { name : 'Are', isPerfil: true },
            { name : 'Camila', isPerfil: false },
            { name : 'Lupita', isPerfil: true },
            { name : 'Lizzu', isPerfil: false }
        ],
        imagesGalery: [
            {
                id: 'memorie-third-group-1',
                image: '/img/Memories/Memorie-third-group-1.webp',
                className: 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:h-[300px]',
            },
            {
                id: 'memorie-third-group-2',
                image: '/img/Memories/Memorie-third-group-2.webp',
                className: 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:h-[300px]',
            },
            {
                id: 'memorie-third-group-3',
                image: '/img/Memories/Memorie-third-group-4.webp',
                className: 'md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2 md:h-[300px]  row-start-3 row-end-4 col-start-2 col-end-3',
            },
            {
                id: 'memorie-third-group-4',
                image: '/img/Memories/Memorie-third-group-5.webp',
                className: 'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:h-[300px]',
            },
            {
                id: 'memorie-third-group-5',
                image: '/img/Memories/Memorie-third-group-6.webp',
                className: 'md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-3 md:h-[300px]',
            },
            {
                id: 'memorie-third-group-6',
                image: '/img/Memories/Memorie-third-group-7.webp',
                className: 'md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-3 md:h-[300px]',
            },
        ],
    }
]