const emailInput = document.getElementById('email-input');
const errorIcon = document.getElementById('error-icon');
const errorText = document.getElementById('error-text');
const submitButton = document.getElementById('submit-button');

function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (!isEmailValid(emailInput.value)) {
        errorIcon.classList.remove('hidden');
        errorText.classList.remove('hidden');
    } else {
        errorIcon.classList.add('hidden');
        errorText.classList.add('hidden');
    }
})