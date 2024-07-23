import { $, $$ } from '@/lib/dom-selector'
import { fallenCharacter } from '@/const/isFallenCharacter'
import { saveLocalStorage, removeLocalStorage, getLocalStorage } from '@/const/localStorage'
import { showShip } from '@/const/showShip'

function addClassName ($element: HTMLSpanElement, colorsToAdd: string[]) {
  colorsToAdd.forEach((color) => {
    $element.classList.add(
      `text-${color}-300/90`,
      `shadow-text-${color}`
    )
  })
}

function deleteClassName ($element: HTMLSpanElement, colorsToDelete: string[]) {
  colorsToDelete.forEach((color) => {
    $element.classList.remove(
      `text-${color}-300/90`,
      `shadow-text-${color}`
    )
  })
}

export function changueColorText (id: string, genre: string, $nameText: HTMLSpanElement) {
  if (!genre) {
    deleteClassName($nameText, ['blue', 'purple', 'green', 'yellow'])

    $nameText.classList.add('shadow-text-purple')
    return
  }

  if (id === 'Damian' || id === 'Yahir') {
    deleteClassName($nameText, ['blue', 'purple', 'yellow'])
    addClassName($nameText, ['green'])

    return
  }

  if (id === 'Elvin') {
    deleteClassName($nameText, ['blue', 'purple'])
    addClassName($nameText, ['yellow'])

    return
  }

  if (genre.toLowerCase() !== 'hombre') {
    deleteClassName($nameText, ['blue', 'green', 'yellow'])
    addClassName($nameText, ['purple'])
  } else {
    deleteClassName($nameText, ['purple', 'green', 'yellow'])
    addClassName($nameText, ['blue'])
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

        changueColorText(id, genre, $nameText)

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

        changueColorText(id, genre, $nameText)

        $nameText.textContent = lastName
    }
  })
}