import { $, $$ } from '@/lib/dom-selector'
import Hammer from 'hammerjs'

const closeDialog = ($imageClip: HTMLImageElement, $imageDialog: HTMLDialogElement) => {
  $imageClip.classList.remove('animate-zoom-in')
  $imageClip.classList.add('animate-zoom-out')

  $imageClip.addEventListener('animationend', () => {
    $imageDialog.close()
  }, { once: true })
}

const showImage = ($imageClip: HTMLImageElement, url: string) => {
  const name = url.split('/').at(-2)

  // animate-slide-in-right animate-slide-in-left
  $imageClip.classList.remove('animate-zoom-out')
  $imageClip.classList.add('animate-zoom-in')
  
  $imageClip.alt = `Imagen de la galeria de ${name}`
  $imageClip.src = url
}

export const showModal = () => {
  const $imageContainer = $$('.image-container') as NodeListOf<HTMLImageElement>
  const $imageClip = $('#image-clip') as HTMLImageElement
  const $imageDialog = $('.clip-dialog') as HTMLDialogElement
  const $closeButton = $('#close-dialog') as HTMLButtonElement

  if (!$imageContainer || !$imageClip || !$imageDialog || !$closeButton) return

  const imageUrls = Array.from($imageContainer).map(image => image.dataset.url)
  let currentIndex = -1

  $imageDialog.addEventListener('close', () => {
    $imageClip.src = ''
    document.removeEventListener('keydown', handleKeyDown)
    hammer.destroy()
  })

  $imageContainer.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentIndex = index
      showImage($imageClip, imageUrls[currentIndex])
      $imageDialog.showModal()
      document.addEventListener('keydown', handleKeyDown)
      addSwipeEvents()

    })
  })

  $closeButton.onclick = () => closeDialog($imageClip, $imageDialog)
  $imageClip.onclick = () => closeDialog($imageClip, $imageDialog)

  $imageDialog.onclick = (event) => {
    if (event.target === $imageDialog) {
      closeDialog($imageClip, $imageDialog)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event
    if (key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % imageUrls.length
      showImage($imageClip, imageUrls[currentIndex])

    } else if (key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length
      showImage($imageClip, imageUrls[currentIndex])
    }
  }
  
  let hammer: HammerManager

  const addSwipeEvents = () => {
    hammer = new Hammer($imageClip)

    hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL })

    hammer.on('swipeleft', () => {
      currentIndex = (currentIndex + 1) % imageUrls.length
      showImage($imageClip, imageUrls[currentIndex])
    })

    hammer.on('swiperight', () => {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length
      showImage($imageClip, imageUrls[currentIndex])
    })
  }
}
