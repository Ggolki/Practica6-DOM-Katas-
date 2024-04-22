//*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const group = document.createElement('ul')

for (let i = 0; i < albums.length; i++) {
  const list = document.createElement('li')
  list.textContent = albums[i]
  group.appendChild(list)
}

document.body.appendChild(group)
