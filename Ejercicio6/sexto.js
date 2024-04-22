//* Elimina el elemento que tenga la clase .fn-remove-me.

const eliminaciones = document.querySelectorAll('.fn-remove-me')

for (const eliminacion of eliminaciones) {
  eliminacion.remove()
}
