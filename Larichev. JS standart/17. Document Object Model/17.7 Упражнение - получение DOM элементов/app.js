'use strict';

console.log(document.querySelector('.one').innerText);
console.log(document.querySelector('.one ~ div').innerText);
console.log(document.querySelector('#two').innerText);
console.log(document.querySelector('[user-id="4"]').innerText);