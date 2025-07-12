// https://www.codewars.com/kata/56b1f01c247c01db92000076
// Double char

// Для решения задачи написал себе пример с выводом результата в консоль
let str = 'string!';
// Преобразование строки в массив
let arr = str.split('');
console.log(arr);
// Создание нового массива с результатами вызова функции для каждого элемента массива
arr = arr.map(num => num + num);
// Преобразование массива в строку
str = arr.join('');
console.log(str); 

// Решение для CodeWars
const doubleChar = (str) => {
	let arr = str.split('');
	arr = arr.map(num => num + num);
	return str = arr.join('');
}