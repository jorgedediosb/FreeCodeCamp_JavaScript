const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
  const name = prompt('¿Cuál es tu nombre?');
  alert(`Hola ${name} encantado de conocerte!`);
  headingA.textContent = `${name}, ahora formas parte del equipo!`;
}