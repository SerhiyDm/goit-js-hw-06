const inputField = document.querySelector('#validation-input');
const dataLength = inputField.dataset.length;
inputField.addEventListener('blur', isValidQuantityOfSymbols);

function isValidQuantityOfSymbols(events) {
    
    const inputValue = events.currentTarget.value;
     if (inputValue.split('').length === Number(dataLength)) {

  inputField.classList.add('valid');
 inputField.classList.remove('invalid');
 
} else inputField.classList.add('invalid');

}