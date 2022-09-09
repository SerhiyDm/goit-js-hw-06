const listOfCategories = document.querySelector('#categories');

console.log(`Number of categories: ${listOfCategories.children.length}`);

const itemsOfCategories = listOfCategories.querySelectorAll('.item') 

itemsOfCategories.forEach((el) => {

    console.log(`Category: ${el.firstElementChild.textContent}`);

    console.log(`Elements: ${el.lastElementChild.children.length}`);

})
  