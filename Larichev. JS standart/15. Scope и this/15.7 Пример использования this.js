'use strict'

console.log(this);

function addNum(num1, num2) {
    consolole.log(this);
    return num1 + num2;
}

const addNum2 = (num1, num2) => {
    consolole.log(this);
    return num1 + num2;
}

const user = {
    name: 'Ilya',
    surname: 'Ivanov',
    getFullName: function () {
        return this.name + ' ' + this.surname;
    }
}

user.getFullName();

const user2 = {
    name: 'Marina',
    surname: 'Petrova'
};

user2.getFullName = user.getFullName;
user2.getFullName();

const getFullName = user2.getFullName;