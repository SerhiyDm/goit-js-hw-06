const form = document.querySelector('.login-form');

form.addEventListener('submit', handlesubmit);

function handlesubmit(event) {
   const  { email, password,} = event.currentTarget.elements;

event.preventDefault();

 if (password.value === '' || email.value === '') {
 return  alert('!!! УСІ ПОЛЯ МАЮТЬ БУТИ ЗАПОВНЕНІ !!!');
 }

 const emailAddress = email.value;
 const passwordValue = password.value;

const userData = {
    Email: emailAddress,
    Password: passwordValue,
}

console.log(userData);

event.currentTarget.reset();
}


