//вытащить имя и фамилию в отдельные переменные

// мое решение
const userName = 'Вася aka Terminator 2 Пупкинof';
const firstName  = (userName.slice(20))
console.log(firstName);
const lastName  = (userName.slice(0, 5))
console.log(lastName);

// решение Ларичева

const fullUserName1 = 'Вася aka Terminator 2 Пупкинof';

const userName1 = fullUserName1.slice(0, fullUserName1.indexOf(' '));
console.log(userName1);
const userSurname = fullUserName1.slice(
    fullUserName1.lastIndexOf(' ') + 1,
    fullUserName1.length
)
console.log(userSurname);