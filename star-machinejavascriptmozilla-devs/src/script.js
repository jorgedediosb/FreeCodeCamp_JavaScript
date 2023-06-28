const btn = document.querySelector('button');
const text = document.querySelector('p');
// Se integra el JS en el html con document.querySelector('p') para que se introduzca en el párrafo (p).

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === 'Star Machine') {
    btn.textContent = 'Stop Machine';
    text.textContent ='The Machine has started';
  } else {
    btn.textContent = 'Star machine';
    text.textContent = "The machine is stopped";
  }
}