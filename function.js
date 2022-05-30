const form = document.querySelector('#Form');
const nameInput = document.querySelector('#name');
const emailsInput = document.querySelector('#emails');
const messagesInput = document.getElementById('messages');

function isEmailValid(emails) {
    const reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return reg.test(emails);
}

function validateForm() 
{
    let correct_way = /^[A-Z .a-z]+$/;
    if (nameInput.value.trim() == '') {
        setError(nameInput, 'Name cannot be blank ');
    }
    else if (nameInput.value.trim().length < 3) {
        setError(nameInput, 'Name must be of aleast 3 alphabets');
    }
    else if (!correct_way.test(nameInput.value.trim())) {
        setError(nameInput, 'Name cannot contain special characters or numbers and should only be alphabets');
    } else {
        setSuccess(nameInput);
    }
    //Email validation
    if (emailsInput.value == '') {
        setError(emailsInput, 'Email address cannot be blank');
    } else if (isEmailValid(emailsInput.value.trim())) {
        setSuccess(emailsInput);
    } else {
        setError(emailsInput, 'Provide valid email address');
    }
   //Message validation
   if (messagesInput.value.trim() == '') {
    setError(messagesInput, "Message cannot be blank");
}
else if (messagesInput.value.trim().length < 40) {
    setError(messagesInput, "Message must be of minimum 40 characters long");
}
else {
    setSuccess(messagesInput);
}
}

// Setting the error function
function setError(element, errorMessage) {
const parent = element.parentElement;
if (parent.classList.contains('success')) {
    parent.classList.remove('success');
}
parent.classList.add('error');
const paragraph = parent.querySelector('span');
paragraph.textContent = errorMessage;
}

// Setting the success function
function setSuccess(element) {
const parent = element.parentElement;
if (parent.classList.contains('error')) {
    parent.classList.remove('error');
}
parent.classList.add('success');
}

//Function for Validating form on input before submitting
isFormValid = () => {
const inputContainers = form.querySelectorAll('.form-group');
let result = true;
inputContainers.forEach((container) => {
    if (container.classList.contains('error')) {
        result = false;
    }
});
return result;
}

//Adding eventListener to form for submitting
form.addEventListener('submit', (event) => {
validateForm();
console.log(isFormValid());
if (isFormValid() == true) {
    form.submit();
    alert('You are being redirected');
    window.open("https://lng-consultancy.com/", "_blank");
} else {
    event.preventDefault();
}
});