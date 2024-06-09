import { $, $$ } from '@/lib/dom-selector'
interface ShipsCharacters {
  id: string
  ships: string[]
}

const shipsForCharacters: ShipsCharacters[] = [
  {
    id: 'Elvin',
    ships: ['Ale', 'Janet']
  },
  {
    id: 'Geovas',
    ships: ['Leslie', 'Are']
  },
  {
    id: 'Damian',
    ships: ['Karen']
  }
]

export function showShip({ id }: { id: string }) {

  shipsForCharacters.forEach((ship) => {

    const { id: idShip, ships } = ship

    const $images = ships.map((ship) => $(`#character-${ship}`) as HTMLImageElement)
    
    if (idShip === id) $images.forEach((image) => image.classList.add('ship'))
    else $images.forEach((image) => image.classList.remove('ship'))
  })
}