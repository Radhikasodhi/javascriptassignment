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
}