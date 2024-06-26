//* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const Boton = document.createElement('button')
Boton.className('#btnToClick')
Boton.addEventListener('click', function (event) {
  console.log(event)
})
document.body.appendChild(Boton)

//* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input = document.querySelector('.focus')
input.addEventListener('focus', function (event) {
  console.log(event.target.value)
})

//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputt = document.querySelector('.value')
inputt.addEventListener('input', (event) => console.log(event.target.value))
