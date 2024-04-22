//* 1.1 Inserta dinamicamente en un html un div vacio con javascript.
let divN = document.createElement('div')
document.body.appendChild(divN)

//*1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divO = document.createElement('div')
const p = document.createElement('p')

document.body.appendChild(divO)
divO.appendChild(p)

//*1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divv = document.createElement('div')

for (let i = 0; i <= 6; i++) {
  const pp = document.createElement('p')
  divv.appendChild(pp)
}
document.body.appendChild(divv)

//* 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const ptext = document.createElement('p')
ptext.textContent = 'Soy dinámico!.'
document.body.appendChild(ptext)

//* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2text = document.querySelector('.fn-insert-here')
h2text.textContent = 'Wubba Lubba dub dub'

//* 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const grupo = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  const list = document.createElement('li')
  list.textContent = apps[i]
  grupo.appendChild(list)
}
document.body.appendChild(grupo)

//* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let eliminated = document.querySelectorAll('.fn-remove-me')

for (const elimi of eliminated) {
  elimi.remove()
}

//*1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const divnew = document.querySelector('div')
const pnew = document.createElement('p')

pnew.textContent = 'Voy en medio!'

document.body.insertBefore(pnew, divnew[1])

//*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let ndiv = document.querySelectorAll('div.fn-insert-here')

ndiv.forEach((div) => {
  let nwp = document.createElement('p')
  nwp.textContent = 'Voy dentro!'
  div.appendChild(nwp)
})
