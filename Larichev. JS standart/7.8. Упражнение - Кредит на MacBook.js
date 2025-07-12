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