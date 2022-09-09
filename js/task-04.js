let counterValue = 0;
const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    valueUI:document.querySelector('#value'),
};
console.log(refs.valueUI);
refs.decrement.addEventListener('click', handleClickLeftButton);
refs.increment.addEventListener('click', handleClickRightButton);

function handleClickLeftButton() {
    counterValue -= 1;
    refs.valueUI.textContent = counterValue;
}

function handleClickRightButton() {
    counterValue += 1;
    refs.valueUI.textContent = counterValue;
}



