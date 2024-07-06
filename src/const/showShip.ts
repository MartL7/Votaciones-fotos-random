import { $ } from '@/lib/dom-selector'
import { shipsForCharacters } from '@/logic/shipsCharacters'

export function showShip({ id }: { id: string }) {

  shipsForCharacters.forEach((ship) => {

    const { id: idShip, ships } = ship

    const $images = ships.map((ship) => $(`#character-${ship}`) as HTMLImageElement)
    
    if (idShip === id) $images.forEach((image) => image.classList.add('ship'))
    else $images.forEach((image) => image.classList.remove('ship'))
  })
}