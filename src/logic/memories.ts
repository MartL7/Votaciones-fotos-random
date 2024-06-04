interface Memories_1 {
    id_group: string
    imagesGalery: Images[]
}

export interface Images {
    id: string
    image: string
    className: string
}

interface Member {
    id: string
    class_member: string
}

export const memories_1: Memories_1[] = [
    {
        id_group: 'papus',
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
]

export const member: Member[] = [
    {
        id: 'Damian',
        class_member: 'papus',
    },
    {
        id: 'Geovas',
        class_member: 'papus',
    },
    {
        id: 'Elvin',
        class_member: 'papus',
    },
    {
        id: 'Antonio',
        class_member: 'papus',
    },
    {
        id: 'Yahir',
        class_member: 'papus',
    },
    {
        id: 'Karen',
        class_member: 'papus',
    },
    {
        id: 'Ulises',
        class_member: 'papus',
    },
    {
        id: 'CruCru',
        class_member: 'papus',
    },
]
