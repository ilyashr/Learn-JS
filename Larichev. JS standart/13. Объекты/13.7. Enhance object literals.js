
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
}
}

const wallet2 = {
    balance: 0,
    operations: [],
    /* Функция увеличения баланса */
    increase: function(sum, reason) {
        this.balance += sum;
        this.operations.push({
            // в данном случае т.к. имена ключа и переменной значения совпадают
            // то одно из них можно исключить
            reason,
            sum
        })
}
}

// Важно использовать сокращения без ущерба смыслу и читаемости кода
// Например присвоение начального баланса кошелька

const initialBalance = 7;

const wallet3 = {
    balance: initialBalance,
    operations: [],
};