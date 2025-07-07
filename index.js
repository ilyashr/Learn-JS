// Задачи CodeWars

// 1. https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
// Cat years, Dog years
function humanYearsCatYearsDogYears (humanYears, catYears, dogYears) {
  if (humanYears == 1) {
      catYears = 15;
      dogYears = 15;
  } else {
      catYears = 15 + 9 + 4 * (humanYears - 2);
      dogYears = 15 + 9 + 5 * (humanYears - 2);
  }
  return [humanYears, catYears, dogYears];
}

// 5 https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097 
//Century From Year

const century = year => Math.ceil(year / 100);

// Задачи по основам JavaScript:

// Требуется переписать функцию из обычной в стрелочную

function toPower(num, power) {
	const res = num ** power;
	return res;
}

console.log(toPower(2,3));

// Стрелочная функция

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2,3));

// Упражнение Ларичева. Покупка MacBook

function computeCredit (age, hasJob) {
	switch(true) {
		case age > 24 && hasJob:
			return 500;
		case age > 24:
			return 100;
		default:
			return 0;
}
}
console.log(computeCredit(25, true))

function canBuy (productPrice, age, money, hasJob = true) {
	const creditMoney = computeCredit(age, hasJob);
	return productPrice <= money + creditMoney;
}
console.log(canBuy(2000, 25, 1500))