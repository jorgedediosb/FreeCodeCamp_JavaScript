const para = document.querySelector('p');
// Se integra el JS en el html con document.querySelector('p') para que se introduzca en el párrafo (p).

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}