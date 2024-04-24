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

      $imageClip.alt = `Imagen de la galeria de ${name}`
      $imageClip.src = url
      $imageDialog.showModal()

      $closeButton.onclick = () => $imageDialog.close()

      $imageDialog.onclick = (event) => {
        if (event.target === $imageDialog) $imageDialog.close()
      }
    })
  })
}