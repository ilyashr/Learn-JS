'use strict';

// обработка нажатия на кнопку

// document.querySelector('.button').addEventListener('click', function(){
//     console.log('Кнопка нажата');
// });

// доступ к детальной информации о событии

//document.querySelector('.button').addEventListener('click', function(e){
    //console.log(e);
//});

// получение данных из поля ввода

// document.querySelector('.button').addEventListener('click', function(){
//     const input = document.querySelector('input').value;
//     if (!input) {
//         return;
//     }
//     console.log(input);
// });

// получение данных из поля ввода с выводом на страницу

// document.querySelector('.button').addEventListener('click', function(){
//     const input = document.querySelector('input').value;
//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

// альтернативное написание

function changeClick() {
    const input = document.querySelector('input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
}