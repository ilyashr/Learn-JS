'use strict'

const successMessage = 'Успех';
const user = {
    name: 'Илья',
    roles: []
}

function addRole(user, role) {
    if (role == 'admin') {
        const message = ' Ошибка';
        console.log(message);
        return user;
    }
    user.roles.push(role);
    // Вывод в консоль переменной из Global Scope
    console.log(successMessage);
    // Вывод в консоль объекта вне контекста функции
    function logRoles() {
        console.log(user.roles);
    }
    logRoles();
    return user;
}

console.log(addRole(user, 'dev'));