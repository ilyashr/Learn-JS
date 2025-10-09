// https://www.codewars.com/kata/56b1f01c247c01db92000076
// Double char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output): "String"      -> "SSttrriinngg", "1234!_ "     -> "11223344!!__  "

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