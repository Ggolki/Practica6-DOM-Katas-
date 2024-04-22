//* 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const group = document.createElement('ul')

for (let i = 0; i < countries.length; i++) {
  const list = document.createElement('li')
  list.textContent = countries[i]
  group.appendChild(list)
}

document.body.appendChild(group)

//* 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const pupdate = document.querySelectorAll('.fn-remove-me.')

pupdate.forEach((update) => {
  update.remove()
})

//* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const divv = document.querySelector("[data-function='printHere']")
const groupp = document.createElement('ul')

for (let i = 0; i < cars.length; i++) {
  const lists = document.createElement('li')
  lists.textContent = cars[i]
  groupp.appendChild(lists)
}
divv.appendChild(groupp)

//* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriess = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
for (const country of countriess) {
  const serdivs = document.createElement('div')
  const texh = document.createElement('h4')
  texh.textContent = country.title

  const seccionimage = document.createElement('img')
  seccionimage.src = country.imgUrl

  document.body.appendChild(serdivs)
  serdivs.appendChild(texh)
  serdivs.appendChild(seccionimage)
}

//* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const deletebutton = document.createElement('button')

deletebutton.addEventListener('click', function () {
  const serdivs = document.querySelectorAll('div')
  if (serdivs.length > 0) {
    document.body.removeChild(serdivs[serdivs.length - 1])
  }
})

document.body.appendChild(deletebutton)

//* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const serdivs = document.querySelectorAll('div')

serdivs.forEach((serdiv) => {
  const megabutton = document.createElement('button')
  megabutton.textContent = 'Eliminar!'
  megabutton.addEventListener('click', function () {
    serdiv.remove()
  })
  serdiv.appendChild(megabutton)
})
