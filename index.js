/* Требуется переписать функцию из обычной в стрелочную */

function toPower(num, power) {
	const res = num ** power;
	return res;
}

console.log(toPower(2,3));

/* Стрелочная функция */

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2,3));

// 5 https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097 
//Century From Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task: Given a year, return the century it is in.
// Examples 1705 --> 18 1900 --> 19 1601 --> 17 2000 --> 20 2742 --> 28

const century = year => Math.ceil(year / 100);
