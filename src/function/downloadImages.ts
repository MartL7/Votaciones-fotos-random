import { toastAlert } from '@/function/alerts'

interface Props {
  $buttonDownload: HTMLButtonElement
  $containerImages: NodeListOf<HTMLElement>
}

export function downloadImages ({ $buttonDownload, $containerImages }: Props): void {
  if (!$buttonDownload || !$containerImages) return

  const $svgIcon = $buttonDownload.querySelector('svg') as SVGSVGElement

  $buttonDownload.disabled = true
  $svgIcon.classList.add('opacity-30')

  toastAlert(
    { title: 'Descargando', type: 'info', icon: true, dismissible: false, location: 'bottom-center' }
  )

  $containerImages.forEach(($image) => {
    const $imageToDownload = $image.querySelector('img') as HTMLImageElement
    const { src, alt } = $imageToDownload

    const a = document.createElement('a')
    a.href = src
    a.download = alt

    a.click()
  })
}