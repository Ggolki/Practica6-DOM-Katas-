//* Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const colocation = document.querySelector("[data-function='printHere']")
const group = document.createElement('ul')

for (let i = 0; i < places.length; i++) {
  const listado = document.createElement('li')
  listado.textContent = places[i]
  group.appendChild(listado)
}

colocation.appendChild(group)
