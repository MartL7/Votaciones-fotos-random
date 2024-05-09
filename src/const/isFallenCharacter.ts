interface Props {
  isFallenCharacter?: boolean
  $characterPhoto?: HTMLImageElement
  $nameText?: HTMLSpanElement
  $characterSmallImage?: NodeListOf<HTMLImageElement>
}

export function fallenCharacter({ isFallenCharacter, $characterPhoto, $nameText }: Props): void {
  if (!isFallenCharacter) {
      $characterPhoto.style.filter = 'none'
      $nameText.classList.remove('fallen-character')
      $nameText.classList.add('text-blue-300/90')
  } else {
      $characterPhoto.style.filter = 'grayscale(100%)'
      $nameText.classList.add('fallen-character')
      $nameText.classList.remove('text-blue-300/90')
  }
}