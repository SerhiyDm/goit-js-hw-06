function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const refs = {
  background: document.querySelector('body'),
  button: document.querySelector('.change-color'),
codeColor: document.querySelector('.color'),
};

refs.button.addEventListener('click', handleClick);

function handleClick(event) {
refs.background.style.backgroundColor = `${getRandomHexColor()}`;
refs.codeColor.textContent = getRandomHexColor();
}
console.log((222222222).toString(18));