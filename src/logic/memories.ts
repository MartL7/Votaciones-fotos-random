interface Memories_1 {
    id_group: string
    members: string[]
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
        members: ['Damian', 'Geovas', 'Elvin', 'Antonio', 'Yahir', 'Karen', 'Ulises', 'CruCru'],
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
        id_group: 'second-group',
        members: ['Emmanuel', 'Ale', 'Janet', 'Yanet', 'Mike'],
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
    }
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
