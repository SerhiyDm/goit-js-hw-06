function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsUI = document.querySelector('#controls');

 const refs = {
input: controlsUI.querySelector('input'),
buttonCreate: controlsUI.querySelector('[data-create]'),
buttonDestroy: controlsUI.querySelector('[data-destroy]'),
mainBox: document.querySelector('#boxes'),
 }

 refs.buttonCreate.addEventListener('click', handleCreateClick);
 refs.buttonDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const elArr = [];
  let boxSize = 30;
   for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${boxSize}px`;
    element.style.height = `${boxSize}px`;
boxSize += 10;
elArr.push(element);
}
return refs.mainBox.append(...elArr);
 }

 function destroyBoxes() {
  refs.mainBox.innerHTML = '';
 }
 
 function handleCreateClick() {
  const inputValue = refs.input.value;
  createBoxes(inputValue);
}
