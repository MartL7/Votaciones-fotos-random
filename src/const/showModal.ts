import { $, $$ } from '@/lib/dom-selector'

export const showModal = () => {
  const $imageContainer = $$('.image-container') as NodeListOf<HTMLImageElement>
  const $imageClip = $('#image-clip') as HTMLImageElement
  const $imageDialog = $('.clip-dialog') as HTMLDialogElement
  const $closeButton = $('#close-dialog') as HTMLButtonElement

  if (!$imageContainer || !$imageClip || !$imageDialog || !$closeButton) return

  $imageDialog.addEventListener('close', () => {
    $imageClip.src = ''
  })

  $imageContainer.forEach((image) => {
    const { url } = image.dataset

    image.addEventListener('click', () => {
      const name = url.split('/').at(-2)

      $imageClip.classList.remove('animate-zoom-out')
      $imageClip.classList.add('animate-zoom-in')
      $imageClip.alt = `Imagen de la galeria de ${name}`
      $imageClip.src = url
      $imageDialog.showModal()

      $closeButton.onclick = () => {
        $imageClip.classList.remove('animate-zoom-in')
        $imageClip.classList.add('animate-zoom-out')

        $imageClip.addEventListener('animationend', () => {
          $imageDialog.close()
        }, { once: true })
      }

      $imageDialog.onclick = (event) => {
        if (event.target === $imageDialog) {
          $imageClip.classList.remove('animate-zoom-in')
          $imageClip.classList.add('animate-zoom-out')

          $imageClip.addEventListener('animationend', () => {
            $imageDialog.close()
          }, { once: true })
        }
      }
    })
  })
}