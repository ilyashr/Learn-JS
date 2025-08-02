'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').setAttribute('key', 1);
    document.querySelector('.notification').setAttribute('user-id', 1);
    console.log(Number(documentQuerySelector('.notification').getAttribute('user-id')));
}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm()
    }
}