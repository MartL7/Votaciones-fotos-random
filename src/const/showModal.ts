import { $, $$ } from '@/lib/dom-selector'

const closeDialog = ($imageClip: HTMLImageElement, $imageDialog: HTMLDialogElement) => {
  $imageClip.classList.remove('animate-zoom-in')
  $imageClip.classList.add('animate-zoom-out')

  $imageClip.addEventListener('animationend', () => {
    $imageDialog.close()
  }, { once: true })
}

const showImage = ($imageClip: HTMLImageElement, url: string) => {
  const name = url.split('/').at(-2)

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
    removeTouchEvents()
  })

  $imageContainer.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentIndex = index
      showImage($imageClip, imageUrls[currentIndex])
      $imageDialog.showModal()
      document.addEventListener('keydown', handleKeyDown)
      addTouchEvents()
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
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % imageUrls.length
      showImage($imageClip, imageUrls[currentIndex])

    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length
      showImage($imageClip, imageUrls[currentIndex])
    }
  }
  
  let touchStartX = 0
  let touchEndX = 0

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX = event.touches[0].clientX
  }

  const handleTouchMove = (event: TouchEvent) => {
    touchEndX = event.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 100) {
      currentIndex = (currentIndex + 1) % imageUrls.length
      showImage($imageClip, imageUrls[currentIndex])
    } else if (touchEndX - touchStartX > 100) {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length
      showImage($imageClip, imageUrls[currentIndex])
    }
  }

  const addTouchEvents = () => {
    $imageClip.addEventListener('touchstart', handleTouchStart)
    $imageClip.addEventListener('touchmove', handleTouchMove)
    $imageClip.addEventListener('touchend', handleTouchEnd)
  }

  const removeTouchEvents = () => {
    $imageClip.removeEventListener('touchstart', handleTouchStart)
    $imageClip.removeEventListener('touchmove', handleTouchMove)
    $imageClip.removeEventListener('touchend', handleTouchEnd)
  }
}
