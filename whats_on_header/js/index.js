/**
 * Ahora, cuando haces clic en cualquier sitio de la lista, 
 * aparece un cuadro de diálogo que te solicita que introduzcas el texto
 *  para un nuevo elemento de la lista. Cuando pulsas el botón OK,
 *  se añade a la lista el elemento con el texto nuevo.
 *  Cuando haces clic a un elemento de la lista aparece un cuadro de
 *  diálogo que te permite cambiar el texto del elemento.
 */
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}