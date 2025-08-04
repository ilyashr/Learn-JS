'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').classList.remove('notification_hidden');
}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm()
    }
}

// из строки в объект
const obj = JSON.parse('{ "a": 1 }');
console.log(obj.a);
// из объекта в строку
const str = JSON.stringify(obj);
console.log(obj);