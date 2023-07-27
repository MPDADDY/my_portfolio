const emailErr = document.getElementById('emailErr');
const submit = document.getElementById('submit');
emailErr.style.color = 'red';

function emailValidation() {
  const email = document.getElementById('email').value;
  if (email.toLowerCase() !== email) {
    emailErr.innerHTML = 'Input the email in lowercase';
    return false; // Prevent form submission
  }
  return true;
}

submit.addEventListener('click', (event) => {
  if (!emailValidation()) {
    event.preventDefault(); // Prevent form submission if emailValidation returns false
  }
});