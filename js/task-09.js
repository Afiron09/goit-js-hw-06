function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const span = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', onBtn);

function onBtn(event) { 
  const randomColor = getRandomHexColor();
  span.textContent = randomColor
  body.setAttribute('style', `background-color: ${randomColor}`)
}
