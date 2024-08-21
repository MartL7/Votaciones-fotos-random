import { $, $$ } from '@/lib/dom-selector'
import { fallenCharacter } from '@/const/isFallenCharacter'
import { saveLocalStorage, removeLocalStorage, getLocalStorage } from '@/const/localStorage'
import { showShip } from '@/const/showShip'
import Swal from 'sweetalert2'

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

export function getBirthDay (birthDay: string): boolean {
  const today = new Date()
  const [day, month, year] = birthDay.split('/')
  const birthDayFormat = new Date(Number(year), Number(month) - 1, Number(day))

  return today.getDate() === birthDayFormat.getDate() && today.getMonth() === birthDayFormat.getMonth()
}

export function changeCharacterImage () {
  const $imageLink = $$('.character-link') as globalThis.NodeListOf<HTMLAnchorElement>
  const $characterPhoto = $('#image-presentation') as HTMLImageElement
  const $nameText = $('#name-text-big') as HTMLSpanElement
  const defaultImage = `/img/Ulises/Ulises-image-presentation.webp`
  let $lastActiveImage: HTMLImageElement | null = null

  $imageLink.forEach(($image) => {
      const { id, genre, birthday } = $image.dataset ?? null
      
      const { folder } = $image.dataset ?? null

      const $characterSmallImage = $$(`#character-${id}`) as globalThis.NodeListOf<HTMLImageElement>

      const characterSrc = folder ? `/img/${folder}/${id}-image-presentation.webp` : `/img/${id}/${id}-image-presentation.webp`

      const isFallenCharacter = $image.classList.contains('fallen-character')

      if(birthday) {
        const isBirthDay = getBirthDay(birthday)

        if (isBirthDay){
          if(id === 'Elvin') localStorage.setItem('nameBirthDay', id)

          const image = `/img/${id}/${id}-small.webp`

          if(!localStorage.getItem('nameBirthDay')) {
            Swal.fire({
              title: 'FESPERAAAAA!!!',
              html: `
                Hoy es el cumpleaños de <span class="text-red-400/90 font-bold">${id}</span>
                <aside class="flex justify-center items-center">
                  <img 
                    src="${image}" 
                    class="size-[120px]" 
                    alt="Imagen del cumpleañero ${id}" 
                    style="mask-image: linear-gradient(black 70%, transparent);"
                  /> 
                </aside>`,
              footer: `<span>Espero que <span class="text-blue-300/90">${id}</span> tenga un <span class="text-yellow-400/90 font-bold">día increíble</span></span>`,
              showCancelButton: true,
              allowOutsideClick: false,
              confirmButtonText: "Celebrar!",
              cancelButtonText: "Cerrar",
              showClass: {
                popup: 'animate-fade-in'
              },
              hideClass: {
                popup: 'animate-fade-out'
              },
              imageUrl: '/recursos/gif-birthday-2.gif',
              imageWidth: 200,
              imageAlt: 'Gif de Feliz Cumpleaños',
            })
          } else {
            const nameBirthDay1 = localStorage.getItem('nameBirthDay') ?? id
            const nameBirthDay2 = 'Geovas'

            const image1 = `/img/${nameBirthDay1}/${nameBirthDay1}-small.webp`
            const image2 = `/img/${nameBirthDay2}/${nameBirthDay2}-small.webp`
  
            Swal.fire({
              title: 'ESPERAAAAA!!!',
              html: `Hoy es el cumpleaños de <span class="text-red-400/90 font-bold">${nameBirthDay1} y de ${nameBirthDay2}</span>
              <aside class="flex justify-center items-center gap-3">
                <img 
                  src="${image1}" 
                  class="size-[120px]" 
                  alt="Imagen del cumpleañero ${nameBirthDay1}" 
                  style="mask-image: linear-gradient(black 70%, transparent);"
                />
                <img 
                  src="${image2}" 
                  class="size-[120px]" 
                  alt="Imagen del cumpleañero ${nameBirthDay2}" 
                  style="mask-image: linear-gradient(black 70%, transparent);"
                />
              </aside>`,
              footer: `<span class="text-black font-bold">DIRIGETE AL PERFIL DE CADA UNO PARA FELICITARLO!!!</span>`,
              showCancelButton: true,
              allowOutsideClick: false,
              showClass: {
                popup: 'animate-fade-in'
              },
              hideClass: {
                popup: 'animate-fade-out'
              },
              imageUrl: '/recursos/gif-birthday-2.gif',
              imageWidth: 200,
              imageAlt: 'Gif de Feliz Cumpleaños',
            })
          }
        } else {
          localStorage.removeItem('nameBirthDay')
          localStorage.removeItem('nameBirthDay2')
        }
      }

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