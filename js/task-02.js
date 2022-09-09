const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingridientsElementsArray = ingredients.map( ingr => {
  
    const ingredientElement = document.createElement('li');
      ingredientElement.textContent = ingr;
    ingredientElement.classList.add('item');
  return ingredientElement;
});


ingredientsList.append(...ingridientsElementsArray);
console.log(ingredientsList);

