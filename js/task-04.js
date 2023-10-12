const btnMin = document.querySelector('[data-action="decrement"]')
const btnMax = document.querySelector('[data-action="increment"]')
const spanValue = document.querySelector('#value')
btnMin.addEventListener('click', onClickbtnMin)
btnMax.addEventListener('click', onClickbtnMax)
let counterValue = 0
function onClickbtnMin(evt) { 
spanValue.textContent = counterValue -= 1
}
function onClickbtnMax(evt) { 
spanValue.textContent = counterValue += 1
}



