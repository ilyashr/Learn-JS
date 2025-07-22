/* Реализовать методы увеличения и уменьшения баланса,
    при котором каждая операция сохраняется в массив
    operations в виде { reason: 'Оплата налогов', sum: -100 }.
    Возвращается True, если успешно и false, если не хватает баланса/
    Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
    balance: 0,
    operations: [],
    /* Функция увеличения баланса */
    increase: function(sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason: reason,
            sum: sum
        })
        return true;
    },
    /* Функция уменьшения баланса */
    decrease: function(sum, reason) {
        if (this.balance < sum) {
            console.log('Недостаточно средств');
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason: reason,
            sum: -sum
        })
        return true;
    },
    /* Вывод числа операций по кошельку */
    getOperationsLenght: function () {
        return this.operations.length;
    }
};
//Начальный баланс
console.log(wallet.balance);
// Получили зарплату
console.log(wallet.increase(1000, 'Зарплата'));
//Успешная операция +1 к счетчику
console.log(wallet.getOperationsLenght());
// Текущий баланс
console.log(wallet.balance);
// Попытка потратить больше суммы баланса
console.log(wallet.decrease(1900, 'MacBook'));
// Неудачная оперция не засчиталась
console.log(wallet.getOperationsLenght());
// Текущий баланс
console.log(wallet.balance);
// Оплатили квартплату
console.log(wallet.decrease(100, 'Квартплата'));
//Успешная операция +1 к счетчику
console.log(wallet.getOperationsLenght());
// Текущий баланс
console.log(wallet.balance);
// Вывод успешных операций
console.log(wallet.operations);