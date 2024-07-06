interface ShipsCharacters {
  id: string
  ships: string[]
}

export const shipsForCharacters: ShipsCharacters[] = [
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
  },
  {
    id: 'Emmanuel',
    ships: ['Marlen']
  },
  {
    id: 'Ale',
    ships: ['Elvin', 'Antonio', 'Emmanuel', 'Damian']
  },
  {
    id: 'Are',
    ships: ['Geovas']
  }
]