const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createLi = ingredients.map(ingredient => { 
  const elemLi = document.createElement('li');
  elemLi.textContent = ingredient
  elemLi.classList = 'item'
  return elemLi
})
const list = document.querySelector('#ingredients')
list.append(...createLi)