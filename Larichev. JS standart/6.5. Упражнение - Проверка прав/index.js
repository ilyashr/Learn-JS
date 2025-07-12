let canBuy;
const balance = 101;
const bonusBalance = 999;
const isBanned = false;
const isExist = false;
const isSelling = true;

if (canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling) {
	console.log('Пользователь может купить игру');
}
else {
	console.log('Пользователь не может купить игру');
}