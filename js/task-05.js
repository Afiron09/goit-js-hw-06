const input = document.querySelector('#name-input')
const spanOutput = document.querySelector('#name-output')
input.addEventListener('input', onInput)
console.dir(input);
function onInput(evt) { 
    
    if (!input.value) { 
        return spanOutput.textContent = 'Anonymous'
    }
    return spanOutput.textContent = input.value
}


