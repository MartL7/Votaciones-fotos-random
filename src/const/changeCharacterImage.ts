import { $, $$ } from '@/lib/dom-selector'
import { fallenCharacter } from '@/const/isFallenCharacter'
import { saveLocalStorage, removeLocalStorage, getLocalStorage } from '@/const/localStorage'
import { showShip } from '@/const/showShip'

export function changueColorText (genre: string, $nameText: HTMLSpanElement) {
  if (!genre) {
    $nameText.classList.remove('text-blue-300/90')
    $nameText.classList.remove('shadow-text-blue')

    $nameText.classList.add('shadow-text-purple')
    return
  }

  if (genre.toLowerCase() !== 'hombre') {
    $nameText.classList.remove('text-blue-300/90')
    $nameText.classList.remove('shadow-text-blue')

    $nameText.classList.add('text-purple-300/90')
    $nameText.classList.add('shadow-text-purple')
  } else {
    $nameText.classList.remove('text-purple-300/90')
    $nameText.classList.remove('shadow-text-purple')

    $nameText.classList.add('text-blue-300/90')
    $nameText.classList.add('shadow-text-blue')
  }
}

export function changeCharacterImage () {
  const $imageLink = $$('.character-link') as globalThis.NodeListOf<HTMLAnchorElement>
  const $characterPhoto = $('#image-presentation') as HTMLImageElement
  const $nameText = $('#name-text-big') as HTMLSpanElement
  const defaultImage = `/img/Ulises/Ulises-image-presentation.webp`
  let $lastActiveImage: HTMLImageElement | null = null

  $imageLink.forEach(($image) => {
      const { id, genre } = $image.dataset ?? null

      const { folder } = $image.dataset ?? null

      const $characterSmallImage = $$(`#character-${id}`) as globalThis.NodeListOf<HTMLImageElement>

      const characterSrc = folder ? `/img/${folder}/${id}-image-presentation.webp` : `/img/${id}/${id}-image-presentation.webp`

      const isFallenCharacter = $image.classList.contains('fallen-character')

      $image.addEventListener('mouseenter', () => {
        $nameText.textContent = id

        showShip({ id })

        if (getLocalStorage({ key: 'lastHoveredImageId' })) {
            const lastHoveredImageId = getLocalStorage({ key: 'lastHoveredImageId' })
            const $lastActiveImage = $$(`#character-${lastHoveredImageId}`) as globalThis.NodeListOf<HTMLImageElement>
            $lastActiveImage.forEach((image) => image.classList.remove('active'))
        } 

        removeLocalStorage({ key: 'lastHoveredImageId' })
        if ($lastActiveImage) {
            $lastActiveImage.classList.remove('active')
        }

        $characterPhoto.src = characterSrc ?? defaultImage
        $characterPhoto.alt = `Imagen de ${id}`

        fallenCharacter({ isFallenCharacter, $characterPhoto, $nameText })

        changueColorText(genre, $nameText)

        $characterPhoto.setAttribute('transition:name', `Character-${id}`)
        $characterSmallImage.forEach((image) => image.classList.add('active'))
        $lastActiveImage = $characterSmallImage[0]

        saveLocalStorage({ key: 'lastHoveredImageId', value: id })
        saveLocalStorage({ key: 'lastName', value: id })
    })

    const lastHoveredImageId = getLocalStorage({ key: 'lastHoveredImageId' })
    const lastName = getLocalStorage({ key: 'lastName' })
    if (lastHoveredImageId === id) {
        $characterPhoto.src = characterSrc ?? defaultImage
        $characterPhoto.setAttribute('transition:name', `Character-${id}`)
        $characterSmallImage.forEach((image) => image.classList.add('active'))
        
        fallenCharacter({ isFallenCharacter, $characterPhoto, $nameText })

        $nameText.textContent = lastName
    }
  })
}