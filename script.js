const form = document.querySelector('#contact-form');
const result = document.querySelector('#form-result');
form.addEventListener('input', () => { result.hidden = true; });
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.reportValidity()) result.hidden = false;
});
