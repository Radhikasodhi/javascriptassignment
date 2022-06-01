const form = document.querySelector('#myForm');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const msgInput = document.getElementById('message');

//Email validation function
function isEmailValid(email) {
    const reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return reg.test(email);
}

//Form validation
function namevalidateForm() 
{
    let correct_way = /^[A-Z .a-z]+$/;

    //Username validation
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'Name cannot be blank ');
    }
    else if (usernameInput.value.trim().length < 3) {
        setError(usernameInput, 'Name must be of aleast 3 alphabets');
    }
    else if (!correct_way.test(usernameInput.value.trim())) {
        setError(usernameInput, 'Name cannot contain special characters or numbers and should only be alphabets');
    } else {
        setSuccess(usernameInput);
    }
}

function emailvalidateForm()
{


    //Email validation
    if (emailInput.value == '') {
        setError(emailInput, 'Email address should not be blank');
    } else if (isEmailValid(emailInput.value.trim())) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, 'Provide valid email address');
    }

}

function messagevalidateForm()
{

    //Message validation
    if (msgInput.value.trim() == '') {
        setError(msgInput, "Message can't be blank");
    }
    else if (msgInput.value.trim().length < 40) {
        setError(msgInput, "Message must be of minimum 40 characters long");
    }
    else {
        setSuccess(msgInput);
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
    namevalidateForm();
    emailvalidateForm();
    messagevalidateForm();
    console.log(isFormValid());
    if (isFormValid() == true) {
        form.submit();
        alert('You are being redirected');
        window.open("https://lng-consultancy.com/", "_blank");
    } else {
        event.preventDefault();
    }
});