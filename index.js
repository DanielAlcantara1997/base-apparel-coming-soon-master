const emailInput = document.querySelector('#email');
const submit = document.querySelector('#submit');
const alert = document.querySelector('#alert');


function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

submit.addEventListener('click', function() {
  var email = emailInput.value;
  if (validateEmail(email)) {
    emailInput.value = '';
    alert.innerText = '';
    alert.style.visibility = 'hidden';
  } else if(String(email).toLowerCase() === '') {
    alert.style.visibility = 'visible';
    emailInput.value = '';
    alert.innerText = 'Please enter your email';
    emailInput.style.borderColor = 'red';
  } else {
    alert.style.visibility = 'visible';
    emailInput.value = '';
    alert.innerText = 'Please provide a valid email address';
    emailInput.style.borderColor = 'red';
  }
});
